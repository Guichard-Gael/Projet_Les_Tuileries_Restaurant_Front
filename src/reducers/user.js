import {
  SET_LOADING, UPDATE_LOGIN_INPUT_FIELD, CLEAR_LOGIN_FIELD, UPDATE_SINGIN_INPUT_FIELD,
  UPDATE_MODIFY_INPUT_FIELD, SAVE_DATA_USER, USER_LOGGED, USER_LOG_OUT, SINGIN_SUCCES,
  CLEAR_SINGIN_FIELD, SET_USER_ERR_MSG, MODIFY_SUCCES, DELETE_SUCCES,
} from '../actions/user';

export const initialState = {
  // indicates if the content is loading
  loading: true,
  // indicates if the user is connected
  isLogged: false,
  // input value for the email address in the LoginForm
  loginEmail: '',
  // value of the input for the password in the LoginForm
  loginPassword: '',
  // token JWT (when the user is authenticated)
  tokenJWT: '', //! tokenJWT: localStorage.getItem('SESSION_TOKEN'),
  // connected user's email
  userEmail: '',
  // connected user's lastname
  userLastName: '',
  // connected user's firstname
  userFirstName: '',
  // connected user's phone
  userPhone: '',
  // connected user's card
  userCard: [],
  // input value for the  last name in the SinginForm
  lastname: '',
  // input value for the first name in the SinginForm
  firstname: '',
  // input value for the phone number in the SinginForm
  phone: '',
  // input value for the email address in the SinginForm
  email: '',
  // input value for the confirmation of the e-mail address in the SinginForm
  emailConfirmation: '',
  // input value for the password in the SinginForm
  password: '',
  // input value for password confirmation in the SinginForm
  passwordConfirmation: '',
  // if singin is true
  isSuccesSingin: false,
  // error message
  userErrMsg: '',
  // sumbit modify form is true
  isModifySucces: false,
  // if user delete is account
  isDeleteSucces: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: action.loading,
      };

    case UPDATE_LOGIN_INPUT_FIELD:
      return {
        ...state,
        [action.identifier]: action.newValue,
      };

    case CLEAR_LOGIN_FIELD:
      return {
        ...state,
        loginEmail: '',
        loginPassword: '',
      };

    case UPDATE_SINGIN_INPUT_FIELD:
      return {
        ...state,
        [action.identifier]: action.newValue,
      };

    case CLEAR_SINGIN_FIELD:
      return {
        ...state,
        lastname: '',
        firstname: '',
        phone: '',
        email: '',
        emailConfirmation: '',
        password: '',
        passwordConfirmation: '',
      };

    case SINGIN_SUCCES:
      return {
        ...state,
        isSuccesSingin: action.isSuccesSingin,
      };

    case SET_USER_ERR_MSG:
      return {
        ...state,
        userErrMsg: action.userErrMsg,
      };

    case UPDATE_MODIFY_INPUT_FIELD:
      return {
        ...state,
        [action.identifier]: action.newValue,
      };

    case MODIFY_SUCCES:
      return {
        ...state,
        isModifySucces: action.isModifySucces,
      };

    case DELETE_SUCCES:
      return {
        ...state,
        isDeleteSucces: action.isDeleteSucces,
      };

    case SAVE_DATA_USER:
      return {
        ...state,
        // TODO voir pour l'automatiser comme UPDATE_INPUT_FIELD
        userEmail: action.userEmail,
        userLastName: action.userLastName,
        userFirstName: action.userFirstName,
        userPhone: action.userPhone,
        userCard: action.userCard,
      };

    case USER_LOGGED:
      return {
        ...state,
        isLogged: true,
      };

    case USER_LOG_OUT:
      return {
        ...state,
        isLogged: false,
      };

    default:
      return state;
  }
};

export default reducer;
