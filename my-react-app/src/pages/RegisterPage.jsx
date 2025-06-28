import Navbar from '../components/Navbar/Navbar.jsx';
import Footer from '../components/Footer/Footer.jsx';
import RegisterForm from '../components/RegisterForm/RegisterForm.jsx';

import './App.css';

function RegisterPage() {
  return (
    <div className="app-container">
      <div class="ocean">
        <div class="wave"></div>
        <div class="wave wave2"></div>
      </div>
      <RegisterForm />
    </div>
  )
}

export default RegisterPage;
