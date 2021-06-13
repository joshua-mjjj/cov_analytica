import React from "react";
import { connect } from "react-redux";
import VIEW_CASES from './View_cases'
import { makeStyles } from "@material-ui/core/styles";
import { get_cases, delete_case } from "../actions/data_ops.js";

import Alert from "@material-ui/lab/Alert";
import IconButton from "@material-ui/core/IconButton";
import Collapse from '@material-ui/core/Collapse';
import CloseIcon from '@material-ui/icons/Close';
import Grid from "@material-ui/core/Grid";

import { useDispatch } from "react-redux";
import { createMessage } from "../actions/messages";

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
  },
   message: {
     marginBottom: theme.spacing(2),
  },
}));

function Cases_List(props) {
  const classes = useStyles();

  const dispatch = useDispatch();

  const cases = props.data;
  const len = cases.length;
  if(len > 1){
  	cases.sort((a, b) => (a.id > b.id) ? 1 : -1)
  }

  const fetch_again = (id) => {
     props.get_cases();
  }

   const clear_actions = () => {
    setNotification(false);
    dispatch(createMessage(null, null));
  }

  const [notification, setNotification] = React.useState(true);
  let alert;
  let alert_type;
  if (props.messages.message) {
    let msg;
    if (props.messages.message) {
      msg = props.messages.message;
      if(props.messages.message_type === "success"){
         alert_type = "success"
      }
      if(props.messages.message_type === "error"){
         alert_type = "error"
      }
      alert = (
        <div className="alerts">
        <Collapse in={notification}>
          <Alert 
              severity={alert_type}
              action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={clear_actions}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
                >{msg}
            </Alert>
        </Collapse>
        </div>
      );
    }
  }


  return (
    <div className={classes.parentDiv}>
    <h3 className={classes.headName}>
       Cases List
    </h3>
    <Grid item xs={12}>
      <div className={classes.message}>{alert}</div>
    </Grid>
      {
        cases.length !== undefined ? 
        (<div>
           {cases.map((index_case, i) => (
            <VIEW_CASES case={index_case} fetch_again={fetch_again} key={i}/>
         )).reverse()}
        </div>
        ) : (<div className={classes.spinner} ><img src={Loading_spin} alt="" height="100px" width="100px" /></div> )
      }
      {
          cases.length === 1 || cases.length === 2 ? 
            (
              <div className={classes.spacing}>
                <br/>
              </div>
            ) : null
        }
        {
          cases.length === 0 ? 
            (
              <div className={classes.spacing}>
                <h5 className={classes.headName}>
                   No cases yet.
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
  get_cases, delete_case
})(Cases_List);
