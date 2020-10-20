import React,{useState,useEffect} from 'react';
import Contributions from './Contributions'
import ProfileImage from './ProfileImage'
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';


function UserProfile(props) {

let githubUserName = props.location.state.username;
const [user,setUser] = useState({})


useEffect(()=>{

    axios
    .get(`https://api.github.com/users/${githubUserName}`)
    .then((response) => {
      setUser(response.data);
    })

    .catch((err) => {
      console.log(err);
    });

},[githubUserName])



console.log(user,"user")

  return (

    <div className='userProfile'>
    
   <Contributions username={githubUserName} user={user}/>
    <ProfileImage user={user}/>
    <p>{githubUserName}</p>


    </div>

  );
}

export default UserProfile;