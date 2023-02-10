// == Import
// = Hooks and method
import { Link, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import classNames from 'classnames';

// = Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

// = Logo
import logo from '../../assets/image/ltb-logo.jpg';

// = Style
import './navBar.scss';

// = Data
import categoriesNav from '../../data/categories-nav';

// = Actions
import { toggleMenuOpen, setLoading } from '../../actions/site';
import { userLogOut } from '../../actions/user';

// == Composant
function NavBar() {
  const dispatch = useDispatch();

  const isOpen = useSelector((state) => state.site.isMenuOpen);

  const cssClassForButton = classNames('nav-burger', { 'nav-burger--open': isOpen });
  const isSmallScreen = useMediaQuery({ query: '(max-width: 1200px)' });
  const isMediumDesktopScreen = useMediaQuery({ query: '(min-width: 1201px)' });

  // indicates if the user is logged
  const isLogged = useSelector((state) => state.user.isLogged);
  // console.log(isLogged);

  return (
    <header className="nav">
      <div className="nav-header">
        <Link
          to="/"
        >
          <img className="nav-logo" src={logo} alt="logo les tuileries" />
        </Link>
      </div>
      <button
        className={cssClassForButton}
        type="button"
        onClick={() => {
          dispatch(toggleMenuOpen());
        }}
      >
        <FontAwesomeIcon icon={faBars} />
      </button>
      {isMediumDesktopScreen && (
        <nav className="nav-container">
          {categoriesNav.map((item) => (
            <NavLink
              className={({ isActive }) => (
                isActive ? 'nav-link nav-link--selected' : 'nav-link'
              )}
              to={item.route}
              key={item.label}
              onClick={() => {
                dispatch(setLoading(true));
              }}
            >
              {item.label}
            </NavLink>
          ))}
          {!isLogged ? (
            <NavLink
              className={({ isActive }) => (
                isActive ? 'nav-link nav-link--selected' : 'nav-link'
              )}
              to="/espace-connexion"
              onClick={() => {
                dispatch(setLoading(true));
                dispatch(toggleMenuOpen());
              }}
            >
              Connexion
            </NavLink>
          ) : (
            <>
              <NavLink
                className={({ isActive }) => (
                  isActive ? 'nav-link nav-link--selected' : 'nav-link'
                )}
                to="/espace-client"
                onClick={() => {
                  dispatch(setLoading(true));
                  dispatch(toggleMenuOpen());
                }}
              >
                {/* client space */}
                <FontAwesomeIcon icon={faUser} />
              </NavLink>
              <NavLink
                className={({ isActive }) => (
                  isActive ? 'nav-link nav-link--selected' : 'nav-link'
                )}
                to="/"
                onClick={() => {
                  localStorage.clear();
                  dispatch(setLoading(true));
                  dispatch(userLogOut());
                  dispatch(toggleMenuOpen());
                }}
              >
                {/* log out button */}
                <FontAwesomeIcon icon={faRightFromBracket} />
              </NavLink>
            </>
          )}
        </nav>
      )}
      {isSmallScreen && isOpen && (
        <nav className="nav-container">
          {categoriesNav.map((item) => (
            <NavLink
              className={({ isActive }) => (
                isActive ? 'nav-link nav-link--selected' : 'nav-link'
              )}
              to={item.route}
              key={item.label}
              onClick={() => {
                dispatch(setLoading(true));
                dispatch(toggleMenuOpen());
              }}
            >
              {item.label}
            </NavLink>
          ))}
          {!isLogged ? (
            <NavLink
              className={({ isActive }) => (
                isActive ? 'nav-link nav-link--selected' : 'nav-link'
              )}
              to="/espace-connexion"
              key="Espace Connexion"
              onClick={() => {
                dispatch(setLoading(true));
                dispatch(toggleMenuOpen());
              }}
            >
              Espace Connexion
            </NavLink>
          ) : (
            <>
              <NavLink
                className={({ isActive }) => (
                  isActive ? 'nav-link nav-link--selected' : 'nav-link'
                )}
                to="/espace-client"
                onClick={() => {
                  dispatch(setLoading(true));
                  dispatch(toggleMenuOpen());
                }}
              >
                {/* client space */}
                <FontAwesomeIcon icon={faUser} /> Espace Client
              </NavLink>
              <NavLink
                className={({ isActive }) => (
                  isActive ? 'nav-link nav-link--selected' : 'nav-link'
                )}
                to="/"
                onClick={() => {
                  localStorage.clear();
                  dispatch(setLoading(true));
                  dispatch(userLogOut());
                  dispatch(toggleMenuOpen());
                }}
              >
                {/* log out button */}
                <FontAwesomeIcon icon={faRightFromBracket} /> Deconnexion
              </NavLink>
            </>
          )}
        </nav>
      )}
    </header>
  );
}

// == Export
export default NavBar;
