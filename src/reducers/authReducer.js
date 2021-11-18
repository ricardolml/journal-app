import { types } from "../types/types";

// const initialState = {
//     uid : 122121,
//     name : 'Ricardo',
//     dir : {
//         b : 12
//     }
// }

export const authReducer = ( state = {} , action ) => {

    switch ( action.type ) {
        case types.login:            
            return {
                uid : action.payload,
                name : action.payload.displayName
            }

        case types.logout : 
            return {}
        default:
            return state;
    }
}