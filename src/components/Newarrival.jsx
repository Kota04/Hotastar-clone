import React from 'react';
import movies from '../movies.js';

import Box from './box'

const Newarrival = () =>{
    return(
        <div className="container-movies">
            <h4 className="movie-heading">Newarrival</h4>
            <div className='row'>
                {movies.map((movie,key)=>( movie.type === 'new' ? <div>
                <Box cardImg={movie.cardImg} id={movie.id}/>
                </div>:null
                ))}

            </div>
        </div>
    )
}

export default Newarrival;