import React, { useRef, useEffect } from 'react';
import { useMusic } from '../context/MusicContext';

const MusicPlayerBar = () => {
  const { currentSong } = useMusic();
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current && currentSong?.audio) {
      audioRef.current.load();
      audioRef.current.play();
    }
  }, [currentSong]);

  if (!currentSong) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      background: '#222',
      color: '#fff',
      padding: '1rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      zIndex: 1000
    }}>
      <div>
        <strong>{currentSong.title}</strong> - {currentSong.artist}
      </div>
      <audio ref={audioRef} controls style={{ height: '30px' }}>
        <source src={currentSong.audio} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default MusicPlayerBar;
