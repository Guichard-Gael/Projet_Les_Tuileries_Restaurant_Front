// == Import
// = Hooks and method
import { useLocation, Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

// == Composant
const RequireAuth = () => {
  // indicates if the user is logged
  const isLogged = useSelector((state) => state.user.isLogged);
  // console.log(`RequireAuth: User connected ? ${isLogged}`);

  const isTokenJWT = localStorage.getItem('SESSION_TOKEN') !== null;
  // console.log(isTokenJWT);

  const location = useLocation();

  return (
    (isLogged || isTokenJWT)
      ? <Outlet />
      : <Navigate to="/espace-connexion" state={{ from: location }} replace />
  );
};

// == Export
export default RequireAuth;
