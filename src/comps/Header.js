import React from 'react'
import styled from "styled-components"
const H2Element = styled.h2`
text-shadow: 0 0 3px #68B2F8, 0 0 5px #506EE5;

font-family: nasalization, sans-serif;

font-weight: 400;

font-style: normal;
  &:hover{
    opacity: 0.7;
  }
`
function Header(props){
  console.log(props);
  return (

    <H2Element>{props.title}</H2Element>

  );
}
export default Header
