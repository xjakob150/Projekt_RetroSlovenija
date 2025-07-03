import Navbar from '../components/Navbar/Navbar.jsx';
import Footer from '../components/Footer/Footer.jsx';
import UserCard from '../components/UserCard/UserCard.jsx';

import './App.css';

function HomePage() {
  return (
    <div className="app-container">
      <Navbar />
      <main className="flex-grow-1 d-flex justify-content-center">
        <div className="bg-white shadow p-4 w-100" style={{ maxWidth: '1440px' }} >
          <UserCard />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default HomePage;
