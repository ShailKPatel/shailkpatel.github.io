/* global React, SectionTitle, Card, Tag, Reveal */
// Sections.jsx — Experience, Publications, Projects, Skills

const EXPERIENCE = [
  {
    org: 'Stealth Startup — Restaurant Tech', role: 'Founding Machine Learning Engineer',
    loc: 'Seattle, USA', date: 'Nov 2025 — present',
    points: [
      'Architected the full technical stack from scratch — ML pipelines, Django backend services, and complete database design.',
      'Directed a small engineering team across the full stack, setting implementation standards and driving key technical decisions.',
      'Established the entire technical foundation with no prior codebase, designing all schemas and integration points.',
    ],
  },
  {
    org: 'GetMySpace — Parking Management', role: 'Machine Learning Engineer',
    loc: 'Ahmedabad, India', date: 'Jan 2025 — Jun 2025',
    points: [
      "Built GetMySpace's first AI prototype for real-time parking, integrating computer vision and ML for vehicle and slot detection.",
      'Reduced end-to-end processing to ~4s and real-time update latency to ~0.7s with optimized Python + PyTorch deployment.',
      'Implemented a MongoDB backend for prediction outputs, user logs, and dynamic updates at scale.',
    ],
  },
];

const PROJECTS = [
  {
    title: 'PredictGrad', url: 'predictgrad.streamlit.app',
    tags: ['Ensemble Stacking', 'BayesSearchCV', 'SHAP / XAI', 'Boruta'],
    points: [
      'Full ML pipeline to predict future-semester marks and detect academic risk.',
      'Regression: Voting Regressor (Ridge + Lasso + ElasticNet).',
      'Classification: Stacking (CatBoost, LGBM, ExtraTrees).',
    ],
  },
  {
    title: 'Constitution Preamble Clustering', url: 'constitutional-values.streamlit.app',
    tags: ['Sentence-Transformers', 'Scikit-Learn', 'PCA', 'Plotly'],
    points: [
      'NLP + clustering (SentenceTransformer, KMeans) over global constitutional texts.',
      'Semantic embeddings surface ideological similarities across constitutions.',
      'Maps nations into clusters: Legal-Institutional, Unity & Pluralism, Faith & Founding.',
    ],
  },
  {
    title: 'Beyond The Marks', url: 'beyondthemarks.streamlit.app',
    tags: ['SHAP', 'Pandas', 'Seaborn'],
    points: [
      'ML pipeline with explainable AI to analyze student performance.',
      'Detects grading bias and assesses influence of sensitive attributes.',
      'Quantifies teacher effectiveness with performance indicators.',
    ],
  },
];

const SKILLS = [
  { h: 'AI & Agents', items: ['LangChain', 'LangGraph', 'n8n', 'LlamaIndex', 'Hugging Face', 'OpenAI API', 'RAG Pipelines'] },
  { h: 'Backend & APIs', items: ['FastAPI', 'Django', 'Flask', 'Streamlit', 'REST API', 'Python'] },
  { h: 'Data & Tools', items: ['PostgreSQL', 'MongoDB', 'MySQL', 'Docker', 'Git', 'Linux', 'LiteLLM'] },
  { h: 'Product & Strategy', items: ['Product Thinking', 'User Research', 'Roadmapping', 'A/B Testing', 'Agile'] },
];

const wrap = { maxWidth: 1200, margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 3rem)' };
const sectionPad = { padding: 'clamp(4rem, 9vw, 7rem) 0' };
const bullet = {
  position: 'relative', paddingLeft: '1.3rem', marginBottom: '0.6rem',
  fontSize: '0.92rem', fontWeight: 300, lineHeight: 1.6, color: 'var(--fg-muted)',
};
function Bullets({ points }) {
  return (
    <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
      {points.map((p, i) => (
        <li key={i} style={bullet}>
          <span style={{ position: 'absolute', left: 0, color: 'var(--ember-500)', fontFamily: 'var(--font-mono)' }}>→</span>{p}
        </li>
      ))}
    </ul>
  );
}

function Experience() {
  return (
    <section id="work" style={{ ...sectionPad, background: 'var(--bg-elevated)' }}>
      <div style={wrap}>
        <SectionTitle>Experience</SectionTitle>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {EXPERIENCE.map((e, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <Card num={`0${i + 1}`}>
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', alignItems: 'baseline' }}>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.5rem,2.4vw,2rem)', fontWeight: 500, color: 'var(--fg)', margin: 0, lineHeight: 1.2 }}>{e.org}</h3>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ember-500)', margin: '0.5rem 0 0.2rem' }}>{e.role}</div>
                    <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.82rem', color: 'var(--fg-faint)' }}>{e.loc}</div>
                  </div>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--fg-faint)', whiteSpace: 'nowrap' }}>{e.date}</span>
                </div>
                <div style={{ marginTop: '1.4rem' }}><Bullets points={e.points} /></div>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Publications() {
  return (
    <section id="publications" style={{ ...sectionPad, background: 'var(--bg)' }}>
      <div style={wrap}>
        <SectionTitle>Publications</SectionTitle>
        <Reveal>
          <Card style={{ borderTop: '2px solid var(--line-strong)', borderTopLeftRadius: 0, borderTopRightRadius: 0 }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.4rem,2.6vw,2.1rem)', fontWeight: 400, color: 'var(--fg)', margin: 0, lineHeight: 1.3, maxWidth: '24ch' }}>
              A Two-Stage, Leakage-Aware Framework for Early Academic Risk Detection
            </h3>
            <div style={{ borderTop: '1px solid var(--line)', margin: '1.6rem 0', paddingTop: '1.6rem', display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }}>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: '0.4rem' }}>
                {['Early Warning Systems', 'Stacked Classification', 'Leakage Prevention', 'SHAP'].map(t => <Tag key={t}>{t}</Tag>)}
              </div>
              <Bullets points={[
                'Leakage-aware, two-stage ML framework to forecast academic decline — temporally valid and unbiased.',
                'Evaluated 50+ regression pipelines per subject (~200 total) to benchmark forecasting methods.',
                'Best-performing stacking ensemble achieved recall 0.657; SHAP applied for interpretability.',
              ]} />
              <a href="https://doi.org/10.5281/zenodo.19686376" target="_blank" rel="noopener" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--ember-500)', textDecoration: 'none' }}>doi.org/10.5281/zenodo.19686376 ↗</a>
            </div>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" style={{ ...sectionPad, background: 'var(--bg-elevated)' }}>
      <div style={wrap}>
        <SectionTitle>Projects</SectionTitle>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {PROJECTS.map((p, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <Card num={`0${i + 1}`}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: '1rem', flexWrap: 'wrap' }}>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.4rem,2.2vw,1.9rem)', fontWeight: 500, color: 'var(--fg)', margin: 0 }}>{p.title}</h3>
                  <a href={`https://${p.url}`} target="_blank" rel="noopener" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--ember-500)', textDecoration: 'none' }}>{p.url} ↗</a>
                </div>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', margin: '1rem 0 1.2rem' }}>
                  {p.tags.map(t => <Tag key={t}>{t}</Tag>)}
                </div>
                <Bullets points={p.points} />
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" style={{ ...sectionPad, background: 'var(--bg)' }}>
      <div style={wrap}>
        <SectionTitle>Skills</SectionTitle>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
          {SKILLS.map((col, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <div style={{ position: 'relative', borderTop: '1px solid var(--line)', paddingTop: '1.6rem' }}>
                <span style={{ position: 'absolute', top: '0.8rem', right: 0, fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: '3.5rem', color: 'var(--fg)', opacity: 0.04, lineHeight: 1 }}>0{i + 1}</span>
                <h3 style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--fg)', margin: '0 0 1.2rem' }}>{col.h}</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                  {col.items.map(it => (
                    <span key={it} className="skill-pill" style={{
                      fontFamily: 'var(--font-sans)', fontSize: '0.82rem', fontWeight: 400,
                      padding: '0.4rem 0.9rem', border: '1px solid var(--line-strong)',
                      borderRadius: 5, color: 'var(--fg-muted)', cursor: 'default',
                      transition: 'all 220ms',
                    }}>{it}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Experience, Publications, Projects, Skills });
