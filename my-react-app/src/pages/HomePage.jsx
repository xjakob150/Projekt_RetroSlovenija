import Navbar from '../components/Navbar/Navbar.jsx';
import Footer from '../components/Footer/Footer.jsx';

import './App.css';

function HomePage() {
  return (
    <div className="app-container">
      <main className="flex-grow-1">
        <Navbar />
        <Footer />
      </main>
    </div>
  )
}

export default HomePage;
