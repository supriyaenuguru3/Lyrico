import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import MusicPlayerBar from './components/MusicPlayerBar';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Playlist from './pages/Playlist';
import Library from './pages/Library';
import Profile from './pages/Profile';
import AuthPage from './pages/AuthPage';

const App = () => {
  const location = useLocation();

  // Check if the current path is the login page
  const isLoginPage = location.pathname.toLowerCase() === '/auth';

  return (
    <>
      {/* ✅ Always show the Navbar */}
      <Navbar />

      {/* ✅ Show all routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/playlist" element={<Playlist />} />
        <Route path="/library" element={<Library />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/auth" element={<AuthPage />} />
     
      </Routes>

      {/* ❌ Hide the music player bar ONLY on the login page */}
      {!isLoginPage && <MusicPlayerBar />}
    </>
  );
};

export default App;
