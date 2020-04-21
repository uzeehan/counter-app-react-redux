import React, { Component } from 'react';
import { connect } from 'react-redux';

class Counter extends Component {

    // increment = () => {
    //     this.setState({
    //         count: this.state.count + 1
    //     })
    //     console.log('+');
    // }

    // decrement = () => {
    //     this.setState({
    //         count: this.state.count - 1
    //     })
    //     console.log('-');
    // }

    increment = () => {
        this.props.dispatch({
            type: "INCREMENT"
        })
    }

    decrement = () => {
        this.props.dispatch({
            type: "DECREMENT"
        })
    }

    resetCount = () => {
        this.props.dispatch({
            type: "RESET"
        })
    }

    render() {
        return (
            <div className="page-container">
                <h1>
                   Counter App 
                </h1>
                <em>React and Redux</em>
                
                <section>
                    <ul>
                        <li><button name="plusBtn" onClick={this.decrement}>-</button></li>
                        <li>
                            <p>{this.props.count}</p>
                        </li>
                        <li><button name="plusBtn" onClick={this.increment}>+</button></li>
                    </ul>
                </section>
                <button name="resetCountBtn" className="reset-count-btn" onClick={this.resetCount}>Reset Counter</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    count: state.count
});

export default connect(mapStateToProps)(Counter);
