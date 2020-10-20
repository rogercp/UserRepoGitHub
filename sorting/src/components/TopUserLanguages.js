import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { RadialChart} from 'react-vis';
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
  
    section:{

    }
  
  }))


function TopUserLanguages(props) {
    const classes = useStyles();
    const myData = [{angle: 1,label:'hellp',color :"red"}, 
    {angle: 5,label:'hellp',color :"yellow"}, 
    {angle: 2,label:'hellp',color :"green"}]

  return (

    <Card className={classes.paper} style={{ border: "black", minWidth: "350px", minHeight: "325px", maxWidth: "350px" }}> 

    <section className = {classes.section}>


    <RadialChart
    colorType="literal"
    showLabels={true}
    data={myData}
    width={300}
    height={300} />

    </section>


    </Card>
  );
}

export default TopUserLanguages;