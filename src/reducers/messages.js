import { 

 CREATE_MESSAGE,

} from "../actions/types";

 const initialState = {
 	message: null,
 	message_type: null
 }

 export default function messages(state=initialState, action) {
 	switch(action.type) {
 		case CREATE_MESSAGE:
 				return {
				...state,
				message: action.payload,
				message_type: action.message_type

			}
 		default:
 			return state;
 	}
 }