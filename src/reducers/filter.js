
const filters = (state = 'ALL', action) => {
    switch(action.type){
        case 'SET_CURRENT_FILTER':
            console.log(action.filter);
            return action.filter
        default:
            return state
        

    }

}

export default filters;