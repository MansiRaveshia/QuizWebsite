import React, { useEffect } from 'react';
import './App.css';

import { Provider, useDispatch, useSelector } from "react-redux";
import MainMenu from './Components/MainMenu';
import Quiz from './Components/Quiz';
import EndScreen from './Components/EndScreen';
import { BrowserRouter as Router, Route,Switch} from 'react-router-dom';


function App() {

  const dispatch=useDispatch();
  
  return (
    
    <Router>
    <div className="App">
    <h1 style={{padding:"20px"}}>Quiz App</h1>

    <Switch>
    <Route exact path="/">
    <MainMenu />
    </Route>

    
      <Route exact path='/startquiz'>
      <Quiz />
      </Route>

      <Route exact path='/end'>
      <EndScreen />
      </Route>
      
    </Switch>
        
      
      
    </div>
    </Router>
   
  );
}

export default App;
