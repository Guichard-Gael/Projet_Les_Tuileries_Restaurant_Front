// == Import
// = Hooks and method
// import PropTypes from 'prop-types';
import { tarnsformDate } from '../../Utils/date';

// = Components
import PictureNews from './PictureNews';

// = Style
import './cardNews.scss';

// = Components
const CardNews = ({
  content,
  id,
  pictures,
  publishedAt,
  sliderPosition,
  title,
}) => (
  <article className="card-news">
    {
      pictures.map((picture) => (
        <PictureNews key={picture.id} {...picture} />
      ))
    }

    <div className="card-news-content">
      <h1 className="card-news-title">{title}</h1>
      <p className="card-news-desc">{content}</p>
      <p className="card-news-date">Publié le {tarnsformDate(publishedAt)}</p>
    </div>
  </article>
);

// CardNews.propTypes = {
//   content: PropTypes.string.isRequired,
//   id: PropTypes.number.isRequired,
//   publishedAt: PropTypes.string.isRequired,
//   sliderPosition: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
// };

// == Export
export default CardNews;
