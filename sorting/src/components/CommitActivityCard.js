import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
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

  useEffect(()=>{


    
  })
      const project = () => {

          console.log(props.feedie.type,"count")

        switch(props.feedie.type) {
          case "PushEvent":   
          return (

              <>
              <div  onClick={event =>  window.location.href=`${props.feedie.payload.commits[0].url}`} style={{width:'100%',display:'flex',flexDirection:"row"}}>
              <section style={{width:"20%"}}>
              <NoteIcon/>
              </section>

              <div style={{width:"60%",display:'flex',flexDirection:'column',alignItems:'flex-start',justifyContent:"flex-start"}}>

              <section style={{display:'flex',flexDirection:'row',alignItems:"center",justifyContent:'center'}}>
              <h4>Push to: </h4>
              <p>{props.feedie.repo.name}</p>
              </section>

              <section style={{display:'flex',flexDirection:'row',alignItems:"center",justifyContent:'center'}}>
              <h4>Commit Message: </h4>
              <p> {props.feedie.payload.commits[0].message} </p>
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
              <hr style={{width:"100%"}}></hr>

              </>
             
          );
          case "PullRequestEvent":   
          return (
            <>
          <div onClick={event => window.location.href=`${props.feedie.payload.commits[0].url}`}  style={{width:'100%',display:'flex',flexDirection:"row"}}>
          <section>
          <ArrowDropDownCircleIcon/>
          </section>

          <div style={{width:"60%",display:'flex',flexDirection:'column',alignItems:'flex-start',justifyContent:"flex-start"}}>
          <section style={{display:'flex',flexDirection:'row',alignItems:"center",justifyContent:'center'}}>
          
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

<hr style={{width:"100%"}}></hr>

</>
          );
          case "PullRequestReviewEvent ": 
          return(
            <>
          <div  onClick={event => window.location.href=`${props.feedie.payload.commits[0].url}`}  style={{width:'100%',display:'flex',flexDirection:"row"}}>
            <section style={{width:"20%"}}>
          <NewReleases/>
          </section>

          <div style={{width:"60%",display:'flex',flexDirection:'column',alignItems:'flex-start',justifyContent:"flex-start"}}>

          <section style={{display:'flex',flexDirection:'row',alignItems:"center",justifyContent:'center'}}>
         
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

            <hr style={{width:"100%"}}></hr>

          </>
          );
          case "CreateEvent":  
          return (
            <>
           <div  onClick={event => window.location.href=`${props.feedie.payload.commits[0].url}`} style={{width:'100%',display:'flex',flexDirection:"row",alignItems:'left',justifyContent:'left'}}>
             <section style={{width:"20%"}}>
          <AddBoxIcon/>
          </section>
          <div style={{width:"60%",display:'flex',flexDirection:'column',alignItems:'flex-start',justifyContent:"flex-start"}}>

          <section style={{display:'flex',flexDirection:'row',alignItems:"center",justifyContent:'center'}}>
          <h4>Repo Created:</h4>
          <p>{props.feedie.repo.name}</p>
          </section>
          <section style={{display:'flex',flexDirection:'row',alignItems:"center",justifyContent:'center'}}>
          <h4>Description:</h4>
         <p>{props.feedie.payload.description}</p>
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

            <hr style={{width:"100%"}}></hr>

            </>
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
{/*       
    </Card> */}

   


  </>
  );
}

export default CommitActivityCard;