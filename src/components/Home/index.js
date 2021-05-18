import React, {useState}  from 'react';
import { 
    LandingContainer,
    LandingWrap,
    LandingRow,
    Column1,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    BtnWrap,
    Column2,
    ImgWrap,
    Img,
    ArrowForward,
    ArrowRight
 } from './HomeElements'

 import { Button } from '../Button';
 import imgs from '../../images/getstarted.svg';

const GettingStarted = ( {imgStart, img, alt} ) => {

    const [hover, setHover] = useState(false);
    const onHover = () => {
        setHover(!hover)
    };

    return (
        <>
           <LandingContainer>
             <LandingWrap>
                 <LandingRow imgStart = {imgStart}>
                     <Column1>
                       <TextWrapper>
                           <TopLine>Chores are done hassle-free </TopLine>
                           <Heading>Fast and Secure </Heading>
                           <Subtitle> Your data, our protection </Subtitle>

                           <BtnWrap>
                               <Button to='signin' onMouseEnter = {onHover} onMouseLeave = {onHover}>
                                  Get Started  {hover ? <ArrowForward /> : <ArrowRight />}
                               </Button>
                           </BtnWrap>
                       </TextWrapper>
                     </Column1>

                     <Column2>
                      <ImgWrap>
                        <Img src={imgs} alt={alt} />
                      </ImgWrap>
                     </Column2>
                 </LandingRow>
             </LandingWrap>
          </LandingContainer> 
        </>
    )
}

export default GettingStarted
