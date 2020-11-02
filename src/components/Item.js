import React, { Component } from "react";
import xImg from "./x.png";

class Item extends Component {
    constructor(props) {
        super(props);
    }

    checkboxStyle(isComplete)
    {
        if (isComplete) {
            return {
                textDecorationLine: "line-through",
                opacity: 0.5
            }
        }
    } 

    render() {
        return(
            <li className="todo-app__item">
                <div className="todo-app__checkbox">
                    <input type="checkbox" id={this.props.id} checked={this.props.item.isCompleted} onClick={() => {this.props.handleCheckBoxClick(this.props.id)}}></input>
                    <label htmlFor={this.props.id}></label>
                </div>
                <h1 className="todo-app__item-detail" style={this.checkboxStyle(this.props.item.isCompleted)}>{this.props.item.textValue}</h1>
                <img className="todo-app__item-x" src={xImg} alt="" onClick={() => {this.props.deleteItem(this.props.id)}}></img>
            </li>
        )
    }

}

export default Item;