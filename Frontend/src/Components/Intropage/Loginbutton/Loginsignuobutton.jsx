import '../Loginbutton/Loginsignuobutton.css';
import { Link } from 'react-router-dom';

const Loginauth = () => {
    return (
      <div className="login-auth-container">
        <div className="signup-button">
          <Link to ='/signup'>
            <button className="signup-btn">Sign Up</button>
          </Link>
        </div>
        <div className="login-button">
          <Link to="/login" className="codepen-button">
            <span>Login</span>
          </Link>
        </div>
      </div>
    );
};

export default Loginauth;
