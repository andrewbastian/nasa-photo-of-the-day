import React from 'react'
import styled from "styled-components"
const AboutPic = styled.p`
width: 85%;
height: 0;
animation-name: textShadow;
animation-duration: 4s;
  }
  @keyframes textShadow {
  from {text-shadow: -40px -40px 20px #7037CD;}
  to {-3px 5px 2px rgba(206,89,55,0.95)}
}
`



function About (props){
  console.log(props);
  return (
    <AboutPic className ="explanation" >
    {props.explanation}
    </AboutPic>
  );
}
export default About
