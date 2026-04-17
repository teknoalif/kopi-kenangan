'use client'
import React from 'react';
import { ShoppingCart, Eye, Star } from 'lucide-react'; 
import { PRODUCTS } from '../constants'; 

const Products = () => {
  return (
    /* Menggunakan class 'products' sesuai style.css */
    <section className="products" id="products">
      <h2><span>Produk Unggulan</span> Kami</h2>
      <p>Kopi racikan sendiri sih :)</p>

      <div className="row">
        {PRODUCTS.map((product) => (
          /* Menggunakan class 'product-card' sesuai style.css */
          <div className="product-card" key={product.id}>
            <div className="product-icons">
              <a href="#" aria-label="Add to Cart">
                <ShoppingCart size={20} />
              </a>
              <a href="#" className="item-detail-button" aria-label="View Detail">
                <Eye size={20} />
              </a>
            </div>
            
            <div className="product-image">
              <img src={product.img} alt={product.name} />
            </div>

            <div className="product-content">
              <h3>{product.name}</h3>
              <div className="product-stars">
                {/* Looping bintang sesuai rating */}
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={16} 
                    // Menggunakan class 'star-full' untuk bintang yang terisi sesuai CSS
                    className={i < product.star ? "star-full" : ""} 
                    fill={i < product.star ? "var(--primary)" : "none"}
                  />
                ))}
              </div>
              <div className="product-price">
                {/* Pakai 'id-ID' dan suppressHydrationWarning biar gak error titik/koma lagi */}
                <span suppressHydrationWarning>
                  IDR {product.price.toLocaleString('id-ID')}K
                </span>
                <span className="old-price" suppressHydrationWarning style={{ marginLeft: '10px' }}>
                  IDR {product.oldPrice.toLocaleString('id-ID')}K
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
