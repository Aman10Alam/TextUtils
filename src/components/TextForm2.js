import { eventWrapper } from '@testing-library/user-event/dist/utils';
import React ,{useState} from 'react'

export default function TextForm(props) {
    const [text,setText] =useState('');
    const handleUpClick = ()=>{
        console.log("Uppercase was clicked");
        let newText=text.toUpperCase();
        setText(newText)
    }
    const handleonchange = (event)=>{
        console.log("On change");
        setText(event.target.value);
    }
    const handleLowClick = (event)=>{
        let newtext=text.toLocaleLowerCase();
        setText(newtext);
    }
    const cleartext =()=>{
        console.log("All text cleared");
        let newtext='';
        setText(newtext);
    }
    const handlecopy =()=>{
        console.log("Copying text");
        var text=document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text has been copied","Success")
    }
  return (
    <>
        <div className="container" style={{color: props.mode=='dark'?'white':'#065883'}}>
        <h1>{props.heading}</h1>
    <div className="mb-3">
    {/* <label for="mybox" class="form-label"></label> */}
    <textarea className="form-control" value={text} onChange={handleonchange} style={{backgroundColor: props.mode=='light'?'dark':'light'
     , color : props.mode=='dark'?'blue':'#065883'}} id="mybox" rows="8"></textarea>
    </div> 
    <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to uppercase</button>
    <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to lowercase</button>
    <button className="btn btn-primary mx-1" onClick={cleartext}> Clear All</button>
    <button className='btn btn-primary mx-1' onClick={handlecopy}>Copy Text</button>
        </div>
        <div className="container my-2" style={{color: props.mode=='dark'?'white':'#065883'}}>
            <h2>Your Text Summary </h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} minutes to read </p>
            <h2>Priview</h2>
            <p>{text.length>0?text:"No text"}</p>
    </div>

    </>
  )
}
