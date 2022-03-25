import React from "react";
import styled, { keyframes } from "styled-components";

const kf = keyframes`
from {
    transform: rotate(0deg);
  }
  to {
    
    transform: rotate(360deg);
  }
`;

const NasaWrapper = styled.div`
    background-color: #ADD8E6;
    
    animation: ${kf} 2s linear 1;
    
`
const Newh1 = styled.h1`
&:hover {
    background-color: red;
    
}
`



    
const NasaPhoto = (props) => {
    return (
        <NasaWrapper className='nasa-photo-wrapper'>
            <Newh1>{props.photo.title}</Newh1>
            <p>{props.photo.date}</p>
            <img src={props.photo.hdurl}/>
        <p className="explanation">{props.photo.explanation}</p>
        </NasaWrapper>
    )
}
export default NasaPhoto;