import axios from 'axios';

import {
  setLoading, SUBMIT_LOGIN, clearLoginField, SUBMIT_SINGIN, SUBMIT_MODIFY, GET_USER_INFO,
  getUserInfo, saveDataUser, userLogged, HANDLE_DELETE_ACCOUNT, singinSucces, clearSinginField,
  setUserErrMsg, modifySucces, userLogOut, deleteSucces,
} from '../actions/user';

import { toggleLoginOpen, toggleSinginOpen } from '../actions/site';

const BASE_URL = 'https://moveri.fr';
// const BASE_URL = 'https://coin-lecture.website';

const userMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_LOGIN:
      // Before the API call we indicate that it loads
      store.dispatch(setLoading(true));
      store.dispatch(singinSucces(false));
      store.dispatch(deleteSucces(false));
      axios.post(
        `${BASE_URL}/api/login_check`,
        {
          username: store.getState().user.loginEmail,
          password: store.getState().user.loginPassword,
        },
      )
        .then((response) => {
          // console.log(response);

          store.dispatch(clearLoginField());

          // store JWT token in localStorage as 'SESSION_TOKEN'
          localStorage.setItem('SESSION_TOKEN', response.data.token);

          // method that retrieves the user's information with the JWT token
          store.dispatch(getUserInfo());
        })
        .catch((error) => {
          // console.log(error);
          if (error.response.status === 400) {
            store.dispatch(setUserErrMsg(error.response.data.message));
          }
          else if (error.response.status === 401) {
            store.dispatch(setUserErrMsg('Adresse email ou mot de passe incorrect'));
          }
        })
        .finally(() => {
          store.dispatch(setLoading(false));
        });
      break;

    case SUBMIT_SINGIN:
      // Before the API call we indicate that it loads
      store.dispatch(setLoading(true));
      store.dispatch(setUserErrMsg(''));
      axios.post(
        `${BASE_URL}/api/sign-in`,
        {
          email: store.getState().user.email,
          email_confirmation: store.getState().user.emailConfirmation,
          password: store.getState().user.password,
          password_confirmation: store.getState().user.passwordConfirmation,
          firstname: store.getState().user.firstname,
          lastname: store.getState().user.lastname,
          phone: store.getState().user.phone,
        },
      )
        .then((response) => {
          // console.log(response);
          // console.log(response.status);
          if (response.status === 201) {
            store.dispatch(singinSucces(true));
            store.dispatch(clearSinginField());
            store.dispatch(toggleLoginOpen());
            store.dispatch(toggleSinginOpen());
          }
        })
        .catch((error) => {
          // console.log(error);
          if (error.response.status === 400) {
            store.dispatch(setUserErrMsg(error.response.data.message));
          }
          else if (error.response.status === 401) {
            store.dispatch(setUserErrMsg('Adresse email ou mot de passe incorrect'));
          }
        })
        .finally(() => {
          store.dispatch(setLoading(false));
        });
      break;

    case SUBMIT_MODIFY:
      // Before the API call we indicate that it loads
      store.dispatch(setLoading(true));
      store.dispatch(setUserErrMsg(''));
      axios.put(
        `${BASE_URL}/api/client-space`,
        {
          email: store.getState().user.userEmail,
          firstname: store.getState().user.userFirstName,
          lastname: store.getState().user.userLastName,
          phone: store.getState().user.userPhone,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('SESSION_TOKEN')}`,
          },
        },
      )
        .then((response) => {
          // console.log(response);

          if (response.status === 200) {
            store.dispatch(modifySucces(true));
            localStorage.clear();
            store.dispatch(userLogOut());
          }
        })
        .catch((error) => {
          // console.log(error);
          if (error.response.status === 400) {
            store.dispatch(setUserErrMsg(error.response.data.message));
          }
        })
        .finally(() => {
          store.dispatch(setLoading(false));
        });
      break;

    case HANDLE_DELETE_ACCOUNT:
      // Before the API call we indicate that it loads
      store.dispatch(setLoading(true));

      console.log("envoi la demande de suppression d'un compte");
      axios.delete(
        `${BASE_URL}/api/client-space/delete`,
        {
          headers: {
            // Authorization: `Bearer ${store.getState().user.tokenJWT}`,
            Authorization: `Bearer ${localStorage.getItem('SESSION_TOKEN')}`,
          },
        },
      )
        .then((response) => {
          // console.log(response);
          if (response.status === 204) {
            store.dispatch(deleteSucces(true));
            localStorage.clear();
            store.dispatch(userLogOut());
          }
        })
        .catch((error) => {
          // console.log(error);
        })
        .finally(() => {
          store.dispatch(setLoading(false));
        });
      break;

    case GET_USER_INFO:
      // Before the API call we indicate that it loads
      store.dispatch(setLoading(true));

      axios.get(
        `${BASE_URL}/api/client-space`,
        {
          headers: {
            // Authorization: `Bearer ${store.getState().user.tokenJWT}`,
            Authorization: `Bearer ${localStorage.getItem('SESSION_TOKEN')}`,
          },
        },
      )
        .then((response) => {
          // console.log(response.data.user_informations);
          // console.log(response.data.user_informations.email);
          // console.log(response.data.user_informations.lastname);
          // console.log(response.data.user_informations.firstname);
          // console.log(response.data.user_informations.phone);
          // console.log(response.data.user_informations.cards);

          const actionToDispatch = saveDataUser(
            response.data.user_informations.email,
            response.data.user_informations.lastname,
            response.data.user_informations.firstname,
            response.data.user_informations.phone,
            response.data.user_informations.cards,
          );

          store.dispatch(actionToDispatch);
          store.dispatch(userLogged());
        })
        .catch((error) => {
          // console.log(error);
        })
        .finally(() => {
          store.dispatch(setLoading(false));
        });
      break;

    default:
  }
  next(action);
};

export default userMiddleware;
