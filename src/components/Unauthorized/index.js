// == Import
// = Hooks and method
import { useNavigate } from 'react-router-dom';

// = Style
import './unauthorized.scss';

// == Composant
const Unauthorized = () => {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  return (
    <section className="unauthorized">
      <h1 className="unauthorized-title">Oups</h1>
      <p className="unauthorized-content">Vous n'avez pas accès à cette page.</p>
      <div>
        <button
          className="unauthorized-button"
          type="button"
          onClick={goBack}
        >
          Retour
        </button>
      </div>
    </section>
  );
};

export default Unauthorized;
