import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LoginPage from './pages/LoginPage.jsx';
import RegisterPage from './pages/RegisterPage.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/LoginPage" element={<LoginPage/>} />
        <Route path="/RegisterPage" element={<RegisterPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
