'use client' // Wajib karena kita akan pakai interaksi klik nantinya

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Menu from '../components/Menu';
import Products from '../components/Products';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      {/* Navbar diletakkan di luar main agar tetap melayang */}
      <Navbar />

      <main>
        {/* Section: Hero */}
        <Hero />

        {/* Section: Tentang Kami */}
        <About />

        {/* Section: Menu Kami */}
        <Menu />

        {/* Section: Produk Unggulan */}
        <Products />

        {/* Section: Kontak Kami */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modal Box Item Detail (Opsional jika ingin dipakai) */}
      <div className="modal" id="item-detail-modal">
        {/* Konten modal bisa kamu tambahkan di sini nanti */}
      </div>
    </>
  );
}
