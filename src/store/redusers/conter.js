const initialState = {
        count: null,
}

const Counter = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_DATA':
            return {...state, count:action.payload}
        default: return state
    }
};

export default Counter;