import React from 'react';
import Recommend from './Recommend';
import Originals from './Originals';
import Newarrival from './Newarrival';
import Trending from './Trending';
const Moviecard = () =>{
    return(
        <>
            <Recommend />
            <Originals />
            <Newarrival />
            <Trending />

        </>
    )
}

export default Moviecard;