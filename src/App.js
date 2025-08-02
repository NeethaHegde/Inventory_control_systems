import './App.css';
import Nav from './components/publicPages/Nav';
import Home from './components/publicPages/Home';
import Login from './components/Authentication/Login';

import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';

function AppContent() {
  const location = useLocation();
  const hideNavPaths = ['/Login', '/register'];
  const hideNav = hideNavPaths.includes(location.pathname);

  return (
    <>
      {!hideNav && <Nav />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Login' element={<Login />} />
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
