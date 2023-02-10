// == Import
// = Hooks and method
import PropTypes from 'prop-types';

// = Components
import Field from '../../Field';

// == Composant
const SinginForm = ({
  email,
  emailConfirmation,
  password,
  passwordConfirmation,
  firstname,
  lastname,
  phone,
  changeField,
  handleSingin,
  // handleLogout,
  // isLogged,
  // loggedMessage,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleSingin();
  };

  return (
    <div className="singin-form">
      <form autoComplete="off" className="singin-form-element" onSubmit={handleSubmit}>
        <Field
          name="lastname"
          type="text"
          placeholder="Nom"
          onChange={changeField}
          value={lastname}
        />
        <Field
          name="firstname"
          type="text"
          placeholder="Prénom"
          onChange={changeField}
          value={firstname}
        />
        <Field
          name="phone"
          type="number"
          placeholder="Téléphone"
          onChange={changeField}
          value={phone}
        />
        <Field
          name="email"
          placeholder="Adresse Email"
          onChange={changeField}
          value={email}
        />
        <Field
          name="emailConfirmation"
          placeholder="Confirmation Adresse Email"
          onChange={changeField}
          value={emailConfirmation}
        />
        <Field
          name="password"
          type="password"
          placeholder="Mot de passe"
          onChange={changeField}
          value={password}
        />
        <Field
          name="passwordConfirmation"
          type="password"
          placeholder="Confirmation Mot de passe"
          onChange={changeField}
          value={passwordConfirmation}
        />
        <button
          type="submit"
          className="singin-form-button"
        >
          inscription
        </button>
      </form>
    </div>
  );
};

SinginForm.propTypes = {
  /** content of the e-mail field */
  email: PropTypes.string.isRequired,
  /** content of the e-mail confirmation field */
  emailConfirmation: PropTypes.string.isRequired,
  /** content of the password field */
  password: PropTypes.string.isRequired,
  /** content of the password confirmation field */
  passwordConfirmation: PropTypes.string.isRequired,
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
  handleSingin: PropTypes.func.isRequired,

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
export default SinginForm;
