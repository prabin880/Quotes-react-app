const randomQuote = (state = {}, action) => {
    switch(action.type){
        case 'NEXT':
            return action.payload;
        default:
            return state;
    }
}

export default randomQuote;