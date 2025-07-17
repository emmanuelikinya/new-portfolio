
import React from 'react';

export default function Home() {
  return (
    <section className="home" style={{ textAlign: 'center', padding: '2rem' }}>
      <img
        src="https://drive.google.com/uc?export=view&id=1HxFfgOf3m18i2EJWI4BM9By91jKjNL2l"
        alt="Profile of Emmanuel Kang'ethe"
        style={{ width: 140, height: 140, borderRadius: '50%', objectFit: 'cover', border: '4px solid #00bcd4', marginBottom: 20 }}
      />
      <h1 style={{ color: '#2e3a59', fontSize: '2.5rem', marginBottom: 10 }}>Emmanuel Kang'ethe</h1>
      <div className="tagline" style={{ fontSize: '1.2rem', fontStyle: 'italic', color: '#666', marginBottom: 30 }}>
        Data Science Enthusiast | Python Developer | Passionate About Impactful Insights
      </div>
      <div className="links" style={{ marginBottom: 30 }}>
        <a href="https://github.com/manuokings" target="_blank" rel="noopener noreferrer" style={{ color: '#00bcd4', fontWeight: 600, margin: '0 15px', fontSize: '1.1rem' }}>GitHub</a>
        <a href="https://www.linkedin.com/in/emmanuel-ikinya-kangethe/" target="_blank" rel="noopener noreferrer" style={{ color: '#00bcd4', fontWeight: 600, margin: '0 15px', fontSize: '1.1rem' }}>LinkedIn</a>
      </div>
    </section>
  );
}
