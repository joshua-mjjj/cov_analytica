import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: '0 28px',
    background: '#2B3856',
    height: '62px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  copyright: {
    fontFamily: 'Dosis',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '20px',
    lineHeight: '25px',
    color: '#F87217',
    [theme.breakpoints.down("550")]: {
      fontSize: '14px',
      lineHeight: '17.7px',
    },
  },
  linkList: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  link: {
    marginRight: '19px',
    textDecoration: 'none',
    fontWeight: '500',
    fontSize: '15px',
    lineHeight: '25px',
    color: '#FFFFF6',
    [theme.breakpoints.down("550")]: {
      fontSize: '14px',
      lineHeight: '17.7px',
    },
    "&:last-child": {
      marginRight: 0
    }
  }
}));

export default function Footer() {
  const classes = useStyles();

  const current1 = "view_cases" 
  const current2 = "appointments" 
  const current3 = "create_case" 

   const set_var = (e) => {
    localStorage.setItem("current_route", current3)
  }

   const set_var_ = (e) => {
    localStorage.setItem("current_route", current1)
  }

   const set_var__ = (e) => {
    localStorage.setItem("current_route", current2)
  }

  return (
    <div className={classes.root}>
      { <h3 className={classes.copyright}>AUT Lab</h3> }
      <div className={classes.linkList}>
        <a href="/create_case" onClick={set_var} className={classes.link}>Create case</a>
        <a href="/view_case" onClick={set_var_}  className={classes.link}>View cases</a>
        <a href="/appointments" onClick={set_var__}  className={classes.link}>Appointments</a>
      </div>
    </div>
  );
}
