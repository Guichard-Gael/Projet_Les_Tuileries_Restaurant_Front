// == Import
// = Hooks and method
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// = Components
import Loading from '../App/Loading';

// = Style
import './gallery.scss';

// = Actions
import { fetchGalleryContent } from '../../actions/site';

// == Composant
const Gallery = () => {
  const dispatch = useDispatch();

  const baseUrlImg = useSelector((state) => state.site.base_url_img);
  // console.log(base_url_img);

  const isLoading = useSelector((state) => state.site.loading);
  // console.log(isLoading);

  const contenuPageGallery = useSelector((state) => state.site.galleryContent);
  // console.log(contenuPageGallery);
  const contenuTextGallery = contenuPageGallery.page_content;
  // console.log(contenuTextGallery);

  const pictureGallery = contenuPageGallery.pictures;
  // console.log(pictureGallery);

  useEffect(() => {
    if (isLoading === true) {
      dispatch(fetchGalleryContent());
    }
  }, [isLoading]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="gallery">
      <h1 className="gallery-title">{contenuTextGallery[0].title}</h1>
      <p className="gallery-content">{contenuTextGallery[0].content}</p>

      <div className="gallery-container">
        {pictureGallery.map((image) => (
          <img
            key={image.picture_id}
            className="gallery-img"
            src={`${baseUrlImg}/${image.picture_path}`}
            alt={image.picture_alt}
          />
        ))}
      </div>
    </div>
  );
};

// == Export
export default Gallery;
