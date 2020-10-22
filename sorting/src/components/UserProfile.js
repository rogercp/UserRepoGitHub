import React,{useState,useEffect} from 'react';
import Contributions from './Contributions'
import ProfileImage from './ProfileImage'
import ProfileInfo from './ProfileInfo'
import Following from './Following'
import TopUserLanguages from './TopUserLanguages'
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import GhPolyglot from 'gh-polyglot';




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
const [languagesData,setLanguagesData] = useState([])

useEffect(()=>{

    axios
    .get(`https://api.github.com/users/${githubUserName}`)
    .then((response) => {
      setUser(response.data);
    })

    .catch((err) => {
      console.log(err);
    });


    const me = new GhPolyglot(`${githubUserName}`);
    me.userStats((err, stats) => {
      if (err) {
        console.error('Error:', err);
      }
      setLanguagesData(stats);
    });



},[githubUserName])



  return (
<>
    <div className={classes.main}>
    
    <section className = {classes.profileImage}>
     <TopUserLanguages   languagesData={languagesData}  username={githubUserName} user={user}/>
 
     </section>

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