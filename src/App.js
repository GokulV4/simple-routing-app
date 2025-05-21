import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Home() {
  return (
    <div style={styles.page}>
      <h2>Welcome to Our Website</h2>
      <p>
        We provide top-notch web development solutions, specializing in creating beautiful, responsive, and user-friendly websites.
      </p>
      <ul>
        <li>✅ Full-Stack Development</li>
        <li>✅ SEO Optimization</li>
        <li>✅ Custom UI/UX Design</li>
        <li>✅ Ongoing Maintenance & Support</li>
      </ul>
    </div>
  );
}

function About() {
  return (
    <div style={styles.page}>
      <h2>About Us</h2>
      <p>
        Our team consists of experienced developers, designers, and project managers who are passionate about delivering high-quality digital experiences.
      </p>
      <p>
        With years of experience in modern technologies like React, Node.js, and cloud platforms, we help businesses succeed in the digital age.
      </p>
      <h3>Technologies We Use:</h3>
      <ul>
        <li>React & Redux</li>
        <li>Node.js & Express</li>
        <li>MongoDB, MySQL</li>
        <li>REST APIs & GraphQL</li>
      </ul>
    </div>
  );
}

function Contact() {
  return (
    <div style={styles.page}>
      <h2>Contact Us</h2>
      <p>We would love to hear from you! Reach out with questions, collaboration ideas, or just to say hello.</p>
      <form style={styles.form}>
        <input type="text" placeholder="Your Name" style={styles.input} required />
        <input type="email" placeholder="Your Email" style={styles.input} required />
        <textarea placeholder="Your Message" rows="4" style={styles.textarea} required />
        <button type="submit" style={styles.button}>Send Message</button>
      </form>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div>
        <nav style={styles.nav}>
          <Link to="/" style={styles.link}>Home</Link>
          <Link to="/about" style={styles.link}>About</Link>
          <Link to="/contact" style={styles.link}>Contact</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

const styles = {
  nav: {
    padding: '1rem',
    backgroundColor: '#1f2937',
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
  page: {
    padding: '2rem',
    maxWidth: '800px',
    margin: 'auto',
    textAlign: 'center',
  },
  form: {
    marginTop: '1rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    maxWidth: '400px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  input: {
    padding: '0.75rem',
    borderRadius: '8px',
    border: '1px solid #ccc',
  },
  textarea: {
    padding: '0.75rem',
    borderRadius: '8px',
    border: '1px solid #ccc',
  },
  button: {
    backgroundColor: '#2563eb',
    color: '#fff',
    border: 'none',
    padding: '0.75rem',
    borderRadius: '8px',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
};

export default App;
