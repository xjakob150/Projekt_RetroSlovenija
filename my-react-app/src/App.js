import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LoginPage from './pages/LoginPage.jsx';
import RegisterPage from './pages/RegisterPage.jsx';
import HomePage from './pages/HomePage.jsx';
import UserPage from './pages/UserPage.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/LoginPage" element={<LoginPage/>} />
        <Route path="/RegisterPage" element={<RegisterPage/>} />
        <Route path="/UserPage" element={<UserPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
