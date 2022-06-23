const initialState = {
    square: 0,
    factorial: 0,
};

export function reducer(state = initialState, action) {
    switch (action.type) {
        case "FACTORIAL_VALUE":
            return { ...state, factorial: action.payload };
        case "SQUARE_VALUE":
            return {...state, square: action.payload };
        default:
            return state;
    }
}

