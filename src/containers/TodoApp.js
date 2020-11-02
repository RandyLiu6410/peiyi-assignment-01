import React, { Component } from "react";
import Header from "../components/Header";
import Main from "../components/Main";

class TodoApp extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <Header text="todos"/>
                <Main />
                {/* <Main status={this.statusChange}/>
                <Footer statusChange={this.statusChange}/> */}
            </>
        );
    }
}

export default TodoApp;
