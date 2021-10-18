import React from 'react'
import './Todoitems.css'

const TodoItems = (props) => {
    const {items, deleteItem} = props;
    let lenght = items.length;
    const ListItem = lenght ? (
        items.map(item => {
        return(
            <div key={item.id}>
                <span className="name">{item.name}</span>
                <span className="age">{item.age}</span>
                <span className="action icon" onClick={() => deleteItem(item.id)}>&times;</span>
            </div>
        );
    })) : (
        <p>there no item to show</p>
    )
    return(
        <div className="ListItems">
            <span className="name title">Name</span>
            <span className="age title">Age</span>
            <span className="action title">Action</span>
            {ListItem}
        </div>
    );
}

export default TodoItems