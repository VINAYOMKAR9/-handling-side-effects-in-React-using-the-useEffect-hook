import logo from './logo.svg';
import './App.css';
import Fdata from './Components/Fdata';
import { useState } from 'react';

function App() {
 const [show,setShow]= useState(false)

  return (
    <div className="App">
      <button onClick={()=>setShow((pr)=>!pr)}>{show? 'show' : 'Hide'}</button>
     {show && <Fdata/>}
    </div>
  );
}

export default App;
