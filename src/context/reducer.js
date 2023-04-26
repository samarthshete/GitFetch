import {
  GET_USER,
  GET_FOLLOWERS,
  GET_REPO,
  GET_USER_BEGIN,
  DISPLAY_ALERT,
  CLEAR_ALERT,
  GET_USER_ERROR
} from "./action";

const reducer = (state, action) => {
  if (action.type === DISPLAY_ALERT) {
    return {
      ...state,
      showAlert: true,
      alertType: "danger",
      alertText: "Please provide all values!",
    };
  }
  if (action.type === CLEAR_ALERT) {
    return {
      ...state,
      showAlert: false,
      alertType: "",
      alertText: "",
    };
  }
  if (action.type === GET_USER_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === GET_USER) {
    return {
      ...state,
      isLoading: false,
      user: action.payload,
      showAlert: true,
      alertType: "success",
      alertText: action.payload.alertText,
    };
  }
  if (action.type === GET_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'danger',
      alertText: action.payload.msg,
    };
  }
  if (action.type === GET_REPO) {
    return {
      ...state,
      repos: action.payload,
    };
  }
  if (action.type === GET_FOLLOWERS) {
    return {
      ...state,
      followers: action.payload,
    };
  }
  throw new Error(`no such action :${action.type}`);
};
export default reducer;
