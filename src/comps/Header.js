import React from 'react'
function Header(props){
  console.log(props);
  return (
    <div>
    <h2>{props.title}</h2>
    <img src={props.url}/>
    <p>
    {props.explanation}
    </p>
    </div>
  );
}
export default Header
