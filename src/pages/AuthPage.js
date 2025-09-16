
import React, { useState } from 'react';

const AuthPage = () => {
  const [formType, setFormType] = useState('login');

  const renderForm = () => {
    if (formType === 'login') {
      return (
        <>
          <h2 style={styles.heading}>Login</h2>
          <input type="email" placeholder="Email" style={styles.input} />
          <input type="password" placeholder="Password" style={styles.input} />
          <button style={styles.button}>Login</button>
          <p style={styles.linkText} onClick={() => setFormType('forgot')}>Forgot Password?</p>
          <p style={styles.text}>
            Don’t have an account?{' '}
            <span style={styles.link} onClick={() => setFormType('signup')}>Sign Up</span>
          </p>
        </>
      );
    } else if (formType === 'signup') {
      return (
        <>
          <h2 style={styles.heading}>Sign Up</h2>
          <input type="text" placeholder="Name" style={styles.input} />
          <input type="email" placeholder="Email" style={styles.input} />
          <input type="password" placeholder="Password" style={styles.input} />
          <button style={styles.button}>Register</button>
          <p style={styles.text}>
            Already have an account?{' '}
            <span style={styles.link} onClick={() => setFormType('login')}>Login</span>
          </p>
        </>
      );
    } else if (formType === 'forgot') {
      return (
        <>
          <h2 style={styles.heading}>Forgot Password</h2>
          <input type="email" placeholder="Enter your email" style={styles.input} />
          <button style={styles.button}>Reset Password</button>
          <p style={styles.text}>
            Remember your password?{' '}
            <span style={styles.link} onClick={() => setFormType('login')}>Login</span>
          </p>
        </>
      );
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>{renderForm()}</div>
    </div>
  );
};

const styles = {
  container: {
    height: '100vh',
    background: 'linear-gradient(120deg, #1f1c2c, #928dab)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#2a2a3f',
    padding: '2rem',
    borderRadius: '12px',
    width: '340px',
    color: 'white',
    boxShadow: '0 0 10px rgba(255,255,255,0.1)',
  },
  heading: { textAlign: 'center', marginBottom: '1rem' },
  input: {
    width: '100%',
    padding: '10px',
    marginBottom: '1rem',
    backgroundColor: '#1e1e2f',
    border: 'none',
    borderRadius: '6px',
    color: 'white',
  },
  button: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#4fc3f7',
    color: '#121212',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    marginBottom: '1rem',
  },
  text: { textAlign: 'center', fontSize: '14px' },
  link: { color: '#4fc3f7', cursor: 'pointer', textDecoration: 'underline' },
  linkText: { textAlign: 'center', color: '#4fc3f7', cursor: 'pointer' },
};

export default AuthPage;
