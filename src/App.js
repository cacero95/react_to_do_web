import React, {Component} from 'react';
import Todos from './to_do';
import AddTodo from './Addtodo';
import Navbar from './components/Navbar';
// con el Switch cuando se este navegando va marcar la primera
// ruta que encuentre segun la consulta que se necesite
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Post from './components/Post';

class App extends Component {
  state = {
    todos: [
      {id:1, content:'buy some milk'},
      {id:2, content:'play mario kart'}
    ]
  }
  deleteTodo = (id) =>{
    let new_array = this.state.todos.filter(element=>{
      return element.id !== id
    });
    this.setState({
      todos:new_array
    })
  }
  addTodo = (state) => {
    state["id"] = this.state.todos[this.state.todos.length-1].id+1;
    let find = this.state.todos.findIndex(element=>{
      return state.content === element.content
    });
    let new_array = find > -1 ? this.state.todos : [...this.state.todos,state];
    this.setState({
      todos:new_array
    });
  }
  render(){
    return(
      // con el exact marca el route exacto, evitando que el router de react
      // muestre subsecciones
      /**
       * sin el exact el route  de react va mostrar los componentes
       * con sus subsecciones
       */
      <div className="container">
        <BrowserRouter>
          <Navbar></Navbar>
          <Switch>
            
            <Route exact path="/" component={Home}></Route>
            <Route path="/contact" component={Contact}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/post/:post_id" component={Post}></Route>
          
          </Switch>
          <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}></Todos>
          <AddTodo addTodo={this.addTodo}></AddTodo>
        </BrowserRouter>
      </div>
    )
  }
} 

export default App;
