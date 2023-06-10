import React from 'react';
import Slideshow from './Slideshow';
import Viewers from './MainCards'
import Moviecard from './Moviecard';
import Footer from './Footer';

const Home = () =>{

    return(
        
            <div className="container-fluid">
                <div className="home-body">
                    <Slideshow />
                    <Viewers />
                    <Moviecard />
                    <Footer />
                </div>
            </div>  
    )
}

export default Home;