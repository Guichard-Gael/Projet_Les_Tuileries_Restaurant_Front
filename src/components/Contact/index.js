// == Import
// = Hooks and method
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// = Components
import FieldContact from './FieldContact';
import Loading from '../App/Loading';

// = Style
import './contact.scss';

// = Actions
import {
  updateContactInputField, fetchContactContent, submitContact, sendSucces, setContactErrMsg,
} from '../../actions/contact';

// == Composant
const Contact = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector((state) => state.contact.loading);
  // console.log(isLoading);

  const baseUrlImg = useSelector((state) => state.site.base_url_img);

  const contactContent = useSelector((state) => state.contact.contactContent);
  // console.log(contactContent);

  const lastnameContact = useSelector((state) => state.contact.lastnameContact);
  const firstnameContact = useSelector((state) => state.contact.firstnameContact);
  const mailContact = useSelector((state) => state.contact.mailContact);
  const subjectContact = useSelector((state) => state.contact.subjectContact);
  const messageContact = useSelector((state) => state.contact.messageContact);
  const contactErrMsg = useSelector((state) => state.contact.contactErrMsg);
  const isSend = useSelector((state) => state.contact.isSend);

  useEffect(() => {
    if (isLoading === true) {
      dispatch(fetchContactContent());
    }
  }, [isLoading]);

  useEffect(() => {
    // console.log('Timer lancé 5 sec!');
    setTimeout(() => {
      if (isSend || contactErrMsg) {
        // console.log('condition du timeout');
        dispatch(sendSucces(false));
        dispatch(setContactErrMsg(''));
      }
    }, 5000);
  }, [isSend, contactErrMsg]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="contact">
      <div className="contact-img">
        <img
          src={`${baseUrlImg}/${contactContent[0].picture_path}`}
          alt={`${contactContent[0].picture_alt}`}
        />
      </div>
      <div className="contact-right">
        <div className="contact-header">
          <h1 className="contact-title">{contactContent[0].title}</h1>
          <p className="contact-test">{contactContent[0].content}</p>
        </div>
        <p className={isSend ? 'sendmsg' : 'offscreen'} aria-live="assertive">Message envoyé</p>
        <p className={contactErrMsg ? 'errmsg' : 'offscreen'} aria-live="assertive">{contactErrMsg}</p>
        {/* <p className="errmsg" aria-live="assertive">Contact errmsg</p> */}
        <FieldContact
          lastnameContact={lastnameContact}
          firstnameContact={firstnameContact}
          mailContact={mailContact}
          subjectContact={subjectContact}
          messageContact={messageContact}
          changeField={(newValue, identifier) => {
            const action = updateContactInputField(newValue, identifier);
            dispatch(action);
          }}
          handleContact={() => {
            dispatch(submitContact());
          }}
        />
      </div>
    </div>
  );
};

// == Export
export default Contact;
