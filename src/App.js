import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {TodoList} from "./TodoList";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from "moment";
import Login from './component/Login.js';
import {TodoApp} from './TodoApp.js';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';

//Save data
localStorage.setItem('username', 'admin');
localStorage.setItem('password', 'admin');


class App extends Component {

	constructor(props) {
        super(props);
        this.state = {isLoggedIn : localStorage.getItem('isLoggedIn')===null?false : localStorage.getItem('isLoggedIn')};

    };
	
    render() {
		const LoginView = () => (
			<Login/>
		);
		const TodoView = () => (
			this.state.isLoggedIn ?  <TodoApp/> : <div><h3> Se debe Ingresar Primero</h3><br/>username : admin <br/> password : admin <Login/></div>
		);
        return (             
				<Router>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h1 className="App-title">TODO React App</h1>
                    </header>

                    <br/>
                    <br/>

                    <ul>
                        <li><Link to="/">Login</Link></li>
                        <li><Link to="/todo">Todo</Link></li>
                    </ul>

                    <div>
                        <Route exact path="/" component={LoginView}/>
                        <Route path="/todo" component={TodoView}/>
                    </div>
                </div>
            </Router>
        );
    }

}

export default App;
