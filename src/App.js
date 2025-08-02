import './App.css';
import Nav from './components/publicPages/Nav';
import Home from './components/publicPages/Home';
import Login from './components/Authentication/Login';

import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Register from './components/Authentication/Register';

function AppContent() {
  const location = useLocation();
  const hideNavPaths = ['/Login', '/Register'];
  const hideNav = hideNavPaths.includes(location.pathname);

  return (
    <>
      {!hideNav && <Nav />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Register' element={<Register />} />

      </Routes>
    </>
  );
}

function App() {
  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
  );
}

export default App;
