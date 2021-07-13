import React, { Component } from 'react';
import {Route, Link} from "react-router-dom";
import "./App.css";
import NavBar from "./components/Navbar/NavBar";
import Home from './pages/Home';
import Bookmark from './pages/Bookmark';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            article: []
        };
    }

    componentDidMount() {
        const url = "https://cors-anywhere.herokuapp.com/https://today.line.me/id/portaljson/";
        fetch(url,{
            //mode: 'no-cors',
            method: "GET",
            headers: {
                "X-Requested-With" : "XMLHttpRequest",
                "Cookie" : "region=id"
            }
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                    console.log(response.json()+"Hemmm");
                    console.log(response.json());
                }
                throw new Error("Network response wasn't okay.")
            })
            .then(result => this.setState({ article: result }))
            .catch(error => console.log(error.message))
    }

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
