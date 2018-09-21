import React from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter';

function Player(props){
  return(
    <div className="player">
      <div className="player-name">
        <a className="remove-player" onClick={props.onRemove}>X</a>
        {props.name}
      </div>
      <div className="player-score">
        <Counter score={props.initialScore} onChange={props.onScoreChange}/>
      </div>
    </div>
  );
}

Player.propTypes ={
  name : PropTypes.string.isRequired,
  initialScore : PropTypes.number.isRequired,
  onScoreChange : PropTypes.func.isRequired,
  onRemove : PropTypes.func.isRequired
}


export default Player;
