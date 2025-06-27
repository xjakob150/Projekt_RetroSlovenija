import Navbar from '../components/Navbar/Navbar.jsx';
import Footer from '../components/Footer/Footer.jsx';
import RegisterForm from '../components/RegisterForm/RegisterForm.jsx';

import './App.css';

function RegisterPage() {
  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        <RegisterForm/>
      </main>
      <Footer />
    </div>
  )
}

export default RegisterPage;
