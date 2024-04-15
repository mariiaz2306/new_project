import React, { useState } from 'react';
import '../ContactPage/ContactPage.css'

function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
 
    console.log('Submitted:', { name, email, message });
  
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <div className="contact-info">
        <p>For any inquiries or feedback, please feel free to contact us:</p>
        <p>Email: example@example.com</p>
        <p>Phone: +49 (0) 37754 1440-0</p>
        <p>Address: Bahnhofstraße 41 D-08297 Zwönitz</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Message:</label>
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ContactPage;