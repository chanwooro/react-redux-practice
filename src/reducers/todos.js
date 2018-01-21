const todos = (state = [], action) =>{
    console.log(state);
    switch(action.type){
        case 'ADD':
        console.log(state);
        return [
            ...state,
            {
                id: action.id,
                text: action.text,
                complete: false
            }
        ]
            
        case 'TOGGLE_LIST':
            console.log('test');
            return state.map(data => (data.id === action.id) ? {...data, complete: !data.complete}: data)
        default:
            return state;
    }
}

export default todos;