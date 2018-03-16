import * as types from "./types";

const questionsReducer = (state = null, action) => {
  if(action.type === 'app/GET_QUESTIONS'){
    return action.payload.data;
  }

  return state; 
};

export default questionsReducer;

