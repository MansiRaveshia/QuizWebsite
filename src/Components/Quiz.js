import React, { useEffect, useState } from 'react';
import {Questions} from '../QuestionBank';
import {useDispatch, useSelector} from "react-redux";
import {nextquestion,previousquestion,setans} from '../action';
import { Link, useHistory } from 'react-router-dom';
import '../App.css';

function Quiz() {

/*Code to Set timer of 2 min */
    let history=useHistory();
    const initialCount = () => Number(window.localStorage.getItem('seconds') || 120)
  const [seconds,setSeconds]=useState(initialCount);

  useEffect(()=>{
    if(seconds > 0){
      setTimeout(()=>setSeconds(seconds-1),1000);
    }
    else if(seconds==0){
      alert('Time Over');
      history.push('/end')
    }
  });

  useEffect(
    () => {
      window.localStorage.setItem('seconds',seconds)
    },
    [seconds],
  )
/*timer code complete*/
    const dispatch=useDispatch();
    const questioncount = useSelector((state) => state.firstreducer.questionno );
    const anss = useSelector((state) => state.firstreducer.answers );
    
    

    const selectedOption =(e) => {
        e.preventDefault();
        for(let i=0; i< anss.length ; i++){
            if(questioncount == anss[i].id){
                anss.splice(i,1);
            }
        }

        const myans = {
            id: questioncount,
            selected: e.target.innerHTML
        }
        
        dispatch(setans(myans));

    }

    for(let i=0; i< anss.length ;i++){
        if(questioncount == anss[i].id){
            var a=anss[i].selected
        }
    }
        
    return (
        <div className='Quiz'>
        
        <h5>Time left: <button style={{fontSize:"15px"}} type="button" class="btn btn-info btn-sm">{(seconds/60).toString().split(".")[0]} min {seconds%60} sec</button></h5>
            <p>{questioncount+1} of {Questions.length}</p>
            <h3 className='myquest'> {Questions[questioncount].prompt}</h3>

            <div className='options'>
            <div className='optionrow'>
            <button type="button" className={"btn "+(Questions[questioncount].optionA==a?'btn-success':'btn-light') } onClick={selectedOption}>{Questions[questioncount].optionA}</button>
            <button type="button" className={"btn "+(Questions[questioncount].optionB==a?'btn-success':'btn-light') } onClick={selectedOption}>{Questions[questioncount].optionB}</button>
             
            </div>
            <div className='optionrow'>
            <button type="button" className={"btn "+(Questions[questioncount].optionC==a?'btn-success':'btn-light') } onClick={selectedOption}>{Questions[questioncount].optionC}</button>
            <button type="button" className={"btn "+(Questions[questioncount].optionD==a?'btn-success':'btn-light') } onClick={selectedOption}>{Questions[questioncount].optionD}</button>

            </div>
            
            </div>
            <br />
            
            <div className='optionrow'>

            {questioncount!=0 &&
            (
               <button type="button" class="btn btn-warning" onClick={() => dispatch(previousquestion())}>Previous</button>
            )}

            {questioncount == Questions.length -1 ?
            (
               <Link to='/end'><button type="button" class="btn btn-danger" >Finish</button></Link> 
            ):
            (
                <button type="button" class="btn btn-secondary" onClick={() => dispatch(nextquestion())}> Next</button>
            )}

            </div>
           
            
        </div>
    )
}

export default Quiz
