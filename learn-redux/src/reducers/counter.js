export const increment = (nr) => {
    return{
        type: 'INCREMENT',
        payload: nr
        //payload or data
    };
};

export const decrement = () => {
    return{
        type: 'DECREMENT'
        
    };
};


const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + action.payload;
        case 'DECREMENT':
            return state -1;
        default:
            return state;
    }
}

export default counterReducer;