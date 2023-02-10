import {
  SET_LOADING, TOGGLE_MENU_OPEN, TOGGLE_POPUP_OPEN, TOGGLE_LOGIN_OPEN, TOGGLE_SINGIN_OPEN,
  SAVE_HOME_CONTENT, SAVE_NEWS_FOR_HOME, SAVE_PRESENTATION_VIDEO, SAVE_SURPRISE_CONTENT,
  SAVE_MENU_CONTENT, SAVE_EVENT_CONTENT, SAVE_GALLERY_CONTENT, SAVE_POPUP_CONTENT,
} from '../actions/site';

const initialState = {
  // URL assets img
  // base_url_img: 'https://coin-lecture.website',
  base_url_img: 'https://moveri.fr/assets/images',
  // indicates if the content is loading
  loading: true,
  // indicates if the content is open
  isPopupOpen: true,
  popupContent: [],
  // indicates if the menu is opened or closed
  isMenuOpen: false,
  // indicates if the loging form is opened or closed
  isLoginOpen: true,
  // indicates if the singin form is opened or closed
  isSinginOpen: false,
  // home page content
  homeContent: [],
  // content of the new to display on the home
  newsContentForHome: [],
  // url of the video presentation
  presentationVideo: '',
  // content of the surprise page
  surpriseContent: [],
  // content of the menu page
  menuContent: [],
  // content of the event page
  eventContent: [],
  // content of the gallery page
  galleryContent: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: action.loading,
      };

    case TOGGLE_MENU_OPEN:
      return {
        ...state,
        isMenuOpen: !state.isMenuOpen,
      };

    case TOGGLE_POPUP_OPEN:
      return {
        ...state,
        isPopupOpen: !state.isPopupOpen,
      };

    case TOGGLE_LOGIN_OPEN:
      return {
        ...state,
        isLoginOpen: !state.isLoginOpen,
      };

    case TOGGLE_SINGIN_OPEN:
      return {
        ...state,
        isSinginOpen: !state.isSinginOpen,
      };

    case SAVE_POPUP_CONTENT:
      return {
        ...state,
        popupContent: action.popupContent,
      };

    case SAVE_HOME_CONTENT:
      return {
        ...state,
        homeContent: action.homeContent,
      };

    case SAVE_NEWS_FOR_HOME:
      return {
        ...state,
        newsContentForHome: action.newsContentForHome,
      };

    case SAVE_PRESENTATION_VIDEO:
      return {
        ...state,
        presentationVideo: action.presentationVideo,
      };

    case SAVE_SURPRISE_CONTENT:
      return {
        ...state,
        surpriseContent: action.surpriseContent,
      };

    case SAVE_MENU_CONTENT:
      return {
        ...state,
        menuContent: action.menuContent,
      };

    case SAVE_EVENT_CONTENT:
      return {
        ...state,
        eventContent: action.eventContent,
      };

    case SAVE_GALLERY_CONTENT:
      return {
        ...state,
        galleryContent: action.galleryContent,
      };

    default:
      return state;
  }
};

export default reducer;
