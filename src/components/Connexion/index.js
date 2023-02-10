// == Import
// = Hooks and method
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import classNames from 'classnames';

// = Components
import LoginForm from './LoginForm';
import SinginForm from './SinginForm';

// = Style
import './connexion.scss';

// = Actions
import { toggleLoginOpen, toggleSinginOpen } from '../../actions/site';
import {
  submitLogin, submitSingin, updateLoginInputField, updateSinginInputField, setUserErrMsg,
  singinSucces,
} from '../../actions/user';

// == Composant
const Connexion = () => {
  const dispatch = useDispatch();

  // indicates if the form is displayed or not
  const isLoginOpen = useSelector((state) => state.site.isLoginOpen);
  const isSinginOpen = useSelector((state) => state.site.isSinginOpen);

  // CSS className for forms
  const cssClassForLogin = classNames('login', { 'login--open': isLoginOpen });
  const cssClassForSingin = classNames('singin', { 'singin--open': isSinginOpen });

  // login form information
  const loginEmailValue = useSelector((state) => state.user.loginEmail);
  const loginPasswordValue = useSelector((state) => state.user.loginPassword);

  // singin form information
  const emailValue = useSelector((state) => state.user.email);
  const emailConfirmationValue = useSelector((state) => state.user.emailConfirmation);
  const passwordValue = useSelector((state) => state.user.password);
  const passwordConfirmationValue = useSelector((state) => state.user.passwordConfirmation);
  const firstnameValue = useSelector((state) => state.user.firstname);
  const lastnameValue = useSelector((state) => state.user.lastname);
  const phoneValue = useSelector((state) => state.user.phone);
  const isSuccesSingin = useSelector((state) => state.user.isSuccesSingin);
  const isModifySucces = useSelector((state) => state.user.isModifySucces);
  const isDeleteSucces = useSelector((state) => state.user.isDeleteSucces);
  const userErrMsg = useSelector((state) => state.user.userErrMsg);

  // indicates if the user is logged
  const isLogged = useSelector((state) => state.user.isLogged);
  // console.log(`Connexion: User connected ? ${isLogged}`);

  useEffect(() => {
    setTimeout(() => {
      if (userErrMsg || isSuccesSingin) {
        dispatch(setUserErrMsg(''));
        dispatch(singinSucces(false));
      }
    }, 5000);
  }, [userErrMsg, isSuccesSingin]);

  if (isLogged) {
    return (
      <Navigate to="/espace-client" />
    );
  }

  return (
    <div className="connexion">

      <p className={isSuccesSingin ? 'succesMsg' : 'offscreen'} aria-live="assertive">Inscription réussit</p>
      <p className={userErrMsg ? 'errmsg' : 'offscreen'} aria-live="assertive">{userErrMsg}</p>
      {/* login from */}
      <div className={cssClassForLogin}>
        {/* <p className={isModifySucces ? 'succesMsg' : 'offscreen'} aria-live="assertive">Modification(s) réussite(s)</p>
        <p className={isDeleteSucces ? 'succesMsg' : 'offscreen'} aria-live="assertive">Compte supprimer</p> */}
        <h1 className="connexion-title">
          Connexion
        </h1>
        <LoginForm
          loginEmail={loginEmailValue}
          loginPassword={loginPasswordValue}
          changeField={(newValue, identifier) => {
            const action = updateLoginInputField(newValue, identifier);
            dispatch(action);
          }}
          handleLogin={() => {
            dispatch(submitLogin());
          }}
        />
        <button
          className="button-switch"
          type="button"
          onClick={() => {
            dispatch(toggleLoginOpen());
            dispatch(toggleSinginOpen());
          }}
        >
          Inscription
        </button>
      </div>

      {/* singin form */}
      <div className={cssClassForSingin}>
        {/* <p className={userErrMsg ? 'errmsg' : 'offscreen'} aria-live="assertive">{userErrMsg}</p> */}
        <h1 className="connexion-title">
          S'inscrire
        </h1>
        <SinginForm
          email={emailValue}
          emailConfirmation={emailConfirmationValue}
          password={passwordValue}
          passwordConfirmation={passwordConfirmationValue}
          firstname={firstnameValue}
          lastname={lastnameValue}
          phone={phoneValue}
          changeField={(newValue, identifier) => {
            const action = updateSinginInputField(newValue, identifier);
            dispatch(action);
          }}
          handleSingin={() => {
            dispatch(submitSingin());
          }}
        />
        <button
          className="button-switch"
          type="button"
          onClick={() => {
            dispatch(toggleLoginOpen());
            dispatch(toggleSinginOpen());
          }}
        >
          j'ai deja un compte
        </button>
      </div>
    </div>
  );
};

// == Export
export default Connexion;
