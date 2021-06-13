import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

// import Select from "@material-ui/core/Select";
// import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import Collapse from '@material-ui/core/Collapse';
import Alert from "@material-ui/lab/Alert";
import CloseIcon from '@material-ui/icons/Close';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Input from '@material-ui/core/Input';
import Container from '@material-ui/core/Container';
import Dialog from "../components/Dialog.js";
// import Spinner from "../components/Spinner";
import Loading_spin from "../assets/loading.gif";
import { create_review, get_reviews } from "../actions/data_ops.js";
import { useDispatch } from "react-redux";
import { createMessage } from "../actions/messages";
import FolderIcon from '@material-ui/icons/Folder';
import AddIcon from '@material-ui/icons/Add';
import Avatar from '@material-ui/core/Avatar';
import * as Scroll from 'react-scroll';

var scroll = Scroll.animateScroll;
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
      margin: theme.spacing(0, 'auto'),
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
    marginTop: theme.spacing(1),
  },
  showServiceSection:{
    marginTop: theme.spacing(1),
  },
   message: {
     marginBottom: theme.spacing(2),
  },
  imageSelector_: {
      fontSize: "8rem",
      width: theme.spacing(13),
      height: theme.spacing(13),
      paddingLeft: theme.spacing(0),
      marginTop: '20px',
    },
   head: {
    display: 'flex',
    alignItems: 'flex-start',
    [theme.breakpoints.down("770")]: {
      display: 'flex',
      marginBottom: '2px'
    }
  },
  head_: {
  	marginLeft: '10px',
  	marginTop: '29px',
  }
}));


function Create_review(props){
  const classes = useStyles();

  const [first_name,   setFirstname]    = React.useState("");
  const [last_name,    setLastname]     = React.useState("");
  const [contact,      setContact]      = React.useState("");
  const [comment,      setComment]      = React.useState("");
  const [photo,        setPhoto]        = React.useState("");
  const [notification, setNotification] = React.useState(true);

  const clearState = () => {
    setFirstname("");
	setLastname("");
	setContact("");
	setComment("");
	setPhoto("");
  }

 const handleSubmit = () => {
 	if(first_name && last_name && comment && photo){
      const review_object = new FormData();
      review_object.append('photo', photo, photo.name);
      review_object.append('first_name', first_name);
      review_object.append('last_name', last_name);
      review_object.append('comment', comment);
      review_object.append('contact', contact);

	   props.create_review(review_object);
	   setNotification(true);
	   clearState() 
       scroll.scrollToTop();
	}else{
		setNotification(true);
		dispatch(createMessage("Please fill in all the required fields!", "error"));
	}
}
   const dispatch = useDispatch();
   const setting = (image) =>  {
    if(image){
      setPhoto(image)
      // console.log(image)
    }
  }

  const clear_actions = () => {
  	setNotification(false);
  	props.fetch_again()
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
	              <FormLabel component="label" className={classes.formGroupLabel}>Add comment</FormLabel>
	              <Grid container spacing={2}>
                 <Grid item xs={12} sm={4}>
                    <FormLabel component="label" className={classes.formLabel}>First Name</FormLabel>
                    <Input 
                      onChange={(e) => setFirstname(e.target.value)}
                      disableUnderline 
                      fullWidth
                      value={first_name}
                      autoComplete="new-password"
                      placeholder="Patient's first name"
                      inputProps={{ 'aria-label': 'description' }} 
                      className={classes.inputSmall} />
                  </Grid>
                   <Grid item xs={12} sm={4}>
                    <FormLabel component="label" className={classes.formLabel}>Last Name</FormLabel>
                    <Input 
                      onChange={(e) => setLastname(e.target.value)}
                      disableUnderline 
                      fullWidth
                      value={last_name}
                      autoComplete="new-password"
                      placeholder="Patient's first name"
                      inputProps={{ 'aria-label': 'description' }} 
                      className={classes.inputSmall} />
                  </Grid>
                   <Grid item xs={12} sm={4}>
                    <FormLabel component="label" className={classes.formLabel}>Contact (optional) </FormLabel>
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
                    <FormLabel component="label" className={classes.formLabel}>Upload avatar</FormLabel>
                    <div className={classes.head}>
	                    {
		                    photo ? 
		                    (  
		                     <div> 
		                        <Avatar className={classes.imageSelector_} alt="profile picture" src={URL.createObjectURL(photo)}/>
		                      </div>
		                    ) : 
		                    (
		                      <Avatar className={classes.imageSelector_} >
		                        <FolderIcon /> <AddIcon/>
		                      </Avatar> 
		                    )
	                    }
	                   <div className={classes.head_}>
	                   	 <Dialog setting={setting} />
	                   </div>
                     </div>
                  </Grid>
                   
	                <Grid item xs={12}>
	                  <FormLabel component="label" className={classes.formLabel}>Comment</FormLabel>
	                  <Input 
                      onChange={(e) => setComment(e.target.value)} 
                      value={comment} 
                      autoComplete="new-password" 
                      disableUnderline fullWidth  
                      type="number" 
                      placeholder="Your review" 
                      inputProps={{ 'aria-label': 'description' }} 
                      className={classes.inputSmall} 
                      multiline rows={3}/>
	                </Grid>
	              </Grid>
	            </FormGroup>
	          </div>
	        </div>
	         
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
	                      className={classes.submitButton}
	                    >
	                    {/* props.progress ? <Spinner /> : "Add service" */}
	                    { props.cases.isLoading && props.cases.loading_submit ? <img src={Loading_spin} alt="" height="30px" width="30px" /> : "Add review" }
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
    cases:       state.data_ops,
    data:        state.data_ops.reviews,
    appointment: state.appointment,
    messages:    state.messages,
  });

export default connect(mapStateToProps, {
    create_review, get_reviews
  })(Create_review);
