// == Import
// = Hooks and method
import { useDispatch, useSelector } from 'react-redux';

// = Components
import FieldBuy from './FieldBuy';
// import Loading from '../App/Loading';

// = Style
import './buy.scss';

// = Actions
import { updateBuyInputField, submitGift } from '../../actions/buy';

// == Composant
const Buy = () => {
  const dispatch = useDispatch();

  const isLogged = useSelector((state) => state.user.isLogged);
  console.log(`Buy: User connected ? ${isLogged}`);

  const cardAmount = useSelector((state) => state.buyCard.cardAmount);
  const cardGifter = useSelector((state) => state.buyCard.cardGifter);
  const cardReceiver = useSelector((state) => state.buyCard.cardReceiver);

  return (
    <section className="buy-section">
      <h1 className="buy-section-title">Formulaire d'achat d'une carte cadeau</h1>
      <FieldBuy
        cardAmount={cardAmount}
        cardGifter={cardGifter}
        cardReceiver={cardReceiver}
        changeField={(newValue, identifier) => {
          // console.log(`changeField: newValue=${newValue}, identifier=${identifier}`);
          const action = updateBuyInputField(newValue, identifier);
          dispatch(action);
        }}
        handleGift={() => {
          // console.log('handleLogin');

          // on envoie une requête au serveur => dispatch une action, qui sera traitée
          // par un middleware
          dispatch(submitGift());
        }}
      />
    </section>
  );
};

// == Export
export default Buy;
