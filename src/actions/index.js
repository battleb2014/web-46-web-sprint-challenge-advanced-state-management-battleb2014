import axios from 'axios';

export const FETCH_SMURF = 'FETCH_SMURF';
export const FETCH_SMURF_API = 'FETCH_SMURF_API';
export const FAILED_SMURF_API = 'FAILED_SMURF_API';
export const ADD_SMURF = 'ADD_SMURF';
export const ADD_ERROR_MESSAGE = 'ADD_ERROR_MESSAGE';

export const fetchSmurfs = () => {
    return( dispatch ) => {
        dispatch(fetchSmurf);

        axios.get('http://localhost:3333/smurfs')
        .then(res => {
            dispatch(fetchAllSmurfs(res.data));
        })
        .catch(err => {
            dispatch(failedSmurf(err))
        })
    }
}

export const fetchSmurf = () => ({ type: FETCH_SMURF });
export const fetchAllSmurfs = ( smurfs ) => ({ type: FETCH_SMURF_API, payload: smurfs });
export const failedSmurf = ( error ) => ({ type: FAILED_SMURF_API, payload: error });
export const addSmurf = ( smurf ) => ({ type: ADD_SMURF, payload: smurf });
export const addError = ( error ) => ({ type:ADD_ERROR_MESSAGE, payLoad: error });

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.