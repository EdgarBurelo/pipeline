import React, { Component } from "react";
import API from "../../utils/API";
import {Button, Dropdown, Table, Container, Icon} from "semantic-ui-react";

class Todo extends Component {

  constructor(props) {
    super(props);

    this.state = {

        current: {},
        leads: []

    };
  }

  componentDidMount() {

    this.userStatus();

  }

  userStatus() {

    API.userStatus().then(res => {

        this.setState(prevState => {

            prevState.leads = res.data;

        });

        console.log("STATE sSET", this.state.current);

    }).then(() => {

        //this.getLeads(this.state.current.id);
        this.getLeads(2);

    });

  }

  getLeads(id) {

    //console.log("ID IN GET LEADS IS", id);

    API.allLeads(id).then(res => {

        if (res.data.length === 0) {

            console.log("LEADS NOT FOUND FOR THIS AGENT");

        } else {

            console.log("ALL LEADS FROM DBV", res.data);

            this.setState(prevState=>{

                prevState.current = res.data;

            });

            console.log(this.state);

        }

    }).catch(err => {

        console.log( err);

    });

  }

  render() {

    

    return(

        <Table celled striped>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell colSpan="5">Todos</Table.HeaderCell>
                </Table.Row>

                <Table.Row>
                    <Table.HeaderCell>#</Table.HeaderCell>

                    <Table.HeaderCell>Task</Table.HeaderCell>

                    <Table.HeaderCell>Status</Table.HeaderCell>

                    <Table.HeaderCell>Date</Table.HeaderCell>
                    <Table.HeaderCell></Table.HeaderCell>
                </Table.Row>
            </Table.Header>

      {/* <Table.Body>{arrRows}</Table.Body> */}
        </Table>

    )

  }
}

export default Todo;

//task, fecha en la que se marco como hecho, resultado (dropdown), button

//1) Para mostrar los to-dos, hay que jalar todos los leads asignados al agente en cuestión que tengan fecha de "hoy o antes"
//2) Cuando los marque completados, si ese contacto fue la "action1" (como viene en la tabla de leads, creo que la columna se llama nextcontactaction o algo así), hay que buscar en la tabla de workflows cuál sería la siguiente acción, dependiendo del resultado de esa primera acción, y modificar esa info en la tabla de leads.
//Si fue alguna de las action2, hay que poner como "null" la fecha de sig contacto de ese lead
