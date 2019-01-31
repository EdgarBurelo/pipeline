import React, { Component } from "react";
import API from "../../utils/API";
import {Button, Dropdown, Table} from "semantic-ui-react";

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

  editLeads(id) {

    API.getWorkflow(id).then(res=>{

        console.log(res.data);

        let resp = this.state.latest.type;

        if (resp === "Positive response") {

            console.log(res.data.action2Pos, res.data.action2PosDays);

        } else if (resp === "Negative response") {

            console.log(res.data.action2Neg, res.data.action2NegDays);

        } else {

            console.log(res.data.action2None, res.data.action2NoneDays);

        }

    });

  }

  getWorkflow(normId) {

    console.log("normID IS", normId);

    let arr = this.state.leads;

    arr.forEach(element => {

        if (element.id == normId) {

            let wId = element.workflowId;

            console.log(wId);

            this.editLeads(wId);

        }
        
    });

  }

  updateLeads (target) {

    this.getWorkflow(target)

  }

  submitClick = event => {

    event.preventDefault();

    let click = event.target.parentElement.parentElement.id;

    //console.log("CLICK", click);

    this.updateLeads(click);

  }

  typeChange = event => {

    event.preventDefault();

    let iType = event.target.innerText;

    console.log(iType);

    this.setState({latest: {type: iType}});

    console.log(this.state);

  };

  componentDidMount() {

    API.userStatus().then((res)=>{

        this.setState(prevState => {

            prevState.current = res.data;

        });

        // console.log("ID IS",this.state.current.id);

        // this.getLeads(this.state.current.id);

        this.getLeads(2);

        console.log("STATE sSET", this.state.current);

    });

  }

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

    return this.state.leads.map((rows, index) => {

        let cType;

        if (rows.nextContactType === "email") {

            cType = rows.email;

        } else {

            cType = rows.phone;

        }

        return (

            <Table.Row key={rows.id} id={rows.id}>

                <Table.Cell>

                    {index + 1}

                </Table.Cell>

                <Table.Cell>

                    {rows.nextContactType} <strong>{rows.firstName} {rows.lastName}</strong>

                </Table.Cell>

                <Table.Cell>

                    {cType}

                </Table.Cell>

                <Table.Cell>

                    <Dropdown
                    placeholder="Select status"
                    selection
                    options={statusTypes}
                    onChange={this.typeChange}
                    />

                </Table.Cell>

                <Table.Cell>

                    {rows.nextContactDate}

                </Table.Cell>

                <Table.Cell>

                    <Button type="submit" onClick={this.submitClick}>
                        Submit
                    </Button>

                </Table.Cell>

            </Table.Row>

        )

    });

  }

  render() {

    console.log("RENDER STATE", this.state);

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

    )

  }
}

export default Todo;

//task, fecha en la que se marco como hecho, resultado (dropdown), button

//1) Para mostrar los to-dos, hay que jalar todos los leads asignados al agente en cuestión que tengan fecha de "hoy o antes"
//2) Cuando los marque completados, si ese contacto fue la "action1" (como viene en la tabla de leads, creo que la columna se llama nextcontactaction o algo así), hay que buscar en la tabla de workflows cuál sería la siguiente acción, dependiendo del resultado de esa primera acción, y modificar esa info en la tabla de leads.
//Si fue alguna de las action2, hay que poner como "null" la fecha de sig contacto de ese lead

//