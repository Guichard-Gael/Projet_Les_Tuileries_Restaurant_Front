// == Import
// = Hooks and method
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// = Components
import CardNews from '../CardNews';
import Loading from '../App/Loading';

// = Style
import './event.scss';

// = Actions
import { fetchEventContent } from '../../actions/site';

// == Composant
const Event = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector((state) => state.site.loading);
  // console.log(isLoading);

  const contenuPageEvent = useSelector((state) => state.site.eventContent);
  // console.log(contenuPageEvent);

  const contentToShow = contenuPageEvent.page_content;
  // console.log(contentToShow);

  useEffect(() => {
    if (isLoading === true) {
      dispatch(fetchEventContent());
    }
  }, [isLoading]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="event">
      <h1 className="event-title">Les derniers événements</h1>
      <div className="event-list">
        {contentToShow.map((content) => (
          <CardNews key={`eventPage-${content.id}`} {...content} />
        ))}
      </div>
    </div>
  );
};

// == Export
export default Event;
