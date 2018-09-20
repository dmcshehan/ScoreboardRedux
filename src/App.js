import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';


let players = [
  {
    name : "Shehan Disanayake",
    score : 31,
    id: 1
  },
  {
    name : "Jim Hoskins",
    score : 33,
    id: 2
  },
  {
    name : "ALena Holigen",
    score : 35,
    id : 3
  },
  {
    name : "Craig Dennis",
    score : 37,
    id : 4
  },
];


function Header(props){
  return(
    <div className="header">
      <h1>{props.title}</h1>
    </div>
  );
}

Header.propTypes ={
  title : PropTypes.string.isRequired,
};


class Counter extends Component{
  propTypes : {
      initialScore : PropTypes.number.isRequired
  }

  constructor(props){
    super(props);
    this.state ={
      score : this.props.initialScore
    }

    this.decrementScore = this.decrementScore.bind(this);
    this.incrementScore = this.incrementScore.bind(this);
  }

  decrementScore(){
    this.setState({
      score : this.state.score - 1,
    });
  }

  incrementScore(){
    this.setState({
      score : this.state.score + 1,
    });
  }

  render(){
    return(
      <div className="counter">
          <button onClick={this.decrementScore} className="counter-action decrement">-</button>
          <div className="counter-score">{this.state.score}</div>
          <button onClick={this.incrementScore} className="counter-action increment">+</button>
      </div>
    );
  }

}


function Player(props){
  return(
    <div className="player">
      <div className="player-name">
        {props.name}
      </div>
      <div className="player-score">
        <Counter initialScore={props.initialScore}/>
      </div>
    </div>
  );
}

Player.propTypes ={
  name : PropTypes.string.isRequired,
  score : PropTypes.number.isRequired
}


function Application(props){
  return(
    <div className="scoreboard">
      <Header title={props.title}/>
      <div className="players">
        {props.players.map((player)=>{
          return <Player key={player.id} name={player.name} initialScore={player.score}/>
        })}

      </div>
    </div>
  );
}

class App extends Component {

  render() {
    return (
      <div className="App">
          <Application title="My Scoreboard" players={players}/>
      </div>
    );
  }
}
Application.propTypes ={
  title : PropTypes.string,
  players : PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    score : PropTypes.number.isRequired,
    id : PropTypes.number.isRequired
  })).isRequired,

};
Application.defaultProps ={
  title : "Scoreboard",
};

export default App;
