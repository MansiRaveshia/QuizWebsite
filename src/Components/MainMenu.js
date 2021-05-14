import React, { useEffect, useState } from 'react';
import {Link} from "react-router-dom";
import '../App.css';

function MainMenu() {

  /*set timer of 2 min using local storage when start quiz page loads and will start timer when quiz starts*/
    useEffect(
        () => {
          window.localStorage.setItem('seconds',120)
        },
        []
      )

      
     
     
    return (
        <div className="Menu">

           <Link to={"/startquiz"}><button type="button"  class="btn btn-dark">Start Quiz</button></Link> 
        </div>
    )
}

export default MainMenu
