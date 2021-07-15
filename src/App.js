import React, { Component } from 'react';
import {Route, Link} from "react-router-dom";
import "./App.css";
import NavBar from "./components/Navbar/NavBar";
import Home from './pages/Home';
import Bookmark from './pages/Bookmark';

class App extends Component {

    render() {
       return (
           <div className="App">
               <NavBar />
               <Route exact path="/" component={Home}/>
               <Route exact path="/bookmark" component={Bookmark}/>
           </div>
       )
    }
}

export default App;
