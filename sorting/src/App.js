import React, {useEffect} from 'react';
import './App.css';
import UserLogin from './components/UserLogin';
import UserProfile from './components/UserProfile';
import Bubble from './components/Bubble';

import { Route, Switch } from 'react-router-dom';
import {gsap} from 'gsap';


function App() {

  const header = React.createRef();


useEffect(()=>{

gsap.to(header.current, {color:"ivory",duration:2})


},[header])



  return (
    <div className="App" style={{display:"flex",flexDirection:"column", alignItems:"center"}}>

   
    <Switch>
        <Route exact path='/' component={UserLogin} />
        <Route exact path='/profile/:id' component={UserProfile} />
    </Switch>

   
    </div>
    
  );
}

export default App;
