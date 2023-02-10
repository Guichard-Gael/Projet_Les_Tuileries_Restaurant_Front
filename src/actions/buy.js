// === action types for gift form

/** indicates if the content is loading */
export const SET_LOADING = 'SET_LOADING';
/** change the value of one of the contact form fields */
export const UPDATE_BUY_INPUT_FIELD = 'UPDATE_BUY_INPUT_FIELD';
/** send the content of the giftcard to the server */
export const SUBMIT_GIFT = 'SUBMIT_GIFT';

// === action creators
/** indicates if the content is loading */
export const setLoading = (loading) => ({
  type: SET_LOADING,
  loading: loading,
});

/** change the value of one of the contact form fields */
export const updateBuyInputField = (newValue, identifier) => ({
  type: UPDATE_BUY_INPUT_FIELD,
  newValue: newValue,
  identifier: identifier,
});

/** send the content of the giftcard to the server */
export const submitGift = () => ({
  type: SUBMIT_GIFT,
});
