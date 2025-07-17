import React from 'react';

export default function Contact() {
  return (
    <section className="contact">
      <h2>Contact</h2>
      <form>
        <label>Name:<input type="text" name="name" /></label>
        <label>Email:<input type="email" name="email" /></label>
        <label>Message:<textarea name="message" /></label>
        <button type="submit">Send</button>
      </form>
    </section>
  );
}
