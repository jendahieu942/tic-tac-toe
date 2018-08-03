import React, { Component } from "react";
import { Board } from "./Board";

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nextTurn: "X",
            winner: "",
        }
    }
    nextTurnUpdate = (turn) => {
        this.setState({ nextTurn: turn })
    }
    winnerUpdate = (winner) => {
        this.setState({ winner: winner })
    }
    restartHandle = () => {
        alert("Restart Handler");
    }
    render() {
        return (
            <div className="main-view">
                <div className="game">
                    <section className="control">
                        <button className="restart-bt" onClick={() => this.restartHandle()}>Restart</button>
                    </section>
                    <Board
                        nextTurnUpdate={this.nextTurnUpdate}
                        winnerUpdate={this.winnerUpdate}
                    />
                </div>
                <div className="score-view">
                    <h4>Now turn: </h4>
                    <div>{this.state.nextTurn}</div>
                    <h4>Winner: </h4>
                    <div>{this.state.winner}</div>
                </div>
            </div>
        );
    }
}

export { Game }