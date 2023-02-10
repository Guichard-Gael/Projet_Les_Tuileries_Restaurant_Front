// == Import
// = Hooks and method
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// = Components
import ModifyForm from './ModifyForm';

// = Style
import './userEdit.scss';

// = Actions
import { getUserInfo, updateModifyInputField, submitModify } from '../../actions/user';

// == Composant
const UserEdit = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  const isLogged = useSelector((state) => state.user.isLogged);
  console.log(`UserEdit: User connected ? ${isLogged}`);

  const isLoading = useSelector((state) => state.user.loading);
  // console.log(isLoading);

  // singin form information
  const emailValue = useSelector((state) => state.user.userEmail);
  const firstnameValue = useSelector((state) => state.user.userFirstName);
  const lastnameValue = useSelector((state) => state.user.userLastName);
  const phoneValue = useSelector((state) => state.user.userPhone);

  useEffect(() => {
    if (isLoading === true) {
    // sends the JWT token to the server to retrieve the user's information
      dispatch(getUserInfo());
    }
  }, [isLoading]);

  return (
    <div className="edit">
      <div className="edit-container">
        <h1 className="connexion-title">
          Modification de mes informations
        </h1>
        <ModifyForm
          email={emailValue}
          firstname={firstnameValue}
          lastname={lastnameValue}
          phone={phoneValue}
          changeField={(newValue, identifier) => {
            const action = updateModifyInputField(newValue, identifier);
            dispatch(action);
          }}
          handleModify={() => {
            dispatch(submitModify());
          }}
        />
        <button
          className="button-back"
          type="button"
          onClick={goBack}
        >
          Annuler les modifications
        </button>
      </div>
    </div>
  );
};

// == Export
export default UserEdit;
