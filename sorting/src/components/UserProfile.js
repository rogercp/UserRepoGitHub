import React,{useState,useEffect} from 'react';
import Contributions from './Contributions'
import ProfileImage from './ProfileImage'
import ProfileInfo from './ProfileInfo'
import Following from './Following'
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';




const useStyles = makeStyles(theme => ({
   

    main:{

        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",

    },
    sectionLeft:{
       

    },
    sectionRight:{


    }
  
  
  }))



function UserProfile(props) {
    const classes = useStyles();

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
<>
    <div className={classes.main}>
    
    <section className = {classes.sectionLeft}>

    <ProfileImage username={githubUserName} user={user}/>
   <ProfileInfo username={githubUserName} user={user} />
    </section>
    
    <section className = {classes.sectionRight}>

    <Following username={githubUserName} user={user} />
        </section >
    

    </div>
     <section className = {classes.profileImage}>
     <Contributions username={githubUserName} user={user}/>
 
     </section>
</>
  );
}

export default UserProfile;