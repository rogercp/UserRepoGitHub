import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import axios from 'axios';
import Button from '@material-ui/core/Button';





const useStyles = makeStyles(theme => ({
    formControl: {
      margin: theme.spacing(1),
      Width: 200,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
    button: {
      margin: theme.spacing(1),
    },
    root: {
      width: '100%',
    },
    button: {
      marginRight: theme.spacing(1),
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
    dialog: {
  
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2),
        outline: 'none',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        paddingBottom: '10px',
    },
    body: {
        paddingBottom: '20px',
    },
  }));



function UserLogin(props) {


    const classes = useStyles();

    const [state, setState] = React.useState({
        username: '',
    
      });

      const handleChange = name => event => {
        setState({
          ...state,
          [name]: event.target.value,
        });
      };


      const onSubmitHandler = e => {

        console.log(state.username)
        props.history.push({
            pathname: `/profile/${state.username}`,
            state: { username: state.username },
          });

      };
    
    
      
  return (

    <div>

        <h1 >
        Enter GitHub UserName
        </h1>
        <p>ex: rogercp </p>


<FormControl className={classes.formControl} noValidate autoComplete="off" onSubmit={onSubmitHandler}>
      
     
      <TextField
        id="standard-basic"
        name="username"
        className={classes.textField}
        label="Year"
        margin="normal"
        value={state.username}
        name="car_make"
        onChange={handleChange('username')}
      />




      <Button
        variant="contained"
        color="primary"
        size="large"
        className={classes.button}
        onClick={onSubmitHandler}
      >
        Enter
      </Button>

     

    </FormControl>



    </div>

  );
  
}

export default UserLogin;