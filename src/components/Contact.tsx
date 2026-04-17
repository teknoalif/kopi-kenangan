'use client'
import React from 'react';
import { User, Mail, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2><span>Kontak</span> Kami</h2>
      <p>Ada pertanyaan atau saran? Kami siap mendengarkan Anda.</p>

      <div className="row">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126915.011884488!2d107.039645!3d-6.25557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698d8546adcd7f%3A0x401576d14199a00!2sBekasi%2C%20West%20Java!5e0!3m2!1sen!2sid!4v1700000000000"
          allowFullScreen
          loading="lazy"
          className="map"
        ></iframe>

        <form action="">
          <div className="input-group">
            <User size={20} />
            <input type="text" placeholder="nama" />
          </div>
          <div className="input-group">
            <Mail size={20} />
            <input type="email" placeholder="email" />
          </div>
          <div className="input-group">
            <Phone size={20} />
            <input type="text" placeholder="no hp" />
          </div>
          <button type="submit" className="btn">kirim pesan</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
