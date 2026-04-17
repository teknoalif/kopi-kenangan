'use client'
import React from 'react';
// Menggunakan Camera (IG), Play (sebagai Youtube), dan MessageCircle (WA) yang super aman
import { Camera, Play, MessageCircle } from 'lucide-react';

const Footer = () => {
  const whatsappNumber = "085256162879";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;
  const instagramLink = "https://www.instagram.com/aalifrezky";
  const youtubeLink = "https://youtube.com/@kakalifgurumatematika";
  const portfolioLink = "https://kakalif.my.id";

  return (
    <footer>
      {/* Ikon Sosial Media */}
      <div className="socials">
        {/* Instagram */}
        <a href={instagramLink} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <Camera size={24} />
        </a>
        {/* YouTube - Pakai ikon Play biar aman dari build error */}
        <a href={youtubeLink} target="_blank" rel="noopener noreferrer" aria-label="YouTube">
          <Play size={24} />
        </a>
        {/* WhatsApp */}
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
          <MessageCircle size={24} />
        </a>
      </div>

      {/* Link Navigasi Cepat */}
      <div className="links">
        <a href="#home">Home</a>
        <a href="#about">Tentang Kami</a>
        <a href="#menu">Menu</a>
        <a href="#contact">Kontak</a>
      </div>

      {/* Kredit Footer */}
      <div className="credit">
        <p>
          Created by <a href={portfolioLink} target="_blank" rel="noopener noreferrer">Alif Rezky (Daeng Lewa)</a>. | &copy; 2026.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
