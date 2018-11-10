import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators }from 'redux';
import * as playerActionCreators from './actions/player';
import './App.css';
import { connect } from 'react-redux';
import AddLPlayerForm from './AddPlayerForm';
import Header from './Header';
import Player from './Player';
import PlayerDetails from './playerDetails';


class Scoreboard extends Component{

  static propTypes ={
    players : PropTypes.array.isRequired,
  };

  static defaultProps ={
    title : "Scoreboard"
  }

  render(){
    
    const { players , dispatch , selectedPlayerIndex} = this.props;
    //console.log(players);
    const addPlayer = bindActionCreators(playerActionCreators.addPlayer,dispatch);
    const removePlayer = bindActionCreators(playerActionCreators.removePlayer,dispatch);
    const updatePlayerScore = bindActionCreators(playerActionCreators.updatePlayerScore,dispatch);
    const selectPlayer = bindActionCreators(playerActionCreators.selectPlayer,dispatch);  


    let selectedPlayer;
    console.log(selectedPlayerIndex);
    if(selectedPlayerIndex !== -1){
      selectedPlayer = players[selectedPlayerIndex];
    }


    const playerComponent = players.map((player,index)=>{
      return <Player
        index={index}
        name={player.name}
        score={player.score}
        key={player.name}
        updatePlayerScore={updatePlayerScore}
        removePlayer={removePlayer}
        selectPlayer={selectPlayer}
      />
    });


    return(
      <div className="scoreboard">
        <Header title={this.props.title} players={players}/>
        <div className="players">
          {playerComponent}
        </div>
        <AddLPlayerForm addPlayer={addPlayer}/>
        <div className="player-detail">
          <PlayerDetails selectedPlayer={selectedPlayer}/>
        </div> 
      </div>
    );
  }

}



const mapStateToProps = state => {
  return {
    players : state.players,
    selectedPlayerIndex : state.selectedPlayerIndex
  }
};


export default connect(mapStateToProps)(Scoreboard);
