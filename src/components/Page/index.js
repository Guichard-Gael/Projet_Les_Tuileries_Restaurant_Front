// == Import
// = Hooks and method
import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

// = Style
import './page.scss';

// = Components
import NavBar from '../NavBar';
import Footer from '../Footer';

// = Actions
import { getUserInfo } from '../../actions/user';

const Page = () => {
  const dispatch = useDispatch();

  const isTokenJWT = localStorage.getItem('SESSION_TOKEN') !== null;
  // console.log(isTokenJWT);

  useEffect(() => {
    if (isTokenJWT === true) {
      // sends the JWT token to the server to retrieve the user's information
      dispatch(getUserInfo());
    }
  }, [isTokenJWT]);

  return (
    <main className="page">
      <NavBar />
      <Outlet />
      <Footer />
    </main>
  );
};

export default Page;
