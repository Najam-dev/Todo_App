import React, { Component } from 'react';
import './App.css';
import Todo from './components/Todo';
import Header from './components/Header/header'
import AddTodo from './components/AddTodo';
import About from './components/pages/about';
//import { v4 as uuid } from 'uuid';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  state = {
    todos: []
  };

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then(res => this.setState( {todos: res.data} ))
  }


  //Toggle Complete
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
    })
  }

  delButton = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] })
  }

  addTodo = (title) => {
    axios.post("https://jsonplaceholder.typicode.com/todos", {
      title : title,
      completed : false,
    })
      .then(res => this.setState({
        todos: [...this.state.todos, res.data]
      }))
    
  }

  render() {
    return (
      <>
        <Router basename={process.env.PUBLIC_URL} >
          <Header />
          <Switch>
            <Route exact path='/todo_app' render={() => 
              <>
                <AddTodo addTodo={this.addTodo} />
                <Todo todos={this.state.todos} markComplete={this.markComplete} delButton={this.delButton} />
              </>
            } />
          </Switch>
          <Switch>
            <Route path='/todo_app/about' component={About} />
          </Switch>
        </Router>

        
      </>
    );
  }
}

export default App;
