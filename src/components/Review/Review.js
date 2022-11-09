import React, { createContext, useState } from 'react';



const userContext = createContext();


const Review = () => {

    const [count, setCount] = useState(0);

    return (
        <userContext.Provider value={count}>

            <h1>Total Review {count}</h1>

            <button className="btn btn-danger" onClick={() => setCount(count + 1)}> click me</button>

        </userContext.Provider>

    );
};

export default Review;