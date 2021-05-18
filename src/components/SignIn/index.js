import React from 'react'
import { 
    LoginContainer,
    LoginWrap,
    LoginRow,
    Column1,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    BtnWrap,
    Column2,
    ImgWrap,
    Img,
    Hint,
    InputWrap,
    InputLabel,
    FormInput,
    ForgotPasswordLink,
    FpWrap,
    WrapSignUpLink,
    CreateAccount,
    Enrol,
    Form
 } from './SignInElements'

 import { Button } from '../Button';
 import imgs from '../../images/secure_login.svg';


const Login = ({imgStart, alt}) => {
    return (
        <>

        <LoginContainer>
             <LoginWrap>
                 <LoginRow imgStart = {!imgStart}>
                     <Column1>
                       <TextWrapper>
                           <TopLine> Welcome to </TopLine>
                           <Heading> Waymark </Heading>
                           <Subtitle> Bio Enrollment </Subtitle>
                           <Hint> Login with your ID No or passport No </Hint>

                         <Form action = '#' >                           <InputWrap>
                             <InputLabel htmlFor='for'>ID Number/Password</InputLabel>
                             <FormInput type='text' required />

                            <FpWrap>
                             <ForgotPasswordLink> Forgot password? </ForgotPasswordLink>
                             </FpWrap>
                           </InputWrap>

                           <BtnWrap>
                               <Button to='signin'>
                                  SIGN IN
                               </Button>
                           </BtnWrap>

                           </Form>

                           <WrapSignUpLink>
                             <CreateAccount> Don't have an account? <Enrol to="signup"> Enrol </Enrol> </CreateAccount>
                            </WrapSignUpLink>
                       </TextWrapper>
                     </Column1>

                     <Column2>
                      <ImgWrap>
                        <Img src={imgs} alt={alt} />
                      </ImgWrap>
                     </Column2>
                 </LoginRow>
             </LoginWrap>
          </LoginContainer> 
            
        </>
    )
}

export default Login
