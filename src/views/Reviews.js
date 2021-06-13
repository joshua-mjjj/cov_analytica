import React from 'react';
import { connect } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
// import {useState} from 'react';
// import Avatar from "../assets/avatar-01.png";
//import PostAvatar from "../assets/images.jpeg";


import GuestNavBar from "../components/Header"
import Footer from "../components/Footer"
import CREATE_REVIEW from "./Create_review.js"
import REVIEW_LIST from "./ReviewsContainer.js"
import { get_reviews } from "../actions/data_ops.js";
import * as Scroll from 'react-scroll';

var scroll = Scroll.animateScroll;

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    minHeight: '100vh',
    paddingTop: '73px',
    background: "#4169E1",
  },
  page: {
    padding: '45px 92px 44px 107px',
    width: '100%',
    background: 'white',
    minHeight: '400px',
    borderRadius: '10px',
    overflow: 'hidden',
    [theme.breakpoints.down("768")]: {
      maxWidth: '375px',
      margin: '0 auto',
      padding: '45px 20px 44px 20px'
    },
  },
}));

function Reviews(props){
    const classes = useStyles();

   React.useEffect(() => {
   	  props.get_reviews()
      const current = "reviewing" 
      if(localStorage.getItem("current_route") === current){
      	scroll.scrollTo(555);
      }
       // eslint-disable-next-line
  }, []);

   const fetch_again = () => {
   	   props.get_reviews()
   	   window.location.reload();
   }

    return (
        <div className={classes.root}>
             <div>
               <GuestNavBar />
            </div>
            <Container maxWidth="lg" className={classes.wizardContainer}>
              <div className={classes.page}>
                 <div className={classes.reviews}> 
                    <div className={classes.posts}>
                    	<div>
		                   <CREATE_REVIEW fetch_again={fetch_again} />	
		                </div>
                    </div>
                   
                  </div>
          		  <div>
	                 <REVIEW_LIST data={props.reviews} limit={false}/>	
	               </div>
	          </div>
            </Container>
            <Footer/>
        </div>
    );
}

const mapStateToProps = (state) => ({
    cases: state.data_ops.cases_data,
    reviews: state.data_ops.reviews,
    appointment: state.appointment,
    messages: state.messages,
  });
export default connect(mapStateToProps, {
  get_reviews,
})(Reviews);


