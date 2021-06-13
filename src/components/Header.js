import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import ImageAvatars from './Logo';

const useStyles = makeStyles((theme) => ({
  nonDisplay: {
    [theme.breakpoints.down("800")]: {
      display: 'none !important'
    },
  },
  root: {
    flexGrow: 1,
  },
  appBar:{
    boxShadow: "0px 2px 1px -1px rgba(0,0,0,0.03), 0px 1px 1px 0px rgba(0,0,0,0.03), 0px 1px 3px 0px rgba(0,0,0,0.03)",
    backgroundColor: '#2B3856',
  },
  container: {
    margin: '0 auto',
    width: '100%',
    maxWidth:'1440px'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    [theme.breakpoints.down("800")]: {
      display: 'none'
    },
  },
  logo:{
    maxWidth: '10rem'
  },
  signin:{
     background: 'inherit',
     color: 'white',
     fontFamily: 'Dosis',
     marginLeft: '18px',
     fontWeight: 'bold',
     fontSize: '18px',
     lineHeight: '23px',
     transition: 'color 0.3s ease-in',
     "&:hover": {
      background: 'none',
       color: '#FF3D00!important',
     },
     "&:active": {
      background: 'none!important',
       color: '#FF3D00!important',
      boxShadow: 'none!important'
     }
  },
  signin_:{
     background: 'inherit',
     color: '#FF3D00',
     fontFamily: 'Dosis',
     marginLeft: '18px',
     fontWeight: 'bold',
     fontSize: '18px',
     lineHeight: '23px',
     transition: 'color 0.3s ease-in',
     "&:hover": {
      background: 'none',
       color: '#FF3D00!important',
     },
     "&:active": {
      background: 'none!important',
       color: '#FF3D00!important',
      boxShadow: 'none!important'
     }
  },
  login:{
    marginLeft: '18px',
    width: '116.35px',
    height: '32px',
    background: '#FF5722',
    borderRadius: '10px',
    border: 'none',
    color: 'white',
    fontFamily: 'Dosis',
    fontWeight: 'bold',
    fontSize: '18px',
    lineHeight: '23px',
    transition: 'background 0.3s ease-in',
    "&:hover": {
      background: '#FF3D00!important'
    },
    [theme.breakpoints.down("800")]: {
      width: '82px'
    },
  },
  popper: {
    maxWidth: 500,
    zIndex: 1100,
  },
  helpDropDown:{
    //color: '#4B0082',
  },
  links: {
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down("800")]: {
      // display: 'none'
      position: 'absolute',
      flexDirection: 'column-reverse',
      top: '72px',
      left: '80px',
      width: '107px'
    },
    [theme.breakpoints.down("550")]: {
      left: '70px',
    },
  },

  link: {
    marginRight: '18px',
    fontFamily: 'Dosis',
    fontWeight: '500',
    fontSize: '18px',
    lineHeight: '23px',
    color: '#222222',
    textDecoration: 'none',
    display: 'inline-block',
    transition: 'color 0.3s ease-in',
    [theme.breakpoints.down("800")]: {
      margin:0,
      display: 'flex',
      alignItems: 'center',
      justifyContent:'center',
      height: '40px',
      width: '100%',
      background: '#383F45',
      color: 'white',
      position: 'relative'
    },
    "&::first-child": {
      fontWeight: '700',
      marginRight: '28px',
      [theme.breakpoints.down("800")]: {
        marginRight: '0px',
      },
    },
    "&::before": {
      [theme.breakpoints.down("800")]: {
        content: "''",
        width: '100%',
        height: '2px',
        bottom: 0,
        background: 'white',
        display: 'block',
        position: 'absolute'
      },
    },
    "&:first-child": {
      "&::before": {
        [theme.breakpoints.down("800")]: {
          display: 'none'
        },
      },
    },
    "&:hover": {
      color: '#FF5722',
    }
  },
  burger: {
    border: 'none',
    background: 'none',
    padding: 0,
    marginLeft: '25px',
    marginRight: '15px',
    cursore: 'pointer',
    borderRadius: '50%',
    outline: 'none',
    maxHeight: '24px',
    overflow: 'hidden',
    transition: 'background 0.3s ease-in',
    "&:hover": {
      background: 'fff',
      // opacity: '0.5'
    },
    "&:hover .makeStyles-links-11": {
      background: 'fff',
      // opacity: '0.5'
    },
    [theme.breakpoints.up("800")]: {
      display: 'none'
    },
  },
  buy: {
    [theme.breakpoints.down("800")]: {
      marginRight: 'auto'
    },
  }
}));

export default function GuestNavBar() {
  const classes = useStyles();
 
  const redirect_view = (e) => {
    const current = "view_cases" 
    localStorage.setItem("current_route", current);
    window.location.href = '/view_case'
  }

  const redirect_book = (e) => {
    const current = "book" 
    localStorage.setItem("current_route", current);
    window.location.href = '/book'
  }

  const redirect_appoint = (e) => {
    const current = "appointments" 
    localStorage.setItem("current_route", current);
    window.location.href = '/appointments'
  }

   const redirect_research = (e) => { 
    const current = "reviewing" 
    localStorage.setItem("current_route", current);
    window.location.href = '/reviews'
  }

  const redirect_create = (e) => { 
    const current = "create_case" 
    localStorage.setItem("current_route", current);
    window.location.href = '/create_case'
  }

  return (
    <div className={classes.root}>
      <AppBar position="fixed" elevation={0} color="transparent" className={classes.appBar}>
        <div className={classes.container}>
          <Toolbar>
            <ImageAvatars />
          
            <Typography variant="h6" className={classes.title}></Typography>
              {
                localStorage.getItem("current_route") === "create_case" ?
                (
                  <Chip className={classes.signin_} 
                    onClick={redirect_create} 
                    label="Create case" 
                    // variant="outlined"
                   />
                )
                 : 
                (
                  <Chip className={classes.signin} 
                    onClick={redirect_create} 
                    label="Create case" 
                    // variant="outlined"
                   />
                )
              }
              {
                localStorage.getItem("current_route") === "view_cases" ?
                (
                  <Chip className={classes.signin_} 
                    onClick={redirect_view} 
                    label="View cases" 
                    // variant="outlined"
                     />
                )
                 : 
                (
                  <Chip className={classes.signin} 
                    onClick={redirect_view} 
                    label="View cases" 
                    // variant="outlined"
                     />
                )
              }

              {
                localStorage.getItem("current_route") === "book" ?
                (
                  <Chip className={classes.signin_} 
                    onClick={redirect_book} 
                    label="Book a Doc" 
                    // variant="outlined"
                     />
                )
                 : 
                (
                  <Chip className={classes.signin} 
                    onClick={redirect_book} 
                    label="Book a Doc" 
                    // variant="outlined"
                     />
                )
              }

              {
                localStorage.getItem("current_route") === "appointments" ?
                (
                  <Chip className={classes.signin_} 
                    onClick={redirect_appoint} 
                    label="Appointments" 
                    // variant="outlined"
                    />
                )
                 : 
                (
                 <Chip className={classes.signin} 
                    onClick={redirect_appoint} 
                    label="Appointments" 
                    // variant="outlined"
                    />
                )
              }
              
              <Chip className={classes.login} 
                onClick={redirect_research} 
                label="Reviews" />
            </Toolbar>
        </div>
      </AppBar>
    </div>
  );
}










