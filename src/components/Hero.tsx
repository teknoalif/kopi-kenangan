const Hero = () => {
  return (
    <section className="hero" id="home">
      {/* Masking container sesuai CSS kamu */}
      <div className="mask-container"></div>
      <main className="content">
        <h1>Mari Nikmati Secangkir <span>Kopi</span></h1>
        <p>Satu tetes kebahagiaan di setiap tegukan. Temukan rasa terbaik dari biji kopi pilihan.</p>
        <a href="#menu" className="cta">Beli Sekarang</a>
      </main>
    </section>
  );
};
export default Hero;
