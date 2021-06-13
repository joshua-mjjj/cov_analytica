import axios from "axios";
// import { returnError } from "./errors";
import { createMessage } from "./messages";

import {

  CREATE_CASE,
  LOADING,
  CREATE_APPOINTMENT,
  CREATE_REVIEW,
  STOP_LOADING,
  CASES_LOADED,
  UPDATE_CASE,
  APPOINTMENTS_LOADED,
  REVIEWS_LOADED,
  LOADING_SUBMIT

} from "./types";

// CREATE CASE
export const create_case = ({ first_name, last_name, status, contact, guardian, age_bracket, location }) => (dispatch) => {
  // Loading
  dispatch({ type: LOADING });

  // Request Body
  const body = JSON.stringify({
    first_name,
    last_name,
    status,
    contact,
    guardian,
    age_bracket,
    location
  });

  // console.log(body)

  axios
    .post(`${process.env.REACT_APP_API_URL}cases/`, body, api_config())
    .then((res) => {
       // console.log(res);
       dispatch({
        type: CREATE_CASE,
        payload: res.data,
      });
      dispatch(
        createMessage("New case successfully created.", "success")
      );
    })
    .catch((err) => {
        console.log(err)
        dispatch({ type: STOP_LOADING }); 
        createMessage("Sorry, an error occured while creating that case, try again in a few!", "error")
      });
};

// CREATE APPOINTMENT
export const create_appointment = ({ full_name, location, sickness, contact, guardian, doctor, status }) => (dispatch) => {
  // Loading
  dispatch({ type: LOADING });

  // Request Body
  const body = JSON.stringify({
    full_name, 
    location, 
    sickness, 
    contact, 
    guardian, 
    doctor, 
    status
  });

  // console.log(body)

  axios
    .post(`${process.env.REACT_APP_API_URL}appointments/`, body, api_config())
    .then((res) => {
       // console.log(res);
       dispatch({
        type: CREATE_APPOINTMENT,
        payload: res.data,
      });
      dispatch(
        createMessage("New appointment successfully created.", "success")
      );
    })
    .catch((err) => {
        console.log(err)
        dispatch({ type: STOP_LOADING });
        createMessage("Sorry, an error occured while creating that appointment, try again in a few!", "error")
      });
};

// CREATE REVIEW
export const create_review = (data) => (dispatch) => {
  // Loading
  // dispatch({ type: LOADING });
  dispatch({ type: LOADING_SUBMIT });

  axios
    .post(`${process.env.REACT_APP_API_URL}reviews/`, data, api_config())
    .then((res) => {
        console.log(res);
       dispatch({
        type: CREATE_REVIEW,
        payload: res.data,
      });
      dispatch(
        createMessage("Your review has been added.", "success")
      );
    })
    .catch((err) => {
         console.log(err)
         dispatch({ type: STOP_LOADING });
         createMessage("Sorry, an error occured while creating that review, try again in a few!", "error")
      });
};

// GET CASES
export const get_cases = () => async (dispatch) => {
  dispatch({ type: LOADING });

  await axios
    .get(
      `${process.env.REACT_APP_API_URL}cases/`,
    )
    .then((res) => {
      // console.log(res);
      dispatch({
        type: CASES_LOADED,
        payload: res.data,
      });
    })
    .catch((e) => {
      dispatch({ type: STOP_LOADING });
      console.log(e);
    });
};

// GET APPOINTMENTS
export const get_appointments = () => async (dispatch) => {
  dispatch({ type: LOADING });

  await axios
    .get(
      `${process.env.REACT_APP_API_URL}appointments/`,
    )
    .then((res) => {
      // console.log(res);
      dispatch({
        type: APPOINTMENTS_LOADED,
        payload: res.data,
      });
    })
    .catch((e) => {
      dispatch({ type: STOP_LOADING });
      console.log(e);
    });
};

// GET REVIEWS
export const get_reviews = () => async (dispatch) => {
  dispatch({ type: LOADING });

  await axios
    .get(
      `${process.env.REACT_APP_API_URL}reviews/`,
    )
    .then((res) => {
      // console.log(res);
      dispatch({
        type: REVIEWS_LOADED,
        payload: res.data,
      });
    })
    .catch((e) => {
      dispatch({ type: STOP_LOADING });
      console.log(e);
    });
};

// CREATE CASE
export const update_case = ({ first_name, last_name, status, contact, guardian, age_bracket, location, id }) => (dispatch) => {
  // Loading
  dispatch({ type: LOADING });

  // Request Body
  const body = JSON.stringify({
    first_name,
    last_name,
    status,
    contact,
    guardian,
    age_bracket,
    location
  });

   // console.log(body)

  axios
    .put(`${process.env.REACT_APP_API_URL}cases/${id}/`, body, api_config())
    .then((res) => {
       // console.log(res);
       dispatch({
        type: UPDATE_CASE,
        payload: res.data,
      });
      dispatch(
        createMessage("Case successfully updated.", "success")
      );
    })
    .catch((err) => {
        console.log(err)
        dispatch({ type: STOP_LOADING }); 
        createMessage("Sorry, an error occured while updating that case, try again in a few!", "error")
      });
};

// DELETE CASE
export const delete_case = (id) => (dispatch) => {
  // Loading
  dispatch({ type: LOADING_SUBMIT });

  axios
    .delete(`${process.env.REACT_APP_API_URL}cases/${id}/`, api_config())
    .then((res) => {
      // dispatch({ type: STOP_LOADING }); 
      dispatch(
        createMessage("Case successfully deleted.", "success")
      );
    })
    .catch((err) => {
        console.log(err)
        // dispatch({ type: STOP_LOADING }); 
        createMessage("Sorry, an error occured while deleting that case, try again in a few!", "error")
      });
};



// setup config headers - helper function
export const api_config = () => {
  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  return config;
};


