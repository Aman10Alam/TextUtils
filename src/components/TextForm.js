import { eventWrapper } from '@testing-library/user-event/dist/utils';
import React ,{useState} from 'react'

export default function TextForm(props) {

    const [text,setText] =useState('');
    const [count,setcount] = useState(0);
    const handleUpClick = ()=>{
        console.log("Uppercase was clicked");
        let newText=text.toUpperCase();
        setText(newText)
    }
    const handleonchange = (event)=>{
        console.log("On change");
        setText(event.target.value);
        // if(text=='' && text.length==0){
        //     setcount(0);
        //  }else{
        //     var c=text.split(" ").length;
        //     setcount(c);
        //  }
    }
    const handleLowClick = (event)=>{
        let newtext=text.toLocaleLowerCase();
        setText(newtext);
    }
    const cleartext =()=>{
        console.log("All text cleared");
        let newtext='';
        setText(newtext);
        //setcount(0);
    }
    const handlecopy =()=>{
        // console.log("Copying text");
        // var text=document.getElementById("mybox");
        // text.select();
        navigator.clipboard.writeText(text);
        document.getSelection().removeAllRanges();
        props.showAlert("Text has been copied","Success")
    }
   
  return (
    <> 
    <div className="container" style={{color: props.mode=='dark'?'white':'#065883'}}>
        <h1>{props.heading}</h1>
    <div className="mb-3">
    {/* <label for="mybox" class="form-label"></label> */}
    <textarea className="form-control" value={text} onChange={handleonchange } style={{backgroundColor: props.mode=='light'?'dark':'light'
     , color : props.mode=='dark'?'blue':'#065883'}} id="mybox" rows="8"></textarea>
    </div> 
    <button disabled={text.length==0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to uppercase</button>
    <button disabled={text.length==0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to lowercase</button>
    <button disabled={text.length==0} className="btn btn-primary mx-1 my-1" onClick={cleartext}> Clear All</button>
    <button disabled={text.length==0} className='btn btn-primary mx-1 my-1' onClick={handlecopy}>Copy Text</button>
        </div>
        <div className="container my-2" style={{color: props.mode=='dark'?'white':'#065883'}}>
            <h2>Your Text Summary </h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes to read </p>
            <h2>Priview</h2>
            <p>{text.length>0?text:"No text"}</p>
    </div>
    
    </>
  )
}
