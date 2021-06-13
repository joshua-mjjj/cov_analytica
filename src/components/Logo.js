import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import home from '../assets/house.svg';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'inline-flex',
    maxWidth: '1440px',
    '& > *': {
      margin:'auto',
    },
    margin: '10px',
    verticalAlign: 'middle',
    alignItems: "center",
  },
  marginAutoItem: {
    margin: 'auto',
    alignItems: 'center',
  },
  AvatarItem: {
    [theme.breakpoints.down("800")]: {
      display:'none'
    },
  },
  AvatarItemMobile: {
    [theme.breakpoints.up("800")]: {
      height: '40px'
    },
  },
  logo_:{
     background: 'inherit',
     color: '#FF3D00',
     fontFamily: 'Dosis',
     marginLeft: '0px',
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
  }
}));


export default function ImageAvatars() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box display="inline-flex">
        <Link href="/"><img alt="HomePetVet" src={home} className={classes.AvatarItemMobile}/></Link>
        <span className={classes.logo_} >CovAnalytica</span>
      </Box>
    </div>
  );
}
