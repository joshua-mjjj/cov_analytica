import React from 'react';
import { connect } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import { get_cases } from "../actions/data_ops.js";

import VIEW_REVIEWS from './View_Reviews'

import Loading_spin from "../assets/loading.gif";

const useStyles = makeStyles((theme) => ({
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
      title: {
        marginBottom: '14px',
        marginTop: '10px',
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
}));

function ReviewsContainer(props){
    const classes = useStyles();
    
    // console.log(props.data)
    const reviews = props.data;
    const len = reviews.length;
    if(len > 1){
      reviews.sort((a, b) => (a.id > b.id) ? 1 : -1)
    }

    if(props.limit === true){
            return (
              <div className={classes.contant}>
                <div className={classes.contantInfo}>
                <div className={classes.reviews}>
                  <div className={classes.title}>Reviews</div>
                      {
                        reviews.length !== undefined ? 
                        (<div>
                           {reviews.slice(0, 3).map((index_case, i) => (
                            <VIEW_REVIEWS review={index_case} key={i}/>
                         )).reverse()}
                        </div>
                        ) : (<div className={classes.spinner} ><img src={Loading_spin} alt="" height="100px" width="100px" /></div> )
                      }
                      {
                          reviews.length === 1 || reviews.length === 2 ? 
                            (
                              <div className={classes.spacing}>
                                <br/>
                              </div>
                            ) : null
                        }
                        {
                          reviews.length === 0 ? 
                            (
                              <div className={classes.spacing}>
                                <h5 className={classes.headName}>
                                   No reviews yet.
                                </h5>
                                <br/>
                              </div>
                            ) : null
                        }
                </div>
                </div>
              </div>
          );
  }
    return (
        <div className={classes.contant}>
          <div className={classes.contantInfo}>
          <div className={classes.reviews}>
            <div className={classes.title}>Reviews</div>
                {
                  reviews.length !== undefined ? 
                  (<div>
                     {reviews.map((index_case, i) => (
                      <VIEW_REVIEWS review={index_case} key={i}/>
                   )).reverse()}
                  </div>
                  ) : (<div className={classes.spinner} ><img src={Loading_spin} alt="" height="100px" width="100px" /></div> )
                }
                {
                    reviews.length === 1 || reviews.length === 2 ? 
                      (
                        <div className={classes.spacing}>
                          <br/>
                        </div>
                      ) : null
                  }
                  {
                    reviews.length === 0 ? 
                      (
                        <div className={classes.spacing}>
                          <h5 className={classes.headName}>
                             No reviews yet.
                          </h5>
                          <br/>
                        </div>
                      ) : null
                  }
          </div>
          </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    cases: state.data_ops.cases_data,
    appointment: state.appointment,
    messages: state.messages,
  });
export default connect(mapStateToProps, {
  get_cases
})(ReviewsContainer);


