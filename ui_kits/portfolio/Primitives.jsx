/* global React */
// Primitives.jsx — shared building blocks for the portfolio UI kit
const { useState, useEffect, useRef } = React;

// Mono eyebrow / section label
function Eyebrow({ children, style }) {
  return (
    <span style={{
      fontFamily: 'var(--font-mono)', fontWeight: 500, fontSize: '0.72rem',
      letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--ember-500)',
      ...style,
    }}>{children}</span>
  );
}

// Centered section title (Playfair) with fading underline rule
function SectionTitle({ children, align = 'center' }) {
  return (
    <div style={{ textAlign: align, marginBottom: 'var(--space-9)' }}>
      <h2 style={{
        fontFamily: 'var(--font-display)', fontWeight: 400,
        fontSize: 'clamp(2.4rem, 5vw, 4rem)', letterSpacing: '-0.025em',
        lineHeight: 1.05, color: 'var(--fg)', margin: 0, textTransform: 'uppercase',
      }}>{children}</h2>
      {align === 'center' && (
        <div style={{
          width: 130, height: 1, margin: '20px auto 0',
          background: 'linear-gradient(90deg, transparent, var(--line-strong) 50%, transparent)',
        }} />
      )}
    </div>
  );
}

// Pill button — variants: primary | secondary | light | ghost
function Button({ children, variant = 'primary', href = '#', arrow = false, onClick }) {
  const [hover, setHover] = useState(false);
  const [press, setPress] = useState(false);
  const base = {
    fontFamily: 'var(--font-sans)', fontWeight: 500, fontSize: '0.75rem',
    letterSpacing: '0.12em', textTransform: 'uppercase', padding: '0.95rem 2rem',
    borderRadius: 100, cursor: 'pointer', border: '1px solid transparent',
    display: 'inline-flex', alignItems: 'center', gap: 9, textDecoration: 'none',
    transition: 'all 130ms var(--ease-standard)',
    transform: press ? 'scale(0.97)' : hover ? 'translateY(-4px) scale(1.04)' : 'none',
  };
  const variants = {
    primary: {
      background: hover ? 'var(--ember-400)' : 'var(--ember-500)', color: '#fff',
      boxShadow: hover ? '0 14px 40px rgba(242,83,27,0.42)' : 'var(--shadow-ember)',
    },
    secondary: {
      background: 'transparent', color: 'var(--fg)',
      borderColor: hover ? 'var(--line-strong)' : 'var(--line)',
    },
    light: {
      background: hover ? '#fff' : 'var(--fg)', color: 'var(--bg)',
    },
    ghost: { background: 'transparent', color: 'var(--fg-muted)', padding: '0.95rem 0.6rem' },
  };
  return (
    <a href={href} target={href.startsWith('#') ? undefined : '_blank'} rel="noopener"
      style={{ ...base, ...variants[variant] }}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => { setHover(false); setPress(false); }}
      onMouseDown={() => setPress(true)} onMouseUp={() => setPress(false)}
      onClick={onClick}>
      <span>{children}</span>
      {arrow && <span style={{ fontFamily: 'var(--font-mono)' }}>↗</span>}
    </a>
  );
}

// Monospace tech tag
function Tag({ children, solid = false }) {
  return (
    <span style={{
      fontFamily: 'var(--font-mono)', fontSize: '0.72rem', letterSpacing: '0.03em',
      padding: '0.28rem 0.7rem', borderRadius: 5,
      border: '1px solid var(--line-strong)',
      background: solid ? 'var(--fg)' : 'transparent',
      color: solid ? 'var(--bg)' : 'var(--fg-muted)',
      whiteSpace: 'nowrap', display: 'inline-block',
    }}>{children}</span>
  );
}

// Card with hover lift + optional ghost numeral
function Card({ children, num, style }) {
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        position: 'relative', background: 'var(--bg-raised)',
        border: `1px solid ${hover ? 'var(--line-strong)' : 'var(--line)'}`,
        borderRadius: 'var(--radius-md)', padding: '1.75rem 2rem',
        boxShadow: hover ? 'var(--shadow-lg)' : 'var(--shadow-md)',
        transform: hover ? 'translateY(-2px)' : 'none',
        transition: 'all 220ms var(--ease-standard)', overflow: 'hidden', ...style,
      }}>
      {num && (
        <span style={{
          position: 'absolute', top: 4, right: 22, fontFamily: 'var(--font-mono)',
          fontWeight: 700, fontSize: '4.2rem', lineHeight: 1, letterSpacing: '-0.05em',
          color: 'var(--fg)', opacity: 0.04, pointerEvents: 'none', userSelect: 'none',
        }}>{num}</span>
      )}
      {children}
    </div>
  );
}

// Scroll-reveal wrapper (fade + rise)
function Reveal({ children, delay = 0, style }) {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVis(true); io.disconnect(); }
    }, { threshold: 0.12 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} style={{
      opacity: vis ? 1 : 0, transform: vis ? 'translateY(0)' : 'translateY(22px)',
      transition: `opacity 0.6s var(--ease-out) ${delay}s, transform 0.6s var(--ease-out) ${delay}s`,
      ...style,
    }}>{children}</div>
  );
}

Object.assign(window, { Eyebrow, SectionTitle, Button, Tag, Card, Reveal });
