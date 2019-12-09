//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";
import Timer from "./Timer";


function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);
  const [currentQuarter, setCurrentQuarter] = useState(1);
  //scoring
  const homeTouchdownScore = event => setHomeScore(homeScore + 7);
  const awayTouchdownScore = event => setAwayScore(awayScore + 7);
  const homeFieldgoalScore = event => setHomeScore(homeScore + 3);
  const awayFieldgoalScore = event => setAwayScore(awayScore +3);
  //quarter change
  const changeQuarter = (event) => { 
    if (currentQuarter <4){
      setCurrentQuarter(currentQuarter + 1);}
  }

  


  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

         
            <div className="home__score">{homeScore}</div>
          </div> 
         {/* Stretch */}
          <Timer />
          
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        {/* Stretch */}
        <BottomRow quarterValue= {currentQuarter}/>
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick = {homeTouchdownScore}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={homeFieldgoalScore}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick = {awayTouchdownScore}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick = {awayFieldgoalScore}>Away Field Goal</button>
        </div>
        <div className="quarterButton">
          <button className="quarterButtons__changeQuarter" onClick = {changeQuarter}>Change Quarter</button>
          
        </div>
      </section>
    </div>
  );
}

export default App;
