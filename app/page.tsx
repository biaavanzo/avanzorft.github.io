'use client'

import React from "react"

export default function Home() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;500&display=swap"
      />

      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: system-ui, sans-serif; background: #fff; color: #111; }
        header {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          background: #fff; border-bottom: 1px solid #eee; padding: 0 32px;
        }
        .header-inner {
          max-width: 900px; margin: 0 auto;
          display: flex; align-items: center; justify-content: center;
          gap: 40px; padding: 14px 0;
        }
        .header-name {
          font-size: 16px; font-weight: 500; color: #111;
          font-family: system-ui; white-space: nowrap; text-decoration: none;
        }
        nav { display: flex; gap: 24px; }
        nav a {
          font-size: 15px; color: #555; text-decoration: none;
          font-family: system-ui; white-space: nowrap; transition: color 0.15s;
        }
        nav a:hover { color: #111; }
        main {
          padding-top: 120px; padding-bottom: 80px;
          padding-left: 24px; padding-right: 24px;
          max-width: 900px; margin: 0 auto;
        }
        .hero { margin-bottom: 48px; display: flex; flex-direction: column; align-items: stretch; }
        .hero-title-center { display: flex; flex-direction: column; align-items: center; }
        .hero-title {
          font-family: 'EB Garamond', Georgia, serif;
          font-size: clamp(64px, 10vw, 104px);
          font-weight: 500; letter-spacing: -0.01em;
          color: #111; margin: 0; line-height: 1;
        }
        .hero-subtitle-row {
          width: 100%; display: flex; justify-content: center; margin-top: 18px;
        }
        .hero-subtitle {
          font-family: 'EB Garamond', Georgia, serif;
          font-size: clamp(11px, 1.4vw, 15px);
          font-weight: 400; letter-spacing: 0.45em;
          color: #555; text-transform: uppercase;
        }
        .hero-divider { width: 100%; height: 1px; background: #ddd; margin-top: 24px; }
        .hero-root {
          display: flex; justify-content: flex-start;
          margin-top: 10px; padding-left: 4px;
        }
        .hero-root svg {
          width: 36px; height: 28px; stroke: #bbb; stroke-width: 1.2;
          fill: none; stroke-linecap: round; stroke-linejoin: round;
        }
        .hero-desc {
          margin-top: 48px; color: #444; line-height: 1.85; text-align: center;
          width: 100%; max-width: 580px; margin-left: auto; margin-right: auto; padding: 0 24px;
        }
        .section-divider { width: 100%; height: 1px; background: #eee; margin: 48px 0; }
        .problem-block { margin-bottom: 48px; }
        .problem-block h2 {
          font-family: 'EB Garamond', Georgia, serif;
          font-size: clamp(20px, 2.8vw, 26px);
          font-weight: 500; color: #111; margin-bottom: 14px;
          letter-spacing: -0.01em; line-height: 1.2;
        }
        .problem-block p {
          font-size: 16px; line-height: 1.9; color: #444;
          font-family: system-ui; margin-bottom: 28px;
          text-align: justify; hyphens: auto;
        }
        sup {
          font-size: 10px; color: #aaa; font-family: system-ui;
          vertical-align: super; line-height: 0; margin-left: 1px;
        }
        .references {
          border-top: 1px solid #eee; padding-top: 24px; margin-top: 8px;
        }
        .references-label {
          font-size: 10px; font-weight: 600; color: #ccc;
          text-transform: uppercase; letter-spacing: 0.14em;
          font-family: system-ui; margin-bottom: 12px;
        }
        .ref-list {
          list-style: none; padding: 0; margin: 0;
        }
        .ref-list li {
          font-size: 11px; color: #bbb; font-family: system-ui;
          line-height: 1.7; margin-bottom: 4px; padding-left: 20px;
          text-indent: -20px;
        }
        .cards-section { margin-bottom: 0; }
        .cards-label {
          font-size: 10px; font-weight: 600; color: #555;
          text-transform: uppercase; letter-spacing: 0.14em;
          font-family: system-ui; margin-bottom: 16px; text-align: center;
        }
        .cards {
          display: grid; grid-template-columns: repeat(2, 1fr);
          gap: 2px; align-items: stretch;
        }
        .card-wrapper {
          text-decoration: none; display: flex; flex-direction: column;
          border: 1px solid #e8e8e8; padding: 22px 20px; background: #fafafa;
          transition: background 0.2s, border-color 0.2s; gap: 8px;
        }
        .card-wrapper:hover { background: #f0f0ee; border-color: #ccc; }
        .card-tag {
          font-size: 10px; font-weight: 600; color: #888;
          font-family: system-ui; letter-spacing: 0.1em;
          text-transform: uppercase; margin-bottom: 4px;
        }
        .card-title {
          font-size: 13px; font-weight: 600; color: #111;
          font-family: system-ui; line-height: 1.3;
          text-transform: uppercase; letter-spacing: 0.08em;
        }
        .card-text { font-size: 14px; line-height: 1.7; color: #555; font-family: system-ui; flex: 1; }
        .card-date { font-size: 12px; color: #aaa; font-family: system-ui; margin-top: auto; padding-top: 12px; }
        .cta-row {
          margin-top: 48px; display: flex; gap: 12px; justify-content: center; flex-wrap: wrap;
        }
        .cta-link {
          font-size: 13px; color: #111; text-decoration: none;
          border: 1px solid #ddd; padding: 9px 20px;
          font-family: system-ui; letter-spacing: 0.04em;
          transition: border-color 0.15s, background 0.15s;
        }
        .cta-link:hover { border-color: #111; background: #f7f7f7; }
        .cta-link.primary { background: #111; color: #fff; border-color: #111; }
        .cta-link.primary:hover { background: #333; }
        .status-block {
          border: 1px solid #eee; background: #fafafa;
          padding: 28px 32px; margin: 48px 0 0;
        }
        .status-label {
          font-size: 10px; font-weight: 600; color: #555;
          text-transform: uppercase; letter-spacing: 0.14em;
          font-family: system-ui; margin-bottom: 20px;
        }
        .status-row {
          display: flex; align-items: flex-start;
          padding: 14px 0; border-bottom: 1px solid #eee; gap: 14px;
        }
        .status-row:last-child { border-bottom: none; }
        .status-icon { font-size: 15px; margin-top: 2px; flex-shrink: 0; }
        .status-row-left { display: flex; flex-direction: column; gap: 3px; flex: 1; }
        .status-title { font-size: 14px; color: #111; font-family: system-ui; font-weight: 700; }
        .status-desc { font-size: 13px; color: #666; font-family: system-ui; line-height: 1.5; }
        .status-tag {
          font-size: 10px; font-weight: 700; color: #111;
          font-family: system-ui; letter-spacing: 0.1em;
          text-transform: uppercase; white-space: nowrap;
          flex-shrink: 0; margin-top: 2px;
        }
        @media (max-width: 640px) {
          .header-inner { flex-direction: column; gap: 10px; padding: 12px 0; }
          main { padding-top: 100px; }
          .cards { grid-template-columns: 1fr; }
        }
      `}</style>

      <header>
        <div className="header-inner">
          <a href="/" className="header-name">Root Lab</a>
          <nav>
            <a href="/the-paper">About RFT</a>
            <a href="/about-the-author">About the Author</a>
            <a href="/contact">Contact</a>
          </nav>
        </div>
      </header>

      <main>

        <section className="hero">
          <div className="hero-title-center">
            <h1 className="hero-title">Root Lab</h1>
            <div className="hero-subtitle-row">
              <span className="hero-subtitle">An Independent Research Program</span>
            </div>
            <div className="hero-divider" />
            <div className="hero-root">
              <svg viewBox="0 0 36 28" xmlns="http://www.w3.org/2000/svg">
                <polyline points="2,26 18,4 34,26" />
                <polyline points="10,26 18,12 26,26" />
              </svg>
            </div>
          </div>
          <p className="hero-desc" style={{ fontSize: 20, fontWeight: 400, color: "#555" }}>
            Investigating how biological regulation, neural dynamics, and self-narrative integrate to sustain a coherent sense of self — and what happens, across scales, when they don&apos;t.
          </p>
        </section>

        <div className="section-divider" />

        <div className="problem-block">

          <h2>The problem</h2>
          <p>
            Over a billion people are living with a mental health condition<sup>1</sup> — and the gap between what science understands about how the mind breaks down and what clinical tools can actually measure keeps widening. Fragmentation — the loss of coordination between physiological regulation, neural dynamics, and self-narrative — is now recognized as a shared mechanism across anxiety, depression, and dissociation,<sup>2,3</sup> one that precedes symptom onset.<sup>4</sup> But it remains formally unmeasured in daily life. The instruments exist in separate silos: interoceptive accuracy in the lab,<sup>5</sup> HRV in the clinic,<sup>6</sup> narrative coherence in phenomenology.<sup>7</sup> Nothing integrates them longitudinally, outside a scanner, in the person&apos;s actual life. And the AI systems now embedded in that life are optimized for engagement — which, from a predictive processing standpoint, is precisely the wrong objective.<sup>8</sup>
          </p>

          <h2>What this program is investigating</h2>
          <p>
            Root Lab is an independent research program working on a single question: can cross-level coherence — the alignment of physiological, neural, and representational processes — be formally measured, tracked over time, and supported through structured human-AI interaction? The M-RFT metric proposes a formal index: M = (Φ · K&#x2091;) / F, where Φ captures neural integration across interoceptive-predictive networks, K&#x2091; operationalizes the alignment between interoceptive signal and self-narrative, and F indexes regulatory burden via autonomic flexibility.<sup>9</sup> Root Frequency Theory provides the multilayered theoretical architecture — five nested layers (C0–C4) through which experiential continuity either holds or fractures.<sup>10</sup> Root Knowledge extends this to human-AI interaction, proposing that AI can function as an epistemic scaffold — organizing information in ways that reduce prediction error rather than amplify it.<sup>11</sup> Root Extension is the instrument designed to test these ideas ecologically, in real time, over six months.
          </p>

          <div className="references">
            <div className="references-label">References</div>
            <ol className="ref-list">
              <li>1. GBD 2019 Mental Disorders Collaborators. (2022). Global, regional, and national burden of 12 mental disorders in 204 countries and territories, 1990–2019. <em>The Lancet Psychiatry, 9</em>(2), 137–150.</li>
              <li>2. Northoff, G. (2016). Spatiotemporal psychopathology I: No rest for the brain&apos;s resting state activity in depression? <em>Journal of Affective Disorders, 190,</em> 854–866.</li>
              <li>3. Critchley, H. D., &amp; Garfinkel, S. N. (2017). Interoception and emotion. <em>Current Opinion in Psychology, 17,</em> 7–14.</li>
              <li>4. Seth, A. K., Suzuki, K., &amp; Critchley, H. D. (2012). An interoceptive predictive coding model of conscious presence. <em>Frontiers in Psychology, 2,</em> 395.</li>
              <li>5. Garfinkel, S. N., Seth, A. K., Barrett, A. B., Suzuki, K., &amp; Critchley, H. D. (2015). Knowing your own heart: Distinguishing interoceptive accuracy from interoceptive awareness. <em>Biological Psychology, 104,</em> 65–74.</li>
              <li>6. Thayer, J. F., &amp; Lane, R. D. (2000). A model of neurovisceral integration in emotion regulation and dysregulation. <em>Journal of Affective Disorders, 61</em>(3), 201–216.</li>
              <li>7. Varela, F. J. (1996). Neurophenomenology: A methodological remedy for the hard problem. <em>Journal of Consciousness Studies, 3</em>(4), 330–349.</li>
              <li>8. Avanzo, B. (2026). Root Knowledge: Embodied knowledge as a foundation for coherent human–AI interaction. Independent researcher.</li>
              <li>9. Avanzo, B. (2026). Multiscale integration of interoceptive signals and narrative scaffolding: Can systemic coherence be formally measured? (M-RFT). Unpublished manuscript.</li>
              <li>10. Avanzo, B. (2026). Root Frequency Theory. Zenodo. https://doi.org/10.5281/zenodo.18905376</li>
              <li>11. Friston, K. (2010). The free-energy principle: A unified brain theory? <em>Nature Reviews Neuroscience, 11</em>(2), 127–138.</li>
            </ol>
          </div>
        </div>

        <div className="section-divider" />

        <section className="cards-section">
          <div className="cards-label">Explore the framework</div>
          <div className="cards">
            <a href="/the-paper" className="card-wrapper">
              <div className="card-tag">Framework</div>
              <div className="card-title">Root Frequency Theory</div>
              <p className="card-text">The foundational framework. C0–C4 nested architecture. Experiential continuity as a systemic property.</p>
              <div className="card-date">February 2026 · Published</div>
            </a>
            <a href="/research-plan" className="card-wrapper">
              <div className="card-tag">Metric</div>
              <div className="card-title">M-RFT Coherence Metric</div>
              <p className="card-text">A formal index of cross-level coordination. Pre-empirical. Designed for lab validation with neuroimaging partners.</p>
              <div className="card-date">2026 · Embargoed preprint</div>
            </a>
            <a href="/expected-outcomes" className="card-wrapper">
              <div className="card-tag">Human-AI</div>
              <div className="card-title">Root Knowledge</div>
              <p className="card-text">Human-AI interaction as coherence scaffolding. The integration layer between information systems and lived experience.</p>
              <div className="card-date">May 2026 · Published</div>
            </a>
            <a href="/contact" className="card-wrapper">
              <div className="card-tag">Active Study</div>
              <div className="card-title">Root Extension — N=1</div>
              <p className="card-text">Longitudinal coherence tracking via Apple Watch HRV and interoceptive task. MVP in development. Data collection April–October 2026.</p>
              <div className="card-date">2026 · Active</div>
            </a>
          </div>
        </section>

        <div className="cta-row">
          <a href="https://doi.org/10.5281/zenodo.18905376" target="_blank" rel="noopener noreferrer" className="cta-link primary">Read the paper ↗</a>
          <a href="/contact" className="cta-link">Collaborate</a>
        </div>

        <div className="status-block">
          <div className="status-label">Active Research Program</div>

          <div className="status-row">
            <span className="status-icon">✅</span>
            <div className="status-row-left">
              <span className="status-title">Root Frequency Theory</span>
              <span className="status-desc">Five nested layers. Coherence as the mechanism of self-continuity.</span>
            </div>
            <span className="status-tag">Published</span>
          </div>

          <div className="status-row">
            <span className="status-icon">🟡</span>
            <div className="status-row-left">
              <span className="status-title">M-RFT Coherence Metric</span>
              <span className="status-desc">A formal coherence index. Available to researchers upon request.</span>
            </div>
            <span className="status-tag">Embargoed</span>
          </div>

          <div className="status-row">
            <span className="status-icon">✅</span>
            <div className="status-row-left">
              <span className="status-title">Root Knowledge — Human-AI Coherence</span>
              <span className="status-desc">On AI as epistemic scaffold, not output generator.</span>
            </div>
            <span className="status-tag">Published</span>
          </div>

          <div className="status-row">
            <span className="status-icon">✅</span>
            <div className="status-row-left">
              <span className="status-title">Root Extension — N=1 Longitudinal Study</span>
              <span className="status-desc">Active data collection April–October 2026.</span>
            </div>
            <span className="status-tag">Active</span>
          </div>
        </div>

      </main>
    </>
  )
}