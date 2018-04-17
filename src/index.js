/*import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App/>, document.getElementById('root'));

registerServiceWorker(); */





import React, {Component} from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import "./index.css";

//
//import App from "./App";
import LoginPage from "./Components/LoginPage";
import TeacherHome from "./Components/TeacherHomePage";
import Drag from "./Components/DragAndDropPage";
import StudentHome from "./Components/StudentHomePage";
import registerServiceWorker from "./registerServiceWorker";

class Routes extends Component {
    render() {
        return (
            <Router history="">
                <Switch>
                   //{ <Route path="/App" component={LoginPage}/>}
                    <Route path="/thome" exact component={TeacherHome}/>
                    <Route path="/drag" exact component={Drag}/>
                    <Route path="/login" exact component={LoginPage}/>
                    <Route path='/shome' exact component={StudentHome}/>
                    <Route path="/" exact render={() => <Redirect to="/LoginPage"/>}/>
                   
                </Switch>
            </Router>
        );
    }
}
ReactDOM.render(<Routes />, document.getElementById('root'));
registerServiceWorker();
