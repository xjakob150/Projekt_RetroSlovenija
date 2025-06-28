import Navbar from '../components/Navbar/Navbar.jsx';
import Footer from '../components/Footer/Footer.jsx';
import LoginForm from '../components/LoginForm/LoginForm.jsx';
import './App.css';

function LoginPage() {
  return (
    <div className="app-container">
      <div class="ocean">
        <div class="wave"></div>
        <div class="wave wave2"></div>
      </div>
      <LoginForm />
    </div>
  )
}

export default LoginPage;
