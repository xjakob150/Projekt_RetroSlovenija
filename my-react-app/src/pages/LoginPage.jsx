import Navbar from '../components/Navbar/Navbar.jsx';
import Footer from '../components/Footer/Footer.jsx';
import LoginForm from '../components/LoginForm/LoginForm.jsx';
import './App.css';

function LoginPage() {
  return (
    <div className="app-container">
      <Navbar />
      <main className="flex-grow-1 d-flex justify-content-center align-items-center">
        <div className='w-100'>
          <div className="ocean">
            <div className="wave"></div>
            <div className="wave wave2"></div>
          </div>
          <LoginForm />
        </div>
      </main>
    </div>
  )
}

export default LoginPage;
