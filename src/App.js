//import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import About from "./components/About";
import { useState } from "react";
import Alert from "./components/Alert";

function App() {
  const [Mode, setMode] = useState("dark");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setInterval(() => {
      setAlert(null)
    }, 1500);
  };

  const toggleMode = () => {
    if (Mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#2e2b01";
      document.getElementById("lbID").innerHTML = "Enable light Mode";
      showAlert("Dark Mode Enabled", "Success");
    } 
    
       else {
      setMode("light");
      document.body.style.backgroundColor = "grey";
      document.getElementById("lbID").innerHTML = "Enable Dark Mode";
      showAlert("Light Mode Enabled", "Success");
    }
  };

  return (
    <>
      <Navbar
        title="Textify"
        about="About us"
        mode={Mode}
        toggleMode={toggleMode}
        
      />
         <Alert alert={alert} />
      <div className="container my-4">
        <Textform heading="Enter your text" showAlert={showAlert} />
        {/* <About/> */}
      </div>
      {/* <figure class="figure">
  <img src="https://counter-strike16.eu/wp-content/uploads/2018/02/counter-strike-1-6-warzone-21.jpg" className="figure-img img-fluid rounded" alt="CS GO"/>
  <figcaption class="figure-caption">Counter Strike 1.6</figcaption>
</figure> */}
    </>
  );
}

export default App;
