
// import Options from './comps/DateDropdown/DateOptions.js'
import React from 'react'
// import styled from "styled-components"
// const DateSelect = styled.select`
// /* width: 85%;
// height: 0;
// animation-name: textShadow;
// animation-duration: 4s; */
//   }
//   @keyframes textShadow {
//   from {text-shadow: -40px -40px 20px #7037CD;}
//   to {-3px 5px 2px rgba(206,89,55,0.95)}
// }
// `



const Date = (props)=>{
  // console.log(props);
  return (
//     <select>
// {props.dateOption.value}
//     </select>
<select>
  <option value="1">Volvo</option>
  <option value="2">Saab</option>
  <option value="3">Opel</option>
  <option value="4">Audi</option>
</select>
  );
}
export default Date
