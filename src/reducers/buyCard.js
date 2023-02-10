import { SET_LOADING, UPDATE_BUY_INPUT_FIELD } from '../actions/buy';

export const initialState = {
  // indicates if the content is loading
  loading: true,
  // amount of card
  cardAmount: '',
  // name of card gifter
  cardGifter: '',
  // name of card receiver
  cardReceiver: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: action.loading,
      };

    case UPDATE_BUY_INPUT_FIELD:
      return {
        ...state,
        [action.identifier]: action.newValue,
      };

    default:
      return state;
  }
};

export default reducer;
