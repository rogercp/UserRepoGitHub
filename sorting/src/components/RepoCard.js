import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Star from '@material-ui/icons/Star';
import AccountTreeIcon from '@material-ui/icons/AccountTree';

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
        flexDirection:"row",
        justifyContent:"space-around"
        

    },
    subSection:{

        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",

    },
  
  }))


function RepoCard(props) {
    const classes = useStyles();



  return (
    <Card className={classes.paper} style={{ backgroundColor:"mintcream",border: "black",  maxWidth: "95%",maxHeight:"200px",margin:"10px"}} onClick={event =>  window.location.href=`${props.repo.html_url}`} >  

    <div >

    <h4>{props.repo.name}</h4>


    <section className={classes.section}>

    <section className={classes.subSection}>

    <Star style={{ color:"#fada5e"}}></Star>

    {props.repo.stargazers_count}
    
    </section>


    <section className={classes.subSection}>

    <AccountTreeIcon style={{ color:"#228b22"}}></AccountTreeIcon>

    {props.repo.forks_count}

    </section>



<section className={classes.subSection}>


    <p>{props.repo.size} mb</p>

</section>
    </section>
    <section className={classes.section}>

    <h6>Created:  </h6>

    <h6>{new Date(props.repo.created_at).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}</h6>
    
    </section>

    </div>
      
    </Card>

  );
}

export default RepoCard;