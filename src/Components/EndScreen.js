import React, { useState } from 'react';
import {Questions} from '../QuestionBank';
import {useDispatch, useSelector} from "react-redux";
import {resetquiz} from '../action';
import { Link } from 'react-router-dom';
import '../App.css';



function EndScreen() {

    const mystate = useSelector(state => state.firstreducer);
    var yourScore=0;
    const dispatch=useDispatch();

    const restart =(e) => {

        dispatch(resetquiz());
    }
    
   for(let j=0; j<Questions.length;j++){
       for(let i=0;i<mystate.answers.length;i++){
           if(j==mystate.answers[i].id){
               if(Questions[j].answer==mystate.answers[i].selected){
                   yourScore+=1;
               }
           }
       }
   }


    return (
        <div className='EndScreen'>
            <h3 className='myquest'>Quiz Finished</h3>
            <h4>Your score: {yourScore}/{Questions.length}</h4>

            <Link to='/'><button type="button" class="btn btn-dark" onClick={restart} >Restart Quiz</button></Link>
        </div>
    )
}

export default EndScreen
