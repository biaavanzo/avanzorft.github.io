'use client'

import React, { useState } from "react"

export default function FormalizationPathway() {
    const [openPattern, setOpenPattern] = useState<number | null>(null)

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
          padding-top: 100px; padding-bottom: 100px;
          padding-left: 24px; padding-right: 24px;
          max-width: 680px; margin: 0 auto;
        }

        .page-nav {
          display: flex; align-items: center;
          justify-content: space-between; margin-bottom: 56px;
        }
        .page-nav-back { font-size: 13px; color: #999; text-decoration: none; }
        .page-nav-links { display: flex; gap: 20px; }
        .page-nav-links a { font-size: 15px; text-decoration: none; color: #555; }
        .page-nav-links a.active {
          color: #111; border-bottom: 1px solid #111;
          padding-bottom: 2px; font-weight: 500;
        }

        .page-title {
          font-family: 'EB Garamond', Georgia, serif;
          font-size: clamp(28px, 5vw, 42px);
          font-weight: 500; color: #111;
          text-align: center; margin-bottom: 12px; line-height: 1.2;
        }
        .page-subtitle {
          text-align: center; font-size: 13px; color: #555;
          letter-spacing: 0.06em; text-transform: uppercase;
          font-family: system-ui; margin-bottom: 56px;
        }

        .section { margin-bottom: 52px; }
        .section-title {
          font-size: 13px; font-weight: 600; color: #555;
          text-transform: uppercase; letter-spacing: 0.12em;
          font-family: system-ui; margin-bottom: 18px;
        }
        .section p {
          font-size: 17px; line-height: 1.9; color: #444;
          font-family: system-ui; margin-bottom: 14px;
          text-indent: 2em; text-align: justify; hyphens: auto;
        }
        .section p:last-child { margin-bottom: 0; }

        .cite {
          font-size: 12px; color: #555; font-style: italic; white-space: nowrap;
        }

        .divider { width: 100%; height: 1px; background: #eee; margin: 48px 0; }

        /* FORMULA BLOCK */
        .formula-block {
          border: 1px solid #eee; background: #fafafa;
          padding: 36px 32px; margin-bottom: 52px; text-align: center;
        }
        .formula-label {
          font-size: 10px; font-weight: 600; color: #555;
          text-transform: uppercase; letter-spacing: 0.12em;
          font-family: system-ui; margin-bottom: 20px;
        }
        .formula-display {
          font-family: 'EB Garamond', Georgia, serif;
          font-size: 42px; font-weight: 500; color: #111;
          line-height: 1; margin-bottom: 4px;
          display: flex; align-items: center; justify-content: center; gap: 8px;
        }
        .formula-frac {
          display: inline-flex; flex-direction: column;
          align-items: center; gap: 2px;
        }
        .formula-num { font-size: 32px; }
        .formula-bar { width: 80px; height: 1.5px; background: #111; }
        .formula-den { font-size: 32px; }

        .formula-legend {
          margin-top: 28px; display: flex; flex-direction: column; gap: 10px;
          text-align: left; border-top: 1px solid #eee; padding-top: 20px;
        }
        .legend-item {
          display: flex; gap: 14px; align-items: flex-start;
          font-size: 13px; line-height: 1.6;
        }
        .legend-sym {
          font-family: 'EB Garamond', Georgia, serif;
          font-size: 18px; color: #111; min-width: 24px;
          flex-shrink: 0; font-style: italic; padding-top: 1px;
        }
        .legend-def { color: #555; font-family: system-ui; }
        .legend-def strong { color: #111; font-weight: 500; }

        /* PROTOCOL STEPS */
        .protocol { display: flex; flex-direction: column; gap: 2px; margin-bottom: 0; }
        .protocol-step {
          border: 1px solid #eee; background: #fafafa;
          display: grid; grid-template-columns: 48px 1fr;
        }
        .protocol-num {
          background: #111; color: #fff;
          display: flex; align-items: center; justify-content: center;
          font-family: 'EB Garamond', Georgia, serif;
          font-size: 18px; min-height: 80px;
        }
        .protocol-body { padding: 18px 20px; }
        .protocol-title {
          font-size: 14px; font-weight: 500; color: #111;
          font-family: system-ui; margin-bottom: 6px;
        }
        .protocol-desc {
          font-size: 13px; line-height: 1.65; color: #666; font-family: system-ui;
        }

        /* REFERENCES */
        .references {
          border-top: 1px solid #eee; padding-top: 28px; margin-top: 48px;
        }
        .references h3 {
          font-size: 12px; font-weight: 600; color: #555;
          letter-spacing: 0.12em; text-transform: uppercase;
          margin-bottom: 20px; font-family: system-ui;
        }
        .references ol {
          margin: 0; padding-left: 20px;
          display: flex; flex-direction: column; gap: 10px; list-style-type: decimal;
        }
        .references li { font-size: 12px; line-height: 1.7; color: #888; font-family: system-ui; }
        .references a { color: #888; text-decoration: underline; }

        @media (max-width: 640px) {
          .page-nav-links { display: none; }
        }
      `}</style>

            <header>
                <div className="header-inner">
                    <a href="/" className="header-name">Bianca Avanzo — The Root Frequency Theory</a>
                    <nav>
                        <a href="/the-paper">About RFT</a>
                        <a href="/about-the-author">About the Author</a>
                        <a href="/contact">Contact</a>
                    </nav>
                </div>
            </header>

            <main>

                <div className="page-nav">
                    <a href="/" className="page-nav-back">← Back</a>
                    <div className="page-nav-links">
                        <a href="/the-paper">The Paper</a>
                        <a href="/research-plan" className="active">M-RFT Coherence Metric</a>
                        <a href="/expected-outcomes">Expected Outcomes</a>
                    </div>
                </div>

                <h1 className="page-title">M-RFT Coherence Metric</h1>
                <p className="page-subtitle">Operational Proxy for Multiscale Integration</p>

                {/* ABSTRACT */}
                <div className="section">
                    <div className="section-title">Abstract</div>
                    <p>
                        A persistent challenge in contemporary consciousness research is understanding how multiple layers of human functioning—from biological regulation to personal narrative—interact to support a coherent sense of self. While existing approaches have quantified neural and physiological features, fewer methods attempt to characterize their dynamic alignment. The M-RFT Coherence Metric is proposed as an initial step toward quantifying this integrative dimension.
                    </p>
                    <p>
                        Building on the C0–C4 architecture established in RFT <span className="cite">(Avanzo, 2026)</span>, this study examines whether variation at the symbolic layer (C3) may be associated with changes in multiscale regulation. The central question is whether the introduction of structured epistemic scaffolding—formalized as Epistemic Synchrony (Kₑ)—is associated with reductions in systemic uncertainty, shifts in neural regulatory dynamics (C2), and measurable changes in physiological indices (C1). If such associations are observed, they may be reflected in longitudinal variations in the coherence of self-experience (C4).
                    </p>
                </div>

                <div className="divider" />

                {/* ORIGIN */}
                <div className="section">
                    <div className="section-title">Origin of the Metric</div>
                    <p>
                        The M-RFT Metric was developed through an iterative process of theory-building, grounded in a longitudinal N-of-1 pilot study that employed a neurophenomenological framework <span className="cite">(Varela, 1996)</span> and analytic autoethnography. By integrating the roles of researcher and subject, this approach allowed for the systematic documentation of physiological symptoms, reactive behavioral patterns, and cognitive-symbolic shifts. These observations were organized along a spatiotemporal timeline, tracking changes in perceived internal coherence under varying conditions of stress and informational load.
                    </p>
                    <p>
                        A central observation during this investigative process was the apparent relationship between the structured organization of knowledge and shifts in internal regulatory dynamics. This led to the hypothesis that the acquisition of higher-order symbolic structure may function as a stabilizing constraint on lower-level biological and neural variability.
                    </p>
                    <p>
                        The full technical specification and research implications are available in a separate document <a href="/contact" style={{ color: "#111", textDecoration: "underline" }}>upon request</a>. What follows is an experimental protocol and illustrative case example — a practical demonstration of how the metric operates.
                    </p>
                </div>

                <div className="divider" />

                {/* PROTOCOL */}
                <div className="section">
                    <div className="section-title">Proposed Experimental Protocol</div>
                    <p>
                        The M-RFT metric treats Epistemic Synchrony (Kₑ) as a potentially modulable variable. The protocol is designed to test whether structured epistemic interventions — scaffolding that links somatic signals to narrative context — are associated with measurable shifts in M-RFT across biological, neural, and experiential domains.
                    </p>
                </div>

                <div className="protocol" style={{ marginBottom: 52 }}>
                    <div className="protocol-step">
                        <div className="protocol-num">1</div>
                        <div className="protocol-body">
                            <div className="protocol-title">Pre-Intervention Baseline</div>
                            <div className="protocol-desc">Assessment of participants' interpretations of internal states through semi-structured interviews, cross-referenced with physiological indices and measures of large-scale network connectivity.</div>
                        </div>
                    </div>
                    <div className="protocol-step">
                        <div className="protocol-num">2</div>
                        <div className="protocol-body">
                            <div className="protocol-title">Structured Knowledge Intervention</div>
                            <div className="protocol-desc">Introduction of organized, interdependent information layers targeting detected prediction errors. Explanatory frameworks linking somatic signals to narrative context are implemented to examine whether Kₑ increases and variational free energy (F) correspondingly decreases.</div>
                        </div>
                    </div>
                    <div className="protocol-step">
                        <div className="protocol-num">3</div>
                        <div className="protocol-body">
                            <div className="protocol-title">Post-Intervention Assessment</div>
                            <div className="protocol-desc">Re-evaluation of neural, physiological, and phenomenological reports, testing whether increases in Kₑ are associated with corresponding changes in the M-RFT index across the three predicted outcomes.</div>
                        </div>
                    </div>
                </div>

                <div className="divider" />

                {/* JOÃO CASE EXAMPLE */}
                <div className="section">
                    <div className="section-title">Illustrative Case Example</div>
                    <p>
                        The following hypothetical scenario is offered to clarify how structured self-knowledge may function as an epistemic tool within the M-RFT framework.
                    </p>
                </div>

                {/* SITUATION SETUP */}
                <div style={{
                    border: "1px solid #eee", background: "#fafafa",
                    padding: "28px 28px 24px", marginBottom: 2, textAlign: "center",
                }}>
                    <div style={{ fontSize: 10, fontWeight: 600, color: "#555", textTransform: "uppercase", letterSpacing: "0.12em", fontFamily: "system-ui", marginBottom: 20 }}>The Setup</div>
                    <div style={{ display: "flex", justifyContent: "center", marginBottom: 24 }}>
                        <svg width="320" height="80" viewBox="0 0 320 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M138 32 L146 68 L174 68 L182 32 Z" stroke="#111" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
                            <line x1="136" y1="32" x2="184" y2="32" stroke="#111" strokeWidth="1.5" strokeLinecap="round" />
                            <ellipse cx="160" cy="72" rx="28" ry="4" stroke="#111" strokeWidth="1.5" fill="none" />
                            <path d="M182 42 Q194 42 194 52 Q194 62 182 62" stroke="#111" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                            <path d="M152 24 Q154 18 152 12" stroke="#aaa" strokeWidth="1.2" fill="none" strokeLinecap="round" />
                            <path d="M160 22 Q162 16 160 10" stroke="#aaa" strokeWidth="1.2" fill="none" strokeLinecap="round" />
                            <path d="M168 24 Q170 18 168 12" stroke="#aaa" strokeWidth="1.2" fill="none" strokeLinecap="round" />
                            <polyline points="138,52 120,52 114,34 107,68 100,40 93,58 84,52 10,52" stroke="#c0392b" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                            <line x1="182" y1="52" x2="310" y2="52" stroke="#c0392b" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                    </div>
                    <p style={{
                        fontFamily: "'EB Garamond', Georgia, serif",
                        fontSize: 20, color: "#111", lineHeight: 1.6,
                        margin: "0 0 12px 0",
                    }}>
                        An individual drinks an espresso and experiences sudden, transient tachycardia — a racing heart.
                    </p>
                    <p style={{ fontSize: 13, color: "#777", fontFamily: "system-ui", lineHeight: 1.7, margin: "0 0 6px 0" }}>
                        This is a Layer C1 (Biological) arousal event.
                    </p>
                    <p style={{ fontSize: 13, color: "#777", fontFamily: "system-ui", lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>
                        How does the system interpret this?
                    </p>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 2, marginBottom: 52 }}>

                    {/* SCENARIO A */}
                    <div style={{ border: "1px solid #eee", background: "#fafafa" }}>
                        <div style={{ display: "grid", gridTemplateColumns: "4px 1fr" }}>
                            <div style={{ background: "#c0392b" }} />
                            <div style={{ padding: "18px 20px 6px" }}>
                                <div style={{ fontSize: 10, fontWeight: 600, color: "#555", textTransform: "uppercase", letterSpacing: "0.1em", fontFamily: "system-ui", marginBottom: 4 }}>Scenario A</div>
                                <div style={{ fontSize: 16, fontWeight: 500, color: "#111", fontFamily: "system-ui", marginBottom: 12 }}>Fragmentation — Lower Epistemic Synchrony</div>
                                <p style={{ fontSize: 14, lineHeight: 1.8, color: "#555", fontFamily: "system-ui", marginBottom: 12, textIndent: 0 }}>
                                    Upon caffeine intake, transient tachycardia is triggered. Lacking an accurate symbolic interpretation of the physiological trigger, the C3 layer fails to provide an adequate model for the C1 biological arousal. Under these circumstances, large-scale neural systems associated with self-referential processing (C2) — including regions linked to DMN activity — may interpret the signal as potentially threatening.
                                </p>
                                <p style={{ fontSize: 14, lineHeight: 1.8, color: "#555", fontFamily: "system-ui", marginBottom: 16, textIndent: 0 }}>
                                    Persistent ruminative thoughts emerge, along with growing self-doubt regarding the ability to focus at work and anxiety about the potential consequences of this attentional difficulty. Within the RFT framework, this state corresponds to reduced systemic integration, low synchronization between self-narrative and experiential reality, and elevated systemic noise.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div style={{ width: 1, height: 14, background: "#ddd", marginLeft: 26 }} />

                    {/* SCENARIO B */}
                    <div style={{ border: "1px solid #eee", background: "#fafafa" }}>
                        <div style={{ display: "grid", gridTemplateColumns: "4px 1fr" }}>
                            <div style={{ background: "#27ae60" }} />
                            <div style={{ padding: "18px 20px 6px" }}>
                                <div style={{ fontSize: 10, fontWeight: 600, color: "#555", textTransform: "uppercase", letterSpacing: "0.1em", fontFamily: "system-ui", marginBottom: 4 }}>Scenario B</div>
                                <div style={{ fontSize: 16, fontWeight: 500, color: "#111", fontFamily: "system-ui", marginBottom: 12 }}>Integration — Higher Epistemic Synchrony</div>
                                <p style={{ fontSize: 14, lineHeight: 1.8, color: "#555", fontFamily: "system-ui", marginBottom: 16, textIndent: 0 }}>
                                    When the subject correctly updates their generative model — <em>&ldquo;This sensation is likely related to caffeine intake&rdquo;</em> — and decouples the self from the temporary bodily state — <em>&ldquo;I have experienced this response previously after caffeine&rdquo;</em> — epistemic alignment increases. The C3 layer now provides an adequate explanatory model for the C1 signal, potentially reducing variational free energy at C2 and attenuating the threat-detection cascade.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="divider" />

                {/* CONCLUSION */}
                <div className="section">
                    <div className="section-title">Conclusion</div>
                    <p>
                        The M-RFT metric represents an attempt to move beyond the description of fragmentation toward its measurement. By treating Epistemic Synchrony (Kₑ) as a potentially manipulable variable — introduced at the symbolic layer and tracked across biological and neural indices — this framework opens a tractable research pathway into the dynamics of self-coherence under conditions of informational entropy.
                    </p>
                    <p>
                        This case study illustrates a localized mechanism: the possibility that structured epistemic scaffolding functions as a top-down constraint, associated with reductions in systemic noise (F) and enhanced individual stability. This observation raises a critical research question: if integrative processes are strengthened at the individual level, to what extent might these effects manifest across different spatiotemporal scales? This invites rigorous investigation into whether stabilization at the individual level correlates with more consistent patterns of organization across biological, neural, and socio-environmental domains.
                    </p>
                    <p>
                        The subsequent section evaluates the scope of the M-RFT across clinical and everyday contexts, alongside the empirical requirements necessary to formally assess these cross-scale implications.
                    </p>
                </div>

                {/* BOTTOM NAV */}
                <div style={{
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                    borderTop: "1px solid #eee", marginTop: 48, paddingTop: 28,
                    fontFamily: "system-ui",
                }}>
                    <a href="/the-paper" style={{
                        fontSize: 14, color: "#555", textDecoration: "none",
                        display: "flex", alignItems: "center", gap: 8,
                    }}>
                        <span style={{ fontSize: 16 }}>←</span> The Paper
                    </a>
                    <a href="/expected-outcomes" style={{
                        fontSize: 14, color: "#555", textDecoration: "none",
                        display: "flex", alignItems: "center", gap: 8,
                    }}>
                        Expected Outcomes <span style={{ fontSize: 16 }}>→</span>
                    </a>
                </div>

                {/* REFERENCES */}
                <section className="references">
                    <h3>References</h3>
                    <ol>
                        <li>Avanzo, B. (2026). <em>Root Frequency Theory: An integrative framework for the continuity of lived experience.</em> Independent publication.</li>
                        <li>Friston, K. (2010). The free-energy principle: A unified brain theory? <em>Nature Reviews Neuroscience, 11</em>(2), 127–138. <a href="https://doi.org/10.1038/nrn2787" target="_blank" rel="noopener">https://doi.org/10.1038/nrn2787</a></li>
                        <li>Tononi, G. (2004). An information integration theory of consciousness. <em>BMC Neuroscience, 5</em>, 42. <a href="https://doi.org/10.1186/1471-2202-5-42" target="_blank" rel="noopener">https://doi.org/10.1186/1471-2202-5-42</a></li>
                        <li>Tononi, G., Boly, M., Massimini, M., &amp; Koch, C. (2016). Integrated information theory: From consciousness to its physical substrate. <em>Nature Reviews Neuroscience, 17</em>, 450–461. <a href="https://doi.org/10.1038/nrn.2016.44" target="_blank" rel="noopener">https://doi.org/10.1038/nrn.2016.44</a></li>
                        <li>Varela, F. J. (1996). Neurophenomenology: A methodological remedy for the hard problem. <em>Journal of Consciousness Studies, 3</em>(4), 330–349.</li>
                    </ol>
                </section>

                {/* RIGHTS */}
                <div style={{ marginTop: 40, paddingTop: 28, borderTop: "1px solid #eee", textAlign: "center" }}>
                    <a href="https://www.safecreative.org/work/2603074797166" rel="cc:license" target="_blank">
                        <img src="https://resources.safecreative.org/work/2603074797166/label/logo-300" style={{ border: 0, height: 24, opacity: 0.6 }} title="Safe Creative #2603074797166" />
                    </a>
                </div>

            </main>
        </>
    )
}