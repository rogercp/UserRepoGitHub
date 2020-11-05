import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import MyLocationIcon from '@material-ui/icons/MyLocation';
import EventIcon from '@material-ui/icons/Event';
import '../App.css';

const useStyles = makeStyles(theme => ({
   
    paper: {
      height: '100%',
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(0, 0, 0),
      outline: 'none',
      margin: '1%',
      display:"block",
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

        width:'50%',
        height:'50%',
        margin: "5px auto"
    },
  
    subSection:{

        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        margin:"10px"

    },
    section:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-around",
        marginTop:"10px",
        marginBottom:"5px"
    },

    smallPaper:{
        height: '100%',
        backgroundColor: "mintcream",
        boxShadow: theme.shadows[5],
        padding: theme.spacing(0, 0, 0),
        outline: 'none',
        width:'30%',
        margin: '1%',
        display:"block",
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

    }
  
  }))


function ProfileInfo(props) {
    const classes = useStyles();



  return (

    <Card className={classes.paper} style={{ border: "black", maxWidth:"350px",maxHeight:"250px",margin:"5px",backgroundColor: "#f2e2ba" }}>  


    {/* <div className={classes.section}>

    <GitHubIcon onClick={event =>  window.location.href=`${props.user.html_url}`} style={{ position:"relative",borderRadius: "50%",fontSize:"50px" }} className={classes.margin} />
        
  
    </div> */}

    <section className={classes.section}>


    <div className={classes.subSection}>
        <MyLocationIcon  style={{ borderRadius: "50%" }} className={classes.margin} />
        <h6>{props.user.location}</h6>

        </div>
       
        <div>

        <EventIcon  style={{ borderRadius: "50%" }} className={classes.margin} />
        <h6>Joined Github</h6>
        <h6>{new Date(props.user.created_at).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}</h6>
        </div>
    </section>

  
        <section className={classes.section}>


        <Card onClick={event =>  window.location.href=`https://github.com/${props.username}?tab=followers`} className={classes.smallPaper}>
        <div className={classes.subSection}>
        <h4>{props.user.followers}</h4>
        <h6>Followers</h6>
        </div>

    </Card>
    <Card onClick={event =>  window.location.href=`https://github.com/${props.username}?tab=following`} className={classes.smallPaper}>

        <div className={classes.subSection}>
        <h4>{props.user.following}</h4>
        <h6>Following</h6>
        </div>
        </Card>
    <Card onClick={event =>  window.location.href=`https://github.com/${props.username}?tab=repositories`} className={classes.smallPaper}>

        <div className={classes.subSection}>
        <h4>{props.user.public_repos}</h4>
        <h6>Repos</h6>
        </div>
        </Card>

        

            </section>

    </Card>

  );
}

export default ProfileInfo;