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

        width:'70%',
        height:'70%',
        margin: "10px auto"
    },
  

    section:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-around"
        

    }
  
  }))


function ProfileImage(props) {
    const classes = useStyles();



  return (

    <Card onClick={event =>  window.location.href=`${props.user.html_url}`} className={classes.paper} style={{ border: "black", minWidth: "350px", minHeight: "350px", maxWidth: "350px",maxHeight:"350px",margin:"5px", backgroundColor: "cornsilk"}}>  


    <div className={classes.section}>


    <Avatar className = {classes.profileImage}  alt={`${props.user.login}`} src={props.user.avatar_url} />

    <h1 style={{marginBottom:"0",marginTop:"6px"}}>{props.user.name}</h1>
    <h3 style={{marginTop:"3px"}}>{props.user.bio}</h3>
  
    </div>
      
    </Card>

  );
}

export default ProfileImage;