import axios from 'axios';

import {
  setLoading, FETCH_CONTACT_CONTENT, SUBMIT_CONTACT, saveCSRFToken, saveContactContent, sendSucces,
  setContactErrMsg,
  resetMsgField,
} from '../actions/contact';

const BASE_URL = 'https://moveri.fr';
// const BASE_URL = 'https://coin-lecture.website';

const contactMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_CONTACT_CONTENT:
      // Before the API call we indicate that it loads
      store.dispatch(setLoading(true));

      axios.get(`${BASE_URL}/api/contact`)
        .then((response) => {
          // console.log(response);

          store.dispatch(saveContactContent(response.data.page_content));
          store.dispatch(saveCSRFToken(response.data.token_CSRF));
        })
        .catch((error) => {
          // console.log(error);
        })
        .finally(() => {
          store.dispatch(setLoading(false));
        });
      break;

    case SUBMIT_CONTACT:
      // Before the API call we indicate that it loads
      // store.dispatch(setLoading(true));
      store.dispatch(sendSucces(false));
      store.dispatch(setContactErrMsg(''));
      axios.post(
        `${BASE_URL}/api/contact`,
        {
          lastname: store.getState().contact.lastnameContact,
          firstname: store.getState().contact.firstnameContact,
          email: store.getState().contact.mailContact,
          subject: store.getState().contact.subjectContact,
          text: store.getState().contact.messageContact,
        },
        {
          headers: {
            token_CSRF: store.getState().contact.tokenCSRF,
          },
        },
      )
        .then((response) => {
          // console.log(response);

          store.dispatch(sendSucces(true));
          store.dispatch(resetMsgField());
        })
        .catch((error) => {
          // console.log(error);
          if (error.response.status === 400) {
            store.dispatch(setContactErrMsg('Une erreur est survenue, Veuillez réessayer'));
          }
        })
        .finally(() => {
          store.dispatch(setLoading(false));
        });
      break;

    default:
  }
  next(action);
};

export default contactMiddleware;
