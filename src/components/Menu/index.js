// == Import
// = Hooks and method
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// = Components
import Loading from '../App/Loading';

// = Style
import './menu.scss';

// = Actions
import { fetchMenuContent } from '../../actions/site';

// == Composant
const Menu = () => {
  const dispatch = useDispatch();

  const baseUrlImg = useSelector((state) => state.site.base_url_img);
  // console.log(base_url_img);

  const isLoading = useSelector((state) => state.site.loading);
  // console.log(isLoading);

  const contenuPage = useSelector((state) => state.site.menuContent);
  // console.log(contenuPage);

  const contenuText = contenuPage.page_content;
  // console.log(contenuText);

  const menuToShow = contenuPage.pictures;
  // console.log(menuToShow);

  useEffect(() => {
    if (isLoading === true) {
      dispatch(fetchMenuContent());
    }
  }, [isLoading]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="menu">
      <h1 className="menu-title">{contenuText[0].title}</h1>
      <p className="menu-content">{contenuText[0].content}</p>

      <div className="menu-container">
        {menuToShow.map((item) => (
          <img
            key={item}
            className="menu-img"
            src={`${baseUrlImg}/${item}`}
            alt="menu"
          />
        ))}
      </div>
    </div>
  );
};

// == Export
export default Menu;

/*
{contenuText.map((item) => (
  <>
    <h1 key={item.title} className="menu-title">{item.title}</h1>
    <p key={item.content} className="menu-content">{item.content}</p>
  </>
))}
*/
