import React, { Component } from "react";
import axios from "axios";
import "../Creator/style.css"

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
      action3PosPos: undefined,
      action3PosNeg: undefined,
      action3PosNone: undefined,
      action3NegPos: undefined,
      action3NegNeg: undefined,
      action3NegNone: undefined,
      action3None: undefined
    }
  }

  handleName = event => {
    event.preventDefault();
  }

  handleChoice = event => {
    console.log(event.target.value);
    console.log(event.target.getAttribute("data-action"));
    event.preventDefault();
    let toDo = event.target.getAttribute("data-action");
    this.setState({ [toDo]: event.target.value });
  }

  render() {
    return (
      <div className="container">
        <h3>Set up your strategy for:</h3>
        <form>
          <input id="flowName" placeholder="Name your strategy" data-action="flowName" onChange={this.handleChoice}></input>
          {this.state.action1 === undefined ?
            <div>
              <p>What's your first action?</p>
              <button className="btn action1 mr-3" value="call" data-action="action1" onClick={this.handleChoice} >Call</button><button className="btn action1 mr-3" value="email" data-action="action1" onClick={this.handleChoice} onFocus={this.focusChoice}>Email</button>
            </div> :
            <div>
              <p>What's your first action?</p>
              <button className="btn action1 mr-3" data-contact="call" data-action="action1" disabled={this.state.action1 !== "call"} onClick={this.handleChoice} onFocus={this.focusChoice}>Call</button><button className="btn action1 mr-3" data-contact="email" data-action="action1" disabled={this.state.action1 !== "email"} onClick={this.handleChoice} onFocus={this.focusChoice}>Email</button>
              <div className="row">
                <h3>What to do next if the answer is...</h3>
              </div>
              <div className="row">
                <div className="col col-4">
                  <p>Positive?</p>
                  <select onChange={this.handleChoice} data-action="action2Pos">
                    <option value="archive">Archive contact</option>
                    <option value="call">Call</option>
                    <option value="email">E-mail</option>
                  </select>
                </div>
                <div className="col col-4">
                  <p>Negative?</p>
                  <select onChange={this.handleChoice} data-action="action2Neg">
                    <option value="archive">Call</option>
                    <option value="call">E-mail</option>
                    <option value="email">Archive</option>
                  </select>
                </div>
                <div className="col col-4">
                  <p>No answer?</p>
                  <select onChange={this.handleChoice} data-action="action2None">
                    <option value="archive">Call</option>
                    <option value="call">E-mail</option>
                    <option value="email">Archive</option>
                  </select>
                </div>
              </div>
            </div>
          }
          <div className="row">
            {this.state.action2Pos ?
              <div className="col col-4">
                <label htmlFor="days">In how many days?</label>
                <input type="number" name="days">
                </input>
              </div>
              : null
            }
            {this.state.action2Neg ?
              <div className="col col-4">
                <label htmlFor="days">In how many days?</label>
                <input type="number" name="days">
                </input>
              </div>
              : null
            }
            {this.state.action2None ?
              <div className="col col-4">
                <label htmlFor="days">In how many days?</label>
                <input type="number" name="days">
                </input>
              </div>
              : null
            }
          </div>
        </form>
      </div>
    );
  }

}


export default Creator;