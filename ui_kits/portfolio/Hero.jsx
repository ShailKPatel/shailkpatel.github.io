/* global React, Button */
// Hero.jsx — oversized editorial hero with portrait + ember ring
function Hero() {
  return (
    <section id="home" style={{
      position: 'relative', minHeight: '92vh', display: 'flex', alignItems: 'center',
      overflow: 'hidden', padding: '5rem clamp(1.5rem, 5vw, 4rem) 4rem',
    }}>
      {/* engineering grid + vignette */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage:
          'radial-gradient(ellipse at 18% 28%, var(--grid-glow-a) 0%, transparent 55%),' +
          'radial-gradient(ellipse at 82% 78%, var(--grid-glow-b) 0%, transparent 50%)',
      }} />
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage:
          'linear-gradient(var(--grid-line) 1px, transparent 1px),' +
          'linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)',
        backgroundSize: '72px 72px', maskImage: 'radial-gradient(ellipse at center, #000 30%, transparent 85%)',
        WebkitMaskImage: 'radial-gradient(ellipse at center, #000 30%, transparent 85%)',
      }} />
      {/* morphing outline shapes */}
      <div className="morph-shape" style={{ width: 300, height: 300, top: '10%', right: '14%' }} />
      <div className="morph-shape" style={{ width: 190, height: 190, bottom: '14%', left: '8%', animationDelay: '4s' }} />

      <div style={{
        position: 'relative', zIndex: 1, width: '100%', maxWidth: 1280, margin: '0 auto',
        display: 'grid', gridTemplateColumns: 'minmax(0,1.25fr) minmax(0,0.75fr)',
        gap: 'clamp(2rem, 5vw, 5rem)', alignItems: 'center',
      }} className="hero-grid">
        <div>
          <div style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.72rem', letterSpacing: '0.2em',
            textTransform: 'uppercase', color: 'var(--ember-500)', marginBottom: '1.5rem',
          }}>Prototype &amp; ML Engineer · 0→1</div>

          <h1 style={{
            fontFamily: 'var(--font-display)', fontWeight: 400, lineHeight: 0.88,
            letterSpacing: '-0.035em', color: 'var(--fg)', margin: 0,
            fontSize: 'clamp(3.5rem, 11vw, 9rem)',
          }}>
            <span style={{ display: 'block' }}>Shail K</span>
            <span style={{ display: 'block', fontStyle: 'italic', fontWeight: 500 }}>Patel</span>
          </h1>

          <p style={{
            fontFamily: 'var(--font-sans)', fontWeight: 300, color: 'var(--fg-muted)',
            fontSize: 'clamp(1.05rem, 1.6vw, 1.35rem)', lineHeight: 1.55,
            maxWidth: '34ch', margin: '2rem 0 2.5rem',
          }}>
            Founding ML Engineer building intelligent systems from the ground up.
            Let's turn your <em style={{ fontStyle: 'normal', color: 'var(--fg)', fontWeight: 500 }}>product vision</em> into
            {' '}<em style={{ fontStyle: 'normal', color: 'var(--fg)', fontWeight: 500 }}>working architecture</em>.
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Button variant="primary" href="#contact" arrow>Connect</Button>
            <Button variant="secondary" href="#projects">View Work</Button>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center' }} className="hero-portrait">
          <div style={{ position: 'relative', width: 'clamp(220px, 30vw, 360px)', aspectRatio: '1' }}>
            <div style={{
              position: 'absolute', inset: -14, borderRadius: '50%',
              border: '1px solid var(--line-strong)',
            }} />
            <div style={{
              position: 'absolute', inset: -14, borderRadius: '50%',
              border: '2px solid var(--ember-500)',
              clipPath: 'polygon(50% 0, 100% 0, 100% 50%, 50% 50%)',
              transform: 'rotate(-18deg)',
            }} />
            <img src="../../assets/profile-pic.png" alt="Shail K Patel" style={{
              width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover',
              filter: 'brightness(0.93) contrast(1.05)',
              boxShadow: '0 24px 60px rgba(0,0,0,0.55), 0 0 0 1px var(--line)',
            }} />
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Hero });
