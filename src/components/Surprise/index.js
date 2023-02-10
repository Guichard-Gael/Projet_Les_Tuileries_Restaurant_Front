// == Import
// = Hooks and method
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// = Components
import Card from '../Card';
import Loading from '../App/Loading';

// = Style
import './surprise.scss';

// = Actions
import { fetchSurpriseContent } from '../../actions/site';

// == Composant
const Surprise = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLoading = useSelector((state) => state.site.loading);
  // console.log(isLoading);

  const contenuPage = useSelector((state) => state.site.surpriseContent);
  // console.log(contenuPage);

  useEffect(() => {
    if (isLoading === true) {
      dispatch(fetchSurpriseContent());
    }
  }, [isLoading]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="surprise">
      {contenuPage.map((content) => (
        <Card key={content.page_order} {...content} />
      ))}
      <div className="button">
        <button
          type="button"
          className="surprise-button"
          onClick={() => {
            // TODO faire une ternaire quand le client est connecté
            navigate('/espace-connexion');
          }}
        >
          Offrir ce Chèque cadeau
        </button>
      </div>
    </div>
  );
};

// == Export
export default Surprise;
