import React from 'react';
// import { connect } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';


// import Local from "../assets/house.svg";
// import Mark from "../assets/checked.svg";
import Avatar from '@material-ui/core/Avatar';

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
    alignItems: 'flex-start'
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
    width: '100%'
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
      background: '#88CCDD',
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
        width: theme.spacing(26),
      height: theme.spacing(26),
      paddingLeft: theme.spacing(0),
    }
   ,
   imageSelector_: {
        fontSize: "8rem",
        width: theme.spacing(8),
      height: theme.spacing(8),
      paddingLeft: theme.spacing(0),
    }
}));

export default function View_Reviews(props){
    const classes = useStyles();

    const min = 1;
    const max = 5;
    const rand = (min + Math.random() * (max - min)).toFixed(0);

    return (
        <div className={classes.contant}>
          <div className={classes.contantInfo}>
          <div className={classes.reviews}>
            <div className={classes.posts}>

              <div className={classes.post}>
                <div className={classes.postHead} >
                  <div className={classes.postAvatar}>
                    <Avatar className={classes.imageSelector_} alt="profile picture" src={props.review.photo}/>
                  </div>
                  <div className={classes.postHeadInfo}>
                    <h2 className={classes.postHeadName}>{props.review.first_name} {props.review.last_name}</h2>
                    <p className={classes.postHeadStatus}>{rand} days ago</p>
                  </div>
                  <div className={classes.rating}>
                   
                    </div>
                </div>
                  <p className={classes.postText}>
					 {props.review.comment}
                  </p>
              </div>
            </div>
          </div>
          </div>
        </div>
    );
}


