// === action types for site

/** change the state of the menu button */
export const TOGGLE_MENU_OPEN = 'TOGGLE_MENU_OPEN';
/** change the state of the pop up */
export const TOGGLE_POPUP_OPEN = 'TOGGLE_POPUP_OPEN';
/** indicates if the content is loading */
export const SET_LOADING = 'SET_LOADING';
/** change the state of the login form */
export const TOGGLE_LOGIN_OPEN = 'TOGGLE_LOGIN_OPEN';
/** change the state of the singin form */
export const TOGGLE_SINGIN_OPEN = 'TOGGLE_SINGIN_OPEN';
/** call the api at home page loading */
export const FETCH_HOME_CONTENT = 'FETCH_HOME_CONTENT';
/** save home page content from the api */
export const SAVE_HOME_CONTENT = 'SAVE_HOME_CONTENT';
/** save home page content from the api */
export const SAVE_NEWS_FOR_HOME = 'SAVE_NEWS_FOR_HOME';
/** save the url of the video for the home page */
export const SAVE_PRESENTATION_VIDEO = 'SAVE_PRESENTATION_VIDEO';
/** save popup content from the api */
export const SAVE_POPUP_CONTENT = 'SAVE_POPUP_CONTENT';
/** call the api when you are on the gourmet surprise page */
export const FETCH_SURPRISE_CONTENT = 'FETCH_SURPRISE_CONTENT';
/** save home page content from the api */
export const SAVE_SURPRISE_CONTENT = 'SAVE_SURPRISE_CONTENT';
/** call the api when you are on the menu page */
export const FETCH_MENU_CONTENT = 'FETCH_MENU_CONTENT';
/** save menu page content from the api */
export const SAVE_MENU_CONTENT = 'SAVE_MENU_CONTENT';
/** call the api when you are on the event page */
export const FETCH_EVENT_CONTENT = 'FETCH_EVENT_CONTENT';
/** save event page content from the api */
export const SAVE_EVENT_CONTENT = 'SAVE_EVENT_CONTENT';
/** call the api when you are on the photo gallery page */
export const FETCH_GALLERY_CONTENT = 'FETCH_GALLERY_CONTENT';
/** save photo gallery page content from the api */
export const SAVE_GALLERY_CONTENT = 'SAVE_GALLERY_CONTENT';

// === action creators
/** change the state of the menu button */
export const toggleMenuOpen = () => ({
  type: TOGGLE_MENU_OPEN,
});

/** change the state of the pop up */
export const togglePopupOpen = () => ({
  type: TOGGLE_POPUP_OPEN,
});

/** indicates if the content is loading */
export const setLoading = (loading) => ({
  type: SET_LOADING,
  loading: loading,
});

/** change the state of the login form */
export const toggleLoginOpen = () => ({
  type: TOGGLE_LOGIN_OPEN,
});

/** change the state of the singin form */
export const toggleSinginOpen = () => ({
  type: TOGGLE_SINGIN_OPEN,
});

/** call the api at home page loading */
export const fetchHomeContent = () => ({
  type: FETCH_HOME_CONTENT,
});

/** save home page content from the api */
export const saveHomeContent = (homeContent) => ({
  type: SAVE_HOME_CONTENT,
  homeContent: homeContent,
});

/** save home page content from the api */
export const saveNewsForHome = (newsContentForHome) => ({
  type: SAVE_NEWS_FOR_HOME,
  newsContentForHome: newsContentForHome,
});

/** save popup content from the api */
export const savePopupContent = (popupContent) => ({
  type: SAVE_POPUP_CONTENT,
  popupContent: popupContent,
});

/** save the url of the video for the home page */
export const savePresentationVideo = (presentationVideo) => ({
  type: SAVE_PRESENTATION_VIDEO,
  presentationVideo: presentationVideo,
});

/** call the api when you are on the gourmet surprise page */
export const fetchSurpriseContent = () => ({
  type: FETCH_SURPRISE_CONTENT,
});

/** save home page content from the api */
export const saveSurpriseContent = (surpriseContent) => ({
  type: SAVE_SURPRISE_CONTENT,
  surpriseContent: surpriseContent,
});

/** call the api when you are on the menu page */
export const fetchMenuContent = () => ({
  type: FETCH_MENU_CONTENT,
});

/** save menu page content from the api */
export const saveMenuContent = (menuContent) => ({
  type: SAVE_MENU_CONTENT,
  menuContent: menuContent,
});

/** call the api when you are on the event page */
export const fetchEventContent = () => ({
  type: FETCH_EVENT_CONTENT,
});

/** save event page content from the api */
export const saveEventContent = (eventContent) => ({
  type: SAVE_EVENT_CONTENT,
  eventContent: eventContent,
});

/** call the api when you are on the photo gallery page */
export const fetchGalleryContent = () => ({
  type: FETCH_GALLERY_CONTENT,
});

/** save photo gallery page content from the api */
export const saveGalleryContent = (galleryContent) => ({
  type: SAVE_GALLERY_CONTENT,
  galleryContent: galleryContent,
});
