import React, {Component} from 'react'
import TodoItems from './Components/Todoitems/Todoitems';
import Additem from './Components/Additem/Additem';

class App extends Component {
  state = {
    items : [
      {id:1, name:'Mohamed', age:22},
      {id:2, name:'Ahmed', age:30},
      {id:3, name:'Nesrin', age:25}
    ]
  }

  //this methode is very easy and nice
  deleteItem = (id) => {
      let items = this.state.items.filter(item => {
        return item.id !== id;
      })
      this.setState({items}) // {items:items} = {items}
  }

  //this the second methode
//  deleteItem = (id) => {
//    let items = this.state.items;
//    let i = items.findIndex(item => item.id === id)
//    items.splice(i,1)
//    this.setState({items:items})
//  }

  addItem = (item) => {
    item.id = Math.random();
    let items = this.state.items;
    items.push(item);
    this.setState({items})
  }

  render() {
    return(
      <div className="App container">
        <h1 className="text-center">Todo List</h1>
        <TodoItems items={this.state.items} deleteItem={this.deleteItem}/>
        <Additem addItem={this.addItem} />
      </div>
    );
  }
}

export default App;
