
import React from 'react';

export default function Resume() {
  return (
    <section className="resume" style={{ maxWidth: 700, margin: '0 auto', padding: '2rem' }}>
      <h2 style={{ color: '#2e3a59', marginBottom: 16 }}>Resume</h2>
      <a
        href="https://drive.google.com/file/d/13nBiVqmbTJahXPXnp1GZ7tSCVv4bpIlR/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        style={{ display: 'inline-block', marginTop: 20, background: '#00bcd4', color: 'white', padding: '12px 25px', borderRadius: 5, textDecoration: 'none', fontWeight: 'bold' }}
      >
        Download My Resume
      </a>
      <ul style={{ marginTop: 24 }}>
        <li>Time-series forecasting and data modeling</li>
        <li>Classification and predictive analytics</li>
        <li>Data visualization and dashboarding</li>
      </ul>
    </section>
  );
}
