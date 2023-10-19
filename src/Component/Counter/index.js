import { Component } from "react";
import "./index.css"

class Counter extends Component{
    state = {count : 0}
    onIncrement = () =>{
        this.setState((prevState) =>({
            count : prevState.count + 1
        }))
    }
    onDecrement = () =>{
        this.setState((prevState) =>({
            count : prevState.count -1
        }))
    }

    render(){
        const {count} = this.state

        return(
            <div className="container">
                <div className="counter-app">
                    <h1 className="heading">Counter</h1>
                    <h1 className="count">{count}</h1>
                    <div className="btns">
                        <button className="button" onClick={this.onIncrement}>Increse</button>
                        <button className="button" onClick={this.onDecrement}>Decrese</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default Counter