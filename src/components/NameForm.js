import React, { useState, useRef, useEffect } from "react";
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
// import "./styles/app.scss";
//Import Components
import Player from "./Player";
import FullPlayer from "./FullPlayer";
import Song from "./Song";
import Library from "./Library";
import Nav from "./Nav";

//Import data
// import chillhop from "./data";
//Util
// import { playAudio } from "./util";

 import { render } from "@testing-library/react";
 import Button from "@material-ui/core/Button";

 
function Navigation() {
  return <nav>
    <Link to="/"></Link>
    <Link to="/player">Player</Link>
  </nav>
}
function NameForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailDirty, setEmailDirty] = useState(false)
  const [passwordDirty, setPasswordDirty] = useState(false)
  const [emailError, setEmailError] = useState("You haven't entered email")
  const [passwordError, setPasswordError] = useState("You haven't entered password")
  const [formValid, setFormValid] = useState(false)
  useEffect( () => {
     if(emailError || passwordError ) {
        setFormValid(false)
     } else {
      setFormValid(true)
     }
  }, [emailError, passwordError ])
  const emailHandler = (e) => {
    setEmail(e.target.value)
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError('Incorrect email(')
  } else {
      setEmailError('')
  }
  }

  const passwordHandler = (e) => {
    setPassword(e.target.value)
    if(e.target.value.length <= 4 ) {
      setPasswordError('Password should contain more than 3 symbols')
      if (!e.target.value) {
        setPasswordError('Password should contain more than 3 symbols') 
      }
    } else {
      setPasswordError('')
    }
  }
  

  const blurHandler = (e) => {
    switch (e.target.name) {
      case 'email':
        setEmailDirty(true)
        break
      case 'password':
        setPasswordDirty(true)
        break
      default:
    }
  }

//   class PlayerButton extends React.Component {
//      onClick () {
//       window.open('localhost:3000/player');
//     }
//   }
  
  return (
   
    <div className="NameForm">
             <form>
             <h1>Welcome to the Player!</h1>
          <h1>Authorization</h1>
          
          {(emailDirty && emailError) && <div style={{color:'red'}}>{emailError}</div>}
          <input onChange={e => emailHandler(e)} value={email} onBlur={e => blurHandler(e)} name='email' type="text" placeholder='Enter email' /><br />
          {(passwordError && passwordDirty) && <div style={{color:'red'}}>{passwordError}</div>}
          <input onChange={e => passwordHandler(e)} value={password} onBlur={e => blurHandler(e)} name='password' type="password" placeholder='Enter password' /><br />
          < button onClick={<FullPlayer/>} disabled={!formValid} type='submit'>Sign in </button>
         
 </form>
 </div>
  )
}


 
export default NameForm;
 
