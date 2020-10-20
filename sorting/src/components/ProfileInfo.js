import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import MyLocationIcon from '@material-ui/icons/MyLocation';
import EventIcon from '@material-ui/icons/Event';
import GitHubIcon from '@material-ui/icons/GitHub';
import ApartmentIcon from '@material-ui/icons/Apartment';
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

    },
    section:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-around"
        

    }
  
  }))


function ProfileInfo(props) {
    const classes = useStyles();



  return (

    <Card className={classes.paper} style={{ border: "black", maxWidth:"350px",maxHeight:"250px" }}>  


    <div className={classes.section}>

    <GitHubIcon onClick={event =>  window.location.href=`${props.user.html_url}`} style={{ position:"relative",borderRadius: "50%",fontSize:"50px" }} className={classes.margin} />
        
  
    </div>
        <section className={classes.section}>

        <div className={classes.subSection}>
        <MyLocationIcon  style={{ borderRadius: "50%" }} className={classes.margin} />
        <p>{props.user.location}</p>

        </div>
       
        <div>

        <EventIcon  style={{ borderRadius: "50%" }} className={classes.margin} />
        <p>Joined Github</p>
        <p>{new Date(props.user.created_at).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}</p>
        </div>
        

            </section>

    </Card>

  );
}

export default ProfileInfo;