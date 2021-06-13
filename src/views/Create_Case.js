import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Alert from "@material-ui/lab/Alert";
import FormLabel from '@material-ui/core/FormLabel';
import IconButton from "@material-ui/core/IconButton";
import FormGroup from '@material-ui/core/FormGroup';
import Input from '@material-ui/core/Input';
import Container from '@material-ui/core/Container';
import { create_case } from "../actions/data_ops.js";
import Collapse from '@material-ui/core/Collapse';
import CloseIcon from '@material-ui/icons/Close';
import { useDispatch } from "react-redux";
import { createMessage } from "../actions/messages";

// import Spinner from "../components/Spinner";
import Loading_spin from "../assets/loading.gif";

// import {
//   getServiceData,
//   get_all_services,
//   user_create_service,
//   user_delete_service,
//   get_all_rates,
//   init_fetch,
//   deinit_fetch,
// } from "../actions/form.js";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    backgroundColor: "white",
    flexGrow: 1,
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),

    "& > *": {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "left",
    color: theme.palette.text.secondary,
  },
  line: {
    textAlign: "center",
    backgroundColor: "#fafafa",
    width: "100%",
    borderRadius: "10px",
    paddingLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    "& > label": {
      paddingLeft: theme.spacing(2),
    },
  },
  helpText: {
    height: "100%",
    display: "flex",
    textAlign: "center",
    flexDirection: "column",
    justifyContent: "center",
  },
  helpText2: {
    height: "100%",
    display: "flex",
    textAlign: "center",
    flexDirection: "column",
    justifyContent: "center",
    color: "blue",
  },
  underline: {
    "&::before": {
      borderBottom: "none",
    },
    "&::after": {
      borderBottom: "none",
    },
  },
  selectEmpty: {
    float: "left",
    width: "100%",
    borderRadius: "10px",
    height: "auto!important",
    "& > label": {
      paddingLeft: theme.spacing(1),
    },
  },
  addRowButton: {
    marginTop: theme.spacing(4),
  },
  selectFormControl: {
    width: "100%",
  },
  submitButton: {
     backgroundColor: '#FF3D00!important',
  },
  serviceTitle: {
    marginBottom: theme.spacing(1),
    color: "black",
  },
  input:{
    fontSize: '13px',
    color: '#1b1f23',
    border: '1px solid #cfd7de',
    borderRadius: '5px',
    padding: theme.spacing(1),
    "&::after": {
        borderBottom: '1px solid #949494',
    },
  },
  inputSmall:{
      fontSize: '13px',
      color: '#1b1f23',
      border: '1px solid #cfd7de',
      borderRadius: '5px',
      padding: theme.spacing(1),
      marginTop: theme.spacing(1),
      "&::after": {
          borderBottom: '1px solid #949494',
      },
  },
  inputSkeleton:{
      fontSize: '13px',
      color: '#1b1f23',
      borderRadius: '5px',
      padding: theme.spacing(1),
      marginTop: theme.spacing(1),
      "&::after": {
          borderBottom: '1px solid #949494',
      },
  },
  inputSelect:{
      fontSize: '13px',
      color: '#1b1f23',
      border: '1px solid #cfd7de',
      borderRadius: '5px',
      padding: theme.spacing(1),
      width: '100%',
      marginTop: theme.spacing(1),
      "&::after": {
          borderBottom: '1px solid #949494',
      },
  },
  inputBio:{
      fontSize: '13px',
      color: '#1b1f23',
      border: '1px solid #cfd7de',
      borderRadius: '5px',
      padding: theme.spacing(1, 2, 1, 1),
      marginTop: theme.spacing(1),
      "&::after": {
          borderBottom: '1px solid #949494',
      },
  },
  wizardContainer:{
      margin: theme.spacing(1, 'auto'),
  },
  form: {
      margin: 'auto',
      '& > *': {
          margin: theme.spacing(1),
      },
  },
  formHeader:{
      margin: theme.spacing(2, 'auto', 4),
      textAlign: 'center',
  },
  formLabel:{
      fontSize: '13px',
      color: 'rgba(0, 0, 0, 0.5)',
      fontWeight: '600',
      marginBottom: theme.spacing(1),
  },
  formGroupLabel:{
      fontSize: '14px',
      color: 'rgba(0, 0, 0, 0.7)',
      fontWeight: '600',
      marginBottom: theme.spacing(2),
  },
  formGroup:{
      marginBottom: theme.spacing(3),
  },
  formGroupProfileSection:{
      marginTop: theme.spacing(2),
  },
  imageSelector: {
      fontSize: "8rem",
      paddingLeft: theme.spacing(0),
  },
  selector:{
      paddingLeft: theme.spacing(0),
  },
  instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
  },
  button: {
      marginRight: theme.spacing(1),
      backgroundColor: '#663399!important',
      color: 'white',
      marginTop: theme.spacing(4),
      marginLeft: theme.spacing(5),
  },
  buttonBack: {
      marginRight: theme.spacing(1),
      marginLeft: 'auto',
  },
  buttonNext: {
      marginLeft: theme.spacing(1),
      backgroundColor: '#663399!important',
      marginRight: 'auto',
  },
  buttonSection:{
      margin: 'auto',
      float: 'right',
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
  },
  addServiceSection:{
    marginTop: theme.spacing(3),
  },
  showServiceSection:{
    marginTop: theme.spacing(1),
  },
   message: {
     marginBottom: theme.spacing(2),
  },
}));


function CreateCase(props){
  const classes = useStyles();

  const [first_name, setFirst_name] = React.useState("");
  const [last_name,  setLast_name]  = React.useState("");
  const [status,     setStatus]     = React.useState("");
  const [contact,    setContact]    = React.useState("");
  const [guardian,   setGuardian]   = React.useState("");
  const [bracket,    setBracket]    = React.useState("");
  const [location,   setLocation]   = React.useState("");
  const [notification, setNotification] = React.useState(true);

  const clearState = () => {
    setFirst_name("")
    setLast_name("")
    setStatus("")
    setContact("")
    setGuardian("")
    setBracket("")
    setLocation("")
  }

    const dispatch = useDispatch();

    const handleSubmit = () => {
      const registerCase = {
        first_name   : first_name,
        last_name    : last_name,
        status       : status,
        contact      : contact,
        guardian     : guardian,
        age_bracket  : bracket,
        location     : location
    }
    // console.log(registerCase)
    if(first_name && last_name && status && contact && bracket && location){
      props.create_case(registerCase);
      setNotification(true);
      clearState();
    }else{
      setNotification(true);
      dispatch(createMessage("Please fill in all the required fields!", "error"));
    }
    
  }

   const clear_actions = () => {
    setNotification(false);
    dispatch(createMessage(null, null));
  }

  let alert;
  let alert_type;
  if (props.messages.message) {
    let msg;
    if (props.messages.message) {
      msg = props.messages.message;
      if(props.messages.message_type === "success"){
         alert_type = "info"
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

    return(
    <div>
      <Paper className={classes.root} elevation={0}>
	      <Container maxWidth="md" className={classes.wizardContainer}>
	        <div className={classes.addServiceSection}>
	         <div>
	            <FormGroup className={classes.formGroup}>
                <Grid item xs={12}>
                  <div className={classes.message}>{alert}</div>
                </Grid>
	              <FormLabel component="label" className={classes.formGroupLabel}>Create a case</FormLabel>
	              <Grid container spacing={2}>
                 <Grid item xs={12} sm={4}>
                    <FormLabel component="label" className={classes.formLabel}>First name</FormLabel>
                    <Input 
                      onChange={(e) => setFirst_name(e.target.value)}
                      disableUnderline 
                      fullWidth
                      value={first_name}
                      autoComplete="new-password"
                      placeholder="Patient's first name"
                      inputProps={{ 'aria-label': 'description' }} 
                      className={classes.inputSmall} />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <FormLabel component="label" className={classes.formLabel}>Last name</FormLabel>
                    <Input 
                      onChange={(e) => setLast_name(e.target.value)}
                      disableUnderline 
                      fullWidth
                      value={last_name}
                      autoComplete="new-password"
                      placeholder="Patient's last name"
                      inputProps={{ 'aria-label': 'description' }} 
                      className={classes.inputSmall} />
                  </Grid>
                   <Grid item xs={12} sm={4}>
                    <FormLabel component="label" className={classes.formLabel}>Location</FormLabel>
                    <Input 
                      onChange={(e) => setLocation(e.target.value)}
                      disableUnderline 
                      fullWidth
                      value={location}
                      autoComplete="new-password"
                      placeholder="location"
                      inputProps={{ 'aria-label': 'description' }} 
                      className={classes.inputSmall} />
                  </Grid>
                   <Grid item xs={12} sm={4}>
                    <FormLabel component="label" className={classes.formLabel}>Contact</FormLabel>
                    <Input 
                      onChange={(e) => setContact(e.target.value)}
                      disableUnderline 
                      fullWidth
                      value={contact}
                      autoComplete="new-password"
                      placeholder="Contact"
                      inputProps={{ 'aria-label': 'description' }} 
                      className={classes.inputSmall} />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <FormLabel component="label" className={classes.formLabel}>Gaurdian (If any) </FormLabel>
                    <Input 
                      onChange={(e) => setGuardian(e.target.value)}
                      disableUnderline 
                      fullWidth
                      value={guardian}
                      autoComplete="new-password"
                      placeholder="Who is responisble for Patient"
                      inputProps={{ 'aria-label': 'description' }} 
                      className={classes.inputSmall} />
                  </Grid>
                   <Grid item xs={12} sm={4}>
                    <FormLabel component="label" className={classes.formLabel}>Age bracket</FormLabel>
                    <Select
                      onChange={(e) => setBracket(e.target.value)}
                      disableUnderline
                      fullWidth
                      value={bracket}
                      autoComplete="new-password"
                      displayEmpty
                      className={classes.inputSelect}
                      >
                       <MenuItem  value="below 14" key="below 14" >below 14</MenuItem>
                       <MenuItem  value="between 15 - 35" key="between ">between 15 - 35</MenuItem>
                       <MenuItem  value="Above 35" key="Above 14">Above 35</MenuItem>
                     
                    </Select>
                  </Grid>
	                <Grid item xs={12}>
	                  <FormLabel component="label" className={classes.formLabel}>Patient Status</FormLabel>
	                  <Input 
                      onChange={(e) => setStatus(e.target.value)} 
                      value={status} 
                      autoComplete="new-password" 
                      disableUnderline fullWidth  
                      type="number" 
                      placeholder="Short Description of patient condition at the time of admission" 
                      inputProps={{ 'aria-label': 'description' }} 
                      className={classes.inputSmall} 
                      multiline rows={3}/>
	                </Grid>
	              </Grid>
	            </FormGroup>
	          </div>
	        </div>
	         {/*
               <div>
              <FormGroup className={classes.formGroup}>
                <FormLabel component="label" className={classes.formGroupLabel}>Services</FormLabel>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={4}>
                    <FormLabel component="label" className={classes.formLabel}>Select service</FormLabel>
                    <Skeleton variant="rect" width="100%" className={classes.inputSkeleton} height="3em"/>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <FormLabel component="label" className={classes.formLabel}>Price</FormLabel>
                    <Skeleton variant="rect" width="100%" className={classes.inputSkeleton} height="3em"/>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <FormLabel component="label" className={classes.formLabel}>Rate</FormLabel>
                    <Skeleton variant="rect" width="100%" className={classes.inputSkeleton} height="3em"/>
                  </Grid>
                  <Grid item xs={12}>
                    <FormLabel component="label" className={classes.formLabel}>Description</FormLabel>
                    <Skeleton variant="rect" width="100%" className={classes.inputSkeleton} height="4em"/>
                  </Grid>
                </Grid>
              </FormGroup>
            </div>
           */}

	        <Grid container spacing={0}>
	          <Grid item xs={12}>
	            <Paper className={classes.paper} elevation={0}>
	              <Grid container>
	                <Grid item xs={12}>
	                  <Grid item xs={12}>
	                    <Button
	                      variant="contained"
	                      color="primary"
	                      style={{maxWidth: '130px', maxHeight: '35px', minWidth: '130px', minHeight: '35px'}}
	                      onClick={handleSubmit}
	                      className={classes.submitButton}>
	                      { props.cases.isLoading ? <img src={Loading_spin} alt="" height="30px" width="30px" /> : "Add case" }
	                    </Button>
	                      
	                </Grid>
	              </Grid>
	            </Grid>
	            </Paper>
	          </Grid>
	        </Grid>
	      </Container>
    	</Paper>
        </div>
    );
}

const mapStateToProps = (state) => ({
    cases: state.data_ops,
    appointment: state.appointment,
    messages: state.messages,
  });

export default connect(mapStateToProps, {
    create_case, 
  })(CreateCase);
