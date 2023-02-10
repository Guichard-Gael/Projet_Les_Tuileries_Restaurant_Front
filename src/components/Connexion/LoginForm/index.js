// == Import
// = Hooks and method
import PropTypes from 'prop-types';

// = Components
import Field from '../../Field';

// == Composant
const LoginForm = ({
  loginEmail,
  loginPassword,
  changeField,
  handleLogin,
  // handleLogout,
  // isLogged,
  // loggedMessage,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleLogin();
  };

  return (
    <div className="login-form">
      <form autoComplete="off" className="login-form-element" onSubmit={handleSubmit}>
        <Field
          name="loginEmail"
          placeholder="Adresse Email"
          onChange={changeField}
          value={loginEmail}
        />
        <Field
          name="loginPassword"
          type="password"
          placeholder="Mot de passe"
          onChange={changeField}
          value={loginPassword}
        />
        <button
          type="submit"
          className="login-form-button"
        >
          connexion
        </button>
      </form>
    </div>
  );
};

LoginForm.propTypes = {
  /** content of the e-mail field */
  loginEmail: PropTypes.string.isRequired,
  /** content of the password field */
  loginPassword: PropTypes.string.isRequired,
  /** Processing triggered when a character is entered in one of the two fields
   * Parameters:
   * - first parameter is the new value for the field
   * - second parameter is to identify the field
  */
  changeField: PropTypes.func.isRequired,
  /** Processing triggered when the "connexion" button is clicked */
  handleLogin: PropTypes.func.isRequired,

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
export default LoginForm;
