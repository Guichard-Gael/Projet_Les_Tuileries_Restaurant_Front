// == Import
// = Hooks and method
import { useSelector } from 'react-redux';
// import PropTypes from 'prop-types';

// = Style
import './pictureNews.scss';

// == Composant
const PictureNews = ({ alt, id, path }) => {
  const baseUrlImg = useSelector((state) => state.site.base_url_img);

  if (path !== null) {
    return (
      <img className="news-img" src={`${baseUrlImg}/${path}`} alt={alt} />
    );
  }

  return (console.log("Pas d'images associées à la new"));
};

// PictureNews.propTypes = {
//   alt: PropTypes.string.isRequired,
//   id: PropTypes.number.isRequired,
//   path: PropTypes.string.isRequired,
// };

// == Export
export default PictureNews;
