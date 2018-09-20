import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';


function Application(props){
  return(
    <div className="scoreboard">
      <div className="header">
        <h1>{props.title}</h1>
      </div>
      <div className="players">
        <div className="player">
          <div className="player-name">
            Shehan Disanayake
          </div>
          <div className="player-score">
            <div className="counter">
                <button className="counter-action decrement">-</button>
                <div className="counter-score">31</div>
                <button className="counter-action increment">+</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

class App extends Component {

  render() {
    return (
      <div className="App">
          <Application title="My Scoreboard"/>
      </div>
    );
  }
}
Application.propTypes ={
  title : PropTypes.string.isRequired,
};

export default App;
