import React, { Component } from "react";
import { Grid, Container, Form, Button, Header } from 'semantic-ui-react'
import "../Creator/style.css"
import API from "../../utils/API";
import ActionsDropdown from "../../components/ActionsDropdown";

let activeButtonStyle = {
  backgroundColor: "#0aabe2",
  color: "white"
}

let inactiveButtonStyle = {
  backgroundColor: "gray",
  color: "lightgray"
}
class Creator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [{ text: "Call", value: "call" }, { text: "E-mail", value: "email" }, { text: "Archive contact", value: "archive" }],
      flowName: undefined,
      action1: undefined,
      action2Pos: undefined,
      action2PosDays: undefined,
      action2Neg: undefined,
      action2NegDays: undefined,
      action2None: undefined,
      action2NoneDays: undefined,
      companyId: undefined
      /*    action3PosPos: undefined,
            action3PosNeg: undefined,
            action3PosNone: undefined,
            action3NegPos: undefined,
            action3NegNeg: undefined,
            action3NegNone: undefined,
            action3None: undefined */
    }
  }

  handleChoice = event => {
    console.log(event.target.value);
    console.log(event.target.getAttribute("data-action"));
    event.preventDefault();
    let toDo = event.target.getAttribute("data-action");
    this.setState({ [toDo]: event.target.value });
    console.log(this.state.action1);
  }

  handleDropDown = (event, data) => {
    event.preventDefault();
    let toDo = data.id;
    console.log(toDo);
    console.log(data.value);
    this.setState({ [toDo]: data.value });
    if(data.value === "archive") {
      let actionDays = toDo + "Days";
      this.setState({ [actionDays]: 0 });
    }

  }

  saveWorkflow = event => {
    event.preventDefault();
    console.log(this.state);
    API.saveWorkflow(this.state).then(() => {
      this.props.history.push('/strategies');
    });
  }

  getCompany = () => {
    API.userStatus().then((res) => {
      this.setState((prevState) => {
        prevState.companyId = res.data.company;
        return prevState;
      });
    });
  }

  componentDidMount() {
    this.getCompany();
  }

  render() {
    return (
      <Container style={{ paddingTop: "10px" }}>
        <Header as='h2' block>
          Strategy Builder
        </Header>
        <Form>
          <Grid columns={1} textAlign='center'>
            <Grid.Row>
              <Grid.Column>
                <h3>Set up your strategy for:</h3>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <input id="flowName" placeholder="Name your strategy" data-action="flowName" onChange={this.handleChoice}></input>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          {this.state.flowName ? <div>
            {this.state.action1 === undefined ?
              <Grid columns={4} textAlign='center'>
                <Grid.Row>
                  <p>What's your first action?</p>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column></Grid.Column>
                  <Grid.Column>
                    <Button style={activeButtonStyle} value="call" data-action="action1" onClick={this.handleChoice} >Call</Button>
                  </Grid.Column>
                  <Grid.Column>
                    <Button style={activeButtonStyle} value="email" data-action="action1" onClick={this.handleChoice} onFocus={this.focusChoice}>Email</Button>
                  </Grid.Column>
                  <Grid.Column></Grid.Column>
                </Grid.Row>
              </Grid> :
              <div>
                <Grid columns={4} textAlign='center'>
                  <Grid.Row>
                    <p>What's your first action?</p>
                  </Grid.Row>
                  {this.state.action1 === "call" ?
                    <Grid.Row>
                      <Grid.Column></Grid.Column>
                      <Grid.Column>
                        <Button style={activeButtonStyle} value="call" data-action="action1" onClick={this.handleChoice} >Call</Button>
                      </Grid.Column>
                      <Grid.Column>
                        <Button style={inactiveButtonStyle} value="email" data-action="action1" onClick={this.handleChoice} onFocus={this.focusChoice}>Email</Button>
                      </Grid.Column>
                      <Grid.Column></Grid.Column>
                    </Grid.Row>
                    :
                    <Grid.Row>
                      <Grid.Column></Grid.Column>
                      <Grid.Column>
                        <Button style={inactiveButtonStyle} value="call" data-action="action1" onClick={this.handleChoice} >Call</Button>
                      </Grid.Column>
                      <Grid.Column>
                        <Button style={activeButtonStyle} value="email" data-action="action1" onClick={this.handleChoice} onFocus={this.focusChoice}>Email</Button>
                      </Grid.Column>
                      <Grid.Column></Grid.Column>
                    </Grid.Row>
                  }

                  <Grid.Row><h3>What to do next if the answer is...</h3></Grid.Row>
                </Grid>

                <Grid columns={3} textAlign='center'>
                  <Grid.Row>
                    <Grid.Column>
                      <p>Positive?</p>
                      <ActionsDropdown onChange={this.handleDropDown} id="action2Pos" options={this.state.options}>
                      </ActionsDropdown>
                      {this.state.action2Pos && this.state.action2Pos !== 'archive' ?
                        <div>
                          <label htmlFor="days">In how many days?</label>
                          <input type="number" name="days" onChange={this.handleChoice} data-action="action2PosDays">
                          </input>
                        </div>
                        : null
                      }
                    </Grid.Column>
                    <Grid.Column>

                      <p>Negative?</p>
                      <ActionsDropdown onChange={this.handleDropDown} id="action2Neg" options={this.state.options}>
                      </ActionsDropdown>
                      {this.state.action2Neg && this.state.action2Neg !== 'archive' ?
                        <div>
                          <label htmlFor="days">In how many days?</label>
                          <input type="number" name="days" onChange={this.handleChoice} data-action="action2NegDays">
                          </input>
                        </div>
                        : null
                      }

                    </Grid.Column>
                    <Grid.Column>
                      <p>No answer?</p>
                      <ActionsDropdown onChange={this.handleDropDown} id="action2None" options={this.state.options}>
                      </ActionsDropdown>
                      {this.state.action2None && this.state.action2None !== 'archive' ?
                        <div>
                          <label htmlFor="days">In how many days?</label>
                          <input type="number" name="days" onChange={this.handleChoice} data-action="action2NoneDays">
                          </input>
                        </div>
                        : null
                      }
                    </Grid.Column>

                  </Grid.Row>
                </Grid>
              </div>

            }
            
            <Grid textAlign='center'>
              <Grid.Row>
                {((this.state.action2Neg === undefined || this.state.action2Neg === "call" || this.state.action2Neg === "email") && (this.state.action2NegDays === undefined || this.state.action2NegDays === "")) || ((this.state.action2None === undefined || this.state.action2None === "call" || this.state.action2None === "email") && (this.state.action2NoneDays === undefined || this.state.action2NoneDays === "")) || ((this.state.action2Pos === undefined || this.state.action2Pos === "call" || this.state.action2Pos === "email") && (this.state.action2PosDays === undefined || this.state.action2PosDays === "")) ?
                <Button disabled style={inactiveButtonStyle} onClick={this.saveWorkflow}>Save</Button>
                :
                <Button style={activeButtonStyle} onClick={this.saveWorkflow}>Save</Button>
              }
              </Grid.Row>
            </Grid>
          </div>


            : null}

        </Form>
      </Container>

    );
  }

}


export default Creator;