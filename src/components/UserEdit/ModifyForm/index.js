// == Import
// = Hooks and method
import PropTypes from 'prop-types';

// = Components
import Field from '../../Field';

// == Composant
const ModifyForm = ({
  email,
  firstname,
  lastname,
  phone,
  changeField,
  handleModify,
  // handleLogout,
  // isLogged,
  // loggedMessage,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleModify();
  };

  return (
    <div className="modify-form">
      <form autoComplete="off" className="modify-form-element" onSubmit={handleSubmit}>
        <Field
          name="userLastName"
          type="text"
          placeholder="Nom"
          onChange={changeField}
          value={lastname}
        />
        <Field
          name="userFirstName"
          type="text"
          placeholder="Prénom"
          onChange={changeField}
          value={firstname}
        />
        <Field
          name="userPhone"
          type="number"
          placeholder="Téléphone"
          onChange={changeField}
          value={phone}
        />
        <Field
          name="userEmail"
          placeholder="Adresse Email"
          onChange={changeField}
          value={email}
        />
        <button
          type="submit"
          className="modify-form-button"
        >
          Enregistrer les modifications
        </button>
      </form>
    </div>
  );
};

ModifyForm.propTypes = {
  /** content of the e-mail field */
  email: PropTypes.string.isRequired,
  /** content of the firstname field */
  firstname: PropTypes.string.isRequired,
  /** content of the lastname field */
  lastname: PropTypes.string.isRequired,
  /** content of the phone field */
  phone: PropTypes.string.isRequired, // PropTypes.number.isRequired,
  /** Processing triggered when a character is entered in one of the two fields
   * Parameters:
   * - first parameter is the new value for the field
   * - second parameter is to identify the field
  */
  changeField: PropTypes.func.isRequired,
  /** Processing triggered when the "inscription" button is clicked */
  handleModify: PropTypes.func.isRequired,

  /** Traitement déclenché quand on clique sur le bouton "Déconnecté" (quand on est en
   * mode connecté) */
  // handleLogout: PropTypes.func.isRequired,
  /** Choix entre le mode connecté (affichage d'un message) et
   * le mode pas connecté (affichage du formulaire) */
  // isLogged: PropTypes.bool,
  /** Message affiché quand on est en mode connecté */
  // loggedMessage: PropTypes.string,
};

// LoginForm.defaultProps = {
//   isLogged: false,
//   loggedMessage: 'Connecté',
// };

// == Export
export default ModifyForm;
