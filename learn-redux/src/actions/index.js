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