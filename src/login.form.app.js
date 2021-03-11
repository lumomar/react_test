import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import React from 'react';



 


const UseStyles = makeStyles({
  root:{
    '& .MuiTextField-root': {
      width: '25ch',
    },
    margin:'5px',
    padding:'5px',
    
  },
  in:{
    margin:'10px',
  },
  rootbutton:{
    margin:'10px', 
  },
});

export default function Formlogin(props) {
  const classes = UseStyles();

  return (
 
    <form className={classes.root} noValidate autoComplete="off">
      <div>

      </div>
      <div className={classes.in}>
        <TextField
          required
          id="username"
          label="username"
          defaultValue=""
          variant="outlined"
      
        />
        </div>
       
      <div className={classes.in}>
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="outlined"
        />
        
      </div>
      <div className={classes.rootbutton}>
      <Button variant="outlined" color="primary" onClick={props.user} >
        loggin
      </Button>
      </div>
    </form>

  );
}