'use client'

import React from "react"

export default function ResearchOverview() {
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
        nav a.active { color: #111; font-weight: 500; }
        main {
          padding-top: 100px; padding-bottom: 100px;
          padding-left: 24px; padding-right: 24px;
          max-width: 680px; margin: 0 auto;
        }
        .back { font-size: 13px; color: #999; text-decoration: none; display: inline-block; margin-bottom: 48px; }
        .back:hover { color: #111; }
        .hero { margin-bottom: 56px; }
        .hero-label { font-size: 10px; font-weight: 600; color: #888; text-transform: uppercase; letter-spacing: 0.14em; font-family: system-ui; margin-bottom: 16px; }
        .hero-title { font-family: 'EB Garamond', Georgia, serif; font-size: clamp(32px, 5vw, 52px); font-weight: 500; color: #111; line-height: 1.15; margin-bottom: 16px; }
        .hero-meta { display: flex; gap: 20px; flex-wrap: wrap; align-items: center; font-size: 12px; color: #888; font-family: system-ui; }
        .hero-meta a { color: #888; text-decoration: none; border-bottom: 1px solid #ddd; }
        .hero-meta a:hover { color: #111; border-color: #111; }
        .divider { width: 100%; height: 1px; background: #eee; margin: 48px 0; }
        .section { margin-bottom: 48px; }
        .section-head {
          font-size: 10px; font-weight: 600; color: #888;
          text-transform: uppercase; letter-spacing: 0.14em;
          font-family: system-ui; margin-bottom: 16px;
        }
        .section h2 {
          font-family: 'EB Garamond', Georgia, serif;
          font-size: clamp(20px, 2.8vw, 26px);
          font-weight: 500; color: #111; line-height: 1.2;
          margin-bottom: 20px;
        }
        .section p {
          font-size: 16px; line-height: 1.9; color: #444;
          font-family: system-ui; margin-bottom: 16px;
          text-align: justify; hyphens: auto;
        }
        .section p:last-child { margin-bottom: 0; }
        .embargo-note {
          font-size: 12px; color: #a07800; font-family: system-ui;
          font-style: italic; margin-top: 10px;
        }
        .references-section {
          border-top: 1px solid #eee; padding-top: 28px; margin-top: 56px;
        }
        .references-label {
          font-size: 10px; font-weight: 600; color: #ccc;
          text-transform: uppercase; letter-spacing: 0.14em;
          font-family: system-ui; margin-bottom: 16px;
        }
        .ref-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 8px; }
        .ref-list li {
          font-size: 12px; color: #999; font-family: system-ui;
          line-height: 1.7; padding-left: 22px; text-indent: -22px;
        }
        .ref-list a { color: #999; }
        .cta-block {
          border-top: 1px solid #eee; padding-top: 32px; margin-top: 56px;
          display: flex; gap: 12px; flex-wrap: wrap; align-items: center;
        }
        .cta-link {
          font-size: 13px; color: #111; text-decoration: none;
          border: 1px solid #ddd; padding: 9px 20px; font-family: system-ui;
          letter-spacing: 0.04em; transition: border-color 0.15s, background 0.15s;
        }
        .cta-link:hover { border-color: #111; background: #f7f7f7; }
        .cta-link.primary { background: #111; color: #fff; border-color: #111; }
        .cta-link.primary:hover { background: #333; }
        @media (max-width: 640px) {
          .header-inner { flex-direction: column; gap: 10px; padding: 12px 0; }
          main { padding-top: 100px; }
        }
      `}</style>

            <header>
                <div className="header-inner">
                    <a href="/" className="header-name">Root Lab</a>
                    <nav>
                        <a href="/research-overview" className="active">Research Overview</a>
                        <a href="/n-of-1">N=1 Study</a>
                        <a href="/about-the-author">About the Author</a>
                        <a href="/contact">Contact</a>
                        <a href="https://www.linkedin.com/in/bianca-avanzo-b1b5231a9" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", color: "#555" }} aria-label="LinkedIn">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="2" y="2" width="20" height="20" rx="3" />
                                <line x1="8" y1="11" x2="8" y2="17" />
                                <line x1="8" y1="7" x2="8" y2="8" />
                                <line x1="12" y1="17" x2="12" y2="11" />
                                <path d="M12 14a3 3 0 0 1 6 0v3" />
                            </svg>
                        </a>
                    </nav>
                </div>
            </header>

            <main>
                <a href="/" className="back">← Back</a>

                <div className="hero">
                    <div className="hero-label">Root Lab · Independent Research Program</div>
                    <h1 className="hero-title">Root Frequency Theory: Research Overview</h1>
                    <div className="hero-meta">
                        <span>Bianca Avanzo</span>
                        <a href="https://orcid.org/0009-0006-9226-1241" target="_blank" rel="noopener noreferrer">ORCID: 0009-0006-9226-1241</a>
                        <span>avanzorft.com</span>
                    </div>
                </div>

                <div className="divider" />

                {/* INTRO */}
                <div className="section">
                    <p>
                        This research program began with a question that resisted partial answers: how does a human being maintain a coherent sense of self across time? Not as an abstract philosophical puzzle, but as a practical and urgent problem — one that neuroscience, psychology, and systems theory had each approached from their own angle without converging on a unified account. Root Frequency Theory (RFT) is the result of attempting to hold the whole question at once.
                    </p>
                    <p>
                        The program comprises four interrelated contributions developed between December 2024 and May 2026: a theoretical framework (Avanzo, 2026a), a coherence metric (Avanzo, 2026b), an N=1 longitudinal self-tracking study (Avanzo, 2026d), and a proposal for applying coherence measurement to human-AI interaction (Avanzo, 2026c). Each contribution builds directly on the last. The program was conducted independently, without institutional affiliation or external funding.
                    </p>
                </div>

                <div className="divider" />

                {/* RFT */}
                <div className="section">
                    <div className="section-head">Contribution 1</div>
                    <h2>Root Frequency Theory</h2>
                    <p>
                        RFT proposes that experiential continuity — the coherent sense of being a continuous self across time — is not a fixed property of the brain but an ongoing, multiscale achievement of vertical alignment across five nested regulatory layers (Avanzo, 2026a). These layers range from the biological ground of the body (C1: autonomic regulation, heart rate variability, homeostasis) through large-scale neural network coordination (C2: default mode network, salience network, central executive network), to symbolic and narrative self-organization (C3: identity, meaning-making, temporal integration of experience), and finally the phenomenological surface at which fragmentation becomes consciously accessible (C4). A cosmological layer (C0) captures the large-scale environmental constraints — chronic stress load, socioeconomic conditions — that determine the regulatory resources available to all layers below.
                    </p>
                    <p>
                        The framework integrates four established scientific traditions: the Free Energy Principle (Friston, 2010), in which fragmentation is operationalized as increased variational free energy; interoceptive predictive coding (Garfinkel et al., 2015; Barrett & Simmons, 2015), which provides the measurement basis for body-to-brain signal fidelity; spatiotemporal neuroscience (Northoff & Huang, 2017), which frames self-experience as a dynamic achievement of temporal integration across brain networks; and autopoiesis (Maturana & Varela, 1980), which grounds the biological layer in the logic of self-producing systems. The framework was developed through a neurophenomenological methodology (Varela, 1996), with structured first-person observation preceding formal literature review.
                    </p>
                </div>

                <div className="divider" />

                {/* METRIC */}
                <div className="section">
                    <div className="section-head">Contribution 2</div>
                    <h2>The M-RFT Coherence Metric</h2>
                    <p>
                        A theoretical framework requires measurement to become scientifically productive. The M-RFT metric (Avanzo, 2026b) is proposed as the first formal instrument for quantifying cross-layer systemic coherence as a continuous, trackable variable. The metric integrates three signal streams — physiological autonomic flexibility, interoceptive accuracy, and narrative coherence — into a single composite index. Each component operationalizes a theoretically motivated construct grounded in established measurement literature.
                    </p>
                    <p>
                        The metric is a heuristic instrument in early-stage development — not a validated clinical tool, but a theoretically grounded framework for generating and testing hypotheses about cross-level coordination that prior instruments had not attempted to capture in integrated form. Full technical specification is available in the embargoed preprint.
                    </p>
                    <p className="embargo-note">Full paper: Avanzo, 2026b · DOI: 10.5281/zenodo.19423115 · Embargo lifts June 1, 2026</p>
                </div>

                <div className="divider" />

                {/* N=1 */}
                <div className="section">
                    <div className="section-head">Contribution 3</div>
                    <h2>Root Extension — N=1 Longitudinal Study</h2>
                    <p>
                        The Root Extension iOS application implements the three-stage M-RFT protocol in an ecological daily-use format. The N=1 study (Avanzo, 2026d) uses the researcher as subject; the application is simultaneously the intervention and the measurement instrument — a design consistent with the self-as-instrument tradition in neurophenomenological research (Varela, 1996; Petitmengin, 2006). Preliminary data from 321 sessions across 23 active measurement days (April–May 2026) support the feasibility of the measurement architecture and identify key patterns warranting formal investigation in a controlled design.
                    </p>
                    <p>
                        Of particular theoretical interest is a pattern of divergence between the metric's output and subjective self-report, consistent with predictions from interoceptive predictive coding frameworks regarding the relationship between felt coherence and underlying regulatory state. A formal N=20–40 validation trial under institutional IRB oversight is planned for 2027.
                    </p>
                    <p className="embargo-note">Full paper: Avanzo, 2026d · DOI: 10.5281/zenodo.20261109 · Embargo lifts June 1, 2026</p>
                </div>

                <div className="divider" />

                {/* AI */}
                <div className="section">
                    <div className="section-head">Contribution 4</div>
                    <h2>Toward a Coherence Layer for Human-AI Interaction</h2>
                    <p>
                        Large language models are stateless by design: each interaction begins without access to the user's physiological regulatory state, interoceptive accuracy, or narrative coherence (Avanzo, 2026c). AI systems respond to the semantic content of queries while remaining blind to the conditions under which those queries are generated. A fragmented nervous system and a coherent one may produce semantically identical queries that are epistemically non-equivalent; the same information integrates differently depending on the regulatory ground it lands on.
                    </p>
                    <p>
                        The coherence layer proposal introduces a measurement architecture that surfaces the user's M-RFT state as context prior to AI response generation — not modifying what the AI knows, but modifying what the AI knows about who is asking at the moment of asking. The required measurement infrastructure exists in currently available consumer hardware. The proposal is a research invitation, not a product claim.
                    </p>
                </div>

                <div className="divider" />

                {/* SIGNIFICANCE */}
                <div className="section">
                    <div className="section-head">Program Significance</div>
                    <h2>Integration as the primary contribution</h2>
                    <p>
                        The four contributions form a single coherent arc: a theory explaining why experiential coherence fails; a metric making that coherence measurable; a study demonstrating measurement feasibility in ecological conditions; and a proposal extending the framework to AI system design. The program's primary significance lies in integration — bringing together constructs that the field had developed in isolation and demonstrating that they compose into a tractable, empirically approachable account of human self-continuity.
                    </p>
                    <p>
                        The author is actively seeking laboratory collaboration and institutional partnership to advance the N=20–40 validation trial. All contributions are publicly timestamped and available via Zenodo and avanzorft.com.
                    </p>
                </div>

                <div className="cta-block">
                    <a href="https://doi.org/10.5281/zenodo.18905376" target="_blank" rel="noopener noreferrer" className="cta-link primary">Root Frequency Theory ↗</a>
                    <a href="https://doi.org/10.5281/zenodo.20060589" target="_blank" rel="noopener noreferrer" className="cta-link">Root Knowledge ↗</a>
                    <a href="/contact" className="cta-link">Contact →</a>
                </div>

                <div className="references-section">
                    <div className="references-label">References</div>
                    <ul className="ref-list">
                        <li>Aron, E. N., & Aron, A. (1997). Sensory-processing sensitivity and its relation to introversion and emotionality. <em>Journal of Personality and Social Psychology, 73</em>(2), 345–368.</li>
                        <li>Avanzo, B. (2026a). <em>Root Frequency Theory: An integrative framework for the continuity of lived experience.</em> Zenodo. <a href="https://doi.org/10.5281/zenodo.18905376" target="_blank" rel="noopener">https://doi.org/10.5281/zenodo.18905376</a></li>
                        <li>Avanzo, B. (2026b). <em>Multiscale integration of interoceptive signals and narrative scaffolding: Can systemic coherence be formally measured? (M-RFT).</em> Zenodo. https://doi.org/10.5281/zenodo.19423115 [Embargo lifts June 1, 2026]</li>
                        <li>Avanzo, B. (2026c). <em>Root Knowledge: Embodied knowledge as a foundation for coherent human–AI interaction.</em> Zenodo. <a href="https://doi.org/10.5281/zenodo.20060589" target="_blank" rel="noopener">https://doi.org/10.5281/zenodo.20060589</a></li>
                        <li>Avanzo, B. (2026d). <em>Before fragmentation: A longitudinal N=1 study of pre-symptomatic coherence across physiological, interoceptive, and narrative layers.</em> Zenodo. https://doi.org/10.5281/zenodo.20261109 [Embargo lifts June 1, 2026]</li>
                        <li>Barrett, L. F., & Simmons, W. K. (2015). Interoceptive predictions in the brain. <em>Nature Reviews Neuroscience, 16</em>(7), 419–429.</li>
                        <li>Friston, K. (2010). The free-energy principle: A unified brain theory? <em>Nature Reviews Neuroscience, 11</em>(2), 127–138.</li>
                        <li>Garfinkel, S. N., Seth, A. K., Barrett, A. B., Suzuki, K., & Critchley, H. D. (2015). Knowing your own heart. <em>Biological Psychology, 104</em>, 65–74.</li>
                        <li>Maturana, H. R., & Varela, F. J. (1980). <em>Autopoiesis and cognition.</em> Reidel.</li>
                        <li>McEwen, B. S. (1998). Protective and damaging effects of stress mediators. <em>New England Journal of Medicine, 338</em>(3), 171–179.</li>
                        <li>Northoff, G., & Huang, Z. (2017). Temporo-spatial theory of consciousness (TTC). <em>Neuroscience & Biobehavioral Reviews, 80</em>, 630–645.</li>
                        <li>Petitmengin, C. (2006). Describing one's subjective experience in the second person. <em>Phenomenology and the Cognitive Sciences, 5</em>(3–4), 229–269.</li>
                        <li>Varela, F. J. (1996). Neurophenomenology. <em>Journal of Consciousness Studies, 3</em>(4), 330–349.</li>
                    </ul>
                </div>

            </main>
        </>
    )
}