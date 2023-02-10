// == Import
// = Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import {
  faPhone, faEnvelope, faLocationArrow, faClock,
} from '@fortawesome/free-solid-svg-icons';

// = Style
import './footer.scss';

// = Data
import footerData from '../../data/footerData';
import { currentYear } from '../../Utils/date';

// == Composant
const Footer = () => (
  <div className="footer">
    <div className="footer-desktop">
      <div className="maps">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2756.8293216486236!2d4.826921115848789!3d46.29336488575327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f36fa972132869%3A0x97e4afe145dc8ce0!2s29%20Quai%20des%20Marans%2C%2071000%20M%C3%A2con!5e0!3m2!1sfr!2sfr!4v1674225996754!5m2!1sfr!2sfr"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <div className="footer-container">
        <div className="footer-card">
          <FontAwesomeIcon className="footer-icon" icon={faPhone} />
          <p>{ footerData.phone }</p>
          <FontAwesomeIcon className="footer-icon" icon={faEnvelope} />
          <p>{ footerData.mail }</p>
          <FontAwesomeIcon className="footer-icon" icon={faLocationArrow} />
          <p>{ footerData.adress }</p>
        </div>
        <div className="footer-card rigth">
          <FontAwesomeIcon className="footer-icon" icon={faClock} />
          <p>{ footerData.day.Week } :</p>
          <ul>
            <li>{ footerData.hour.morning }</li>
            <li>{ footerData.hour.evening }</li>
          </ul>
          <p>{ footerData.day.WeekEnd } :</p>
          <ul>
            <li>{ footerData.hour.sunday }</li>
          </ul>
          <br />
          <p>{ footerData.order.morning }</p>
          <p>{ footerData.order.evening }</p>
        </div>
      </div>
    </div>
    <div className="footer-socials">
      <a
        href="https://www.facebook.com/brasserieslestuileries?locale=fr_FR"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon className="footer-icon" icon={faFacebook} />
      </a>
      <a
        href="https://instagram.com/brasserielestuileries71?igshid=YmMyMTA2M2Y="
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon className="footer-icon" icon={faInstagram} />
      </a>
    </div>
    <p className="footer-copyright">Copyright © {currentYear()} . Tous les droits sont réservés.</p>
  </div>
);

// == Export
export default Footer;
