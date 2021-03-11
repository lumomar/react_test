import React from 'react';
import Formlogin from './login.form.app.js'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
const UseStyles = makeStyles({
  root:{
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin:'5px' ,
      width:'40ch' ,
      height:'auto' ,
      
    },
},
    titulo:{
        textAlign:"center",
         
    },
    recovery:{
        textAlign:"left",
    },
    container:{
        margin:'10px' ,
        position: 'absolute', left: '35%', top: '35%',
    },
});
function Titulo(){
    const classes = UseStyles();
    return (
        <div >
            <h3 className={classes.titulo}>registro de usuario</h3>
        </div>
      )
}
function Recovery(){
    const classes = UseStyles();
    return (
        <div >
           <Link href="#">
        recovery password
      </Link>
        </div>
      )
}


export default function LOGIN(props) {
  const classes = UseStyles();

  return (
    <Container className={classes.container}  fixed>
    <div className={classes.root}>
      <Paper elevation={3}>
        <Titulo/>        
        <Formlogin user={props.user} />
        <Recovery/>
      </Paper>
    </div>

    </Container>
    
  );
}
