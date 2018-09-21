import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';

import AddLPlayerForm from './AddPlayerForm';
import Header from './Header';
import Player from './Player';


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

let nextId = 5;



class Application extends Component{

  constructor(props){
      super(props);
      this.state = {
          players : this.props.initialPlayers
      };
      this.onScoreChange = this.onScoreChange.bind(this);
      this.onPlayerAdd = this.onPlayerAdd.bind(this);
      this.onRemovePlayer = this.onRemovePlayer.bind(this);
  }

  onScoreChange(index,delta){
    const player =  this.state.players[index];
    if(delta === -1){
      player.score -= 1;
    }else if (delta === +1){
      player.score += 1;
    }

    this.setState(player);
  }


  onPlayerAdd(name){
    this.state.players.push({
      name : name,
      score : 0,
      id : nextId
    });

    nextId += 1;
    this.setState(this.state);
  }

  onRemovePlayer(index){
    this.state.players.splice(index,1);
    this.setState(this.state);
  }

  render(){
    return(
      <div className="scoreboard">
        <Header title={this.props.title} players={this.state.players}/>
        <div className="players">
          {this.state.players.map((player,index)=>{
            return <Player
              onScoreChange = {function(delta){this.onScoreChange(index,delta)}.bind(this)}
              onRemove={function(){this.onRemovePlayer(index)}.bind(this)}
              name={player.name}
              initialScore={player.score}
              key={player.id} />
            })
          }
        </div>
        <AddLPlayerForm onAdd={this.onPlayerAdd}/>
      </div>
    );
  }

}

Application.propTypes ={
    title : PropTypes.string,
    initialPlayers : PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      score : PropTypes.number.isRequired,
      id : PropTypes.number.isRequired
    })).isRequired,

  };

Application.defaultProps ={
  title : "Scoreboard"
}

class App extends Component {

  render() {
    return (
      <div className="App">
          <Application title="My Scoreboard" initialPlayers={players}/>
      </div>
    );
  }
}


export default App;
