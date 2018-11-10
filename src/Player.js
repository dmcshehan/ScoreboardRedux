import React from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter';

function Player(props){
  return(
    <div className="player">
      <div className="player-name" onClick={()=> props.selectPlayer(props.index)}>
        <a className="remove-player" onClick={ () => props.removePlayer(props.index)}>X</a>
        {props.name}
      </div>
      <div className="player-score">
        <Counter 
          index={props.index}
          score={props.score} 
          updatePlayerScore={props.updatePlayerScore}/>
      </div>
    </div>
  );
}

Player.propTypes ={
  name : PropTypes.string.isRequired,
  score : PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  updatePlayerScore : PropTypes.func.isRequired,
  removePlayer : PropTypes.func.isRequired,
  selectPlayer : PropTypes.func.isRequired
}


export default Player;
