/* global React, ReactDOM, Nav, Hero, Experience, Publications, Projects, Skills, Contact */
// App.jsx — assembles the redesigned portfolio
const { useState: useStateApp, useEffect: useEffectApp } = React;

function App() {
  const [theme, setTheme] = useStateApp(() => localStorage.getItem('skp-theme') || 'dark');
  useEffectApp(() => {
    localStorage.setItem('skp-theme', theme);
    document.documentElement.style.colorScheme = theme;
  }, [theme]);

  return (
    <div className={theme === 'dark' ? 'theme-dark' : 'theme-light'}
      style={{ background: 'var(--bg)', color: 'var(--fg)', minHeight: '100vh' }}>
      <Nav theme={theme} onToggleTheme={() => setTheme(t => t === 'dark' ? 'light' : 'dark')} />
      <Hero />
      <Experience />
      <Publications />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
