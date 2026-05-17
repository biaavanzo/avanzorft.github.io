'use client'

import React, { useState } from "react"

export default function Metric() {
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

        .back { font-size: 13px; color: #999; text-decoration: none; display: inline-block; margin-bottom: 48px; }
        .back:hover { color: #111; }

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

        .embargo-banner {
          background: #fdfbee; border: 1px solid #e8d98a;
          padding: 16px 20px; margin-bottom: 32px;
          display: flex; align-items: center; gap: 16px; flex-wrap: wrap;
        }
        .embargo-label {
          font-size: 10px; font-weight: 700; color: #a07800;
          text-transform: uppercase; letter-spacing: 0.1em;
          font-family: system-ui; white-space: nowrap;
        }
        .embargo-text {
          font-size: 13px; color: #856a00; font-family: system-ui; line-height: 1.5;
        }
        .embargo-doi {
          font-size: 11px; color: #a07800; font-family: system-ui;
          font-style: italic; margin-top: 2px;
        }

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

        .cta-block { border-top: 1px solid #eee; padding-top: 32px; margin-top: 56px; display: flex; gap: 12px; flex-wrap: wrap; align-items: center; }
        .cta-link { font-size: 13px; color: #111; text-decoration: none; border: 1px solid #ddd; padding: 9px 20px; font-family: system-ui; letter-spacing: 0.04em; transition: border-color 0.15s, background 0.15s; }
        .cta-link:hover { border-color: #111; background: #f7f7f7; }
        .cta-link.primary { background: #111; color: #fff; border-color: #111; }
        .cta-link.primary:hover { background: #333; }

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
          .header-inner { flex-direction: column; gap: 10px; padding: 12px 0; }
        }
      `}</style>

            <header>
                <div className="header-inner">
                    <a href="/" className="header-name">Root Lab</a>
                    <nav>
                        <a href="/research-overview">Research Overview</a>
                        <a href="/n-of-1">N=1 Study</a>
                        <a href="/about-the-author">About the Author</a>
                        <a href="/contact">Contact</a>
                    </nav>
                </div>
            </header>

            <main>

                <a href="/" className="back">← Back</a>

                <div style={{ marginBottom: 32 }}>
                    <div style={{ fontSize: 10, fontWeight: 600, color: "#a07800", textTransform: "uppercase" as const, letterSpacing: "0.14em", fontFamily: "system-ui", marginBottom: 16 }}>Embargoed · Lifts June 1, 2026</div>
                    <h1 style={{ fontFamily: "'EB Garamond', Georgia, serif", fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 500, color: "#111", lineHeight: 1.15, marginBottom: 16 }}>M-RFT Coherence Metric</h1>
                    <p style={{ fontFamily: "'EB Garamond', Georgia, serif", fontSize: "clamp(16px, 2vw, 20px)", fontWeight: 400, color: "#555", lineHeight: 1.6, marginBottom: 24 }}>Operational Proxy for Multiscale Integration</p>
                    <div style={{ display: "flex", gap: 24, flexWrap: "wrap" as const, alignItems: "center", fontSize: 12, color: "#888", fontFamily: "system-ui" }}>
                        <span>Bianca Avanzo · Independent Researcher</span>
                        <a href="/contact" style={{ color: "#a07800", textDecoration: "none", borderBottom: "1px solid #e8d98a" }}>Request early access →</a>
                    </div>
                </div>

                <div className="embargo-banner">
                    <div>
                        <div className="embargo-label">📄 Embargoed Preprint</div>
                        <div className="embargo-text">Full paper publicly available June 1, 2026. Early access available to researchers upon request.</div>
                        <div className="embargo-doi">DOI: 10.5281/zenodo.19423115</div>
                    </div>
                </div>

                <div className="section">
                    <div className="section-title">Abstract</div>
                    <p>
                        A persistent challenge in contemporary consciousness research is understanding how multiple layers of human functioning—from biological regulation to personal narrative—interact to support a coherent sense of self. While existing approaches have quantified neural and physiological features, fewer methods attempt to characterize their dynamic alignment. The M-RFT Coherence Metric is proposed as an initial step toward quantifying this integrative dimension.
                    </p>
                    <p>
                        Building on the C0–C4 architecture established in RFT <span className="cite">(Avanzo, 2026a)</span>, this paper examines whether variation at the symbolic layer (C3) may be associated with changes in multiscale regulation. The central question is whether the introduction of structured epistemic scaffolding—formalized as Epistemic Synchrony (Kₑ)—is associated with reductions in systemic uncertainty, shifts in neural regulatory dynamics (C2), and measurable changes in physiological indices (C1). If such associations are observed, they may be reflected in longitudinal variations in the coherence of self-experience (C4).
                    </p>
                </div>

                <div className="divider" />

                <div className="section">
                    <div className="section-title">The Metric</div>
                    <p>
                        The M-RFT metric is formally defined as <strong>M = (Φ · Kₑ) / F</strong>, where Φ represents autonomic flexibility indexed against personal HRV baseline, Kₑ = IA × NC represents Epistemic Synchrony (the product of interoceptive accuracy and narrative coherence), and F represents the fragmentation index — the regulatory burden the system is currently carrying.
                    </p>
                    <p>
                        Each component operationalizes a theoretically motivated construct. Φ is measured via Apple Watch HRV (SDNN) normalized against a 30-day rolling personal baseline — capturing regulatory flexibility, not population norms. IA is measured via a contactless heartbeat detection task adapted from Garfinkel et al. (2015), with randomized duration to prevent memorization effects. NC is NLP-scored free-text self-report measuring temporal and causal integration. F floors at 0.001 to prevent division by zero. The final score is normalized to a [0, 10] scale with state thresholds: FRAGMENTED (M &lt; 2.5), STABLE (2.5 ≤ M &lt; 5.0), RESILIENT (M ≥ 5.0).
                    </p>
                    <p>
                        The metric is a heuristic instrument in early-stage development — not a validated clinical tool, but a theoretically grounded framework for generating and testing hypotheses about cross-level coordination that prior instruments had not attempted to capture in integrated form. Empirical calibration of thresholds is a primary target of the planned N=20–40 validation trial.
                    </p>
                </div>

                <div className="divider" />

                <div className="section">
                    <div className="section-title">Origin of the Metric</div>
                    <p>
                        The M-RFT Metric was developed through an iterative process of theory-building, grounded in a longitudinal N=1 pilot study that employed a neurophenomenological framework <span className="cite">(Varela, 1996)</span>. By integrating the roles of researcher and subject, this approach allowed for the systematic documentation of physiological symptoms, reactive behavioral patterns, and cognitive-symbolic shifts — organized along a spatiotemporal timeline tracking changes in perceived internal coherence under varying conditions of stress and informational load.
                    </p>
                    <p>
                        A central observation was the apparent relationship between the structured organization of knowledge and shifts in internal regulatory dynamics. This led to the hypothesis that the acquisition of higher-order symbolic structure may function as a stabilizing constraint on lower-level biological and neural variability — the core mechanism the metric is designed to track.
                    </p>
                    <p>
                        The full technical specification, mathematical derivation, and research implications are in the full paper, available <a href="/contact" style={{ color: "#111", textDecoration: "underline" }}>upon request</a> until June 1. What follows is the experimental protocol and an illustrative case example.
                    </p>
                </div>

                <div className="divider" />

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
                            <div className="protocol-desc">Assessment of participants&apos; interpretations of internal states through semi-structured interviews, cross-referenced with physiological indices and measures of large-scale network connectivity.</div>
                        </div>
                    </div>
                    <div className="protocol-step">
                        <div className="protocol-num">2</div>
                        <div className="protocol-body">
                            <div className="protocol-title">Structured Knowledge Intervention</div>
                            <div className="protocol-desc">Introduction of organized, interdependent information layers targeting detected prediction errors. Explanatory frameworks linking somatic signals to narrative context are implemented to examine whether epistemic alignment increases and systemic regulatory burden correspondingly decreases.</div>
                        </div>
                    </div>
                    <div className="protocol-step">
                        <div className="protocol-num">3</div>
                        <div className="protocol-body">
                            <div className="protocol-title">Post-Intervention Assessment</div>
                            <div className="protocol-desc">Re-evaluation of neural, physiological, and phenomenological reports, testing whether increases in epistemic alignment are associated with corresponding changes in the M-RFT index across the three predicted outcomes.</div>
                        </div>
                    </div>
                </div>

                <div className="divider" />

                <div className="section">
                    <div className="section-title">Illustrative Case Example</div>
                    <p>
                        The following scenario clarifies how structured self-knowledge functions as an epistemic tool within the M-RFT framework.
                    </p>
                </div>

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
                    <div style={{ border: "1px solid #eee", background: "#fafafa" }}>
                        <div style={{ display: "grid", gridTemplateColumns: "4px 1fr" }}>
                            <div style={{ background: "#c0392b" }} />
                            <div style={{ padding: "18px 20px 6px" }}>
                                <div style={{ fontSize: 10, fontWeight: 600, color: "#555", textTransform: "uppercase", letterSpacing: "0.1em", fontFamily: "system-ui", marginBottom: 4 }}>Scenario A</div>
                                <div style={{ fontSize: 16, fontWeight: 500, color: "#111", fontFamily: "system-ui", marginBottom: 12 }}>Fragmentation — Lower Epistemic Synchrony</div>
                                <p style={{ fontSize: 14, lineHeight: 1.8, color: "#555", fontFamily: "system-ui", marginBottom: 12, textIndent: 0 }}>
                                    Upon caffeine intake, transient tachycardia is triggered. Lacking an accurate symbolic interpretation of the physiological trigger, the C3 layer fails to provide an adequate model for the C1 biological arousal. Large-scale neural systems associated with self-referential processing (C2) may interpret the signal as potentially threatening. Persistent ruminative thoughts emerge.
                                </p>
                                <p style={{ fontSize: 14, lineHeight: 1.8, color: "#555", fontFamily: "system-ui", marginBottom: 16, textIndent: 0 }}>
                                    Within the RFT framework, this state corresponds to reduced systemic integration, low synchronization between self-narrative and experiential reality, and elevated systemic noise.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div style={{ width: 1, height: 14, background: "#ddd", marginLeft: 26 }} />

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

                <div className="section">
                    <div className="section-title">Conclusion</div>
                    <p>
                        The M-RFT metric represents an attempt to move beyond the description of fragmentation toward its measurement. By treating Epistemic Synchrony (Kₑ) as a potentially manipulable variable — introduced at the symbolic layer and tracked across biological and neural indices — this framework opens a tractable research pathway into the dynamics of self-coherence under conditions of informational entropy.
                    </p>
                    <p>
                        Preliminary N=1 data from 321 sessions (Avanzo, 2026d) supports measurement feasibility and identifies a key pattern: M score and subjective coherence diverge (r = .186), suggesting the metric captures pre-reflective regulatory state not accessible to conscious self-report. This is a theoretically predicted finding, not a validity failure. It motivates the N=20–40 validation trial planned for 2027.
                    </p>
                </div>

                <div className="cta-block">
                    <a href="/contact" className="cta-link primary">Request full paper →</a>
                    <a href="/n-of-1" className="cta-link">N=1 Study →</a>
                    <a href="/" className="cta-link">← Back to Root Lab</a>
                </div>

                <section className="references">
                    <h3>References</h3>
                    <ol>
                        <li>Avanzo, B. (2026a). <em>Root Frequency Theory: An integrative framework for the continuity of lived experience.</em> Zenodo. <a href="https://doi.org/10.5281/zenodo.18905376" target="_blank" rel="noopener">https://doi.org/10.5281/zenodo.18905376</a></li>
                        <li>Avanzo, B. (2026b). <em>Multiscale integration of interoceptive signals and narrative scaffolding: Can systemic coherence be formally measured? (M-RFT).</em> Zenodo. https://doi.org/10.5281/zenodo.19423115 [Embargo lifts June 1, 2026]</li>
                        <li>Avanzo, B. (2026d). <em>Before fragmentation: A longitudinal N=1 study of pre-symptomatic coherence across physiological, interoceptive, and narrative layers.</em> Zenodo. https://doi.org/10.5281/zenodo.20261109 [Embargo lifts June 1, 2026]</li>
                        <li>Friston, K. (2010). The free-energy principle: A unified brain theory? <em>Nature Reviews Neuroscience, 11</em>(2), 127–138. <a href="https://doi.org/10.1038/nrn2787" target="_blank" rel="noopener">https://doi.org/10.1038/nrn2787</a></li>
                        <li>Garfinkel, S. N., Seth, A. K., Barrett, A. B., Suzuki, K., &amp; Critchley, H. D. (2015). Knowing your own heart: Distinguishing interoceptive accuracy from interoceptive awareness. <em>Biological Psychology, 104,</em> 65–74.</li>
                        <li>Tononi, G. (2004). An information integration theory of consciousness. <em>BMC Neuroscience, 5,</em> 42. <a href="https://doi.org/10.1186/1471-2202-5-42" target="_blank" rel="noopener">https://doi.org/10.1186/1471-2202-5-42</a></li>
                        <li>Varela, F. J. (1996). Neurophenomenology: A methodological remedy for the hard problem. <em>Journal of Consciousness Studies, 3</em>(4), 330–349.</li>
                    </ol>
                </section>

                <div style={{ marginTop: 40, paddingTop: 28, borderTop: "1px solid #eee", textAlign: "center" }}>
                    <a href="https://www.safecreative.org/work/2603074797166" rel="cc:license" target="_blank">
                        <img src="https://resources.safecreative.org/work/2603074797166/label/logo-300" style={{ border: 0, height: 24, opacity: 0.6 }} title="Safe Creative #2603074797166" />
                    </a>
                </div>

            </main>
        </>
    )
}