import React, {useState, useEffect} from "react";
import axios from "axios"
import "./App.css";
// import DatesOptions from './comps/DateOptions.js'
import Header from './comps/Header.js'
import About from './comps/About.js'
import Image from './comps/Image.js'
import Date from './comps/DateDropdown/DateSelector.js'
function App() {
  const[data, setData] = useState({});
  useEffect(()=>{
  axios.get("https://api.nasa.gov/planetary/apod?api_key=Hazl0FJIBuk0P2EKP10s11GYecRfGejGLStOODxT")

  .then(res => {
    // console.log(res.data);
    setData(res.data)

  })
},[])
const [displayValue, setDisplayValue] = useState("0");
const openExplanation = (number) => {
  setDisplayValue(displayValue + number);
};
  return (
    <div className="App">
      <p>
        NASA Photos of the Day
      </p>
      <Date
          date = {data.date}
      />

      <Header
                title={data.title}


      />
      <Image
        url = {data.url}
      />
<About
          explanation = {data.explanation}
/>
    </div>
  );
}

export default App;
