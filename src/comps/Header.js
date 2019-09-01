import React from 'react'
import styled from "styled-components"
const H2Element = styled.h2`


font-family: nasalization, sans-serif;

font-weight: 400;

text-shadow: 0 0 3px #68B2F8, 0 0 5px #506EE5;
font-style: normal;

  animation-name: textShadow;
  animation-duration: 4s;
    }
    @keyframes textShadow {
    from {text-shadow: -40px -40px 20px #7037CD;}
    to {)}
`
function Header(props){
  console.log(props);
  return (

    <H2Element>{props.title}</H2Element>

  );
}
export default Header
