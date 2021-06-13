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

} from '../actions/types';

const initialState = {
	isLoading: false,
	loading_submit: false,
	case: null,
	appointment: null,
	review: null,
	cases_data: {},
	updated: {},
	appointments: {},
	reviews: {}
}

export default function data_ops(state=initialState, action) {
	switch(action.type){
		case LOADING:
			return {
					...state,
					isLoading: true
				}
		case LOADING_SUBMIT:
			return {
					...state,
					loading_submit: true
				}		
		case CASES_LOADED:
			return {
					...state,
					isLoading: false,
					loading_submit: false,
					cases_data: action.payload,
				}
		case REVIEWS_LOADED:
			return {
					...state,
					isLoading: false,
					loading_submit: false,
					reviews: action.payload,
				}
		case APPOINTMENTS_LOADED:
			return {
					...state,
					isLoading: false,
					loading_submit: false,
					appointments: action.payload,
				}
		case UPDATE_CASE:
			return {
					...state,
					isLoading: false,
					loading_submit: false,
					updated: action.payload,
				}
		case STOP_LOADING:
			return {
					...state,
					isLoading: false,
					loading_submit: false,

				}	
		case CREATE_CASE:
			return {
				...state,
				case: action.payload,
				isLoading: false,
				loading_submit: false,
			}
		case CREATE_REVIEW:
			return {
				...state,
				review: action.payload,
				isLoading: false,
				loading_submit: false,
			}
		case CREATE_APPOINTMENT:
			return {
				...state,
				appointment: action.payload,
				isLoading: false,
				loading_submit: false,
			}
		default:
			return state;
	}
}
