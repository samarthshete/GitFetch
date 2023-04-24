import { GET_USER , GET_FOLLOWERS, GET_REPO, } from "./action";



const reducer = (state, action) => {
  if (action.type === GET_USER) {
    return {
      ...state,
      user: action.payload,
    };
  }

  if( action.type ===  GET_REPO){

    return{
       ...state,
       repos:action.payload
    }
  }
  if( action.type === GET_FOLLOWERS){

    return{
      ...state,
      followers: action.payload
    }
  }
  throw new Error(`no such action :${action.type}`);
};
export default reducer;
