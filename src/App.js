import React, {useState, useEffect} from "react";
import axios from "axios"
import "./App.css";
import Header from './comps/Header.js'
// import About from './comps/About.js'
// import Image from './comps/Image.js'
function App() {
  const[data, setData] = useState({});
  useEffect(()=>{
  axios.get("https://api.nasa.gov/planetary/apod?api_key=Hazl0FJIBuk0P2EKP10s11GYecRfGejGLStOODxT")
  .then(res => {
    console.log(res.data);
    setData(res.data)

  })
},[])
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
      <Header
                title={data.title}
                url = {data.url}
                explanation = {data.explanation}
      />

    </div>
  );
}

export default App;
