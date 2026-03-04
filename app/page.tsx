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
          font-family: system-ui; white-space: nowrap;
        }
        nav { display: flex; gap: 24px; }
        nav a {
          font-size: 15px; color: #555; text-decoration: none;
          font-family: system-ui; white-space: nowrap;
          transition: color 0.15s;
        }
        nav a:hover { color: #111; }

        main {
          padding-top: 120px; padding-bottom: 80px;
          padding-left: 24px; padding-right: 24px;
          max-width: 900px; margin: 0 auto;
        }

        /* HERO */
        .hero { margin-bottom: 64px; display: flex; flex-direction: column; align-items: stretch; }
        .hero-title-center { display: flex; flex-direction: column; align-items: center; }
        .hero-title-wrap { position: relative; line-height: 1; }
        .hero-title-wrap svg {
          position: absolute; bottom: -22px; left: 4px;
          overflow: visible; pointer-events: none; width: 46px;
        }
        .hero-title {
          font-family: 'EB Garamond', Georgia, serif;
          font-size: clamp(64px, 10vw, 104px);
          font-weight: 500; letter-spacing: -0.01em;
          color: #111; margin: 0; line-height: 1;
        }
        .hero-subtitle-row {
          width: 100%; display: flex; justify-content: center;
          margin-top: 18px; padding-left: 2%;
        }
        .hero-subtitle {
          font-family: 'EB Garamond', Georgia, serif;
          font-size: clamp(11px, 1.4vw, 15px);
          font-weight: 400; letter-spacing: 0.45em;
          color: #555; text-transform: uppercase;
        }
        .hero-divider {
          width: 100%; max-width: 900px; height: 1px;
          background: #ddd; margin-top: 24px;
        }

        .hero-desc {
          margin-top: 56px; margin-bottom: 24px; color: #222;
          line-height: 1.85; text-align: center;
          width: 100%; max-width: 580px; margin-left: auto; margin-right: auto;
          padding: 0 24px;
        }

        /* CARDS — quick scan after abstract */
        .cards-section { margin-top: 8px; margin-bottom: 0; }
        .cards-label {
          font-size: 16px; font-weight: 700; color: #111;
          text-transform: uppercase; letter-spacing: 0.12em;
          font-family: system-ui; margin-bottom: 24px;
          text-align: center;
        }
        .cards {
          display: grid; grid-template-columns: repeat(3, 1fr);
          gap: 2px; align-items: stretch;
        }
        .card-wrapper {
          text-decoration: none; text-align: left;
          display: flex; flex-direction: column; height: 100%; cursor: pointer; justify-content: space-between;
          border: 1px solid #e8e8e8; padding: 22px 20px;
          background: linear-gradient(to right, #f5f5f4 0%, #fafafa 30%, #ffffff 50%, #fafafa 70%, #f5f5f4 100%);
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.9), inset 0 -1px 0 rgba(0,0,0,0.04);
          transition: background 0.2s, border-color 0.2s, box-shadow 0.2s;
        }
        .card-wrapper:hover {
          background: linear-gradient(to right, #f0f0ee 0%, #f8f8f7 30%, #ffffff 50%, #f8f8f7 70%, #f0f0ee 100%);
          border-color: #ccc;
          box-shadow: inset 0 1px 0 rgba(255,255,255,1), inset 0 -1px 0 rgba(0,0,0,0.06), 0 2px 8px rgba(0,0,0,0.06);
        }
        .card-num {
          font-family: 'EB Garamond', Georgia, serif;
          font-size: 13px; color: #bbb; margin-bottom: 10px;
        }
        .card-title {
          font-size: 13px; font-weight: 600; color: #111;
          font-family: system-ui; margin-bottom: 20px; line-height: 1.3; text-align: center; text-transform: uppercase; letter-spacing: 0.08em;
        }
        .card-text { font-size: 15px; line-height: 1.7; color: #333; font-family: system-ui; text-align: center; flex: 1; display: flex; align-items: center; justify-content: center; }

        /* SECTION DIVIDER */
        .section-divider {
          width: 100%; height: 1px; background: #eee; margin: 48px 0;
        }

        /* WHY — secondary attention block */
        .why h2 {
          font-family: 'EB Garamond', Georgia, serif;
          font-size: clamp(32px, 4vw, 44px);
          font-weight: 500; color: #111;
          margin-bottom: 36px; text-align: center;
          letter-spacing: -0.01em; line-height: 1.2;
        }
        .why-body { display: flex; flex-direction: column; gap: 0; }
        .why-body p {
          margin: 0 0 16px 0; font-size: 17px; line-height: 1.9; color: #444;
          font-family: system-ui; text-indent: 2em;
          text-align: justify; hyphens: auto;
        }
        .why-body p:last-child { margin-bottom: 0; }
        sup { font-size: 10px; vertical-align: super; line-height: 0; color: #aaa; }

        /* CTA back to cards */
        .cta-row {
          margin-top: 72px; display: flex; gap: 12px; justify-content: center;
          flex-wrap: wrap;
        }
        .cta-link {
          font-size: 13px; color: #111; text-decoration: none;
          border: 1px solid #ddd; padding: 9px 20px;
          font-family: system-ui; letter-spacing: 0.04em;
          transition: border-color 0.15s, background 0.15s;
        }
        .cta-link:hover { border-color: #111; background: #f7f7f7; }
        .cta-link.primary {
          background: #111; color: #fff; border-color: #111;
        }
        .cta-link.primary:hover { background: #333; }

        /* REFERENCES */
        .references {
          border-top: 1px solid #eee; padding-top: 28px;
          max-width: 900px; margin: 96px auto 80px;
        }
        .references h3 {
          font-size: 12px; font-weight: 600; color: #aaa;
          letter-spacing: 0.12em; text-transform: uppercase;
          margin-bottom: 20px; font-family: system-ui;
        }
        .references ol {
          margin: 0; padding-left: 20px;
          display: flex; flex-direction: column; gap: 10px;
          list-style-type: decimal;
        }
        .references li { font-size: 12px; line-height: 1.7; color: #888; font-family: system-ui; }
        .references a { color: #888; text-decoration: underline; }

        @media (max-width: 640px) {
          .header-inner { flex-direction: column; gap: 10px; padding: 12px 0; }
          main { padding-top: 100px; }
          .cards { grid-template-columns: 1fr; }
          .abstract-block { padding: 24px 20px; }
        }
      `}</style>

      {/* HEADER */}
      <header>
        <div className="header-inner">
          <span className="header-name">Bianca Avanzo — The Root Frequency Theory</span>
          <nav>
            <a href="/the-paper">About RFT</a>
            <a href="/about-the-author">About the Author</a>
            <a href="/contact">Contact</a>
          </nav>
        </div>
      </header>

      <main>

        {/* HERO */}
        <section className="hero">
          <div className="hero-title-center">
            <div className="hero-title-wrap">
              <svg viewBox="0 0 60 28" aria-hidden="true">
                <line x1="22" y1="0" x2="4" y2="18" stroke="#111" strokeWidth="1.6" strokeLinecap="round" />
                <line x1="22" y1="0" x2="22" y2="22" stroke="#111" strokeWidth="1.6" strokeLinecap="round" />
                <line x1="22" y1="0" x2="40" y2="16" stroke="#111" strokeWidth="1.6" strokeLinecap="round" />
                <line x1="4" y1="18" x2="-2" y2="27" stroke="#111" strokeWidth="1" strokeLinecap="round" />
                <line x1="22" y1="22" x2="16" y2="28" stroke="#111" strokeWidth="1" strokeLinecap="round" />
                <line x1="40" y1="16" x2="46" y2="26" stroke="#111" strokeWidth="1" strokeLinecap="round" />
              </svg>
              <h1 className="hero-title">Root Frequency</h1>
            </div>
            <div className="hero-subtitle-row">
              <span className="hero-subtitle">Theory</span>
            </div>
            <div className="hero-divider" />
          </div>

          <div className="hero-desc-wrap">
            <p className="hero-desc" style={{ fontSize: 22, fontWeight: 500, color: "#555" }}>
              What sustains a coherent sense of self? Root Frequency Theory proposes an integrative framework for understanding how brain, body, and lived experience might remain aligned across time, and what conditions could disrupt this coherence.
            </p>
          </div>
        </section>

        {/* CARDS — quick overview */}
        <section className="cards-section">
          <div className="cards-label">Explore the framework</div>
          <div className="cards">
            <a href="/the-paper" className="card-wrapper">
              <div className="card-title" style={{ paddingTop: 8 }}>The Paper</div>
              <p className="card-text">Theoretical foundations, key gaps in consciousness research, and the C0–C4 multiscale architecture.</p>
            </a>
            <a href="/research-plan" className="card-wrapper">
              <div className="card-title">M-RFT Coherence Metric</div>
              <p className="card-text">Formalization of the metric and proposed study designs for investigating cross-scale coordination.</p>
            </a>
            <a href="/expected-outcomes" className="card-wrapper">
              <div className="card-title" style={{ paddingTop: 8 }}>Expected Outcomes</div>
              <p className="card-text">Potential implications for psychopathology research and invitation for academic collaboration.</p>
            </a>
          </div>
        </section>

        <div className="section-divider" />

        {/* WHY THIS MATTERS */}
        <section className="why">
          <h2>Why does this matter?</h2>
          <div className="why-body">
            <p>
              Contemporary neuroscience has made major advances in characterizing neural
              dynamics<sup>1</sup>, intrinsic self-related activity<sup>2</sup>, and the organization
              of large-scale brain networks, along with their associated
              vulnerabilities<sup>3,4,5,6,7</sup>. Yet these domains are often investigated
              separately, leaving open a critical question: could multiscale alignment play a
              key role in understanding the maintenance and potential perturbation of
              lived-experience continuity?
            </p>
            <p>
              This question becomes increasingly relevant in today&apos;s information-dense and
              cognitively demanding environments. Within this context, Root Frequency Theory
              considers how cognitive information overload may impact cross-level coordination.
              We hypothesize that under such sustained load, the system&apos;s integrative capacity
              may be reduced<sup>8</sup>, thereby placing increased demands on predictive
              regulation<sup>1</sup>.
            </p>
            <p>
              The proposed M-RFT metric aims to quantify variations in cross-scale alignment
              and examine whether such variations help predict emerging patterns of experiential
              fragmentation across both clinical and everyday contexts<sup>3,7</sup>.
            </p>
          </div>

          {/* CTA back to cards */}
          <div className="cta-row">
            <a href="/the-paper" className="cta-link primary">Read the paper →</a>
            <a href="/research-plan" className="cta-link">M-RFT Metric</a>
            <a href="/expected-outcomes" className="cta-link">Expected Outcomes</a>
          </div>
        </section>

        {/* REFERENCES */}
        <section className="references">
          <h3>References</h3>
          <ol>
            {[
              { text: "Friston, K. (2010). The free-energy principle: A unified brain theory? Nature Reviews Neuroscience, 11(2), 127–138.", url: "https://doi.org/10.1038/nrn2787" },
              { text: "Northoff, G. (2016). Neuro-philosophy and the healthy mind: Learning from the unwell brain. W. W. Norton & Company.", url: null },
              { text: "Menon, V. (2011). Large-scale brain networks and psychopathology: A unifying triple network model. Trends in Cognitive Sciences, 15(10), 483–506.", url: "https://doi.org/10.1016/j.tics.2011.08.003" },
              { text: "Seth, A. K., Dienes, Z., Cleeremans, A., Overgaard, M., & Pessoa, L. (2008). Measuring consciousness: Relating behavioural and neurophysiological approaches. Trends in Cognitive Sciences, 12(8), 314–321.", url: "https://doi.org/10.1016/j.tics.2008.04.008" },
              { text: "Edelman, G. M., Gally, J. A., & Baars, B. J. (2011). Biology of consciousness. Frontiers in Psychology, 2, 4.", url: "https://doi.org/10.3389/fpsyg.2011.00004" },
              { text: "Cleeremans, A. (2011). The radical plasticity thesis: How the brain learns to be conscious. Frontiers in Psychology, 2, 86.", url: "https://doi.org/10.3389/fpsyg.2011.00086" },
              { text: "Sapolsky, R. M. (2004). Why zebras don't get ulcers (3rd ed.). Henry Holt.", url: null },
              { text: "Tononi, G., Boly, M., Massimini, M., & Koch, C. (2016). Integrated information theory: From consciousness to its physical substrate. Nature Reviews Neuroscience, 17, 450–461.", url: "https://doi.org/10.1038/nrn.2016.44" },
            ].map((ref, i) => (
              <li key={i}>
                {ref.text}{" "}
                {ref.url && (
                  <a href={ref.url} target="_blank" rel="noopener noreferrer">
                    {ref.url}
                  </a>
                )}
              </li>
            ))}
          </ol>
        </section>

      </main>
    </>
  )
}