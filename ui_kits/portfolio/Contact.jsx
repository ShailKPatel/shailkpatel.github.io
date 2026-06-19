/* global React, SectionTitle */
// Contact.jsx — editorial contact link rows + footer
const { useState: useStateContact } = React;

const LINKS = [
  { label: 'Email Me', desc: 'shailpatel.connect@gmail.com', href: 'mailto:shailpatel.connect@gmail.com' },
  { label: 'LinkedIn', desc: 'in/shailkpatel', href: 'https://www.linkedin.com/in/shailkpatel/' },
  { label: 'GitHub', desc: 'github.com/ShailKPatel', href: 'https://github.com/ShailKPatel' },
  { label: 'YouTube', desc: '@Shail_K_Patel', href: 'https://www.youtube.com/@Shail_K_Patel' },
];

function LinkRow({ label, desc, href }) {
  const [hover, setHover] = useStateContact(false);
  return (
    <a href={href} target={href.startsWith('mailto') ? undefined : '_blank'} rel="noopener"
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '1.4rem 0', borderBottom: '1px solid var(--line)',
        textDecoration: 'none', gap: '1rem',
      }}>
      <div>
        <div style={{
          fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: '1.2rem',
          color: hover ? 'var(--fg)' : 'var(--fg-muted)', transition: 'color 220ms',
        }}>{label}</div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--fg-faint)', marginTop: 3 }}>{desc}</div>
      </div>
      <span style={{
        fontSize: '1.3rem', color: hover ? 'var(--ember-500)' : 'var(--fg-faint)',
        transform: hover ? 'translate(3px,-3px)' : 'none', transition: 'all 220ms',
      }}>↗</span>
    </a>
  );
}

function Contact() {
  return (
    <section id="contact" style={{ padding: 'clamp(4rem,9vw,7rem) 0 0', background: 'var(--bg-elevated)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 clamp(1.5rem,5vw,3rem)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'clamp(2rem,5vw,5rem)', alignItems: 'center' }}>
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--ember-500)', marginBottom: '1.2rem' }}>Get in touch</div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(2.4rem,4.5vw,3.6rem)', lineHeight: 1.05, color: 'var(--fg)', margin: '0 0 1.5rem', letterSpacing: '-0.025em' }}>
              Let's Work<br /><span style={{ fontStyle: 'italic', fontWeight: 500 }}>Together</span>
            </h2>
            <p style={{ fontFamily: 'var(--font-sans)', fontWeight: 300, fontSize: '0.95rem', lineHeight: 1.8, color: 'var(--fg-muted)', maxWidth: '40ch' }}>
              I'm always excited to build systems that actually matter. If you have a product
              vision that needs intelligent architecture — or a technical challenge that needs
              ownership from first principles — let's talk.
            </p>
          </div>
          <div style={{ borderTop: '1px solid var(--line)' }}>
            {LINKS.map(l => <LinkRow key={l.label} {...l} />)}
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{ marginTop: 'clamp(4rem,8vw,6rem)', background: 'var(--bg)', borderTop: '1px solid var(--line)', padding: '2.2rem clamp(1.5rem,5vw,3rem)', textAlign: 'center' }}>
      <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.82rem', color: 'var(--fg-faint)', margin: 0 }}>© {year} Shail K Patel · Crafted out of boredom.</p>
      <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--fg-faint)', marginTop: 8, letterSpacing: '0.04em' }}>MIT License</p>
    </footer>
  );
}

Object.assign(window, { Contact });
