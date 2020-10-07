import React, {useEffect} from 'react';
import './App.css';

import Bubble from './components/Bubble';
import Insertion from './components/Insertion';
import Merge from './components/Merge';
import Quick from './components/Quick';
import Selection from './components/Selection';

// import './GSAPComponent.css';
import {gsap} from 'gsap';




function App() {

  const header = React.createRef();


useEffect(()=>{

gsap.to(header.current, {color:"#8c0",duration:2})


},[header])



  return (
    <div className="App" style={{display:"flex",flexDirection:"column", alignItems:"center"}}>

    <h1 ref={header}>
      HEllo all 
    </h1>
    <Insertion/>
   
    </div>
  );
}

export default App;
