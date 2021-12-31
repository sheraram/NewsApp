// import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


const App = () => {
  const pageSize = 5;
  const ApiKey = process.env.REACT_APP_NEWS_API

  const [progress, setProgress] = useState(0)

  return (
    <div>
      <Router>
        <LoadingBar
          color='#f11946'
          progress={progress}

        />
        <Navbar />

        <Switch>
          <Route exact path="/"><News ApiKey={ApiKey} setProgress={setProgress} key="general" pageSize={pageSize} country="in" category="general" /></Route>
          <Route exact path="/business"><News ApiKey={ApiKey} setProgress={setProgress} key="business" pageSize={pageSize} country="in" category="business" /></Route>
          <Route exact path="/entertainment"><News ApiKey={ApiKey} setProgress={setProgress} key="entertainment" pageSize={pageSize} country="in" category="entertainment" /></Route>
          <Route exact path="/general"><News ApiKey={ApiKey} setProgress={setProgress} key="general" pageSize={pageSize} country="in" category="general" /></Route>
          <Route exact path="/health"><News ApiKey={ApiKey} setProgress={setProgress} key="health" pageSize={pageSize} country="in" category="health" /></Route>
          <Route exact path="/science"><News ApiKey={ApiKey} setProgress={setProgress} key="science" pageSize={pageSize} country="in" category="science" /></Route>
          <Route exact path="/sports"><News ApiKey={ApiKey} setProgress={setProgress} key="sports" pageSize={pageSize} country="in" category="sports" /></Route>
          <Route exact path="/technology"><News ApiKey={ApiKey} setProgress={setProgress} key="technology" pageSize={pageSize} country="in" category="technology" /></Route>


        </Switch>
      </Router>
    </div>
  )

}

export default App;