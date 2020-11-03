import React, { useEffect,useState,useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import MyLocationIcon from '@material-ui/icons/MyLocation';
import EventIcon from '@material-ui/icons/Event';
import GitHubIcon from '@material-ui/icons/GitHub';
import ApartmentIcon from '@material-ui/icons/Apartment';
import RepoCard from './RepoCard'
import axios from 'axios';
import Switch from '@material-ui/core/Switch';
import Button from "@material-ui/core/Button";
import {gsap} from 'gsap';


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
  
    subSection:{

        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",

    },
    section:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center",

    },

    toggle:{
        height: '100%',
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(0, 0, 0),
        outline: 'none',
        display:"flex",
        justifyContent: "space-around",
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


function Repos(props) {
    const classes = useStyles();

    let  sortref= useRef(null)
    let reposRef = useRef(null)

    const [repos,setRepos] = useState([]);
  
    const [sort,setSort] = useState();



    const returnRepos = ((sort) =>{

        let tempArr = [];
        axios
        .get(`https://api.github.com/users/${props.username}/repos`)
        .then((response) => {
           tempArr = response.data
           sorter(tempArr,sort)
        })
    
        .catch((err) => {
          console.log(err);
        });

    })


   const sorter = ((arr,sorter)=>{

    switch(sorter) {
        case 'stars':
            let newArr = arr.filter((entry) => {
                return entry.stargazers_count > 0;
            });
            setRepos(newArr)
          break;

        case 'forks':
            arr.sort((a, b) => {
                return b.forks - a.forks;
            });
            setRepos(arr)
          break;

        case 'size':
            arr.sort((a, b) => {
                return b.size - a.size;
            });
            setRepos(arr)
          break;

        case 'date':


            arr.sort((a, b) => {


                return new Date(b.created_at) - new Date(a.created_at);

            });
            setRepos(arr)
          break;

        default:
            setRepos(arr)

       
      }




   })



   const changeSort = ((sorter)=>{


        setSort(sorter)

   })

    useEffect(()=>{
       


    returnRepos(sort)

    gsap.from(sortref.current, {
      autoAlpha: 0,
      ease: 'none',
      x:600,
      delay: 1
  });

  gsap.from(reposRef.current, {
    autoAlpha: 0,
    ease: 'none',
    x:-600,
    delay: 1
});

    },[sort])




  return (
<>


<Card className={classes.toggle} ref={sortref} style={{maxWidth:"350px",backgroundColor:"white",margin:"5px",maxHeight:"100px",backgroundColor: "cornsilk"}}>

<section className={classes.subSection}>

<div className={classes.section}>

<h3 style={{margin:"1%"}}>Top Repos</h3>
</div>

<div className={classes.section} style={{margin:"1%"}}>
<Button onClick={()=> changeSort('stars')} style={{margin:"1%"}} style={{margin:"1%"}} color="primary" variant="contained">Stars</Button>
<Button onClick={()=> changeSort('forks')} style={{margin:"1%"}} color="primary" variant="contained">Forks</Button>
<Button onClick={()=> changeSort('size')} style={{margin:"1%"}} color="primary" variant="contained">Size</Button>
<Button onClick={()=> changeSort('date')} style={{margin:"1%"}} color="primary" variant="contained">Date</Button>

</div>



</section>


  
</Card>


    <Card ref={reposRef}  className={classes.paper} style={{ border: "black", maxWidth:"350px",maxHeight:"450px",overflowY:"scroll",margin: '5px',backgroundColor: "cornsilk" }}>  
    


    {repos.map((repo)=>{

        return (
            <>
            <RepoCard repo ={repo}/>
            </>
        )   

        })}
    



    </Card>



</>
  );
}

export default Repos;