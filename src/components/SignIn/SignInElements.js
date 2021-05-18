import { Link } from 'react-router-dom';
import styled from 'styled-components';


export const LoginContainer = styled.div`
  color: #fff;
  background: #f9f9f9;
  overflow: none;

  @media screen and ( max-width: 768px ) {
      padding: 100px 0;
  }
`

export const LoginWrap = styled.div`
 display: grid;
 z-index: 1;
 height: 750px;
 width: 100%;
 max-width: 1100px;
 margin-right: auto;
 margin-left: auto;
 padding: 0 24px;
 justify-content: center;
`

export const LoginRow = styled.div`
  display: grid;
  grid-auto-columns: minmax( auto, 1fr);
  align-items: center;
  grid-template-areas: ${({imgStart}) => ( imgStart ? `'col2 col1'` : `'col1 col2'` )};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({imgStart}) => ( imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)}

  }
`

export const Column1 = styled.div`
 margin-bottom: 15px;
 padding: 0 15px 0 10px;
 border-radius: 10px;

 box-shadow: 11px 20px 28px -8px rgba(0,0,0,0.09);
-webkit-box-shadow: 11px 20px 28px -8px rgba(0,0,0,0.09);
-moz-box-shadow: 11px 20px 28px -8px rgba(0,0,0,0.09);
 grid-area: col1;

 @media screen and (max-width: 786px) {
    box-shadow: none;
 }
`

export const Column2 = styled.div`
 margin-bottom: 15px;
 padding: 0 15px;
 grid-area: col2;
`

export const TextWrapper = styled.div`
 max-width: 540px;
 padding-top: 0px;
 padding-bottom: 60px;
`

export const TopLine = styled.p`
  color: #000;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`

export const Heading = styled.h1`
 margin-bottom: 0px;
 font-size: 48px;
 line-height: 1.1;
 font-weight: 600;
 color: #000000;

 @media screen and (max-width: 480px) {
     font-size: 32px;
 }
`

export const Subtitle = styled.h1`
  
    margin-bottom: 24px;
    font-size: 32px;
    line-height: -1.1;
    font-weight: 600;
    color: #4d908e;

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`
export const Hint = styled.p`
   max-width: 440px;
   margin-bottom: 35px;
   font-size: 18px;
   line-height: 24px;
   color: #bdb9b9;
`

export const BtnWrap = styled.div`
 display: flex;
 justify-content: center;
`

export const ImgWrap = styled.div`
 max-width: 555px;
 height: 100%;
`

export const Img = styled.img`
 width: 100%;
 margin: 0 0 10px 0;
 padding-right: 0;
`
export const InputWrap = styled.div`
 /* display: flex; */
 /* justify-content: flex-start; */
`
export const InputLabel = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  color: #000;
  width:100%;

`
export const FormInput = styled.input`
 padding: 16px 16px;
 margin-bottom: 32px;
 border: none;
 background: none;
 border-bottom: 1px solid #bdb9b9;
 width: 100%;
 max-width: 100%;
 border-radius: 4px;
` 

export const FpWrap = styled.div`
 display: flex;
 justify-content: flex-end;
`
export const ForgotPasswordLink = styled.p`
 color: #000;
 margin-bottom: 8px;
`

export const WrapSignUpLink = styled.div`
 display: flex;
 justify-content: center;
 margin-top: 16px;

`

export const CreateAccount = styled.p`
  font-size: 14px;
  color: #000; 
  font-weight: 600;
 
`
export const Enrol = styled(Link)`
 color: #4d908e;
 cursor: pointer;
 /* text-decoration: underline; */
`

export const Form = styled.form`
 
`