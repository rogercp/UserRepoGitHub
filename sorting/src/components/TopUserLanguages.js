import React,{useEffect,useState}from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { RadialChart} from 'react-vis';
import '../App.css';

const useStyles = makeStyles(theme => ({
    paper: {
        height: '100%',
        backgroundColor: "cornsilk",
         boxShadow: theme.shadows[5],
        padding: theme.spacing(0, 0, 0),
        outline: 'none',
        borderRadius: '50%',
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
  
    section:{
      display: "flex",
       width: "100%", 
       height: "100%",
    }
  
  }))


function TopUserLanguages(props) {


    const classes = useStyles();


    let incomingData= [...props.languagesData]

    const myData = []

    for(let i = 0; i<incomingData.length-1;i++)
    {

       myData.push({label:`${incomingData[i].label}`, angle:`${incomingData[i].value}`,color:`${incomingData[i].color}`})
      
    }


  return (

    // <Card className={classes.paper} style={{ border: "black", minWidth: "350px", minHeight: "325px", maxWidth: "350px" }}> 

    <section className = {classes.section}>

    {myData !== null ? 
      <RadialChart
      className={classes.paper}
      colorType="literal"
      showLabels={true}
      data={myData}
      width={300}
      height={300} />
    :null}
  

    </section>


    // </Card>
  );
}

export default TopUserLanguages;