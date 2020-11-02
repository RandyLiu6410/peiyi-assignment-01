import React, { Component } from "react";
import Footer from "./Footer";
import Item from "./Item";
import xImg from "./x.png";

class Main extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            items: [],
            status: 0 //0:active, 1:complete
        }

        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.handleCheckBoxClick = this.handleCheckBoxClick.bind(this);
        this.statusChange = this.statusChange.bind(this);
    }

    statusChange(status) {
        this.setState({status: parseInt(status)});

        var _items = [];
        
        switch(parseInt(status)){
            case 0:
                _items = this.state.items.map(item => {
                    item.show = true
                    return item;
                });
                this.setState({items: _items});
                break;
            case 1:
                _items = this.state.items.map(item => {
                    if(!item.isCompleted){
                        item.show = true;
                        return item;
                    }
                    else{
                        item.show = false;
                        return item;
                    }
                });
                this.setState({items: _items});
                break;
            case 2:
                _items = this.state.items.map(item => {
                    if(item.isCompleted){
                        item.show = true;
                        return item;
                    }
                    else{
                        item.show = false;
                        return item;
                    }
                });
                this.setState({items: _items});
                break;
            case 3: 
                this.state.items.map(item => {
                    if(!item.isCompleted){
                        item.show = true;
                        _items.push(item);
                    }
                });
                console.log(_items)
                this.setState({items: _items});
                break;
            default:
                break;
        }
    }

    handleKeyDown = (event) => {
        event.persist();

        if (event.key === "Enter") {
            
            let _items = this.state.items;
            _items.push({
                id: _items.length, 
                textValue: event.target.value,
                isCompleted: false,
                show: true
            });

            // console.log(this.state.items[this.state.items.length - 1].textValue);
            this.setState({});
        }
    }

    handleCheckBoxClick = (id) => {
        const _index = this.state.items.map(item => item.id).indexOf(id);
        var _items = this.state.items;
        _items[_index].isCompleted = !_items[_index].isCompleted;

        this.setState({items: _items});
    }

    deleteItem = (id) => {
        const _items = this.state.items;
        const removeIndex = _items.map(item => item.id).indexOf(id);
        _items.splice(removeIndex, 1);
        this.setState({items: _items});
    }

    render() {
        // For every item in the array, it gives us the item itself in item and the position of the item in id.
        const listComponents = this.state.items.map((item, id) => {
            if(item.show)
            {
                return (
                    <Item id={id} key={id} item={item} handleCheckBoxClick={this.handleCheckBoxClick} deleteItem={this.deleteItem}/>
                );
            }
        })

        return(
            <div>
                <div className="todo-app__main">
                    <input className="todo-app__input" type="text" 
                    placeholder="What needs to be done?" id="input" onKeyDown={this.handleKeyDown}></input>
                    <ul className="todo-app__list">
                        {listComponents}
                    </ul>
                 </div>
                <Footer statusChange={this.statusChange}/>
            </div>
        )
    }
}

export default Main;

// export default Main = ({ text }) => {
//     //    const {text} = props // expected to be { text: "" }
//     return (
//         <section className="todo-app__main">
//             <input className="todo-app__input" type="text" 
//             placeholder="What needs to be done?" id="input"></input>
//             <div id="items"></div>
//         </section>
//     );
// };