// == Import
// = Hooks and method
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { tarnsformDate } from '../../Utils/date';

// = Icons
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

// = Components
import Loading from '../App/Loading';

// = Style
import './user.scss';

// = Actions
import { getUserInfo, handleDeleteAccount } from '../../actions/user';

// == Composant
const User = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isLogged = useSelector((state) => state.user.isLogged);
  // console.log(`User: User connected ? ${isLogged}`);

  const isLoading = useSelector((state) => state.user.loading);
  // console.log(`isLoading = ${isLoading}`);

  // informations du formulaire d'inscription
  const userLastName = useSelector((state) => state.user.userLastName);
  const userFirstName = useSelector((state) => state.user.userFirstName);
  const userEmail = useSelector((state) => state.user.userEmail);
  const userPhone = useSelector((state) => state.user.userPhone);
  const userCard = useSelector((state) => state.user.userCard);
  // console.log(userCard);

  useEffect(() => {
    if (isLoading === true) {
      // sends the JWT token to the server to retrieve the user's information
      dispatch(getUserInfo());
    }
  }, [isLoading]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="user">
      <div className="user-info-container">
        <h1 className="user-info-title">Mes informations</h1>
        <p className="user-info-content">Nom: <span>{userLastName}</span></p>
        <p className="user-info-content">Prénom: <span>{userFirstName}</span></p>
        <p className="user-info-content">Adresse e-mail: <span>{userEmail}</span></p>
        <p className="user-info-content">Téléphone: <span>{userPhone}</span></p>
        {/* <div className="user-button">
          <button
            type="button"
            className="user-edit"
            onClick={() => {
              navigate('/espace-client/edit');
            }}
          >
            Modifier mes informations
          </button>
          <button
            type="button"
            className="user-delete"
            onClick={() => {
              dispatch(handleDeleteAccount());
            }}
          >
            Supprimer mon compte
          </button>
        </div> */}
        <div className="user-card">
          {/*<h1 className="user-card-title"></h1>*/}
          <button
            type="button"
            className="card-buy"
            onClick={() => {
              navigate('/achat-surprise-gourmande');
            }}
          >
            Acheter une surprise gourmande
          </button>
        </div>
      </div>

      <div className="left">
        <div className="user-card-history">
          <h1 className="user-card-title">Historique de mes cartes</h1>
          <div className="card-history-container">
            {userCard.map((card) => (
              <div
                key={`${card.gifter}-${card.amount}-${card.boughtAt}`}
                className="card-history"
              >
                <ul>
                  <li className={(card.usedAt !== null) ? 'card-history-info-disable' : 'card-history-info-active'}>
                    {(card.usedAt !== null) ? `Utilisé le ${tarnsformDate(card.usedAt)}` : 'Carte valable' }
                  </li>
                  <li className="card-history-info">Référence: <span>{card.reference}</span></li>
                  <li className="card-history-info">Offert par: <span>{card.gifter}</span></li>
                  <li className="card-history-info">Montant: <span>{card.amount}€</span></li>
                  <li className="card-history-info">Pour: <span>{card.receiver}</span></li>
                  <li className="card-history-info">Acheté le <span>{tarnsformDate(card.boughtAt)}</span></li>
                  <li className="card-history-info">Valable jusqu'au <span>{tarnsformDate(card.limitedDate)}</span></li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// == Export
export default User;
