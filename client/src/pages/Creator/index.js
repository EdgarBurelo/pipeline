import React, { Component } from "react";
import { Grid } from 'semantic-ui-react'
import "../Creator/style.css"
import API from "../../utils/API";

class Creator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flowName: undefined,
      action1: undefined,
      action2Pos: undefined,
      action2PosDays: undefined,
      action2Neg: undefined,
      action2NegDays: undefined,
      action2None: undefined,
      action2NoneDays: undefined,
      /*    action3PosPos: undefined,
            action3PosNeg: undefined,
            action3PosNone: undefined,
            action3NegPos: undefined,
            action3NegNeg: undefined,
            action3NegNone: undefined,
            action3None: undefined */
    }
  }

  handleName = event => {
    event.preventDefault();
    API.saveWorkflow(this.state);
  }

  handleChoice = event => {
    console.log(event.target.value);
    console.log(event.target.getAttribute("data-action"));
    event.preventDefault();
    let toDo = event.target.getAttribute("data-action");
    this.setState({ [toDo]: event.target.value });
  }

  saveWorkflow = event => {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <div className="container">
        <Grid textAlign='center'>
          <Grid.Row>
            <Grid.Column>
              <h3>Set up your strategy for:</h3>
            </Grid.Column>
          </Grid.Row>
          <form>
            <Grid.Row>
              <Grid.Column>
                <input id="flowName" placeholder="Name your strategy" data-action="flowName" onChange={this.handleChoice}></input>
              </Grid.Column>
            </Grid.Row>
            {this.state.flowName ? <div>
              {this.state.action1 === undefined ?
                <Grid columns={4} textAlign='center'>
                  <Grid.Row>
                    <p>What's your first action?</p>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column></Grid.Column>
                    <Grid.Column>
                      <button className="btn action1 mr-3" value="call" data-action="action1" onClick={this.handleChoice} >Call</button>
                    </Grid.Column>
                    <Grid.Column>
                      <button className="btn action1 mr-3" value="email" data-action="action1" onClick={this.handleChoice} onFocus={this.focusChoice}>Email</button>
                    </Grid.Column>
                    <Grid.Column></Grid.Column>
                  </Grid.Row>
                </Grid> :
                <div>
                  <Grid columns={4} textAlign='center'>
                    <Grid.Row>
                      <p>What's your first action?</p>
                    </Grid.Row>
                    <Grid.Row>
                      <Grid.Column></Grid.Column>
                      <Grid.Column>
                        <button className="btn action1 mr-3" value="call" data-action="action1" onClick={this.handleChoice} >Call</button>
                      </Grid.Column>
                      <Grid.Column>
                        <button className="btn action1 mr-3" value="email" data-action="action1" onClick={this.handleChoice} onFocus={this.focusChoice}>Email</button>
                      </Grid.Column>
                      <Grid.Column></Grid.Column>
                    </Grid.Row>
                    <Grid.Row><h3>What to do next if the answer is...</h3></Grid.Row>
                  </Grid>

                  <Grid columns={3} textAlign='center'>
                    <Grid.Row>
                      <Grid.Column>
                        <p>Positive?</p>
                        <select onChange={this.handleChoice} data-action="action2Pos" defaultValue="">
                          <option value="" disabled>Select one:</option>
                          <option value="archive">Archive contact</option>
                          <option value="call">Call</option>
                          <option value="email">E-mail</option>
                        </select>
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
                        <select onChange={this.handleChoice} data-action="action2Neg" defaultValue="">
                          <option value="" disabled>Select one:</option>
                          <option value="call">Call</option>
                          <option value="email">E-mail</option>
                          <option value="archive">Archive contact</option>
                        </select>
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
                        <select onChange={this.handleChoice} data-action="action2None" defaultValue="">
                          <option value="" disabled>Select one:</option>
                          <option value="call">Call</option>
                          <option value="email">E-mail</option>
                          <option value="archive">Archive contact</option>
                        </select>
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
                  <button className="btn" onClick={this.saveWorkflow}>Save</button>
                </Grid.Row>
              </Grid>
            </div>


              : null}

          </form>
        </Grid>
      </div>

    );
  }

}


export default Creator;