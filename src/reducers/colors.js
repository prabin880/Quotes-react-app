const colour = [{color: '#800000'},
                {color: '#808000'},
                {color: '#008000'},
                {color: '#008080'},
                {color: '#000080'},
                {color: '#800080'},
                {color: '#20B2AA'},
                {color: '#4682B4'},
                {color: '#8B008B'},
                {color: '#696969'},
                {color: '#2F4F4F'}, 
                {color: '#A0522D'}];

const colorReducer = (state = colour[Math.floor(Math.random() * Math.floor(12))], action) =>{
    switch(action.type){
        case 'NEXT':
            return colour[Math.floor(Math.random() * Math.floor(12))];
        default:
            return state;
    }
}

export default colorReducer;