import React, { useState } from 'react';
import { toggleFavorite, isFavorite } from '../utils/favoriteUtils';

const Playlist = () => {
  const playlist = {
    name: 'Telugu Hits 🎧',
    description: 'Enjoy this handpicked collection of trending and evergreen Telugu songs.',
    songs: [
      { id: 1, title: 'Samajavaragamana', artist: 'Sid Sriram' },
      { id: 2, title: 'Butta Bomma', artist: 'Armaan Malik' },
      { id: 3, title: 'Oo Antava', artist: 'Indravathi Chauhan' },
      { id: 4, title: 'Ammayi', artist: 'Anirudh Ravichander' },
      { id: 5, title: 'Leharaayi', artist: 'Javed Ali' },
      { id: 6, title: 'Nee Kallu Neeli Samudram', artist: 'Javed Ali, Shreya Ghoshal' },
    ],
  };

  const [update, setUpdate] = useState(false); // to trigger re-render after liking

  const handleFavorite = (song) => {
    toggleFavorite(song);
    setUpdate(!update); // re-render component
  };

  const styles = {
    container: {
      padding: '2rem',
      backgroundColor: '#121212',
      color: 'white',
      minHeight: '100vh',
      fontFamily: 'Arial, sans-serif',
    },
    heading: {
      fontSize: '2.2rem',
      marginBottom: '0.5rem',
    },
    description: {
      fontSize: '1rem',
      color: '#bbb',
      marginBottom: '2rem',
    },
    songList: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
    },
    songCard: {
      display: 'flex',
      alignItems: 'center',
      backgroundColor: '#1e1e1e',
      padding: '1rem',
      borderRadius: '12px',
      transition: 'background 0.3s ease, transform 0.2s ease',
    },
    songIcon: {
      fontSize: '1.5rem',
      marginRight: '1rem',
    },
    songInfo: {
      flexGrow: 1,
    },
    title: {
      margin: 0,
      fontSize: '1.1rem',
    },
    artist: {
      margin: 0,
      fontSize: '0.9rem',
      color: '#aaa',
    },
    playBtn: {
      backgroundColor: '#e91e63',
      border: 'none',
      color: 'white',
      padding: '0.5rem 1rem',
      borderRadius: '20px',
      cursor: 'pointer',
      marginRight: '1rem',
    },
    favBtn: {
      fontSize: '1.5rem',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: 'white',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>{playlist.name}</h2>
      <p style={styles.description}>{playlist.description}</p>

      <div style={styles.songList}>
        {playlist.songs.map((song) => (
          <div key={song.id} style={styles.songCard}>
            <div style={styles.songIcon}>🎵</div>
            <div style={styles.songInfo}>
              <h4 style={styles.title}>{song.title}</h4>
              <p style={styles.artist}>{song.artist}</p>
            </div>
            <button style={styles.playBtn}>▶</button>
            <button
              style={styles.favBtn}
              onClick={() => handleFavorite(song)}
              title={isFavorite(song.id) ? 'Remove from favorites' : 'Add to favorites'}
            >
              {isFavorite(song.id) ? '❤️' : '🤍'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Playlist;
