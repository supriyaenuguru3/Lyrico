import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleSearch = () => {
    if (onSearch) onSearch(query);
  };

  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      margin: '40px auto',
      width: '90%',
      maxWidth: '600px',
      borderRadius: '50px',
      backgroundColor: isFocused ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.04)',
      boxShadow: isFocused
        ? '0 0 10px rgba(29, 185, 84, 0.6)'
        : '0 4px 12px rgba(0, 0, 0, 0.3)',
      transition: 'all 0.3s ease',
      padding: '10px 14px',
    },
    input: {
      flex: 1,
      padding: '12px 18px',
      backgroundColor: 'transparent',
      border: 'none',
      outline: 'none',
      color: '#fff',
      fontSize: '16px',
      borderRadius: '50px',
    },
    button: {
      marginLeft: '12px',
      padding: '10px 22px',
      backgroundColor: '#1db954',
      color: '#fff',
      border: 'none',
      borderRadius: '30px',
      fontSize: '15px',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      transition: 'background-color 0.3s ease',
    },
  };

  return (
    <div style={styles.container}>
      <input
        type="text"
        placeholder="Search music, artists, playlists..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={styles.input}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <button
        onClick={handleSearch}
        style={styles.button}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#1ed760')}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#1db954')}
      >
        <FaSearch />
        Search
      </button>
    </div>
  );
};

export default SearchBar;
