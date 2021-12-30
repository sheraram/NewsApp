// import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


export default class App extends Component {
  pageSize = 5;
  ApiKey=process.env.REACT_APP_NEWS_API

  state={
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({progress : progress})
  }
 
  render() {
    return (
      <div>
        <Router>
          <LoadingBar
            color='#f11946'
            progress={this.state.progress}
            
          />
          <Navbar />

          <Switch>
            <Route exact path="/"><News ApiKey={this.ApiKey} setProgress={this.setProgress} key="general" pageSize={this.pageSize} country="in" category="general" /></Route>
            <Route exact path="/business"><News ApiKey={this.ApiKey} setProgress={this.setProgress} key="business" pageSize={this.pageSize} country="in" category="business" /></Route>
            <Route exact path="/entertainment"><News ApiKey={this.ApiKey} setProgress={this.setProgress} key="entertainment" pageSize={this.pageSize} country="in" category="entertainment" /></Route>
            <Route exact path="/general"><News ApiKey={this.ApiKey} setProgress={this.setProgress} key="general" pageSize={this.pageSize} country="in" category="general" /></Route>
            <Route exact path="/health"><News ApiKey={this.ApiKey} setProgress={this.setProgress} key="health" pageSize={this.pageSize} country="in" category="health" /></Route>
            <Route exact path="/science"><News ApiKey={this.ApiKey} setProgress={this.setProgress} key="science" pageSize={this.pageSize} country="in" category="science" /></Route>
            <Route exact path="/sports"><News ApiKey={this.ApiKey} setProgress={this.setProgress} key="sports" pageSize={this.pageSize} country="in" category="sports" /></Route>
            <Route exact path="/technology"><News ApiKey={this.ApiKey} setProgress={this.setProgress} key="technology" pageSize={this.pageSize} country="in" category="technology" /></Route>


          </Switch>
        </Router>
      </div>
    )
  }
}
