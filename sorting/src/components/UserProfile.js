import React,{useState,useEffect} from 'react';
import Contributions from './Contributions'
import ProfileImage from './ProfileImage'
import ProfileInfo from './ProfileInfo'
import Following from './Following'


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
    
    <section>

    <ProfileImage username={githubUserName} user={user}/>
   <ProfileInfo username={githubUserName} user={user} />
    </section>
    
<section>

<Following username={githubUserName} user={user} />
    </section>
 
   <section>
   <Contributions username={githubUserName} user={user}/>

</section>


    </div>

  );
}

export default UserProfile;