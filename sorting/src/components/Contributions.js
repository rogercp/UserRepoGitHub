import React from 'react';
import GitHubCalendar from 'github-calendar';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';



const useStyles = makeStyles(theme => ({
   
    paper: {
      height: '100%',
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(0, 0, 0),
      outline: 'none',
      margin: '1%',
      flexDirection: "column",
      justifyContent: "space-between",
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
  
  
  }))





function Contributions(props) {

    const classes = useStyles();

    GitHubCalendar('.calendar', props.username, {
        responsive: true,
        summary_text: ' ',
        tooltips: true,
      });



  return (

//   <Card className={classes.paper} style={{ border: "black", width: "710px" }}>  

        <div className='calendar' ></div>

//  </Card>

  );
}

export default Contributions;