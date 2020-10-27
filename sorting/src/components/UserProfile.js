import React,{useState,useEffect} from 'react';
import Contributions from './Contributions'
import ProfileImage from './ProfileImage'
import ProfileInfo from './ProfileInfo'
import CommitActivity from './CommitActivity'
import Repos from './Repos'
import Following from './Following'
import TopUserLanguages from './TopUserLanguages'
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import GhPolyglot from 'gh-polyglot';




const useStyles = makeStyles(theme => ({
   

    main:{

        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",

    },
    middle:{

      display:"flex",
      flexDirection:"row",
      justifyContent:"center",
      alignItems:"center",
    },

    middlerowright:{
      display:"flex",
      flexDirection:"row",
      justifyContent:"center",
      alignItems:"center",
    }
  
  
  }))



function UserProfile(props) {
    const classes = useStyles();

let githubUserName = props.location.state.username;
const [user,setUser] = useState({})
const [languagesData,setLanguagesData] = useState([])


// https://api.github.com/users/tater/events


console.log(user,"user")
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


    <div className={classes.middle}>


                <div className={classes.main}>
                        <section> 

                            <TopUserLanguages username={githubUserName} user={user}  languagesData= {languagesData}/>
                              <Repos  username={githubUserName} user={user}/>

                        </section>
                </div>



                <div>

                      <section>
                        <CommitActivity  username={githubUserName} user={user} />
                        </section>

                      <div className = {classes.middlerowright}>
                      <section>
                            <ProfileImage username={githubUserName} user={user}/>
                            <ProfileInfo username={githubUserName} user={user} />
                        </section>


                        <section>
                            <Following username={githubUserName} user={user} />
                        </section >

                      </div>
                       

                </div>
                


      
      </div>





      <div classes = {classes.bottom}>
            <section className = {classes.profileImage}>
              <Contributions username={githubUserName} user={user}/>
            </section>
      </div>





 
  </div>
   



     
</>
  );
}

export default UserProfile;