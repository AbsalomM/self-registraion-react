import React from 'react'
// import Slider from "react-slick";
import { innerWrap,textP, Wrapper } from './dummyElements'

const Dummy = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
        <>
        <Wrapper>
          <innerWrap>
              <textP>asd</textP>
          </innerWrap>
        </Wrapper>

        </>
    )
}

export default Dummy
