import React, { Component } from "react";
import API from "../../utils/API";
import NotLogged from "../../components/notLogged";
import {Button, Dropdown, Table, Container} from "semantic-ui-react";
import moment from "moment";

const statusTypes = [
    { text: "Positive response", value: "Positive response" },
    { text: "Negative response", value: "Negative response" },
    { text: "No response", value: "No response" }
  ];

class Todo extends Component {

  constructor(props) {
    super(props);

    this.state = {

        latest: {},
        current: {},
        leads: []

    };
  }

  //this method first calls on the getWorkflow API method to extract info for the second actions for the agent
  editLeads(id, lId, date) {

    API.getWorkflow(id).then(res=>{

        //after that, an object is built with the results from the workflow

        let editObj = {};

        console.log(res.data);

        let resp = this.state.latest.type;

        if (resp === "Positive response") {

            console.log(res.data.action2Pos, res.data.action2PosDays);

            let newDate = moment(date, "YYYY-MM-DD").add('days', res.data.action2PosDays);

            editObj.id = lId;
            editObj.type = res.data.action2Pos;
            editObj.step = "action2";
            editObj.date = newDate;

            //the object is then sent to modify the selected lead
            API.editLeads(editObj).then(editLead=>{

                console.log("EDIT RES", editLead);

            }).then(()=>{

                //this method is called again to refresh state with latest leads (including changes) and to rerender component
                this.getLeads(this.state.current.id);

            });

        } else if (resp === "Negative response") {

            console.log(res.data.action2Neg, res.data.action2NegDays);

            let newDate = moment(date, "YYYY-MM-DD").add('days', res.data.action2NegDays);

            editObj.id = lId;
            editObj.type = res.data.action2Neg;
            editObj.step = "action2";
            editObj.date = newDate;

            API.editLeads(editObj).then(editLead=>{

                console.log("EDIT RES", editLead);

            }).then(()=>{

                this.getLeads(this.state.current.id);

            });

        } else {

            console.log(res.data.action2None, res.data.action2NoneDays);

            let newDate = moment(date, "YYYY-MM-DD").add('days', res.data.action2NoneDays);

            editObj.id = lId;
            editObj.type = res.data.action2None;
            editObj.step = "action2";
            editObj.date = newDate;

            API.editLeads(editObj).then(editLead=>{

                console.log("EDIT RES", editLead);

            }).then(()=>{

                this.getLeads(this.state.current.id);

            });

        }

    });

  }

  //this will find the corresponding workflow for the selected lead to be changed and fire the editLeads method to actually edit it
  getWorkflow(normId) {

    let arr = this.state.leads;

    arr.forEach(element => {

        if (element.id == normId) {

            let wId = element.workflowId;

            let date = element.nextContactDate;

            let step = element.nextContactStep;

            if (step === "action1" || "action2") {

                this.editLeads(wId, normId, date);

            } else {

                let nullDate = null;

                this.editLeads(wId, normId, nullDate);

            }

        }
        
    });

  }

  //button for confirmation and to update leads in corresponding workflow
  submitClick = event => {

    event.preventDefault();

    let click = event.target.parentElement.parentElement.id;

    this.getWorkflow(click);

  }

  //event handler that sets state
  typeChange = event => {

    event.preventDefault();

    let iType = event.target.innerText;

    console.log(iType);

    this.setState({latest: {type: iType}});

    console.log(this.state);

  };

  //both of these API requests fire off when component mounts; first the user's id must be acquired, then it must be used for getting the users' corresponding leads (sqlize association)
  componentDidMount() {

    API.userStatus().then((res)=>{

        this.setState(prevState => {

            prevState.current = res.data;

        });

        this.getLeads(this.state.current.id);

        console.log("STATE sSET", this.state.current);

    });

  }

  //method to get leads, set state and hence, rerender everything; currently HARD CODED until user system is fixed
  getLeads(id) {

    API.allLeads(id).then(res => {

        if (res.data.length === 0) {

            console.log("LEADS NOT FOUND FOR THIS AGENT");

        } else {

            this.setState({leads: res.data});

            console.log("STATE WITH LEADS", this.state);

        }

    }).catch(err => {

        console.log( err);

    });

  }

  renderRows() {

    //map for leads array in state w conditional statements 
    return this.state.leads.map((rows, index) => {

        let date = rows.nextContactDate;

        let drop = <Dropdown
        placeholder="Select status"
        selection
        options={statusTypes}
        onChange={this.typeChange}
        />;

        let sub = <Button type="submit" onClick={this.submitClick}>Submit</Button>;

        let cType;

        let actionDisp;

        //this conditional checks what the next action is and renders the relevant contact info
        if (rows.nextContactType === "email") {

            actionDisp = rows.nextContactType;

            cType = rows.email;

        } else if (rows.nextContactType === "call") {

            actionDisp = rows.nextContactType;

            cType = rows.phone;

        } else {

            actionDisp = "CONTACT ARCHIVED: ";

            cType = rows.phone + ", " + rows.email;

            drop = null;

            sub = null;

            date = null;

        }

        return (

            <Table.Row key={rows.id} id={rows.id}>

                <Table.Cell>

                    {index + 1}

                </Table.Cell>

                <Table.Cell>

                    {actionDisp} <strong>{rows.firstName} {rows.lastName}</strong>

                </Table.Cell>

                <Table.Cell>

                    {cType}

                </Table.Cell>

                <Table.Cell>

                    {drop}

                </Table.Cell>

                <Table.Cell>

                    {date}

                </Table.Cell>

                <Table.Cell>

                    {sub}

                </Table.Cell>

            </Table.Row>

        )

    });

  }

isLoggedIn() {
    //console.log(this.props.status);
    if(this.props.status) {
        let arrRows = this.renderRows();
        return(
            <Table celled striped>

                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell colSpan="6">Todos</Table.HeaderCell>
                    </Table.Row>

                    <Table.Row>
                        <Table.HeaderCell>#</Table.HeaderCell>

                        <Table.HeaderCell>Task</Table.HeaderCell>

                        <Table.HeaderCell>Contact Info</Table.HeaderCell>

                        <Table.HeaderCell>Status</Table.HeaderCell>

                        <Table.HeaderCell>Date</Table.HeaderCell>
                        <Table.HeaderCell></Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>

                    {arrRows}

                </Table.Body>

            </Table>
        );
    } else {
        return(
            <NotLogged />
        );
    }
}

  render() {

    //log to check when component rerenders and what the state looks like
    console.log("RENDER STATE", this.state);

    

    return(
        <Container fluid style={{marginTop: "10px"}}>
            {this.isLoggedIn()}
        </Container>
    )

  }
}

export default Todo;
