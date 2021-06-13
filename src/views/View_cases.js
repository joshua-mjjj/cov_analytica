import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Alert from "@material-ui/lab/Alert";
import IconButton from "@material-ui/core/IconButton";
import Collapse from '@material-ui/core/Collapse';
import CloseIcon from '@material-ui/icons/Close';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
//import Input from '@material-ui/core/Input';
import Container from '@material-ui/core/Container';
import Input from '@material-ui/core/Input';
import { withStyles } from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
// import TextField from "@material-ui/core/TextField";
//import Skeleton from '@material-ui/lab/Skeleton';

import Loading_spin from "../assets/loading.gif";

import { useDispatch } from "react-redux";
import { createMessage } from "../actions/messages";
import { update_case, delete_case, get_cases } from "../actions/data_ops.js";


const Accordion = withStyles((theme) => ({
  root: {
    border: "1px solid rgba(0, 0, 0, .125)",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  expanded: {},
}))(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: "rgba(0, 0, 0, .03)",
    borderBottom: "1px solid rgba(0, 0, 0, .125)",
    marginBottom: -1,
    minHeight: 56,
    "&$expanded": {
      minHeight: 56,
    },
  },

  content: {
    "&$expanded": {
      margin: "12px 0",
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);

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
  button: {
    backgroundColor: "#FF3D00",
    float: 'left',
    margin: theme.spacing(2, 2, 1, 'auto'),
    marginLeft: theme.spacing(4)
  },
  submitButton: {
    backgroundColor: "#FF5722",
    margin: theme.spacing(2, 0, 1, 'auto'),
    float: 'left',
  },
   message: {
     marginBottom: theme.spacing(2),
  },
}));


function View_cases(props){
 // const [expanded, setExpanded] = React.useState("");
  const classes = useStyles();

  // const handleChange = (panel) => (event, newExpanded) => {
  //   setExpanded(newExpanded ? panel : false);
  // };

  const [first_name, setFirst_name] = React.useState(props.case.first_name)
  const [last_name,  setLast_name]  = React.useState(props.case.last_name)
  const [status,     setStatus]     = React.useState(props.case.status)
  const [contact,    setContact]    = React.useState(props.case.contact)
  const [guardian,   setGuardian]   = React.useState(props.case.guardian)
  const [age_bracket,    setBracket]= React.useState(props.case.age_bracket)
  const [location,   setLocation]   = React.useState(props.case.location)
  const [notification, setNotification] = React.useState(true);

  const dispatch = useDispatch();

  const handleSubmit_update = (id) => {
      const update_Case = {
        first_name   : first_name,
        last_name    : last_name,
        status       : status,
        contact      : contact,
        guardian     : guardian,
        age_bracket  : age_bracket,
        location     : location,
        id           : id
    }
    // console.log(registerCase)
    if(first_name && last_name && status && contact && age_bracket && location){
      props.update_case(update_Case);
      setNotification(true);
    }else{
      setNotification(true);
      dispatch(createMessage("Please fill in all the required fields!", "error"));
    }
  }
  
  const handleSubmit_delete = (id) => {
    if(id){
      props.delete_case(id);
      props.get_cases()
      props.fetch_again(id)
      setNotification(true);
    }else{
      setNotification(true);
    }
  }

   // React.useEffect(() => {
   //     props.get_cases();
   //     // eslint-disable-next-line
   //  }, [props.loading]);

  const clear_actions = () => {
    setNotification(false);
    dispatch(createMessage(null, null));
  }


  let alert;
  let alert_type;
  if (props.messages.message && props.data.updated.id === props.case.id) {
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
	              <FormLabel component="label" className={classes.formGroupLabel}>Cases ID : {props.case.id}</FormLabel>
	              <Grid container spacing={2}>
                     <div>
                      <Accordion
                        className={classes.accordion}
                       // key={props.service.id}
                        square
                       // expanded={expanded === `panel${props.service.id}`}
                       // onChange={handleChange(`panel${props.service.id}`)}
                      >
                        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                          <Typography>{props.case.first_name}, {props.case.status}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Grid item xs={12}>
                            <Grid container spacing={2}>
                                 <Grid item xs={12} sm={4}>
                                    <FormLabel component="label" className={classes.formLabel}>First name</FormLabel>
                                    <Input 
                                      onChange={(e) => setFirst_name(e.target.value)}
                                      disableUnderline 
                                      fullWidth
                                      defaultValue={props.case.first_name}
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
                                      defaultValue={props.case.last_name}
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
                                      defaultValue={props.case.location}
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
                                      defaultValue={props.case.contact}
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
                                      defaultValue={props.case.guardian}
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
                                      defaultValue={age_bracket}
                                      autoComplete="new-password"
                                      className={classes.inputSelect}
                                      >
                                       <MenuItem  value="below 14">below 14</MenuItem>
                                       <MenuItem  value="between 15 - 35">between 15 - 35</MenuItem>
                                       <MenuItem  value="Above 35">Above 35</MenuItem>
                                     
                                    </Select>
                                  </Grid>
                                  <Grid item xs={12}>
                                    <FormLabel component="label" className={classes.formLabel}>Patient Status</FormLabel>
                                    <Input 
                                      onChange={(e) => setStatus(e.target.value)} 
                                      defaultValue={props.case.status}
                                      autoComplete="new-password" 
                                      disableUnderline fullWidth  
                                      type="number" 
                                      placeholder="Short Description of patient condition at the time of admission" 
                                      inputProps={{ 'aria-label': 'description' }} 
                                      className={classes.inputSmall} 
                                      multiline rows={3}/>
                                  </Grid>
                                </Grid>
                                <Button
                                    variant="contained"
                                    //disabled={disabl_}
                                    color="primary"
                                    style={{maxWidth: '80px', maxHeight: '35px', minWidth: '80px', minHeight: '35px'}}
                                    onClick={(e) => handleSubmit_update(props.case.id)}
                                    className={classes.submitButton}
                                  >
                                  { props.loading && !props.data.loading_submit ? <img src={Loading_spin} alt="" height="30px" width="30px" /> : "Update" }
                                  </Button>
                                  <Button
                                    variant="contained"
                                    //disabled={disabl_}
                                    color="secondary"
                                    style={{maxWidth: '80px', maxHeight: '35px', minWidth: '80px', minHeight: '35px'}}
                                    onClick={(e) => handleSubmit_delete(props.case.id)}
                                    className={classes.button}
                                  >
                                  {"Delete"}
                                  </Button>
                          </Grid>
                        </AccordionDetails>
                      </Accordion>
                  </div>
	              </Grid>
	            </FormGroup>
	          </div>
	        </div>
	      </Container>

    	</Paper>
        </div>
    );
}

const mapStateToProps = (state) => ({
    cases: state.data_ops.cases_data,
    data: state.data_ops,
    loading: state.data_ops.isLoading,
    appointment: state.appointment,
    messages: state.messages,
  });
export default connect(mapStateToProps, {
  update_case, delete_case, get_cases
})(View_cases);
