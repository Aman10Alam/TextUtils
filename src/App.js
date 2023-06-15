import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React,{useState} from 'react';
import Alert from './components/Alert';
import {
  createBrowserRouter,
  BrowserRouter as Router,
  Routes,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

let name="AMAN"
function App() {
  const [mode,setmode] = useState('light');//Whether dark mode enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type)=>{
      setAlert({
        msg  : message,
        type : type

      })
      setTimeout(()=>{
        setAlert(null);
      },1500)
  }
  const removeBodyClasses =()=>{
     document.body.classList.remove('bg-light')
     document.body.classList.remove('bg-dark')
     document.body.classList.remove('bg-success')
     document.body.classList.remove('bg-primary')
     
  }
  const toggleMode = (cls)=>{
    removeBodyClasses();
    console.log(cls)
    document.body.classList.add('bg-'+cls)
     if(mode == 'light' ){
       setmode('dark');
       document.body.style.backgroundColor = '#065883';
       showAlert("Drak mode has been enabled","Success")
     }else {
       setmode('light');
       document.body.style.backgroundColor = 'white';
       showAlert("Light mode has been enabled","Success")
     }
  }
  return (
    <>
    <Router>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    {/* <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/> */}
    <Routes>
        <Route exact path="/about" element={<About mode={mode}/>}/>
        <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>}/>
          
    </Routes>
    </div>
    </Router>
    </>  
    
  );
}

export default App;
