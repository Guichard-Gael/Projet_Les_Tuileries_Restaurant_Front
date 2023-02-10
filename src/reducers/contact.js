import {
  SET_LOADING, SAVE_CONTACT_CONTENT, UPDATE_CONTACT_INPUT_FIELD, SAVE_CSRF_TOKEN, SEND_SUCCES,
  SET_CONTACT_ERR_MSG, RESET_MSG_FIELD,
} from '../actions/contact';

export const initialState = {
  // indicates if the content is loading
  loading: true,
  // content to display
  contactContent: [],
  // content of the lastname field
  lastnameContact: '',
  // content of the firstname field
  firstnameContact: '',
  // content of the e-mail field
  mailContact: '',
  // content of the subject field
  subjectContact: '',
  // content of the message field
  messageContact: '',
  // token CSRF
  tokenCSRF: '',
  // if message is send
  isSend: false,
  // error message
  contactErrMsg: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: action.loading,
      };

    case SAVE_CONTACT_CONTENT:
      return {
        ...state,
        contactContent: action.contactContent,
      };

    case RESET_MSG_FIELD:
      return {
        ...state,
        lastnameContact: '',
        firstnameContact: '',
        mailContact: '',
        subjectContact: '',
        messageContact: '',
      };

    case SEND_SUCCES:
      return {
        ...state,
        isSend: action.isSend,
      };

    case SET_CONTACT_ERR_MSG:
      return {
        ...state,
        contactErrMsg: action.contactErrMsg,
      };

    case UPDATE_CONTACT_INPUT_FIELD:
      return {
        ...state,
        [action.identifier]: action.newValue,
      };

    case SAVE_CSRF_TOKEN:
      return {
        ...state,
        tokenCSRF: action.tokenCSRF,
        contentLoaded: true,
      };

    default:
      return state;
  }
};

export default reducer;
