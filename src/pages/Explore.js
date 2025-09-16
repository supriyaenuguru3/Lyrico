import React, { useState } from 'react';
import { useMusic } from '../context/MusicContext';

const Explore = () => {
  const { setCurrentSong } = useMusic();
  const [filteredTag, setFilteredTag] = useState(null);

  const categories = ['#All', '#Melody', '#Mass', '#Romantic', '#Sad'];

  const teluguSongs = [
    {
      id: 1,
      name: 'Nee Kallu',
      image: 'https://i1.sndcdn.com/artworks-000072570761-p3qfgq-t500x500.jpg',
      audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
      tag: '#Melody',
    },
    {
      id: 2,
      name: 'Butta Bomma',
      image: 'https://i.scdn.co/image/ab67616d0000b273a1cfcba68898f3fc4182c0d5',
      audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
      tag: '#Mass',
    },
    {
      id: 3,
      name: 'Samajavaragamana',
      image: 'https://c.saavncdn.com/084/Ala-Vaikunthapurramuloo-Telugu-2019-20200102104014-500x500.jpg',
      audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
      tag: '#Romantic',
    },
  ];

  const filteredSongs = filteredTag
    ? teluguSongs.filter((song) => song.tag === filteredTag)
    : teluguSongs;

  const styles = {
    container: {
      padding: '2rem',
      backgroundColor: '#121212',
      color: 'white',
      minHeight: '100vh',
    },
    heading: {
      fontSize: '2rem',
      marginBottom: '1rem',
    },
    tagButton: {
      marginRight: '1rem',
      padding: '0.5rem 1rem',
      border: 'none',
      borderRadius: '20px',
      cursor: 'pointer',
      backgroundColor: '#333',
      color: 'white',
    },
    card: {
      backgroundColor: '#1e1e1e',
      padding: '1rem',
      borderRadius: '12px',
      marginTop: '1rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    image: {
      height: '60px',
      width: '60px',
      borderRadius: '10px',
      marginRight: '1rem',
    },
    info: {
      flex: 1,
    },
    playBtn: {
      padding: '0.5rem 1rem',
      backgroundColor: '#e91e63',
      border: 'none',
      borderRadius: '20px',
      color: 'white',
      cursor: 'pointer',
    },
    controlBar: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
    },
    menuIcon: {
      fontSize: '20px',
      color: '#fff',
      cursor: 'pointer',
      padding: '6px 10px',
      borderRadius: '50%',
      transition: 'background 0.2s ease',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>🎵 Explore Telugu Songs</h2>

      <div>
        {categories.map((tag) => (
          <button
            key={tag}
            style={styles.tagButton}
            onClick={() => setFilteredTag(tag === '#All' ? null : tag)}
          >
            {tag}
          </button>
        ))}
        {filteredTag && (
          <button
            onClick={() => setFilteredTag(null)}
            style={{ ...styles.tagButton, marginLeft: '1rem', backgroundColor: '#555' }}
          >
            Show All
          </button>
        )}
      </div>

      <div>
        {filteredSongs.map((song) => (
          <div key={song.id} style={styles.card}>
            <img src={song.image} alt={song.name} style={styles.image} />
            <div style={styles.info}>
              <h3>{song.name}</h3>
              <p style={{ color: '#bbb' }}>{song.tag}</p>
            </div>
            <div style={styles.controlBar}>
              <button
                style={styles.playBtn}
                onClick={() =>
                  setCurrentSong({
                    title: song.name,
                    artist: 'Telugu Artist',
                    audio: song.audio,
                  })
                }
              >
                ▶
              </button>
              <div style={styles.menuIcon} title="More Options">⋮</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;
