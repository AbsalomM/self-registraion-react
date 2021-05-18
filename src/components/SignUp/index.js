import React, {useState} from 'react'
import { 
    EnrolContainer,
    EnrolWrap,
    EnrolRow,
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
    FormInput,
    WrapSignUpLink,
    TermsAndConditions,
    LinkTo,
    LinkToTerms,
    WrapPolicy,
    Form
 } from './SignupElements';

 import { Button } from '../Button';
 import imgs from '../../images/enrol.svg';
 import {DocumentReaderApi, TextFieldType, GraphicFieldType} from '@regulaforensics/document-reader-webclient';

const Enrollment = ({imgStart, alt}) => {
 
   const [idinput, setIdInput] = useState('');
   const [emailInput, setEmailInput] = useState('');


   const handleSubmit = (e) => {
     e.preventDefault();
     const userData = { idinput, emailInput};
     console.log(userData);
   }

    return (
        <>

    <EnrolContainer>
             <EnrolWrap>
                 <EnrolRow imgStart = {imgStart}>
                  
                     <Column1>
                     
                       <TextWrapper>
                           <TopLine> Enroll To Get Started </TopLine>
                           <Heading> Waymark </Heading>
                           <Subtitle> Bio Enrollment </Subtitle>
                           <Hint> Please ENTER the details below to create a new account </Hint>

                         <Form>                           
                         <InputWrap>
                              <FormInput type='text' name={idinput} placeholder="ID Number/Password" onChange={(e) => setIdInput(e.target.value)}  />
                              <FormInput type='text' name={emailInput} placeholder="Email Address"  onChange={(e) => setEmailInput(e.target.value)}  />

                           </InputWrap>

                           <BtnWrap>
                               <Button  to="/dummy">
                                  NEXT
                               </Button>
                           </BtnWrap>

                           </Form>

                           <WrapSignUpLink>
                              <LinkTo to="/signin"> Already have an account? </LinkTo>
                            </WrapSignUpLink>

                           <WrapPolicy>
                              <TermsAndConditions>
                                  By creating an account, you are agreeing to our <LinkToTerms to="/signup"> Terms and Conditions </LinkToTerms>
                                </TermsAndConditions>
                           </WrapPolicy>
                       </TextWrapper>
                     </Column1>

                     <Column2>
                      <ImgWrap>
                        <Img src={imgs} alt={alt} />
                      </ImgWrap>
                     </Column2>
                 </EnrolRow>
             </EnrolWrap>
          </EnrolContainer> 
            
        </>
    )
}

export default Enrollment
