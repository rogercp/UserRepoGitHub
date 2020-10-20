import React, { useEffect,useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import MyLocationIcon from '@material-ui/icons/MyLocation';
import EventIcon from '@material-ui/icons/Event';
import GitHubIcon from '@material-ui/icons/GitHub';
import ApartmentIcon from '@material-ui/icons/Apartment';
import FollowCard from './FollowCard'
import axios from 'axios';


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


function Following(props) {
    const classes = useStyles();

    const [following,setFollowing] = useState([])


    useEffect(()=>{

        axios
        .get(`https://api.github.com/users/${props.username}/following`)
        .then((response) => {
            setFollowing(response.data);
        })
    
        .catch((err) => {
          console.log(err);
        });



    },[])

    console.log(following)

  return (

    <Card className={classes.paper} style={{ border: "black", maxWidth:"350px",maxHeight:"550px",overflowY:"scroll"}}>  

    <h2>Following</h2>
    {following.map((follow)=>{

        return (
            <>
            <FollowCard follow = {follow}/>
            </>
        )

    })}
   

    </Card>

  );
}

export default Following;