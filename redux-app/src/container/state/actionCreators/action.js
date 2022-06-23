export const factorial = ( fact ) =>{
    const factorialize = (num) => {
        if (num < 0) return -1;
        else if (num === 0) return 1;
        else {
           return num * factorialize(num - 1);
        } 
    }
    fact = factorialize(fact);
    return (dispatch)=>{
        dispatch({
            type: "FACTORIAL_VALUE",
            payload: fact
        })

    }
}

export const square =( squr )=>{
    squr *= squr;
    return (dispatch)=>{
        dispatch({
            type: "SQUARE_VALUE",
            payload: squr
        })

    }
}