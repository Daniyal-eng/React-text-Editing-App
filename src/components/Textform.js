
import React , {useState} from 'react';

export default function Textform(props) {
  const [text,setText] = useState('');

const handleUpChange=()=>{
    //uppercase wala button hai
    let newText =text.toUpperCase();
    console.log(newText) 
    setText(newText);
  console.log("Button clicked");
  props.showAlert('Text Converted to UpperCase','Success')
  
 
}

const handleLoChange=()=>{
  //uppercase wala button hai
  let newText =text.toLowerCase();
  console.log(newText) 
  setText(newText);
console.log("Button clicked");

props.showAlert('Text Converted to LowerCase','Success')
  
}

const clr=()=>{
  //uppercase wala button hai
 setText('')
 
props.showAlert('Text Cleared','Success')
;
}
const handleOnChange=(event)=>{

  console.log("Onchange occcurs");
  
  setText(event.target.value);
}
 
  // setText(text)
  return (
    <>
  <div className="container" style={{color: props.mode==='dark'?'#ebedef':'dark'}}>
  <h1 >{props.heading}</h1>
      <div className="my-2">
        <textarea
          className="form-control"
             value={text}
          onChange={handleOnChange}
          style={{ backgroundColor: props.mode==='dark'?'white':'grey', color:props.mode=== 'dark'?'white':'dark'}}
          id="mytxt"
          rows="8"
        ></textarea>
        <br></br>
        <button className="btn btn-secondary mx-3  my-2"
         style={{ backgroundColor: props.mode==='dark'?'white':'grey', color:props.mode=== 'dark'?'white':'dark'}}
            onClick={handleUpChange}
            id='btnUp'
        >
        Convert to UpperCase
      </button>
      <button className="btn btn-secondary my-2"
       style={{ backgroundColor: props.mode==='dark'?'white':'grey', color:props.mode=== 'dark'?'white':'dark'}}
            onClick={handleLoChange}
            id='btnlow'

        >
        Convert to LowerCase
      </button>
      <button className="btn btn-secondary mx-3 my-2"
       style={{ backgroundColor: props.mode==='dark'?'white':'grey', color:props.mode=== 'dark'?'white':'dark'}}
            onClick={clr}
            id='btnclr'

        >
      Clear text
      </button>
      </div>
        
          <h1>Text summary</h1>
          <p>{text.split(" ").filter((element)=>{return element.length!==0 }).length}  words and {text.length}  characters</p>
          <h1>Preview</h1>  
          <p>{text.length>0?text:'Enter something to '}</p>
  </div>
        
    </>
  );
}
