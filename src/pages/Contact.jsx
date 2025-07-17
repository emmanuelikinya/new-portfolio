
import React from 'react';

export default function Contact() {
  return (
    <section className="contact" style={{ maxWidth: 700, margin: '0 auto', padding: '2rem' }}>
      <h2 style={{ color: '#2e3a59', marginBottom: 16 }}>Contact Me</h2>
      <p>Email: <a href="mailto:emmanueli@ryantelsystems.com" style={{ color: '#00bcd4' }}>emmanueli@ryantelsystems.com</a></p>
      <p>Phone: <a href="tel:+254712345678" style={{ color: '#00bcd4' }}>+254 712 345 678</a></p>
      <form style={{ marginTop: 32 }}>
        <div style={{ marginBottom: 16 }}>
          <label htmlFor="name">Name:</label><br />
          <input id="name" name="name" type="text" style={{ width: '100%', padding: 8, borderRadius: 4, border: '1px solid #ccc' }} />
        </div>
        <div style={{ marginBottom: 16 }}>
          <label htmlFor="email">Email:</label><br />
          <input id="email" name="email" type="email" style={{ width: '100%', padding: 8, borderRadius: 4, border: '1px solid #ccc' }} />
        </div>
        <div style={{ marginBottom: 16 }}>
          <label htmlFor="message">Message:</label><br />
          <textarea id="message" name="message" rows={5} style={{ width: '100%', padding: 8, borderRadius: 4, border: '1px solid #ccc' }} />
        </div>
        <button type="submit" style={{ background: '#00bcd4', color: 'white', padding: '10px 24px', border: 'none', borderRadius: 4, fontWeight: 'bold', cursor: 'pointer' }}>Send</button>
      </form>
    </section>
  );
}
