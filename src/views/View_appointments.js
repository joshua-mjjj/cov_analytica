import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
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

import { update_case } from "../actions/data_ops.js";


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


function View_appointments(props){
  const classes = useStyles();
    return(
        <div>
            <Paper className={classes.root} elevation={0}>
	      <Container maxWidth="md" className={classes.wizardContainer}>
	        <div className={classes.addServiceSection}>
	         <div>
	            <FormGroup className={classes.formGroup}>
	              <FormLabel component="label" className={classes.formGroupLabel}>Appointment ID : {props.appointment.id}</FormLabel>
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
                          <Typography>{props.appointment.full_name} and {props.appointment.doctor} </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        		<Grid container spacing={2}>
                 <Grid item xs={12} sm={4}>
                    <FormLabel component="label" className={classes.formLabel}>Full name</FormLabel>
                    <Input 
                      // onChange={(e) => setFullname(e.target.value)}
                      disableUnderline 
                      fullWidth
                      value={props.appointment.full_name}
                      autoComplete="new-password"
                      placeholder="Patient's first name"
                      inputProps={{ 'aria-label': 'description' }} 
                      className={classes.inputSmall} />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <FormLabel component="label" className={classes.formLabel}>Location</FormLabel>
                    <Input 
                      // onChange={(e) => setLocation(e.target.value)}
                      disableUnderline 
                      fullWidth
                      value={props.appointment.location}
                      autoComplete="new-password"
                      placeholder="Patient's last name"
                      inputProps={{ 'aria-label': 'description' }} 
                      className={classes.inputSmall} />
                  </Grid>
                   <Grid item xs={12} sm={4}>
                    <FormLabel component="label" className={classes.formLabel}>Sickness</FormLabel>
                    <Input 
                      // onChange={(e) => setSickness(e.target.value)}
                      disableUnderline 
                      fullWidth
                      value={props.appointment.sickness}
                      autoComplete="new-password"
                      placeholder="Sickness"
                      inputProps={{ 'aria-label': 'description' }} 
                      className={classes.inputSmall} />
                  </Grid>
                   <Grid item xs={12} sm={4}>
                    <FormLabel component="label" className={classes.formLabel}>Contact</FormLabel>
                    <Input 
                      // onChange={(e) => setContact(e.target.value)}
                      disableUnderline 
                      fullWidth
                      value={props.appointment.contact}
                      autoComplete="new-password"
                      placeholder="Contact"
                      inputProps={{ 'aria-label': 'description' }} 
                      className={classes.inputSmall} />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <FormLabel component="label" className={classes.formLabel}>Gaurdian (If any) </FormLabel>
                    <Input 
                      // onChange={(e) => setGuardian(e.target.value)}
                      disableUnderline 
                      fullWidth
                      value={props.appointment.guardian}
                      autoComplete="new-password"
                      placeholder="Who is responisble for you Patient"
                      inputProps={{ 'aria-label': 'description' }} 
                      className={classes.inputSmall} />
                  </Grid>
                   <Grid item xs={12} sm={4}>
                    <FormLabel component="label" className={classes.formLabel}>Doctor</FormLabel>
                    <Select
                      // onChange={(e) => setDoctor(e.target.value)}
                      disableUnderline
                      fullWidth
                      value={props.appointment.doctor}
                      autoComplete="new-password"
                      displayEmpty
                      className={classes.inputSelect}
                      inputProps={{
                          "aria-label": "Choose a doc",
                      }}
                      >
                       <MenuItem  value="Dr. Fred" >Dr. Fred</MenuItem>
                       <MenuItem  value="Dr. Grace" >Dr. Grace</MenuItem>
                       <MenuItem  value="Dr. Karl" >Dr. Karl</MenuItem>
                       <MenuItem  value="Dr. Jessy" >Dr. Jessy</MenuItem>
                       <MenuItem  value="Dr. Hassan" >Dr. Hassan</MenuItem>
                       <MenuItem  value="Dr. Richard" >Dr. Richard</MenuItem>
                     
                    </Select>
                  </Grid>
	                <Grid item xs={12}>
	                  <FormLabel component="label" className={classes.formLabel}>Patient Status</FormLabel>
	                  <Input 
                      // onChange={(e) => setStatus(e.target.value)} 
                      value={props.appointment.status}
                      autoComplete="new-password" 
                      disableUnderline fullWidth  
                      type="number" 
                      placeholder="Short Description of patient condition at the time of admission" 
                      inputProps={{ 'aria-label': 'description' }} 
                      className={classes.inputSmall} 
                      multiline rows={3}/>
	                </Grid>
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
    messages: state.messages,
  });
export default connect(mapStateToProps, {
  update_case
})(View_appointments);
