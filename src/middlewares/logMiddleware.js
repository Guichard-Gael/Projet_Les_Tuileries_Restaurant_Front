import axios from 'axios';

import {
  setLoading, FETCH_HOME_CONTENT, saveHomeContent, saveNewsForHome, savePresentationVideo,
  FETCH_SURPRISE_CONTENT, saveSurpriseContent, FETCH_MENU_CONTENT, saveMenuContent,
  FETCH_EVENT_CONTENT, saveEventContent, FETCH_GALLERY_CONTENT, saveGalleryContent,
  savePopupContent,
} from '../actions/site';

const BASE_URL = 'https://moveri.fr';
// const BASE_URL = 'https://coin-lecture.website';

const logMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_HOME_CONTENT:
      // Before the API call we indicate that it loads
      store.dispatch(setLoading(true));

      axios.get(`${BASE_URL}/api/home`)
        .then((response) => {
          // console.log(response.data);
          // console.log(response.data.page_content);
          // console.log(response.data.news);
          // console.log(response.data.video);

          store.dispatch(saveHomeContent(response.data.page_content));
          store.dispatch(saveNewsForHome(response.data.news));
          store.dispatch(savePresentationVideo(response.data.video));
          store.dispatch(savePopupContent(response.data.pop_up));
        })
        .catch((error) => {
          // console.log(error);
        })
        .finally(() => {
          store.dispatch(setLoading(false));
        });
      break;

    case FETCH_SURPRISE_CONTENT:
      // Before the API call we indicate that it loads
      store.dispatch(setLoading(true));

      axios.get(`${BASE_URL}/api/gourmand-surprise`)
        .then((response) => {
          // console.log(response.data);

          store.dispatch(saveSurpriseContent(response.data.page_content));
        })
        .catch((error) => {
          // console.log(error);
        })
        .finally(() => {
          store.dispatch(setLoading(false));
        });
      break;

    case FETCH_MENU_CONTENT:
      // Before the API call we indicate that it loads
      store.dispatch(setLoading(true));

      axios.get(`${BASE_URL}/api/menu`)
        .then((response) => {
          // console.log(response.data);

          store.dispatch(saveMenuContent(response.data));
        })
        .catch((error) => {
          // console.log(error);
        })
        .finally(() => {
          store.dispatch(setLoading(false));
        });
      break;

    case FETCH_EVENT_CONTENT:
      // Before the API call we indicate that it loads
      store.dispatch(setLoading(true));

      axios.get(`${BASE_URL}/api/news`)
        .then((response) => {
          // console.log(response.data);

          store.dispatch(saveEventContent(response.data));
        })
        .catch((error) => {
          // console.log(error);
        })
        .finally(() => {
          store.dispatch(setLoading(false));
        });
      break;

    case FETCH_GALLERY_CONTENT:
      // Before the API call we indicate that it loads
      store.dispatch(setLoading(true));

      axios.get(`${BASE_URL}/api/gallery`)
        .then((response) => {
          // console.log(response.data);

          store.dispatch(saveGalleryContent(response.data));
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

export default logMiddleware;
