import React from 'react';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import slide1 from '../images/slider-badag.jpg';
import slide2 from '../images/slider-badging.jpg' ;
import slide3 from '../images/slider-scale.jpg'
import slide4 from '../images/slider-scales.jpg' ;
const Slideshow = () =>{
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000
        
      };
    return(
        <div className='slider'>
            <Imgslider {...settings}>
            <Wrap>
                
            <a href='...'>
               <img src={slide1} alt="" />
               </a> 
                
            </Wrap>

            <Wrap>
                
            <a href='...'>
               <img src={slide2} alt="" />
               </a> 
                
            </Wrap>

            <Wrap>
                
            <a href='...'>
               <img src={slide3} alt="" />
               </a> 
                
            </Wrap>

            <Wrap>
            <a href='...'>
               <img src={slide4} alt="" />
               </a> 
                
                
            </Wrap>
            </Imgslider>
        </div>
    )
}

const Imgslider = styled(Slider)`
margin-top: 20px;
  & > button {
    opacity: 0.2;
    height: 100%;
    width: 4vw;
    z-index: 1;
    &:hover {
      opacity: 1;
      transition: opacity 0.4s ease 0s;
    }
  }
  ul li button {
    &:before {
      font-size: 10px;
      color: white;
    }
  }
  li.slick-active button:before {
    color: white;
  }

  .slick-prev {
    height:150%;
    left: 0;
  }
  .slick-next {
    right: 0;
  }


`;
const Wrap = styled.div`
border-radius: 4px;
cursor: pointer;
position: relative;
a {
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  display: block;
  position: relative;
  padding: 4px;
  img {
    width: 100%;
    height: 100%;
    border-radius:10px;
  }
  &:hover {
    padding: 0;
    border: 4px solid rgba(249, 249, 249, 0.8);
    transition-duration: 300ms;
  }
}

`;
export default Slideshow;