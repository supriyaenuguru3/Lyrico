import React, { useState } from 'react';
import avatar from '../assets/music-avatar.jpg';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('favorites');

  const tabs = {
    favorites: [
      'Shape of You - Ed Sheeran',
      'Blinding Lights - The Weeknd',
      'Calm Down - Rema',
      'Unstoppable - Sia',
    ],
    playlists: ['Workout Mix', 'Chill Vibes', 'Love Songs'],
  };

  const renderTabContent = () => {
    if (activeTab === 'settings') {
      return <p className="info-msg">Settings will be available soon.</p>;
    }

    return (
      <ul className="list">
        {tabs[activeTab].map((item, idx) => (
          <li key={idx}>🎵 {item}</li>
        ))}
      </ul>
    );
  };

  return (
    <div className="profile-wrapper">
      <div className="profile-header">
        <div className="user-info">
  
  <img src={avatar} alt="Avatar" className="avatar" />

  <div>
    <h2>Supi</h2>
    <p>supi@example.com</p>
  </div>
</div>

        <div className="profile-actions">
          <button>Edit Profile</button>
          <button className="logout">Log Out</button>
        </div>
      </div>

      <div className="profile-body">
        <div className="tabs">
          <button
            className={activeTab === 'favorites' ? 'active' : ''}
            onClick={() => setActiveTab('favorites')}
          >
            Favorites
          </button>
          <button
            className={activeTab === 'playlists' ? 'active' : ''}
            onClick={() => setActiveTab('playlists')}
          >
            My Playlists
          </button>
          <button
            className={activeTab === 'settings' ? 'active' : ''}
            onClick={() => setActiveTab('settings')}
          >
            Settings
          </button>
        </div>

        <div className="tab-content">{renderTabContent()}</div>
      </div>

      <style>{`
        .profile-wrapper {
          background-color: #121212;
          color: #f0f0f0;
          max-width: 900px;
          margin: 2rem auto;
          padding: 2rem;
          border-radius: 20px;
          box-shadow: 0 0 15px rgba(255, 255, 255, 0.05);
          font-family: 'Segoe UI', sans-serif;
        }

        .profile-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid #333;
          padding-bottom: 1.5rem;
          flex-wrap: wrap;
        }

        .user-info {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .user-info h2 {
          font-size: 1.8rem;
          margin-bottom: 0.3rem;
        }

        .user-info p {
          color: #aaa;
        }

        .avatar {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          border: 3px solid #ff4f5a;
          box-shadow: 0 0 12px #ff4f5a;
          object-fit: cover;
        }

        .profile-actions {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
        }

        .profile-actions button {
          padding: 10px 20px;
          background-color: #1e1e1e;
          border: 1px solid #ff4f5a;
          color: white;
          border-radius: 8px;
          cursor: pointer;
          transition: background 0.3s;
        }

        .profile-actions button:hover {
          background-color: #ff4f5a;
        }

        .profile-actions .logout {
          border-color: #888;
        }

        .profile-body {
          margin-top: 2rem;
        }

        .tabs {
          display: flex;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .tabs button {
          background: #1e1e1e;
          border: none;
          padding: 10px 20px;
          color: #fff;
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .tabs button:hover {
          background: #ff4f5a;
        }

        .tabs .active {
          background: #ff4f5a;
        }

        .tab-content {
          background: #181818;
          padding: 1.5rem;
          border-radius: 12px;
          box-shadow: inset 0 0 5px #000;
        }

        .list {
          list-style: none;
          padding: 0;
        }

        .list li {
          padding: 0.6rem 0;
          border-bottom: 1px solid #333;
        }

        .info-msg {
          color: #bbb;
          font-style: italic;
        }

        @media screen and (max-width: 600px) {
          .profile-header {
            flex-direction: column;
            align-items: flex-start;
          }

          .profile-actions {
            margin-top: 1rem;
            flex-direction: column;
            width: 100%;
          }

          .profile-actions button {
            width: 100%;
          }

          .tabs {
            flex-direction: column;
          }

          .tabs button {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default Profile;

