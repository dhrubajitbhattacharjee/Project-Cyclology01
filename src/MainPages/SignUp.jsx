import React from 'react'
import '../CSS_Style/signin.css'
import styled from "styled-components";
import Input from "../Components/Input";
import { Link } from 'react-router-dom';



function SignUp() {
    return (
        <div className='bg-img2 text-black font-black'>
            <MainContainer>
                <div class="container justify-center px-1">
                    <WelcomeText className='font-serif text-2xl text-center'>Registration</WelcomeText>

                    <div class="col-lg-12 bg-transparent font-serif ml-auto">
                        <div class="row">
                            <form>
                                <div class="col-sm-12">
                                    <InputContainer>
                                        <div class="row">
                                            <div class="form-group text-sm">
                                                {/* <label>First Name</label> */}
                                                <InputContainer>
                                                    <Input type="text" placeholder="Enter First Name" class="form-control text-sm" />
                                                </InputContainer>
                                            </div>
                                            <div class="form-group text-sm mt-2">
                                                {/* <label>Last Name</label> */}
                                                <InputContainer>
                                                    <Input type="text" placeholder="Enter Last Name" class="form-control text-sm" />
                                                </InputContainer>
                                            </div>
                                        </div>
                                        {/* <div class="form-group mt-2 text-sm"> */}
                                        {/* <label>Email</label> */}
                                        <InputContainer>
                                            <Input type="email" placeholder="Enter Email" class="form-control text-sm" />
                                        </InputContainer>
                                        {/* </div> */}
                                        <div class="row ml-6 mr-6 mt-4">
                                            <div class="col-6 form-group mt-2 text-sm">
                                                {/* <label>Password</label> */}
                                                <InputContainer>
                                                    <Input type="password" placeholder="Enter Password" class="form-control text-sm" />
                                                </InputContainer>
                                            </div>
                                            <div class="col-6 form-group mt-2 text-sm">
                                                {/* <label>Password</label> */}
                                                <InputContainer>
                                                    <Input type="password" placeholder="Confirm Password" class="form-control text-xs pr-4 pl-3" />
                                                </InputContainer>
                                            </div>

                                        </div>

                                        {/* <div className="d-md-flex justify-content-start align-items-center ml-6 mb-2 py-2 mt-2 text-sm">

                                            <h6 className="mb-0 me-4">Gender: </h6>

                                            <div className="form-check form-check-inline  mb-0 me-4">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="inlineRadioOptions"
                                                    id="femaleGender"
                                                    value="option1"
                                                />
                                                <label className="form-check-label" for="femaleGender">Female</label>
                                            </div>

                                            <div className="form-check form-check-inline mb-0 me-4 ">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="inlineRadioOptions"
                                                    id="maleGender"
                                                    value="option2"
                                                />
                                                <label className="form-check-label" for="maleGender">Male</label>
                                            </div>

                                            <div className="form-check form-check-inline mb-0 ">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="inlineRadioOptions"
                                                    id="otherGender"
                                                    value="option3"
                                                />
                                                <label className="form-check-label" for="otherGender">Other</label>
                                            </div>
                                        </div> */}
                                        <div className='row ml-6 mr-6 mt'>
                                            <div class="col-6 form-group mt-2 text-sm">
                                                <InputContainer>
                                                    <Input type="text" placeholder="Blood Group" class="form-control text-sm" />
                                                </InputContainer>
                                            </div>
                                            <div class="col-6 form-group mt-2 text-sm">
                                                <InputContainer>
                                                    <Input type="text" placeholder="Gender" class="form-control text-sm" />
                                                </InputContainer>
                                            </div>

                                        </div>

                                        {/* <div class="col-6 form-group text-sm"> */}
                                        <InputContainer>
                                            <Input type="date" placeholder="Date of Birth" class="form-control text-sm text-white font-white" />
                                        </InputContainer>
                                        {/* </div> */}

                                        {/* <div class="form-group text-sm"> */}
                                        {/* <label>Phone Number</label> */}
                                        <InputContainer className='mt-2'>
                                            <Input type="number" placeholder="Enter Phone Number" class="form-control text-sm" />
                                        </InputContainer>
                                        {/* </div> */}
                                    </InputContainer>
                                    <ButtonContainer>
                                        <Link to='/signin'><button class="rounded-full mt-1 text-lg font-serif border-4 border-blue-800 hover:text-white py-2 px-20 bg-[#1814ff] hover:animate-pulse">Register</button></Link>
                                        {/* <Button content="Sign Up" /> */}
                                    </ButtonContainer>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
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
background: rgba(255, 255, 255, 0.15);
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

// const LoginWith = styled.h5`
//   cursor: pointer;
// `;

// const HorizontalRule = styled.hr`
//   width: 90%;
//   height: 0.3rem;
//   border-radius: 0.8rem;
//   border: none;
//   background: linear-gradient(to right, #14163c 0%, #03217b 79%);
//   background-color: #ebd0d0;
//   margin: 1.5rem 0 1rem 0;
//   backdrop-filter: blur(25px);
// `;

// const ForgotPassword = styled.h4`
//   cursor: pointer;
// `;


export default SignUp