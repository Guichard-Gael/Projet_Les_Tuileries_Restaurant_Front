// == Import
// = Hooks and method
import { Routes, Route } from 'react-router-dom';

// = Components
import Page from '../Page';
import Home from '../Home';
import Surprise from '../Surprise';
import Menu from '../Menu';
import Event from '../Event';
import Gallery from '../Gallery';
import Contact from '../Contact';
import Connexion from '../Connexion';
import RequireAuth from '../RequireAuth';
import User from '../User';
import UserEdit from '../UserEdit';
import Buy from '../Buy';
import Unauthorized from '../Unauthorized';

// = Style
import './app.scss';

// == Composant
function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Page />}>
          {/* public routes */}
          <Route path="/" element={<Home />} />
          <Route path="/offrir-surprise-gourmande" element={<Surprise />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/evenement" element={<Event />} />
          <Route path="/galerie-photo" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/espace-connexion" element={<Connexion />} />

          {/* we want to protect these routes */}
          <Route element={<RequireAuth />}>
            <Route path="/espace-client" element={<User />} />
            <Route path="/espace-client/edit" element={<UserEdit />} />
            <Route path="/achat-surprise-gourmande" element={<Buy />} />
          </Route>

          {/* catch all */}
          <Route path="*" element={<Unauthorized />} />
        </Route>
      </Routes>
    </div>
  );
}

// == Export
export default App;
