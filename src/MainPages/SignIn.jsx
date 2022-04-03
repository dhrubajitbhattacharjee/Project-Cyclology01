import React from 'react'
import styled from "styled-components";
import Icon from "../Components/Icon";
import Input from "../Components/Input";
// import { FaGoogle } from "react-icons/fa";
import '../CSS_Style/LoginPage.css'
import { Link } from 'react-router-dom';
import Googlelogo from '../images/google-logo.jpg'
import stravalogo from '../images/strava-logo.png'


function SignIn() {

  // const FacebookBackground =
  //   "linear-gradient(to right, #0546A0 0%, #0546A0 40%, #663FB6 100%)";
  // const GoogleBackground =
  //   "linear-gradient(to right, #F4B400 0%, #F4B400 40%, #F4B400 100%)";
  // const TwitterBackground =
  //   "linear-gradient(to right, #56C1E1 0%, #35A9CE 50%)";

  return (
    <div className='bg-img'>
      <MainContainer>
        <WelcomeText className='font-serif text-4xl'>Login</WelcomeText>
        <InputContainer>
          <Input type="text" placeholder="Email" />
          <Input type="password" placeholder="Password" />
        </InputContainer>
        <ButtonContainer>
          <Link to='/'><button class="rounded-full text-lg font-serif border-4 border-blue-800 hover:text-white py-2 px-20 bg-[#1814ff] hover:animate-pulse">Sign In</button></Link>
        </ButtonContainer>
        <LoginWith>OR LOGIN WITH</LoginWith>
        <HorizontalRule />
        <IconsContainer>
          {/* <Icon color={GoogleBackground}>
            <a href='www.instagram.com'><FaGoogle /></a>
          </Icon> */}
          {/* <Icon color={FacebookBackground}>
            <a href='www.facebook.com'><FaFacebookF /></a>
          </Icon> */}
          {/* <Icon color={TwitterBackground}>
            <a href='www.twitter.com'><FaTwitter /></a>
          </Icon> */}

          <Icon>
            <img src={Googlelogo} className='rounded-full' alt='' />
          </Icon>
          <Icon>
            <img src={stravalogo} className='rounded-full' alt='' />
          </Icon>
        </IconsContainer>
        <ForgotPassword><Link to='/'>Forgot Password ?</Link></ForgotPassword>
        <p className='text-white md:text-xs mt-2 font-serif text-xs ml-6'>Don't have an account yet?  <Link to='/signup'><span className='hover:text-blue-700 font-bold'>Sign Up</span></Link></p>
      </MainContainer>
    </div>
  )
}

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 80vh;
  width: 30vw;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
  // border-radius: 10px;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  
  @media only screen and (max-width: 320px) {
    width: 80vw;
    height: 90vh;
    hr {
      margin-bottom: 0.3rem;
    }
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 360px) {
    width: 80vw;
    height: 90vh;
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 411px) {
    width: 80vw;
    height: 90vh;
  }

  @media only screen and (min-width: 768px) {
    width: 80vw;
    height: 80vh;
  }
  @media only screen and (min-width: 1024px) {
    width: 70vw;
    height: 50vh;
  }
  @media only screen and (min-width: 1280px) {
    width: 30vw;
    height: 80vh;
  }
`;

const WelcomeText = styled.h2`
  margin: 3rem 0 2rem 0;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 20%;
  width: 100%;
`;

const ButtonContainer = styled.div`
  margin: 1rem 0 2rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoginWith = styled.h5`
  cursor: pointer;
`;

const HorizontalRule = styled.hr`
  width: 90%;
  height: 0.3rem;
  border-radius: 0.8rem;
  border: none;
  background: linear-gradient(to right, #14163c 0%, #03217b 79%);
  background-color: #ebd0d0;
  margin: 1.5rem 0 1rem 0;
  backdrop-filter: blur(25px);
`;

const IconsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 2rem 0 2rem 0;
  width: 80%;
`;

const ForgotPassword = styled.h4`
  cursor: pointer;
`;

export default SignIn