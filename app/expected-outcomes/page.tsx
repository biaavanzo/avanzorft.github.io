'use client'

import React, { useState } from "react"

export default function ExpectedOutcomes() {
    const [open, setOpen] = useState<number | null>(null)
    const toggle = (i: number) => setOpen(open === i ? null : i)

    const implications = [
        {
            num: "01",
            area: "Clinical Studies of Human Experience",
            title: "From symptom clusters to systemic signatures",
            body: "Contemporary psychiatric diagnosis relies predominantly on symptom inventories — categorical descriptions of behavioral and phenomenological states. A validated M-RFT could offer a complementary dimensional measure that characterizes mental states by the degree of cross-scale coherence underlying them. Conditions currently classified as distinct disorders may share measurable reductions in systemic integration that precede or accompany symptom expression. This would support longitudinal tracking alongside existing diagnostic frameworks, rather than replacing them.",
        },
        {
            num: "02",
            area: "Psychopathology Research",
            title: "A transdiagnostic variable worth investigating",
            body: "Neuroimaging consistently demonstrates that psychiatric conditions manifest as distributed, overlapping alterations in large-scale network dynamics. M-RFT proposes that these complex patterns could be signatures of a singular underlying mechanism: variations in cross-scale alignment. If empirically supported, this positioning would establish M-RFT as a metric capable of tracking the integrity of mental architecture regardless of the specific clinical label. While the framework provides the theoretical roadmap, systematic investigation is now required to determine if this variable carries universal predictive value or functions within specific population contexts. The hypothesis is established; empirical validation is the necessary next step.",
        },
        {
            num: "03",
            area: "Preventive Mental Health",
            title: "Detecting reduced coherence before clinical threshold",
            body: "If M-RFT is sensitive to early reductions in systemic alignment — before experiential fragmentation becomes clinically significant — it may be useful as a monitoring tool in preventive contexts. The introduction of Kₑ as a manipulable variable suggests that structured epistemic scaffolding could be deployed in response to measurable changes rather than only in response to crisis. Whether this sensitivity is achievable at practical resolution, and in what populations, is a question the proposed experimental protocol is designed to address.",
        },
        {
            num: "04",
            area: "Individual Coherence & Collective Noise",
            title: "A speculative extension worth naming",
            body: "The C0–C4 architecture describes a nested system in which each layer operates within broader environmental and informational constraints. From this perspective, environments characterized by high informational entropy, symbolic instability, or narrative fragmentation act as external sources of noise, placing increased regulatory demands on the individuals within them. Over time, such conditions may strain shared meaning-making processes in ways that parallel the fragmentation dynamics observed at the individual level. This suggests that the stability of a person’s internal alignment is inherently tied to the ‘signal-to-noise’ ratio of their broader social and narrative environment. This proposition remains explicitly hypothetical, included here as a logical extension of the framework’s architecture rather than an empirical claim. Determining whether patterns of individual coherence scale to collective systems would require dedicated multi-level methodologies and a broader empirical scope than the current project.",
        },
    ]

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

        .divider { width: 100%; height: 1px; background: #eee; margin: 48px 0; }

        /* IMPLICATIONS */
        .impl-label {
          font-size: 13px; font-weight: 600; color: #555;
          text-transform: uppercase; letter-spacing: 0.12em;
          font-family: system-ui; margin-bottom: 24px;
        }
        .impl-list { display: flex; flex-direction: column; gap: 2px; margin-bottom: 52px; }

        .impl-row {
          border: 1px solid #eee; background: #fafafa; cursor: pointer;
          transition: background 0.15s, border-color 0.15s; overflow: hidden;
        }
        .impl-row:hover { background: #f4f4f4; border-color: #ddd; }

        .impl-header {
          display: grid; grid-template-columns: 52px 1fr 24px; align-items: stretch;
        }
        .impl-num {
          background: #111; color: #fff;
          display: flex; align-items: center; justify-content: center;
          font-family: 'EB Garamond', Georgia, serif;
          font-size: 13px; min-height: 72px; flex-shrink: 0;
        }
        .impl-body { padding: 16px 20px; }
        .impl-area {
          font-size: 10px; font-weight: 600; color: #555;
          text-transform: uppercase; letter-spacing: 0.1em;
          font-family: system-ui; margin-bottom: 4px;
        }
        .impl-title {
          font-size: 14px; font-weight: 500; color: #111; font-family: system-ui;
        }
        .impl-chevron {
          display: flex; align-items: center; justify-content: center;
          padding-right: 16px; color: #666; font-size: 12px;
          transition: transform 0.2s; user-select: none;
        }
        .impl-chevron.open { transform: rotate(180deg); }

        .impl-expansion {
          padding: 16px 20px 20px 72px;
          font-size: 14px; line-height: 1.85; color: #555;
          font-family: system-ui; text-align: justify; hyphens: auto;
          border-top: 1px solid #eee;
          animation: fadeIn 0.2s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-4px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* CONTACT */
        .contact-block {
          border-top: 1px solid #eee; padding-top: 28px; text-align: center;
        }
        .contact-label {
          font-size: 12px; color: #555; font-family: system-ui;
          text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 12px;
        }
        .contact-text {
          font-size: 14px; color: #555; font-family: system-ui; line-height: 1.7;
        }
        .contact-text a { color: #111; text-decoration: underline; }

        @media (max-width: 640px) {
          .page-nav-links { display: none; }
          .impl-expansion { padding-left: 20px; }
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
                        <a href="/research-plan">M-RFT Coherence Metric</a>
                        <a href="/expected-outcomes" className="active">Expected Outcomes</a>
                    </div>
                </div>

                <h1 className="page-title">Expected Outcomes</h1>
                <p className="page-subtitle">Potential Implications of a Validated M-RFT Metric</p>

                {/* FRAMING */}
                <div className="section">
                    <div className="section-title">A note on scope</div>
                    <p>
                        The following outcomes represent the theoretical and practical utility of a validated M-RFT metric. Such validation would provide a formal language for measuring systemic integration. The value of this work lies in its ability to transform qualitative phenomenological shifts into a quantifiable variable, opening new avenues for understanding how mental states maintain—or lose—their cross-scale coherence.
                    </p>
                </div>

                <div className="divider" />

                {/* IMPLICATIONS */}
                <div className="impl-label">
                    Potential research implications <span style={{ fontWeight: 400, fontSize: 11, letterSpacing: "0.04em" }}>(click to expand)</span>
                </div>
                <div className="impl-list">
                    {implications.map((item, i) => {
                        const isOpen = open === i
                        return (
                            <React.Fragment key={i}>
                                <div
                                    className={`impl-row${isOpen ? " open" : ""}`}
                                    onClick={() => toggle(i)}
                                >
                                    <div className="impl-header">
                                        <div className="impl-num">{item.num}</div>
                                        <div className="impl-body">
                                            <div className="impl-area">{item.area}</div>
                                            <div className="impl-title">{item.title}</div>
                                        </div>
                                        <div className={`impl-chevron${isOpen ? " open" : ""}`}>▾</div>
                                    </div>
                                    {isOpen && (
                                        <div className="impl-expansion">{item.body}</div>
                                    )}
                                </div>
                                {i < implications.length - 1 && (
                                    <div style={{ width: 1, height: 14, background: "#ddd", marginLeft: 26 }} />
                                )}
                            </React.Fragment>
                        )
                    })}
                </div>

                <div className="divider" />

                {/* CLOSING */}
                <div className="section">
                    <div className="section-title">Invitation for collaboration</div>
                    <p>
                        Further empirical investigation and interdisciplinary collaboration will be necessary to evaluate the scope, limitations, and potential applicability of this framework. Whether M-RFT can function as a reliable measure of cross-scale alignment — and whether variations in that alignment predict patterns of experiential disruption — are questions this project is not yet in a position to answer. They are, however, questions that are worth asking.
                    </p>
                    <p>
                        Researchers interested in the full technical specification, methodological details, or collaborative exploration are welcome to reach out directly.
                    </p>
                </div>

                <div className="contact-block">
                    <div className="contact-label">Collaboration & Inquiry</div>
                    <p className="contact-text">
                        Interested in collaborating or learning more about the project?{" "}
                        <a href="/contact">Get in touch →</a>
                    </p>
                </div>

            </main>
        </>
    )
}