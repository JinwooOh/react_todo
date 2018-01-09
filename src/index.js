import React from 'react';
import ReactDOM from 'react-dom';
import Todo from './Todo';
import styles from './main.css';

class TodoBox extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      todos: []
    }
    //this.todoInput = "";
  }
  addItem(){
    let todoValue = this.todoInput.value;

    let newTodos = this.state.todos;
    newTodos.push(todoValue);

    this.setState({
      todos: newTodos
    })
    this.todoInput.value = "";
    this.todoInput.focus();
  }

  removeTodo(id){
    let todos = this.state.todos.filter((todo, index)=>{
      return id !==index;
    });

    this.setState({
      todos: todos
    })
  }

  render(){
    return(
      <div className={styles.container}>
        <h2 className={styles.header}>Todo List</h2>

        <ul className={styles.list}>
          {this.state.todos.map(
            (todo, index)=>{return(<Todo id={index} key={index}
              todo={todo} onRemove={() => this.removeTodo(index)}/>)}
          )}
        </ul>
        <div className={styles.inputBox}>
        <input type='text' placeholder="Enter todo" ref={(input)=>this.todoInput = input}/>
        <button className={styles.addButton}onClick={this.addItem.bind(this)}>Add Item</button>
        </div>
        <p className={styles.countText}>Total Todo: {this.state.todos.length}</p>

      </div>
    );
  }
}

ReactDOM.render(<TodoBox />, document.getElementById('root'));
