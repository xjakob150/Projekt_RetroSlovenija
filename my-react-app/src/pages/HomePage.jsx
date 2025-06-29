import Navbar from '../components/Navbar/Navbar.jsx';
import Footer from '../components/Footer/Footer.jsx';
import GameCards from '../components/GameCards/GameCards.jsx';

import './App.css';

function HomePage() {
  return (
    <div className="app-container">
      <Navbar />
      <main className="flex-grow-1 d-flex justify-content-center">
        <div className="bg-white shadow p-4 w-100" style={{ maxWidth: '1440px' }} >
          <GameCards />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default HomePage;
