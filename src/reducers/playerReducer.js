import * as playerActionTypes from '../actiontypes/player';

const initialState = {
    players : [
        {
            name: "Shehan Disanayake",
            score: 31,
            id: 1,
            created:'10/12/2017',
            updated:'10/13/2017'
        },
        {
            name: "Jim Hoskins",
            score: 33,
            id: 2,
            created:'10/12/2017',
            updated:'10/13/2017'
        },
        {
            name: "ALena Holigen",
            score: 35,
            id: 3,
            created:'10/12/2017',
            updated:'10/13/2017'
        },
        {
            name: "Craig Dennis",
            score: 37,
            id: 4,
            created:'10/12/2017',
            updated:'10/13/2017'
        },
    ],
    selectedPlayerIndex : -1

};

export default function PLayer(state = initialState, action) {

    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth();
    let year =  date.getFullYear();


    switch (action.type) {
        case playerActionTypes.ADD_PLAYER:
        const addPlayerList = [...state.players,{
            name: action.name,
            score: 0,
            created : `${month}/${day}/${year}`
        }]
            return {
                ...state,
                players : addPlayerList
            }

        case playerActionTypes.REMOVE_PLAYER:
        const removePlayerList = [
            ...state.players.slice(0, action.index),
            ...state.players.slice(action.index + 1)
        ]
            return {
                ...state,
                players : removePlayerList
            }

        case playerActionTypes.UPDATE_PLAYER_SCORE:
            const updatePlayerList = state.players.map((player, index) => {
                
                if (index === action.index) {
                    return {
                        ...player,
                        score : player.score + action.score,
                        updated : `${month}/${day}/${year}`
                    }
                }
                return player;
            });
            return{
                ...state,
                players : updatePlayerList
            }

        case playerActionTypes.SELECT_PLAYER:
            return {
                ...state,
                selectedPlayerIndex : action.index 
            }

        default:
            return state;

    }
}