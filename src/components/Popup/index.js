// == Import
// = Hooks and method
// import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classNames from 'classnames';

// = Style
import './popup.scss';

// = Actions
import { togglePopupOpen } from '../../actions/site';

// == Composant
const Popup = () => {
  const dispatch = useDispatch();

  const isPopupOpen = useSelector((state) => state.site.isPopupOpen);
  // console.log(isPopupOpen);

  const popupContent = useSelector((state) => state.site.popupContent);
  // console.log(popupContent);

  const cssClassForPopup = classNames('popup', { 'popup--open': isPopupOpen });
  // const contenuPageEvent = useSelector((state) => state.site.eventContent);
  // console.log(contenuPageEvent);

  if (popupContent != null) {
    return (
      <div className={cssClassForPopup}>
        <div className="popup-overlay">
          <div className="popup-container">
            <p className="popup-content">
              {popupContent.content}
            </p>
            <button
              type="button"
              className="popup-button"
              onClick={() => {
                dispatch(togglePopupOpen());
              }}
            >
              J'ai compris
            </button>
          </div>
        </div>
      </div>
    );
  }
};

// == Export
export default Popup;
