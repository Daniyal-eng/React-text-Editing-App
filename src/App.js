//import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import About from "./components/About";
import { useState } from "react";
import Alert from "./components/Alert";
//import { BrowserRouter, Routes, Route, Router } from "react-router-dom";

function App() {
  const [Mode, setMode] = useState("dark");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setInterval(() => {
      setAlert(null);
    }, 3000);
  };
 const RemoveClasses =()=>{
   document.body.classList.remove('bg-light')
   document.body.classList.remove('bg-secondary')
   document.body.classList.remove('bg-success')
   document.body.classList.remove('bg-danger')
   document.body.classList.remove('bg-warning')
   document.body.classList.remove('bg-info')

 }
  const toggleMode = (cls) => {
    RemoveClasses();
    document.body.classList.add('bg-'+cls);
    if (Mode === "secondary") {
     // setMode("dark");
      document.body.style.backgroundColor = "rgb(73, 70, 70)";
      document.getElementById("lbID").innerHTML = "Enable light Mode";
      showAlert("Mode has been changed", "Success");
      document.title = "Dark Mode_Enabled";
     
    
     
      let btn_Update = document.getElementById("btnUp");
      let btn_low = document.getElementById("btnlow");
      let btn_clr = document.getElementById("btnclr");
      btn_Update.style.backgroundColor = "bg-primary";
      btn_Update.style.color = "rgb(240, 248, 255)";
      btn_low.style.backgroundColor = "#6c757d";
      btn_low.style.color = "rgb(240, 248, 255)";
      btn_clr.style.backgroundColor = "#6c757d";
      btn_clr.style.color = "rgb(240, 248, 255)";
    } else {



      setMode("light");
      document.body.style.backgroundColor = "#d0d7d1";
      document.getElementById("lbID").innerHTML = "Enable Dark Mode";
      showAlert("Light Mode Enabled", "Success");
      document.title = "light Mode_Enabled";
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
      // let btn_Update = document.getElementById("btnUp");
      // let btn_low = document.getElementById("btnlow");
      // let btn_clr = document.getElementById("btnclr");
      // btn_Update.style.backgroundColor = "#01d1a6";
      // btn_Update.style.color = "#026370";
      // btn_low.style.backgroundColor = "#01d1a6";
      // btn_low.style.color = "#026370";
      // btn_clr.style.backgroundColor = "#01d1a6";
      // btn_clr.style.color = "#026370";
    }
  };

  return (
    <>
      
        <Navbar
          title="Textify"
          about="About us"
          mode={Mode}
          toggleMode={toggleMode}/>
        <Alert alert={alert} />

    
          {/* <About /> */}
         

          
            <Textform heading="Enter your text" showAlert={showAlert}/>
          

      {/* <figure class="figure">
  <img src="https:  //counter-strike16.eu/wp-content/uploads/2018/02/counter-strike-1-6-warzone-21.jpg" className="figure-img img-fluid rounded" alt="CS GO"/>
  <figcaption class="figure-caption">Counter Strike 1.6</figcaption>
</figure> */}
    </>
  );
}

export default App;
