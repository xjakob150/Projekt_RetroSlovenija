import Navbar from '../components/Navbar/Navbar.jsx';
import Footer from '../components/Footer/Footer.jsx';
import LoginForm from '../components/LoginForm/LoginForm.jsx';
import './App.css';

function LoginPage() {
  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        <LoginForm/>
      </main>
      <Footer />
    </div>
  )
}

export default LoginPage;
