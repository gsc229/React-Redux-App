import axios from 'axios';
//these will be imported to reducer
export const START_FETCHING = 'START_FETCHING';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

// action creators are by default syncronous. If you wanted to do some aysnc action, you have to do that action FIRST BEFORE RETURNING AN OBJECT
export const fetchBreweries = () => dispatch => {
  dispatch({ type: START_FETCHING });
  // do some async action and dispatch error or success action
  axios
    .get(`https://api.openbrewerydb.org/breweries`)

    .then(res => dispatch({ type: FETCH_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: FETCH_FAILURE, payload: err.response }));
};

/* 

same as above ^^^^ w/o implicit return ^^^^
const fetchBrewery = () => {
  return dispatch => {
    dispatch({ type: START_FETCHING });
    // do some async action and dispatch error or success action
    axios
      .get(`https://api.openbrewerydb.org/breweries`)
      .then(res => dispatch({ type: FETCH_SUCCESS, payload: res.data }))
      .catch(err => dispatch({ type: FETCH_FAILURE, payload: err.response }));
  };
}; */

//making action creators do async things can be done through redux-thunk !!! (all midleware functions look like this.)
/* 
  this is being used to illustrate the top ^^^ function
const thunk = next => action => store => {
  if (typeof action === 'object') {
    next(action); // forward action untouched
  } else if (typeof action === 'function') {
    action(store.dispatch); // if a function, stop the action and call the function. Won't forward action to the reducer
  }
}; */
