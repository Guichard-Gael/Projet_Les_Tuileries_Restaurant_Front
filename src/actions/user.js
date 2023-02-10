// === action types for user

/** indicates if the content is loading */
export const SET_LOADING = 'SET_LOADING';

// = action form
/** change the value of one of the login form fields */
export const UPDATE_LOGIN_INPUT_FIELD = 'UPDATE_LOGIN_INPUT_FIELD';
/** reset the value of the login form fields + state */
export const CLEAR_LOGIN_FIELD = 'CLEAR_LOGIN_FIELD';
/** change the value of one of the singin form fields */
export const UPDATE_SINGIN_INPUT_FIELD = 'UPDATE_SINGIN_INPUT_FIELD';
/** change the value of one of the modify form fields */
export const UPDATE_MODIFY_INPUT_FIELD = 'UPDATE_MODIFY_INPUT_FIELD';
/** submit login form */
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
/** submit singin form */
export const SUBMIT_SINGIN = 'SUBMIT_SINGIN';
/** submit singin with succes */
export const SINGIN_SUCCES = 'SINGIN_SUCCES';
/** error message to display */
export const SET_USER_ERR_MSG = 'SET_USER_ERR_MSG';
/** reset the value of the singin form fields + state */
export const CLEAR_SINGIN_FIELD = 'CLEAR_SINGIN_FIELD';
/** submit modify form */
export const SUBMIT_MODIFY = 'SUBMIT_MODIFY';
/** submit modify with succes */
export const MODIFY_SUCCES = 'MODIFY_SUCCES';
/** submit delete account with succes */
export const DELETE_SUCCES = 'DELETE_SUCCES';

// = action user
/** save the identification token */
export const SAVE_AUTH_TOKEN = 'SAVE_AUTH_TOKEN';
/** sends the identification token to the server to retrieve the user's information */
export const GET_USER_INFO = 'GET_USER_INFO';
/** save the user information received from the jwt token */
export const SAVE_DATA_USER = 'SAVE_DATA_USER';
/** set isLogged to true */
export const USER_LOGGED = 'USER_LOGGED';
/** set isLogged to false */
export const USER_LOG_OUT = 'USER_LOG_OUT';
/** delete user account */
export const HANDLE_DELETE_ACCOUNT = 'HANDLE_DELETE_ACCOUNT';

// === action creators

/** indicates if the content is loading */
export const setLoading = (loading) => ({
  type: SET_LOADING,
  loading: loading,
});

// = form
/** change the value of one of the login form fields */
export const updateLoginInputField = (newValue, identifier) => ({
  type: UPDATE_LOGIN_INPUT_FIELD,
  newValue: newValue,
  identifier: identifier,
});

/** reset the value of the login form fields + state */
export const clearLoginField = () => ({
  type: CLEAR_LOGIN_FIELD,
});

/** change the value of one of the singin form fields */
export const updateSinginInputField = (newValue, identifier) => ({
  type: UPDATE_SINGIN_INPUT_FIELD,
  newValue: newValue,
  identifier: identifier,
});

/** change the value of one of the modify form fields */
export const updateModifyInputField = (newValue, identifier) => ({
  type: UPDATE_MODIFY_INPUT_FIELD,
  newValue: newValue,
  identifier: identifier,
});

/** submit login form */
export const submitLogin = () => ({
  type: SUBMIT_LOGIN,
});

/** submit singin form */
export const submitSingin = () => ({
  type: SUBMIT_SINGIN,
});

/** message send with succes */
export const singinSucces = (isSuccesSingin) => ({
  type: SINGIN_SUCCES,
  isSuccesSingin: isSuccesSingin,
});

/** error message to display */
export const setUserErrMsg = (userErrMsg) => ({
  type: SET_USER_ERR_MSG,
  userErrMsg: userErrMsg,
});

/** reset the value of the singin form fields + state */
export const clearSinginField = () => ({
  type: CLEAR_SINGIN_FIELD,
});

/** submit modify form */
export const submitModify = () => ({
  type: SUBMIT_MODIFY,
});

/** submit modify with succes */
export const modifySucces = (isModifySucces) => ({
  type: MODIFY_SUCCES,
  isModifySucces: isModifySucces,
});

// = user
/** save the identification token */
export const saveAuthToken = (tokenJWT) => ({
  type: SAVE_AUTH_TOKEN,
  tokenJWT: tokenJWT,
});

/** sends the identification token to the server to retrieve the user's information */
export const getUserInfo = () => ({
  type: GET_USER_INFO,
});

/** save the user information received from the jwt token */
export const saveDataUser = (userEmail, userLastName, userFirstName, userPhone, userCard) => ({
  type: SAVE_DATA_USER,
  userEmail: userEmail,
  userLastName: userLastName,
  userFirstName: userFirstName,
  userPhone: userPhone,
  userCard: userCard,
});

/** set isLogged to true */
export const userLogged = () => ({
  type: USER_LOGGED,
});

/** set isLogged to true */
export const userLogOut = () => ({
  type: USER_LOG_OUT,
});

/** delete user account */
export const handleDeleteAccount = () => ({
  type: HANDLE_DELETE_ACCOUNT,
});

/** delete user account */
export const deleteSucces = (isDeleteSucces) => ({
  type: DELETE_SUCCES,
  isDeleteSucces: isDeleteSucces,
});
