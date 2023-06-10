import styled from 'styled-components';
import bg from '../images/login-background.jpg';
import logo1 from '../images/cta-logo-one.svg';
import logo2 from '../images/cta-logo-two.png'
import { NavLink } from 'react-router-dom';


const Login = ()=>{
    return (
       
    <div className="container" id='mydiv'>
         
        <div className="login">
            
            <Background>
                <img src={bg} alt='...'/>
            </Background>
            <div className="center">
                <img src={logo1} alt='...'></img>
                <NavLink href='..' className='login-btn'  to='/home' >Explore</NavLink>
                <p className='login-desc'>Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription. As
                    of 03/26/21, the price of Disney+ and The Disney Bundle will increase by $1.</p>
                <img src={logo2} alt='...' className='logo2'></img>
            </div>
        </div>
    </div>
    )
}
const Background = styled.div`
  z-index: -1;
  background-size:cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  position: fixed;
  left: 0px;
  right: 0px;
  top: 0px;
 
    img{
        width:100vw;
        height:100vh;
        @media (max-width: 768px) {
            width: initial;
          }
    }

`;

export default Login;