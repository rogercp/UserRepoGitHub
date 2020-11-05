import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';


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


function FollowCard(props) {
    const classes = useStyles();



  return (
    <Card className={classes.paper} style={{ backgroundColor:"mintcream",border: "black",  maxWidth: "95%",maxHeight:"200px",margin:"10px"}}  onClick={event =>  window.location.href=`${props.follow.html_url}`}>  

    <div className={classes.section}>

    <Avatar className = {classes.profileImage}  alt={`${props.login}`} src={props.follow.avatar_url} />

    <h5>{props.follow.login}</h5>
  
    </div>
      
    </Card>

  );
}

export default FollowCard;