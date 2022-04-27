//import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';

function App() {
  return (
    <>
   <Navbar title="Textify" about="About us"/>
    <div className="container my-4">

        <About/>
        {/* <Textform heading ="Enter your text" /> */}
            
    </div>
    {/* <figure class="figure">
  <img src="https://counter-strike16.eu/wp-content/uploads/2018/02/counter-strike-1-6-warzone-21.jpg" className="figure-img img-fluid rounded" alt="CS GO"/>
  <figcaption class="figure-caption">Counter Strike 1.6</figcaption>
</figure> */}
  
  </>
  )}

export default App;

