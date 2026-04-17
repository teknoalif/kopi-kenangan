'use client'
import React from 'react';

const About = () => {
  return (
    <section id="about" className="about">
      <h2><span>Tentang</span> Kami</h2>

      <div className="row">
        <div className="about-img">
          <img src="/img/tentang-kami.jpg" alt="Tentang Kami" />
        </div>
        <div className="content">
          <h3>Kenapa memilih kopi kami?</h3>
          <p>Kami menggunakan biji kopi pilihan dari petani lokal yang diproses dengan standar internasional untuk menjaga kualitas rasa.</p>
          <p>Setiap cangkir adalah dedikasi kami untuk memberikan pengalaman minum kopi yang tak terlupakan di setiap waktu.</p>
        </div>
      </div>
    </section>
  );
};

export default About;
