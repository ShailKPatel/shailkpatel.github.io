/* global React */
// Nav.jsx — sticky blurred navigation with theme toggle
const { useState: useStateNav, useEffect: useEffectNav } = React;

function Nav({ theme, onToggleTheme }) {
  const [active, setActive] = useStateNav('home');
  const links = ['Home', 'Work', 'Publications', 'Projects', 'Skills', 'Contact'];

  useEffectNav(() => {
    const ids = links.map(l => l.toLowerCase());
    const onScroll = () => {
      let cur = 'home';
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) cur = id;
      }
      setActive(cur);
    };
    const root = document.querySelector('.kit-scroll') || window;
    root.addEventListener('scroll', onScroll, true);
    onScroll();
    return () => root.removeEventListener('scroll', onScroll, true);
  }, []);

  const go = (id) => (e) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 50,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '1.1rem clamp(1.25rem, 4vw, 3rem)',
      background: theme === 'dark' ? 'rgba(10,10,10,0.72)' : 'rgba(244,241,234,0.72)',
      borderBottom: '1px solid var(--line)',
      backdropFilter: 'blur(22px) saturate(160%)',
      WebkitBackdropFilter: 'blur(22px) saturate(160%)',
    }}>
      <a href="#home" onClick={go('home')} style={{
        fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.4rem',
        letterSpacing: '-0.03em', color: 'var(--fg)', textDecoration: 'none',
      }}>SP<span style={{ color: 'var(--ember-500)' }}>.</span></a>

      <div style={{ display: 'flex', gap: 'clamp(1rem, 2.4vw, 1.9rem)' }} className="nav-links">
        {links.map(l => {
          const id = l.toLowerCase();
          const on = active === id;
          return (
            <a key={l} href={`#${id}`} onClick={go(id)} style={{
              fontFamily: 'var(--font-mono)', fontSize: '0.7rem', letterSpacing: '0.14em',
              textTransform: 'uppercase', textDecoration: 'none',
              color: on ? 'var(--ember-500)' : 'var(--fg-muted)',
              transition: 'color 220ms', whiteSpace: 'nowrap',
            }}>{l}</a>
          );
        })}
      </div>

      <button onClick={onToggleTheme} aria-label="Toggle theme" style={{
        width: 46, height: 25, borderRadius: 13, position: 'relative', cursor: 'pointer',
        background: theme === 'dark' ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)',
        border: '1px solid var(--line-strong)', flexShrink: 0,
      }}>
        <span style={{
          position: 'absolute', top: 2, left: theme === 'dark' ? 2 : 22, width: 17, height: 17,
          borderRadius: '50%', background: theme === 'dark' ? '#d0d0d0' : '#2a2a2a',
          transition: 'left 280ms var(--ease-out)', display: 'flex',
          alignItems: 'center', justifyContent: 'center', fontSize: 9,
        }}>{theme === 'dark' ? '☾' : '☀'}</span>
      </button>
    </nav>
  );
}

Object.assign(window, { Nav });
