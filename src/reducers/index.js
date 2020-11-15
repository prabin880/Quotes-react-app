import arrayQuotes from './arrayQuotes';
import randomQuotes from './randomQuote';
import colorReducer from './colors';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    array: arrayQuotes,
    random: randomQuotes,
    colour: colorReducer
});

export default rootReducer;

