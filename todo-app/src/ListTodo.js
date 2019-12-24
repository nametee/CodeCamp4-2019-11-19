import React from 'react'; 
import styles from './ListTodo.module.css';

import Todo from './components/Todo.js'
import NewTodo from './components/NewTodo.js'

class ListTodo extends React.Component {
  state = {
    todos : [
      {
        name : "test1", 
        isChecked : false
      },
      {
        name : "test2", 
        isChecked : true
      }
    ],
    textTodo : ""
  }

  handlerTick = (todo) => {
    this.setState({
      todos : this.state.todos.map((item,idx) => {
          if ( todo === item ) {
            item.isChecked = !todo.isChecked  
          } 
          return item
        }
      )
    })
  }  
  handlerAdd = e => {
    if (this.state.textTodo && this.state.textTodo !== '') { 
      this.setState({
        todos : this.state.todos.concat({
          name : this.state.textTodo,
          isChecked : false
        }),
        textTodo : ""
      })
      /*this.setState({
        todos : [ ...this.state.todos , {
          name : this.state.textTodo,
          isChecked : false
        }],
        textTodo : ""
      })*/
    }
  }
  handlerTextChange = e =>{ 
    this.setState({
      textTodo : e.target.value
    }) 
  }
  handlerDelete = (todo) => { 
    this.setState({
      todos : this.state.todos.filter(item => item != todo )
    })
  }
  
  render = () => {
    return (
      <div>
        <NewTodo  
          textTodo = { this.state.textTodo }
          onTextChange = { this.handlerTextChange }
          onAdd = { this.handlerAdd }
          onEnter = { e => { if ( e.key === "Enter" ){ this.handlerAdd(e) }  }}
        />  
        { this.state.todos.map((todo, idx) => 
            <Todo 
              key = { idx }
              name = { todo.name } 
              isChecked = { todo.isChecked  }
              onTick = { e => this.handlerTick(todo) }
              onDelete =  { e => this.handlerDelete(todo) }
            />   
        )} 
      </div>
    )
  }  
}

export default ListTodo;
