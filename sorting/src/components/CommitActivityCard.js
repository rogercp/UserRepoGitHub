import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle';
import NoteIcon from '@material-ui/icons/Note';
 import AddBoxIcon from '@material-ui/icons/AddBox';
import NewReleases from '@material-ui/icons/NewReleases';

const useStyles = makeStyles(theme => ({
   
    paper: {
      height: '100%',
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(0, 0, 0),
      outline: 'none',
      margin: '1%',
      display:"flex",
      flexDirection:'column',
      justifyContent: "center",
      alignItems: "center",
      boxShadow: "0 16px 19px rgba(0,0,0,0.2), 0 15px 15px rgba(0,0,0,0.2)",
      '&:hover': {
        boxShadow: "0 2px 4px rgba(0,0,0,0.25), 0 2px 2px rgba(0,0,0,0.22)"
      },
      [theme.breakpoints.down('md')]: {
        width: '100%',
        height: '100%',
      },
      [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(0, 0, 0),
        width: '100%',
        height: '100%',
      },
    },

    profileImage:{

        width:'40%',
        height:'40%',
        margin: "5px auto"
    },
  

    section:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-around"
        

    }
  
  }))


function CommitActivityCard(props) {
    
    const classes = useStyles();

  
      const project = () => {
        console.log(props.feedie.type,"type")

        switch(props.feedie.type) {
          case "PushEvent":   
          return (

              <div  onClick={event =>  window.location.href=`${props.feedie.payload.commits[0].url}`} style={{width:'100%',display:'flex',flexDirection:"row",alignItems:'left',justifyContent:'left'}}>
              <section style={{width:"20%"}}>
              <NoteIcon/>
              </section>

              <div style={{width:"60%",display:'flex',flexDirection:'column'}}>

              <section style={{display:'flex',flexDirection:'row',alignItems:"center",justifyContent:'center'}}>
              <h4>Push to:</h4>
              <h5>{props.feedie.repo.name}</h5>
              </section>

              <section style={{display:'flex',flexDirection:'row',alignItems:"center",justifyContent:'center'}}>
              <h4>Commit Message:</h4>
              <h5> {props.feedie.payload.commits[0].message} </h5>
              </section>
              </div>
             
  


  
              <section style={{width:"20%"}}>
         
         <h6>{new Date(props.feedie.created_at).toLocaleDateString('en-US', {
               month: 'long',
               day: 'numeric',
               year: 'numeric',
             })}</h6>
         </section>
            </div>

          );
          case "PullRequestEvent":   
          return (
          <div  onClick={event => window.location.href=`${props.feedie.payload.commits[0].url}`}  style={{width:'100%',display:'flex',flexDirection:"row",margin:"4%"}}>
          <section>
          <ArrowDropDownCircleIcon/>
          </section>
          <section>
          <h5>Pull Request from:</h5>
          </section>
          <section>
          <p>HGEllo</p>
          </section>




          <section style={{width:"20%"}}>
         
         <h6>{new Date(props.feedie.created_at).toLocaleDateString('en-US', {
               month: 'long',
               day: 'numeric',
               year: 'numeric',
             })}</h6>
         </section>
            </div>

          );
          case "PullRequestReviewEvent ": 
          return(
          <div  onClick={event => window.location.href=`${props.feedie.payload.commits[0].url}`}  style={{width:'100%',display:'flex',flexDirection:"row",margin:"4%"}}>
            <section>
          <NewReleases/>
          </section>
          <section>
          <h5>Pull Request Review:</h5>
          </section>
          <section>
          <p>HGEllo</p>
          </section>




          <section style={{width:"20%"}}>
         
         <h6>{new Date(props.feedie.created_at).toLocaleDateString('en-US', {
               month: 'long',
               day: 'numeric',
               year: 'numeric',
             })}</h6>
         </section>
            </div>

          );
          case "CreateEvent":  
          return (
           <div  onClick={event => window.location.href=`${props.feedie.payload.commits[0].url}`} style={{width:'100%',display:'flex',flexDirection:"row",margin:"4%"}}>
             <section>
          <AddBoxIcon/>
          </section>
          <section>
          <h5>Repo Created:</h5>
          <p>{props.feedie.repo.name}</p>
          </section>
          <section>
         <p>{props.feedie.payload.description}</p>
          </section>




          <section style={{width:"20%"}}>
         
         <h6>{new Date(props.feedie.created_at).toLocaleDateString('en-US', {
               month: 'long',
               day: 'numeric',
               year: 'numeric',
             })}</h6>
         </section>
            </div>

          );
  
          default:      
          return (
            <div style={{width:'100%',display:'flex',flexDirection:"row",margin:"4%"}}>
             
            </div>


          )
        }
      }

    



  return (

  <>
    {/* <Card className={classes.paper} style={{ backgroundColor:"mintcream", maxWidth: "95%",margin:"10px"}} >   */}


      { project() }
      
    {/* </Card> */}

   


  </>
  );
}

export default CommitActivityCard;