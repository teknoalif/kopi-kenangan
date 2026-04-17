'use client'
import React, { useState, useEffect } from 'react'
import { ShoppingCart, Search, Menu, X, Trash2 } from 'lucide-react'

const Navbar = () => {
  const [isNavActive, setIsNavActive] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isCartActive, setIsCartActive] = useState(false);

  // Fungsi untuk menutup semua saat klik di luar (Logika "Klik di luar elemen")
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('#hamburger-menu') && !target.closest('.navbar-nav')) setIsNavActive(false);
      if (!target.closest('#search-button') && !target.closest('.search-form')) setIsSearchActive(false);
      if (!target.closest('#shopping-cart-button') && !target.closest('.shopping-cart')) setIsCartActive(false);
    };
    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, []);

  return (
    <nav className="navbar">
      <a href="#" className="navbar-logo">kak Alif<span> Coffee & Co</span>.</a>

      {/* Navbar Nav */}
      <div className={`navbar-nav ${isNavActive ? 'active' : ''}`}>
        <a href="#home">Home</a>
        <a href="#about">Tentang Kami</a>
        <a href="#menu">Menu</a>
        <a href="#products">Produk</a>
        <a href="#contact">Kontak</a>
      </div>

      <div className="navbar-extra">
        <a href="#" id="search-button" onClick={(e) => { e.preventDefault(); setIsSearchActive(!isSearchActive); }}>
          <Search size={24} />
        </a>
        <a href="#" id="shopping-cart-button" onClick={(e) => { e.preventDefault(); setIsCartActive(!isCartActive); }}>
          <ShoppingCart size={24} />
        </a>
        <a href="#" id="hamburger-menu" onClick={(e) => { e.preventDefault(); setIsNavActive(!isNavActive); }}>
          <Menu size={24} />
        </a>
      </div>

      {/* Search Form */}
      <div className={`search-form ${isSearchActive ? 'active' : ''}`}>
        <input type="search" id="search-box" placeholder="search here..." />
        <label htmlFor="search-box"><Search size={24} /></label>
      </div>

      {/* Shopping Cart */}
      <div className={`shopping-cart ${isCartActive ? 'active' : ''}`}>
        <div className="cart-item">
          <img src="/img/products/1.jpg" alt="Product 1" />
          <div className="item-detail">
            <h3>Product 1</h3>
            <div className="item-price">IDR 30K</div>
          </div>
          <Trash2 className="remove-item" size={20} />
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
