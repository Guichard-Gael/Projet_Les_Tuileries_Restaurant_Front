/* eslint-disable camelcase */
// == Import
// = Hooks and method
import { useSelector } from 'react-redux';
// import PropTypes from 'prop-types';

// = Style
import './card.scss';

// == Composant
const Card = ({
  content,
  page_content_id,
  picture_alt,
  picture_id,
  picture_path,
  title,
}) => {
  const baseUrlImg = useSelector((state) => state.site.base_url_img);
  // console.log(base_url_img);

  return (
    <article className="card">
      { picture_path !== null ? (<img className="card-img" src={`${baseUrlImg}/${picture_path}`} alt={picture_alt} />) : console.log("Pas d'images associées à ce contenu")}
      <div className="card-content">
        <h1 className="card-title">{title}</h1>
        <p className="card-desc">{content}</p>
      </div>
    </article>
  );
};

// Card.propTypes = {
//   content: PropTypes.string.isRequired,
//   page_content_id: PropTypes.string.isRequired,
//   picture_alt: PropTypes.string.isRequired,
//   picture_id: PropTypes.string.isRequired,
//   picture_path: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
// };

// == Export
export default Card;
