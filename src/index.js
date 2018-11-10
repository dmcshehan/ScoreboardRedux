import React from 'react';
import ReactDOM from 'react-dom';
import Scoreboard from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import PlayerReducer from './reducers/playerReducer';


const store = createStore(PlayerReducer);

ReactDOM.render(
    <Provider store={store}>
        <Scoreboard title="My Scoreboard"/>
    </Provider>, 
    document.getElementById('root')
);

