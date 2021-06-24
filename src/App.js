import React, {useState} from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/styles.css'
import {Button } from 'react-bootstrap'
import Waiting from "./components/Wating"



const App = () =>   {
  const [waiting, setWaiting] = useState()
 setWaiting(Waiting)
 debugger; 
 const handlesubmit = () => (
   setWaiting(!waiting)
 )
  return(
    <>
    
    <Button className = "mx-5 my-5" onClick={{}}> Submit </Button>
    {waiting && <Waiting />}
    </>
  
)
  }
export default App