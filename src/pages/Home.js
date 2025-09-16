import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  const featuredPlaylists = [
    {
      id: 1,
      name: 'Tollywood Hits',
      description: 'Latest chartbusters from Telugu cinema.',
      image: 'https://i.scdn.co/image/ab67706f00000003503b681b6031045cc92f419d',
    },
    {
      id: 2,
      name: 'Melody Magic',
      description: 'Soothing Telugu melodies to calm your mind.',
      image: 'https://i.scdn.co/image/ab67706f000000030865e41cf28c84c6458e57e6',
    },
    {
      id: 3,
      name: 'Mass Masala',
      description: 'High-energy beats to make you dance.',
      image: 'https://i.scdn.co/image/ab67706f00000003ffcb6d308b409334553c232e',
    },
  ];

  const styles = {
    container: {
      backgroundColor: '#111',
      color: 'white',
      minHeight: '100vh',
      padding: '2rem',
      fontFamily: 'Arial, sans-serif',
    },
    hero: {
      background: 'linear-gradient(to right, #7b1fa2, #e91e63)',
      borderRadius: '16px',
      padding: '2rem',
      textAlign: 'center',
      marginBottom: '3rem',
    },
    heroTitle: {
      fontSize: '2.5rem',
      marginBottom: '0.5rem',
    },
    heroText: {
      fontSize: '1.1rem',
      color: '#fce4ec',
    },
    sectionTitle: {
      fontSize: '1.8rem',
      marginBottom: '1rem',
    },
    playlistGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
      gap: '2rem',
    },
    exploreButton: {
      marginTop: '2rem',
      padding: '0.7rem 1.5rem',
      fontSize: '1rem',
      backgroundColor: '#e91e63',
      color: 'white',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      transition: 'background 0.3s',
    },
  };

  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <motion.div
        style={styles.hero}
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 style={styles.heroTitle}>🎶 Welcome to Telugu MusicZone</h1>
        <p style={styles.heroText}>
          Enjoy trending Tollywood songs, nostalgic melodies, and foot-tapping beats – all in one place.
        </p>
      </motion.div>

      {/* Featured Playlists */}
      <h2 style={styles.sectionTitle}>🌟 Top Telugu Playlists</h2>
      <div style={styles.playlistGrid}>
        {featuredPlaylists.map((playlist) => (
          <motion.div
            key={playlist.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: playlist.id * 0.2 }}
            whileHover={{ scale: 1.05 }}
            style={{
              backgroundColor: '#1e1e1e',
              borderRadius: '12px',
              padding: '1rem',
              position: 'relative',
              cursor: 'pointer',
              overflow: 'hidden',
            }}
          >
            <img
              src={playlist.image}
              alt={playlist.name}
              style={{
                width: '100%',
                height: '180px',
                objectFit: 'cover',
                borderRadius: '10px',
                marginBottom: '0.8rem',
              }}
            />
            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.3rem' }}>
              {playlist.name}
            </h3>
            <p style={{ fontSize: '0.95rem', color: '#aaa' }}>{playlist.description}</p>

            {/* Play Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              style={{
                position: 'absolute',
                bottom: '20px',
                right: '20px',
                backgroundColor: '#e91e63',
                border: 'none',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                color: '#fff',
                fontSize: '1.2rem',
                cursor: 'pointer',
              }}
              onClick={() => alert(`Playing ${playlist.name}`)}
            >
              ▶
            </motion.button>
          </motion.div>
        ))}
      </div>

      {/* Explore All Button */}
      <div style={{ textAlign: 'center' }}>
        <button
          style={styles.exploreButton}
          onClick={() => alert('Explore All Telugu Playlists')}
          onMouseOver={(e) => (e.target.style.backgroundColor = '#d81b60')}
          onMouseOut={(e) => (e.target.style.backgroundColor = '#e91e63')}
        >
          Explore All Telugu Songs →
        </button>
      </div>
    </div>
  );
};

export default Home;
