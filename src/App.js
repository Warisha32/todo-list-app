
import React from 'react';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      newItem: "",
      list: []
    }
  }

  addItem(todoValue) {
    if (todoValue !== "") {
      const newItem = {
        id: Date.now(),
        value: todoValue,
        isDone: false
      };
      const list = [...this.state.list];
      list.push(newItem);

      this.setState({
        list,
        newItem: ""
      });
    }
  }


  deleteItem(id) {
    const list = [...this.state.list];
    const updatedlist = list.filter(item => item.id !== id);
    this.setState({ list: updatedlist });
  }

  updateInput(input) {
    this.setState({ newItem: input });
  }

  render() {
    return (
      <div>
        <h1 className="app-title"> To-Do List </h1>
        <center><div className="container">
          <input
            type="text"
            className="input-text"
            placeholder="Write a Todo"
            required
            value={this.state.newItem}
            onChange={e => this.updateInput(e.target.value)} />
          <button
            className="add-btn"
            onClick={() => this.addItem(this.state.newItem)}
            disabled={!this.state.newItem.length}>Add Task</button>
          <div className="list">
            <ol>
              {this.state.list.map(item => {
                return (
                  <li key={item.id}>

                    {item.value}
                    <button
                      className="btn"
                      onClick={() => this.deleteItem(item.id)}
                    >Delete</button>
                  </li>
                );
              })}
            </ol>
          </div>
        </div></center>

      </div>
    );
  }
}
export default App;

