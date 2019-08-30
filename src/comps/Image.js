import React from 'react'
import styled from "styled-components"

const ImageSpan = styled.span`
text-align:center;

`

const ImageOday = styled.img`
border-radius: 25px;
box-shadow: 5px 5px 17px 4px #651F71;
width: 90%;
&:hover{
  opacity: .5;
}
  }
  animation-name: imageSlide;
  animation-duration: 7s;
    }
    @keyframes imageSlide {
    from {margin-left: -800px;
    opacity: 0}
    to {}
  }
`


function Image (props){
  console.log(props);
  return (

  <span onClick={()=> props.openExplanation(props.explanation)}>
About this photo
   <ImageOday src={props.url}/>
   </span>
  );
}
export default Image
