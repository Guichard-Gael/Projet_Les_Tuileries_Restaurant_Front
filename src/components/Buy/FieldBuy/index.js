// == Import
// = Hooks and method
import PropTypes from 'prop-types';

// = Components
import Field from '../../Field';

// = Style
import './fieldBuy.scss';

// == Composant
const FieldBuy = ({
  cardAmount,
  cardGifter,
  cardReceiver,
  changeField,
  handleGift,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleGift();
  };

  return (
    <div className="buying-form">
      <form autoComplete="off" className="buying-form-element" onSubmit={handleSubmit}>
        <h2 className="buying-form-title">Montant:</h2>
        <Field
          name="cardAmount"
          placeholder="Montant de la carte"
          onChange={changeField}
          value={cardAmount}
        />
        <h2 className="buying-form-title">Offert par:</h2>
        <Field
          name="cardGifter"
          placeholder="De la part"
          onChange={changeField}
          value={cardGifter}
        />
        <h2 className="buying-form-title">Pour:</h2>
        <Field
          name="cardReceiver"
          placeholder="Pour"
          onChange={changeField}
          value={cardReceiver}
        />

        <button
          type="submit"
          className="buying-form-button"
        >
          Offrir ce Chèque cadeau
        </button>
      </form>
    </div>
  );
};

FieldBuy.propTypes = {
  /** content of the lastname field */
  cardAmount: PropTypes.string.isRequired,
  /** content of the firstname field */
  cardGifter: PropTypes.string.isRequired,
  /** content of the e-mail field */
  cardReceiver: PropTypes.string.isRequired,
  /** Processing triggered when a character is entered in one of the two fields
   * Parameters:
   * - first parameter is the new value for the field
   * - second parameter is to identify the field
  */
  changeField: PropTypes.func.isRequired,
  /** Processing triggered when the "envoyer" button is clicked */
  handleGift: PropTypes.func.isRequired,
};

// == Export
export default FieldBuy;
