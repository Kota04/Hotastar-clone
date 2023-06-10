import styled from "styled-components";
import card1 from '../images/viewers-disney.png';
import card2 from '../images/viewers-marvel.png';
import card3 from '../images/viewers-pixar.png';
import card4 from '../images/viewers-starwars.png';
import card5 from '../images/viewers-national.png';
import vid1 from '../videos/1564674844-disney.mp4';
import vid2 from '../videos/1564676115-marvel.mp4';
import vid3 from '../videos/1564676714-pixar.mp4';
import vid4 from '../videos/1608229455-star-wars.mp4';
import vid5 from '../videos/1564676296-national-geographic.mp4';
const Viewers = (props) => {
  return (
    <Container>
      <Wrap>
        <img src={card1} alt="disney" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src={vid1} type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src={card2} alt="pixar" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src={vid2} type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src={card3} alt="marvel" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src={vid3} type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src={card4} alt="starwars" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src={vid4} type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src={card5} alt="national" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source
            src={vid5}
            type="video/mp4"
          />
        </video>
      </Wrap>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 30px;
  padding-top:30px ;
  padding-left:10px;
  display: grid;
  grid-gap: 1.5%;
  
  grid-template-columns: 18% 18% 18% 18% 18%;
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);
  img {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
    top: 0;
  }
  video {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    opacity: 0;
    z-index: 0;
  }
  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
    video {
      opacity: 1;
    }
  }
`;

export default Viewers;