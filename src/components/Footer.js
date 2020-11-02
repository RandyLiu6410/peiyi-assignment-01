import React, { Component } from "react";

class Footer extends Component{
    constructor(props){
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (event) => {
        this.props.statusChange(event.target.id);
    }

    render(){
        return(
            <div>
                <div className="todo-app__footer">
                    {/* <div className="todo-app__total">{total}</div> */}
                    <div className="todo-app__view-buttons">
                        <button id={0} onClick={this.handleChange}>All</button>
                        <button id={1} onClick={this.handleChange}>Active</button>
                        <button id={2} onClick={this.handleChange}>Completed</button>
                    </div>
                    <div className="todo-app__clean"> 
                        <button id={3} onClick={this.handleChange}>Clear completed</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;

// export default ({ text, value }) => {
//     //    const {text} = props // expected to be { text: "" }
//     return (
//         <footer className="todo-app__footer">
//             <div className="todo-app__total"></div>
//             <ul className="todo-app__view-buttons"></ul>
//                 <div className="todo-app__total"></div>
//                 <div>{value}</div>
//             <div className="todo-app__clean"></div>
//         </footer>
//     );
// };
