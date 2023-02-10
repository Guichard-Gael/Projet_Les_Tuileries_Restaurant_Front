// == Import
// = Hooks and method
import PropTypes from 'prop-types';

// = Components
import Field from '../../Field';

// = Style
import './fieldContact.scss';

// == Composant
const FieldContact = ({
  lastnameContact,
  firstnameContact,
  mailContact,
  subjectContact,
  messageContact,
  changeField,
  handleContact,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleContact();
  };

  return (
    <div className="contact-form">
      <form autoComplete="off" className="contact-form-element" onSubmit={handleSubmit}>
        <Field
          name="lastnameContact"
          placeholder="Nom"
          onChange={changeField}
          value={lastnameContact}
        />
        <Field
          name="firstnameContact"
          placeholder="Prénom"
          onChange={changeField}
          value={firstnameContact}
        />
        <Field
          name="mailContact"
          placeholder="Adresse Email"
          onChange={changeField}
          value={mailContact}
        />
        <Field
          name="subjectContact"
          placeholder="Object"
          onChange={changeField}
          value={subjectContact}
        />

        <div className="messageContact">
          <Field
            name="messageContact"
            placeholder="Message"
            onChange={changeField}
            value={messageContact}
          />
        </div>

        <button
          type="submit"
          className="contact-form-button"
        >
          Envoyer
        </button>
      </form>
    </div>
  );
};

FieldContact.propTypes = {
  /** content of the lastname field */
  lastnameContact: PropTypes.string.isRequired,
  /** content of the firstname field */
  firstnameContact: PropTypes.string.isRequired,
  /** content of the e-mail field */
  mailContact: PropTypes.string.isRequired,
  /** content of the subject field */
  subjectContact: PropTypes.string.isRequired,
  /** content of the message field */
  messageContact: PropTypes.string.isRequired,
  /** Processing triggered when a character is entered in one of the two fields
   * Parameters:
   * - first parameter is the new value for the field
   * - second parameter is to identify the field
  */
  handleContact: PropTypes.func.isRequired,
  /** Processing triggered when the "envoyer" button is clicked */
  changeField: PropTypes.func.isRequired,
};

// == Export
export default FieldContact;
