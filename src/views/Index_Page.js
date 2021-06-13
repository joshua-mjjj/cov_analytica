import React from 'react';
import { connect } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import PostAvatar from "../assets/images.jpeg";

import REVIEW_LIST from "./ReviewsContainer.js"
import { get_reviews } from "../actions/data_ops.js";

import Local from "../assets/house.svg";
import Mark from "../assets/checked.svg";
import Avatar from '@material-ui/core/Avatar';

import GuestNavBar from "../components/Header"
import Footer from "../components/Footer"


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
  head: {
    marginBottom: '48px',
    display: 'flex',
    alignItems: 'flex-start',
    [theme.breakpoints.down("770")]: {
      display: 'flex',
      marginBottom: '75px'
    }
  },
  avatar:{
    marginRight: '95px',
    width: '184px',
    maxWidth: '184px',
    textAlign: 'center',
    [theme.breakpoints.down("768")]: {
      width: '140px',
      maxWidth: '140px',
      marginRight: '30px',
    },
  },
  avatarImg:{
    width: '184px',
    maxWidth: '184px',
    height: '184px',
    maxHeight: '184px',
    [theme.breakpoints.down("768")]: {
      width: '140px',
      maxWidth: '140px',
      height: '100%',
    },
    "& > img": {
      width: '100%'
    }
  },
  numberStar: {
    marginLeft: '7px',
    fontFamily: 'Dosis',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '18px',
    lineHeight: '23px',
    color: '#000000',
  },
  starRatings: {
    marginTop: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down("768")]: {
      marginTop: '0px',
      position: 'relative',
      left: '90px',
      top: '10px'
    },
  },
  headInfo: {
    textAlign: 'left',
    width: '100%',
    [theme.breakpoints.down("770")]: {
      marginTop: '280px',
      display: 'none',
      marginLeft: '0px',
    },
  },
  servicesWraper: {
    width: '371px',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    [theme.breakpoints.down("1110")]: {
      width: '100%',
    },
    [theme.breakpoints.down("950")]: {
      flexDirection: 'column'
    },
  },
  headName: {
    marginTop: '20px',
    maxWidth: 'fit-content',
    marginBottom: '24px',
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
  headName_: {
    marginTop: '10px',
    maxWidth: 'fit-content',
    marginBottom: '6px',
    fontFamily: 'Dosis',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '26px',
    lineHeight: '36px',
    letterSpacing: '0.15px',
    color: '#222222',
    position: 'relative',
    [theme.breakpoints.down("768")]: {
      marginTop: 0,
      marginBottom: '4px',
      fontSize: '24px',
      lineHeight: '28px',
    },
  },
  headMark: {
    position: 'absolute',
    right: '-26px',
    top: '0',
    [theme.breakpoints.down("768")]: {
      right: '-26px',
      left: 'auto'
    },
  },
  headLocation: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  headLocationImg: {
    marginRight: '20px',
  },
  headLocationTitle: {
    fontFamily: 'Dosis',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '18px',
    lineHeight: '23px',
    color: '#383F45',
  },
  headLocationSubtitle: {
    fontFamily: 'Dosis',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '14px',
    lineHeight: '18px',
    color: '#4F4F4F',
  },
  headLocationBtn: {
    marginTop: '44px', 
    width: '149px',
    height: '41px',
    fontFamily: 'Dosis',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '24px',
    lineHeight: '30px',
    textAlign: 'center',
    color: '#FFFFFF',
    background: '#FF5722',
    borderRadius: '10px',
    border: 'none',
    outline: 'none',
    cursor: 'pointer',
    transition: 'background 0.4s',
    [theme.breakpoints.down("768")]: {
      marginTop: '12px', 
      fontSize: '20px',
      height: '36px',
    },
    "&:hover": {
      background: 'red',
    }
  },
  title: {
    marginBottom: '14px',
    fontFamily: 'Dosis',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '26px',
    lineHeight: '33px',
    textDecorationLine: 'underline',
    color: '#222222',
    [theme.breakpoints.down("768")]: {
      marginBottom: '5px',
      fontSize: '18px',
      lineHeight: '24px',
    },
  },
  description: {
    fontFamily: 'Averia Sans Libre',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '18px',
    lineHeight: '22px',
    color: '#383F45',
    [theme.breakpoints.down("768")]: {
      fontSize: '14px',
      lineHeight: '18px',
    },
  },
  services: {
    width: '100%',
    [theme.breakpoints.down("1110")]: {
      width: '40%',
    },
    [theme.breakpoints.down("950")]: {
      maxWidth: '140px'
    },
  },
  servicesItem: {
    marginBottom: '14px',
    padding: '11px 0px 8px 0px',
    width: 'calc((100% - 40px) / 2)',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    background: '#F2F2F2',
    border: '1px solid #E0E0E0',
    borderRadius: '10px',
    [theme.breakpoints.down("1110")]: {
      width: 'calc((100% - 20px) / 2)',
    },
    [theme.breakpoints.down("950")]: {
      width: '100%',
    },
    [theme.breakpoints.down("768")]: {
      padding: '5px 0px 5px 0px',
      marginBottom: '8px',
    },
  },
  servicesTitle: {
    marginBottom: '4px',
    fontFamily: 'Averia Sans Libre',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '32px',
    lineHeight: '40px',
    color: '#1B5E20',
    [theme.breakpoints.down("768")]: {
      fontSize: '24px',
      lineHeight: '28px',
    },
  },
  servicesPrice: {
    marginBottom: '13px',
    fontFamily: 'Dosis',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '14px',
    lineHeight: '23px',
    color: '#000000',
    [theme.breakpoints.down("768")]: {
      marginBottom: '5px',
    },
  },
  servicesBtn: {
    width: '91px',
    height: '25px',
    fontFamily: 'Dosis',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '14px',
    lineHeight: '18px',
    textAlign: 'center',
    color: '#FFFFFF',
    background: '#156981',
    borderRadius: '10px',
    border: 'none',
    outline: 'none',
    cursor: 'pointer',
    transition: 'background 0.4s',
    [theme.breakpoints.down("768")]: {
      width: '70px',
      height: '20px',
    },
    "&:hover": {
      background: '#88CCDD',
    }
  },
  contant: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    [theme.breakpoints.down("1110")]: {
      flexDirection: 'row-reverse'
    },
    [theme.breakpoints.down("950")]: {
      maxWidth: '680px',
      margin: '0 auto'
    },
  },
  contantInfo: {
    width: '100%',
    maxWidth: '564px',
    [theme.breakpoints.down("1250")]: {
      maxWidth: '50%',
    },
    [theme.breakpoints.down("950")]: {
      maxWidth: '500px',
      marginRight: '20px'
    },
  },
  about: {
    marginBottom: '76px',
    maxWidth: '444px',
    [theme.breakpoints.down("950")]: {
      marginBottom: '30px',
    },
  },
  post: {
    marginBottom: '34px',
    "&:last-child": {
      marginBottom: '28px',
    }
  },
  postHead: {
    marginBottom: '14px',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  postAvatar: {
    marginRight: '17px',
    maxHeight: '53px',
    maxWidth: '53px'
  },
  postAvatarImg: {
    width: '100%'
  },
  rating: {
    marginLeft: 'auto',
  },
  postHeadName: {
    marginBottom: '7px',
    fontFamily: 'Dosis',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '18px',
    lineHeight: '23px',
    color: '#383F45',
  },
  buttonAside: {
    fontFamily: 'Dosis',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '18px',
    lineHeight: '23px',
    color: '#828282',
  },
  postText: {
    fontFamily: 'Averia Sans Libre',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '18px',
    lineHeight: '22px',
    color: '#383F45',
    [theme.breakpoints.down("768")]: {
      fontSize: '14px',
      lineHeight: '18px',
    },
  },
  postsMore: {
    display: 'block',
    margin: '0 auto',
    width: '87px',
    height: '24px',
    fontFamily: 'Dosis',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '14px',
    lineHeight: '18px',
    textAlign: 'center',
    color: '#FFFFFF',
    background: '#BDBDBD',
    borderRadius: '10px',
    border: 'none',
    outline: 'none',
    cursor: 'pointer'
  },
   imageSelector: {
      fontSize: "8rem",
      width: theme.spacing(34),
      height: theme.spacing(34),
      paddingLeft: theme.spacing(0),
    }
   ,
   imageSelector_: {
      fontSize: "8rem",
      width: theme.spacing(8),
      height: theme.spacing(8),
      paddingLeft: theme.spacing(0),
    },
  buttons: {
    display: 'flex',
    width: '100%',
  },
}));

function Index_Page(props){
    const classes = useStyles();
  

  const book = (e) => {
	    window.location.href = `/petprovider`;
  }

  const redirect_reviews = (e) => {
      const current = "reviewing" 
      localStorage.setItem("current_route", current);
      window.location.href = `/reviews`;
  }

  const redirect_review_form = (e) => {
      localStorage.removeItem("current_route");
      window.location.href = `/reviews`;
  }

  const redirect_create = (e) => {
      const current = "create_case" 
      localStorage.setItem("current_route", current);
      window.location.href = `/create_case`;
  }

   React.useEffect(() => {
      props.get_reviews()
      localStorage.removeItem("current_route");
      // eslint-disable-next-line
  }, []);

    return (
        <div className={classes.root}>
             <div>
               <GuestNavBar />
            </div>
            <Container maxWidth="lg" className={classes.wizardContainer}>
              <div className={classes.page}>
                <div className={classes.head}>
                  <div className={classes.avatar}>
                    <div className={classes.avatarImg}>
                     {/*<img src={props.avatar} alt="avatar"/>*/} 
                      <Avatar className={classes.imageSelector} alt="profile picture" src={PostAvatar}/>
                    </div>
                    <div className={classes.starRatings}>
                    </div>
                  </div>
                  <div className={classes.headInfo}>
                    <h2 className={classes.headName}>
                      Manage your patients data 
	                      	<img className={classes.headMark} src={Mark} alt=""/>
                    </h2>
                    <h2 className={classes.headName_}>
                      Analyse your data
                    </h2>
                    <div className={classes.headLocation}>
                      <img className={classes.headLocationImg} src={Local} alt="local"/>
                      <div className={classes.headLocationText}>
                        <h2 className={classes.headLocationTitle}> CovAnalytica, Ug</h2>
                        <span className={classes.headLocationSubtitle}>Kampala</span>
                      </div>
                    </div>
                      <button className={classes.headLocationBtn} onClick={redirect_create} >Get Started</button>

                  </div>
                </div>
                <div className={classes.contant}>
                  <div className={classes.services}>
                    <div className={classes.title}>Covid Reseach Centers and Hospitals</div>
                    <div className={classes.servicesPrice}>Here are some of the Institutions accredited by the GOU to carry out covid Research and testing:</div>
                      <div className={classes.servicesWraper}>
		                      <div className={classes.servicesItem}>
		                        <div className={classes.servicesTitle}> IDI Lab</div>
		                        <div className={classes.servicesPrice}> <span>P.O.Box 22418,  </span>Kampala</div>
		                        <button type="button"  className={classes.servicesBtn}>041 4307000</button>
		                      </div>
				              
                          <div className={classes.servicesItem}>
                            <div className={classes.servicesTitle}>(UVRI) </div>
                            <div className={classes.servicesPrice}> <span>51/59 Nakiwogo Rd,  </span>Entebbe</div>
                            <button type="button" onClick={book} className={classes.servicesBtn}>041 4320385 </button>
                          </div>
                          <div className={classes.servicesItem}>
                            <div className={classes.servicesTitle}> (JCRC)</div>
                            <div className={classes.servicesPrice}> <span>P.o.Box 10005,</span>Kampala</div>
                            <button type="button" onClick={book} className={classes.servicesBtn}> 041 7723000</button>
                          </div>
                          <div className={classes.servicesItem}>
                            <div className={classes.servicesTitle}>MBN Lab</div>
                            <div className={classes.servicesPrice}> <span>Plot 28 Nakasero Rd, </span>Kampala</div>
                            <button type="button" onClick={book} className={classes.servicesBtn}> 041 4533951</button>
                          </div>

                          <div className={classes.servicesItem}>
                            <div className={classes.servicesTitle}>MBN Lab</div>
                            <div className={classes.servicesPrice}> <span>Plot 28 Nakasero Rd, </span>Kampala</div>
                            <button type="button" onClick={book} className={classes.servicesBtn}> 041 4533951</button>
                          </div>
                          <div className={classes.servicesItem}>
                            <div className={classes.servicesTitle}>IOM Lab</div>
                            <div className={classes.servicesPrice}> <span>Plot 6A Bukoto Crescent, </span>Naguru</div>
                            <button type="button" onClick={book} className={classes.servicesBtn}> 031 2263210</button>
                          </div>
                          <div className={classes.servicesItem}>
                            <div className={classes.servicesTitle}>Lancet Lab</div>
                            <div className={classes.servicesPrice}> <span>Plot 1 Kyadondo road, </span>Kampala</div>
                            <button type="button" onClick={book} className={classes.servicesBtn}> 041 4341621</button>
                          </div>
                          <div className={classes.servicesItem}>
                            <div className={classes.servicesTitle}>CPHL Lab</div>
                            <div className={classes.servicesPrice}> <span>Old Butabika Rd, </span>Kampala</div>
                            <button type="button" onClick={book} className={classes.servicesBtn}> 0800 221100</button>
                          </div>
                      </div>

                  </div>
                  <div className={classes.contantInfo}>
                  <div className={classes.about}>
                    <div className={classes.title}>About</div>
                    <div className={classes.description}>
                      CovAnalytica is a cutting egde tool to help you store, retrive and analyse data about your covid patients.
                      With us your data is safe and secure. With covid 19 around the world, we need high tech data analysis tools like CovAnalytica to help us serve our data needs and requirements.
                    </div>

                  </div>
                  <div className={classes.reviews}>  
                        <div>
                         <REVIEW_LIST data={props.reviews} limit={true} /> 
                       </div>

                    {
                      props.loading ? 
                      (null) 
                      : (<div className={classes.buttons} >
                          <button 
                          className={classes.postsMore}
                          onClick={redirect_reviews} 
                          type="button">MORE</button>
                          <button 
                          className={classes.postsMore}
                          onClick={redirect_review_form} 
                          type="button">ADD</button>
                        </div>)
                    }
                  </div>
                  </div>
                </div>
              </div>
            </Container>
            <Footer/>
        </div>
    );
}

const mapStateToProps = (state) => ({
    cases: state.data_ops.cases_data,
    loading: state.data_ops.isLoading,
    reviews: state.data_ops.reviews,
    appointment: state.appointment,
    messages: state.messages,
  });
export default connect(mapStateToProps, {
  get_reviews,
})(Index_Page);


