// == Import
// = Hooks and method
import PropTypes from 'prop-types';

// = Style
import './field.scss';

// == Composant
const Field = ({
  value,
  type,
  name,
  placeholder,
  onChange,
}) => {
  const handleChange = (evt) => {
    onChange(evt.target.value, name);
  };

  const inputId = `field-${name}`;

  return (
    <div className={value.length > 0 ? 'field field--has-content' : 'field'}>
      <input
        value={value}
        onChange={handleChange}
        id={inputId}
        type={type}
        className="field-input"
        placeholder={placeholder}
        name={name}
        required
      />

      <label
        htmlFor={inputId}
        className="field-label"
      >
        {placeholder}
      </label>
    </div>
  );
};

Field.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

Field.defaultProps = {
  value: '',
  type: 'text',
};

// == Export
export default Field;
