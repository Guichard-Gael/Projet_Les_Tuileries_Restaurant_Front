// === action types for contact form

/** indicates if the content is loading */
export const SET_LOADING = 'SET_LOADING';
/** call the api at contact page loading */
export const FETCH_CONTACT_CONTENT = 'FETCH_CONTACT_CONTENT';
/** save contact page content from the api */
export const SAVE_CONTACT_CONTENT = 'SAVE_CONTACT_CONTENT';
/** save CSRF token */
export const SAVE_CSRF_TOKEN = 'SAVE_CSRF_TOKEN';
/** change the value of one of the contact form fields */
export const UPDATE_CONTACT_INPUT_FIELD = 'UPDATE_CONTACT_INPUT_FIELD';
/** send the content of the message to the restaurant */
export const SUBMIT_CONTACT = 'SUBMIT_CONTACT';
/** message send with succes */
export const SEND_SUCCES = 'SEND_SUCCES';
/** error message to display */
export const SET_CONTACT_ERR_MSG = 'SET_CONTACT_ERR_MSG';
/** reset contact form */
export const RESET_MSG_FIELD = 'RESET_MSG_FIELD';

// === action creators
/** indicates if the content is loading */
export const setLoading = (loading) => ({
  type: SET_LOADING,
  loading: loading,
});

/** call the api at contact page loading */
export const fetchContactContent = () => ({
  type: FETCH_CONTACT_CONTENT,
});

/** reset contact form */
export const resetMsgField = () => ({
  type: RESET_MSG_FIELD,
});

/** save contact page content from the api */
export const saveContactContent = (contactContent) => ({
  type: SAVE_CONTACT_CONTENT,
  contactContent: contactContent,
});

/** message send with succes */
export const sendSucces = (isSend) => ({
  type: SEND_SUCCES,
  isSend: isSend,
});

/** error message to display */
export const setContactErrMsg = (contactErrMsg) => ({
  type: SET_CONTACT_ERR_MSG,
  contactErrMsg: contactErrMsg,
});

/** save CSRF token */
export const saveCSRFToken = (tokenCSRF) => ({
  type: SAVE_CSRF_TOKEN,
  tokenCSRF: tokenCSRF,
});

/** change the value of one of the contact form fields */
export const updateContactInputField = (newValue, identifier) => ({
  type: UPDATE_CONTACT_INPUT_FIELD,
  newValue: newValue,
  identifier: identifier,
});

/** send the content of the message to the restaurant */
export const submitContact = () => ({
  type: SUBMIT_CONTACT,
});
