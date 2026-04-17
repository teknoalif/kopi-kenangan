'use client'
import React from 'react';
import { MENU_ITEMS } from '../constants';

const Menu = () => {
  return (
    /* Gunakan class 'menu' untuk mengambil styling dari globals.css */
    <section id="menu" className="menu">
      <h2><span>Menu</span> Kami</h2>
      <p className="text-center">Daftar menu kopi pilihan yang diracik sepenuh hati untuk menemani waktu santai Anda.</p>

      {/* Row menggunakan Flexbox agar item berjajar horizontal dan rata tengah */}
      <div className="row">
        {MENU_ITEMS.map((item) => (
          /* Card Menu */
          <div className="menu-card" key={item.id}>
            <img 
              src={item.img} 
              alt={item.name} 
              className="menu-card-img" 
            />
            <h3 className="menu-card-title">- {item.name} -</h3>
            {/* Format harga IDR dengan suppressHydrationWarning agar tidak error */}
            <p className="menu-card-price" suppressHydrationWarning>
              IDR {item.price.toLocaleString('id-ID')}K
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;
