// == Import
// = Hooks and method
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useMediaQuery } from 'react-responsive';

// = Components
import Card from '../Card';
import CardNews from '../CardNews';
import Loading from '../App/Loading';
import Popup from '../Popup';

// = Style
import './home.scss';

// = Actions
import { fetchHomeContent } from '../../actions/site';

// == Composant
const Home = () => {
  const dispatch = useDispatch();

  const isSmallScreen = useMediaQuery({ query: '(max-width: 1200px)' });

  const isLoading = useSelector((state) => state.site.loading);
  // console.log(isLoading);

  const contenuPage = useSelector((state) => state.site.homeContent);
  // console.log(contenuPage);

  const contenuNews = useSelector((state) => state.site.newsContentForHome);
  // console.log(contenuNews);

  const videoToShow = useSelector((state) => state.site.presentationVideo);
  // console.log(videoToShow);

  useEffect(() => {
    if (isLoading === true) {
      dispatch(fetchHomeContent());
    }
  }, [isLoading]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Popup />
      <section className="container">
        <div className="container-video">
          <video className="presentation-video" loop muted autoPlay>
            <source src={`${videoToShow}`} type="video/mp4" />
          </video>
        </div>
        {!isSmallScreen ?? (
          <div className="container-infinite">
            <p className="infinite-new">
              <span>
              &nbsp;&nbsp;Dernière nouvelle - Dernière nouvelle - Dernière nouvelle - Dernière nouvelle -&nbsp;&nbsp;
              </span>
            </p>
            <p className="infinite-new infinite-new-2">
              <span>
              &nbsp;&nbsp;Dernière nouvelle - Dernière nouvelle - Dernière nouvelle - Dernière nouvelle -&nbsp;&nbsp;
              </span>
            </p>
          </div>
        )}
        <div className="container-news">
          {contenuNews.map((content) => (
            <CardNews key={`newsContentForHome-${content.id}`} {...content} />
          ))}
        </div>
        <div className="content-list">
          {contenuPage.map((content) => (
            <Card key={`homeContent-${content.page_order}`} {...content} />
          ))}
        </div>
      </section>
    </>
  );
};

// == Export
export default Home;
