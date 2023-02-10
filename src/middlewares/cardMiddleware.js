import axios from 'axios';

import { setLoading, SUBMIT_GIFT } from '../actions/buy';

const BASE_URL = 'https://moveri.fr';
// const BASE_URL = 'https://coin-lecture.website';

const cardMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_GIFT:
      // Before the API call we indicate that it loads
      store.dispatch(setLoading(true));

      axios.post(
        `${BASE_URL}/api/buy-card`,
        {
          gifter: store.getState().buyCard.cardGifter,
          receiver: store.getState().buyCard.cardReceiver,
          amount: store.getState().buyCard.cardAmount,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('SESSION_TOKEN')}`,
          },
        },
      )
        .then((response) => {
          console.log(response);

          if (response.status === 200) {
            window.location.replace('https://moveri.fr/api/purchase-form');
          }
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          store.dispatch(setLoading(false));
        });
      break;

    default:
  }
  next(action);
};

export default cardMiddleware;
