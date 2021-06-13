import React from "react";
import { connect } from "react-redux";
import VIEW_APPOINTMENTS from './View_appointments'
import { makeStyles } from "@material-ui/core/styles";
import { get_cases } from "../actions/data_ops.js";

import Loading_spin from "../assets/loading.gif";

const useStyles = makeStyles((theme) => ({
  parentDiv: {
    margin: theme.spacing(1),
  },
  spacing: {
     marginTop: theme.spacing(19),
  },
    headName: {
    marginTop: '20px',
    maxWidth: 'fit-content',
    marginBottom: '24px',
    marginLeft: '100px',
    fontFamily: 'Dosis',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '36px',
    lineHeight: '36px',
    letterSpacing: '0.15px',
    color: '#222222',
    position: 'relative',
    [theme.breakpoints.down("768")]: {
      marginTop: 0,
      marginBottom: '12px',
      fontSize: '24px',
      lineHeight: '28px',
    },
  },
  spinner: {
    marginLeft: '80px'
  }
}));

function Appointments_List(props) {
  const classes = useStyles();

  const appointments = props.data;
  const len = appointments.length;
  if(len > 1){
  	appointments.sort((a, b) => (a.id > b.id) ? 1 : -1)
  }

  return (
    <div className={classes.parentDiv}>
    <h3 className={classes.headName}>
       Appointments
    </h3>
      {
        appointments.length !== undefined ? 
        (<div>
           {appointments.map((index_case, i) => (
            <VIEW_APPOINTMENTS appointment={index_case} key={i}/>
         )).reverse()}
        </div>
        ) : (<div className={classes.spinner} ><img src={Loading_spin} alt="" height="100px" width="100px" /></div> )
      }
      {
          appointments.length === 1 || appointments.length === 2 ? 
            (
              <div className={classes.spacing}>
                <br/>
              </div>
            ) : null
        }

        {
          appointments.length === 0 ? 
            (
              <div className={classes.spacing}>
                <h5 className={classes.headName}>
                   No appointments yet.
                </h5>
                <br/>
              </div>
            ) : null
        }
      
    </div>
  );
}

const mapStateToProps = (state) => ({
    cases: state.data_ops.cases_data,
    appointment: state.appointment,
    messages: state.messages,
  });
export default connect(mapStateToProps, {
  get_cases,
})(Appointments_List);
