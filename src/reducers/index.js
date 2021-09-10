import { FETCH_SMURF, FETCH_SMURF_API, FAILED_SMURF_API, ADD_SMURF, ADD_ERROR_MESSAGE } from '../actions';

const initialState = {
    smurfs: [],
    loading: false,
    error: ''
}

const reducer = ( state = initialState, action ) =>{
    switch( action.type ) {
        case ( FETCH_SMURF ):
            return({
                ...state,
                smurfs: [],
                loading: true,
                error: ''
            });
        case ( FETCH_SMURF_API ): 
            return({
                ...state,
                smurfs: action.payload,
                loading: false,
                error: ''
            });
        case ( FAILED_SMURF_API ):
            return({
                ...state,
                smurfs: '',
                loading: false,
                error: action.payload
            });
        case ( ADD_SMURF ): // including the name, nickname, position, description and an internally generated id
            return({
                ...state,
                smurfs: [
                     ...state.smurfs, 
                     {
                        id: Date.now(),
                        name: state.smurfs.name,
                        nickname: state.smurfs.nickname,
                        position: state.smurfs.position,
                        description: state.smurfs.description
                    } 
                ],
                loading: false,
                error: ''
            });
        case ( ADD_ERROR_MESSAGE ):
            return({
                ...state,
                smurfs: [],
                loading: false,
                error: 'Error:  SORRY, THAT ACTION CAN\'T BE COMPLETED'
            });
        default:
            return state;
    }
}

//**************DO NOT EDIT ANY CODE BEYOND THIS POINT**************//
export default reducer;

//Task List:
//1. Adds the following state values into the initialState:
//  - an array of smurfs
//  - a boolean indicating if the app is loading
//  - a string indicating a possible error message

//2. Add in the arguments needed to complete a standard reducer function.
//3. Add in a reducer case to accomidate the start of a smurf fetch.
//4. Add in a reducer case to accomidate the successful smurf api fetch.
//5. Add in a reducer case to accomidate the failed smurf api fetch.
//6. Add in a reducer case to accomidate adding a smurf (including the name, nickname, position, summary and an internally generated id) into your smurf list.
//7. Add in a reducer case that adds in a value to the error message.