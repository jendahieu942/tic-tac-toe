import React, { Component } from 'react';
import { Square } from './Square';

class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(25).fill(null),
            xIsNext: true,
        }
    }
    handleClick(i) {
        const squares = this.state.squares.slice();
        if (squares[i] === null) {
            squares[i] = this.state.xIsNext ? 'X' : 'O';
            this.setState({
                squares: squares,
                xIsNext: !this.state.xIsNext,
            });
            this.props.nextTurnUpdate(!this.state.xIsNext ? 'X' : 'O');
        }
        let winner = this.calcWinner(squares);
        if (winner) {
            this.props.winnerUpdate(winner);
            const squaress = squares.map(e => e = e === null ? "" : e);
            this.setState({ squares: squaress });
        }
    }
    renderSquare(i) {
        return <Square
            value={this.state.squares[i]}
            onClick={() => this.handleClick(i)}
        />;
    }
    // calcWinner(squares) {
    //     for (let i = 0; i < 5; i++) {
    //         for (let j = 0; j < 5; j++) {
    //             let k = j * 5;
    //             if (squares[k] && squares[k] === squares[k + 1] && squares[k] === squares[k + 2]
    //                 && squares[k] === squares[k + 3] && squares[k] === squares[k + 4])
    //                 return squares[k];
    //         }
    //         if (squares[i] && squares[i] === squares[i + 5] && squares[i] === squares[i + 10]
    //             && squares[i] === squares[i + 15] && squares[i] === squares[i + 20])
    //             return squares[i];
    //     }
    //     if (squares[0] && squares[0] === squares[6] && squares[6] === squares[12]
    //         && squares[12] === squares[18] && squares[18] === squares[24])
    //         return squares[0];
    //     if (squares[4] && squares[4] === squares[8] && squares[8] === squares[12]
    //         && squares[12] === squares[16] && squares[16] === squares[20])
    //         return squares[4];
    //     return false;
    // }

    calcWinner(squares) {
        const lines = [
            [0, 1, 2, 3, 4],
            [5, 6, 7, 8, 9],
            [10, 11, 12, 13, 14],
            [15, 16, 17, 18, 19],
            [20, 21, 22, 23, 24],
            [0, 5, 10, 15, 20],
            [1, 6, 11, 16, 21],
            [2, 7, 12, 17, 22],
            [3, 8, 13, 18, 23],
            [4, 9, 14, 18, 24],
            [0, 6, 12, 18, 24],
            [4, 8, 12, 16, 20],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c, d, e] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]
                && squares[a] === squares[d] && squares[a] === squares[e]){
                    return squares[a];
                }
        }
        return false;
    }
    render() {
        return (
            <div className="board">
                <section className="row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                </section>
                <section className="row">
                    {this.renderSquare(5)}
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                    {this.renderSquare(9)}
                </section>
                <section className="row">
                    {this.renderSquare(10)}
                    {this.renderSquare(11)}
                    {this.renderSquare(12)}
                    {this.renderSquare(13)}
                    {this.renderSquare(14)}
                </section>
                <section className="row">
                    {this.renderSquare(15)}
                    {this.renderSquare(16)}
                    {this.renderSquare(17)}
                    {this.renderSquare(18)}
                    {this.renderSquare(19)}
                </section>
                <section className="row">
                    {this.renderSquare(20)}
                    {this.renderSquare(21)}
                    {this.renderSquare(22)}
                    {this.renderSquare(23)}
                    {this.renderSquare(24)}
                </section>
            </div>
        );
    }
}

export { Board }