import * as playerActionTypes from '../actiontypes/player';

export const addPlayer = name =>{
    return{
        type : playerActionTypes.ADD_PLAYER,
        name
    };

};

export const removePlayer = index =>{
    return{
        type : playerActionTypes.REMOVE_PLAYER,
        index
    };

};

export const updatePlayerScore = (index,score)=>{
    return{
        type : playerActionTypes.UPDATE_PLAYER_SCORE,
        index,
        score
    };

};

export const selectPlayer = index =>{
    return{
        type : playerActionTypes.SELECT_PLAYER,
        index,
    };

};