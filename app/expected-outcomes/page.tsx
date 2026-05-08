'use client'

import React from "react"

export default function RootKnowledge() {
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
          max-width: 760px; margin: 0 auto;
        }
        .back { font-size: 13px; color: #999; text-decoration: none; display: inline-block; margin-bottom: 48px; }
        .back:hover { color: #111; }

        /* HERO */
        .hero { margin-bottom: 56px; }
        .hero-label {
          font-size: 10px; font-weight: 600; color: #888;
          text-transform: uppercase; letter-spacing: 0.14em;
          font-family: system-ui; margin-bottom: 16px;
        }
        .hero-title {
          font-family: 'EB Garamond', Georgia, serif;
          font-size: clamp(32px, 5vw, 52px);
          font-weight: 500; color: #111; line-height: 1.15;
          margin-bottom: 16px;
        }
        .hero-subtitle {
          font-family: 'EB Garamond', Georgia, serif;
          font-size: clamp(16px, 2vw, 20px);
          font-weight: 400; color: #555; line-height: 1.6;
          margin-bottom: 24px;
        }
        .hero-meta {
          display: flex; gap: 24px; flex-wrap: wrap; align-items: center;
          font-size: 12px; color: #888; font-family: system-ui;
        }
        .hero-meta a { color: #888; text-decoration: none; border-bottom: 1px solid #ddd; }
        .hero-meta a:hover { color: #111; border-color: #111; }
        .hero-divider { width: 100%; height: 1px; background: #eee; margin: 40px 0; }

        /* ABSTRACT */
        .abstract-block {
          background: #fafafa; border: 1px solid #eee;
          padding: 28px 32px; margin-bottom: 56px;
        }
        .abstract-label {
          font-size: 10px; font-weight: 600; color: #888;
          text-transform: uppercase; letter-spacing: 0.14em;
          font-family: system-ui; margin-bottom: 14px;
        }
        .abstract-text {
          font-size: 15px; line-height: 1.85; color: #444;
          font-family: system-ui; text-align: justify; hyphens: auto;
        }

        /* SECTIONS */
        .section { margin-bottom: 56px; }
        .section-label {
          font-size: 10px; font-weight: 600; color: #888;
          text-transform: uppercase; letter-spacing: 0.14em;
          font-family: system-ui; margin-bottom: 12px;
        }
        .section-title {
          font-family: 'EB Garamond', Georgia, serif;
          font-size: clamp(22px, 3vw, 28px);
          font-weight: 500; color: #111; line-height: 1.2;
          margin-bottom: 20px;
        }
        .section p {
          font-size: 16px; line-height: 1.9; color: #444;
          font-family: system-ui; margin-bottom: 16px;
          text-align: justify; hyphens: auto;
        }
        .section p:last-child { margin-bottom: 0; }

        /* FIGURES */
        .figure { margin: 40px 0; }
        .figure img {
          width: 100%; display: block;
          border: 1px solid #eee;
        }
        .figure-caption {
          font-size: 12px; color: #888; font-family: system-ui;
          line-height: 1.6; margin-top: 10px; font-style: italic;
          padding: 0 4px;
        }
        .figure-caption strong { color: #555; font-style: normal; }

        /* FIGURE PAIR */
        .figure-pair {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 12px; margin: 40px 0;
        }
        .figure-pair .figure { margin: 0; }

        /* DIVIDER */
        .section-divider { width: 100%; height: 1px; background: #eee; margin: 48px 0; }

        /* KEY CLAIM */
        .key-claim {
          font-family: 'EB Garamond', Georgia, serif;
          font-size: clamp(18px, 2.4vw, 24px);
          font-weight: 400; color: #111; line-height: 1.65;
          border-left: 2px solid #ddd; padding-left: 24px;
          margin: 32px 0; font-style: italic;
        }

        /* CTA */
        .cta-block {
          border-top: 1px solid #eee; padding-top: 32px; margin-top: 56px;
          display: flex; gap: 12px; flex-wrap: wrap; align-items: center;
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

        @media (max-width: 640px) {
          .header-inner { flex-direction: column; gap: 10px; padding: 12px 0; }
          main { padding-top: 80px; }
          .figure-pair { grid-template-columns: 1fr; }
          .abstract-block { padding: 20px; }
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
        <a href="/" className="back">← Back</a>

        {/* HERO */}
        <div className="hero">
          <div className="hero-label">Published · May 2026</div>
          <h1 className="hero-title">Root Knowledge</h1>
          <p className="hero-subtitle">
            Embodied Knowledge as a Foundation for Coherent Human–AI Interaction
          </p>
          <div className="hero-meta">
            <span>Bianca Avanzo · Independent Researcher</span>
            <a href="https://doi.org/10.5281/zenodo.20060589" target="_blank" rel="noopener noreferrer">
              DOI: 10.5281/zenodo.20060589 ↗
            </a>
            <a href="https://zenodo.org/records/20060589" target="_blank" rel="noopener noreferrer">
              Read full paper on Zenodo ↗
            </a>
          </div>
        </div>

        {/* ABSTRACT */}
        <div className="abstract-block">
          <div className="abstract-label">Abstract</div>
          <p className="abstract-text">
            Neuroscience increasingly explains the body, brain, and self through interoception, prediction, embodiment, and spatiotemporal accounts of psychopathology — yet it remains unclear how these layers interact to produce a coherent self-narrative. In parallel, artificial intelligence has advanced to large-scale generative systems capable of organizing information and producing precise outputs, but remains largely disconnected from how such outputs are integrated by the human system. This paper proposes a coherence-centered model of human-AI interaction in which AI is designed not only to generate faster or smarter output, but to scaffold information in ways that support meaning-making, self-narrative continuity, and integration across physical, biological, neural, and symbolic layers.
          </p>
        </div>

        <div className="section-divider" />

        {/* SECTION 1 */}
        <div className="section">
          <div className="section-label">The Starting Point</div>
          <h2 className="section-title">Intelligence begins in the body</h2>
          <p>
            Before modern computation, intelligence was already functioning as prediction through structure. Humans observed recurring patterns in the world and translated them into symbolic systems: numbers, geometry, calendars, maps, music, written language. Friston later formalized this as a unifying principle — that perception, action, learning, and biological self-organization may all be understood as continuous prediction error minimization across hierarchical levels of the nervous system.
          </p>
          <p>
            Yet a central gap remains: how information becomes meaningful, integrated across time, or experienced as a coherent lived reality is not fully explained by output-level models. The body is not a passive receiver. Interoceptive signals — heartbeat, breath, visceral tension — actively shape emotion, decision-making, and self-awareness. The self is not a fixed internal object but a temporally organized process shaped by prediction, bodily regulation, and ongoing interaction with the environment.
          </p>

          <div className="figure">
            <img src="/root-of-knowledge.png" alt="Root of Knowledge — A Limbic-Interoceptive-Foundational Framework" />
            <p className="figure-caption">
              <strong>Figure 1.</strong> The Root of Knowledge: A Limbic-Interoceptive-Foundational Framework. A layered view of embodied knowing, moving from bodily grounding and interoceptive signaling to emotional filtering and meaning-making. Adapted from original artwork by Avanzo (2026).
            </p>
          </div>
        </div>

        <div className="section-divider" />

        {/* SECTION 2 */}
        <div className="section">
          <div className="section-label">The Problem</div>
          <h2 className="section-title">Fragmentation as cross-layer misalignment</h2>
          <p>
            Modern conditions amplify fragmentation. Information overload, digital saturation, sleep disruption, and chronic uncertainty place sustained pressure on regulatory systems. Research increasingly suggests that many mental health conditions involve disturbances in large-scale brain dynamics, interoceptive processing, temporal continuity, and self-modeling rather than isolated cognitive deficits.
          </p>
          <p>
            From this perspective, fragmentation reflects dysregulation across multiple interacting layers of the human system — not a failure of thought, but a failure of coordination across body, neural dynamics, and self-narrative. The felt sense of "me" depends less on static identity and more on successful cross-level coordination.
          </p>

          <div className="figure">
            <img src="/fragmented-brain.jpg" alt="Sleep as a System Update — Fragmented Brain Before Restoration" />
            <p className="figure-caption">
              <strong>Figure 2.</strong> Sleep as a System Update: The Fragmented Brain Before Restoration. A fragmented state in which salience processing becomes threat-biased, executive control is strained, default mode activity becomes ruminative, and interoceptive signals are harder to interpret. Adapted from original artwork by Avanzo (2026).
            </p>
          </div>
        </div>

        <div className="section-divider" />

        {/* SECTION 3 */}
        <div className="section">
          <div className="section-label">The Diagnosis</div>
          <h2 className="section-title">Current AI amplifies what it should reduce</h2>
          <p>
            Current human-AI interaction is largely organized around efficiency metrics: faster answers, task completion, personalization, and output optimization. These advances are valuable, yet they primarily treat intelligence as production rather than integration. AI systems are not typically designed to support how information is interpreted, embodied, and integrated into lived experience.
          </p>

          <div className="key-claim">
            When an already overloaded human system interacts with an AI architecture optimized primarily for engagement, the interaction may amplify fragmentation rather than support integration.
          </div>

          <p>
            Biased training data, opaque algorithmic processes, and limited access to embodied or contextual meaning can produce outputs that reinforce existing prediction errors, stabilize maladaptive patterns, or increase attentional load without resolution. The system lacks a meaningful feedback loop through which human state, context, and integration needs can inform the structure of the output.
          </p>

          <div className="figure-pair">
            <div className="figure">
              <img src="/root-knowledge-fragmented.png" alt="Current Human-AI Interaction — Epistemic Misalignment" />
              <p className="figure-caption">
                <strong>Current model.</strong> Epistemic misalignment and amplified fragmentation. No feedback loop. No learning about the human receiving the output.
              </p>
            </div>
            <div className="figure">
              <img src="/root-knowledge-coherent.png" alt="Root Knowledge Architecture — Coherence-Centered Human-AI" />
              <p className="figure-caption">
                <strong>Proposed model.</strong> Root Knowledge architecture. An intermediate integration layer that prioritizes epistemic alignment over engagement.
              </p>
            </div>
          </div>
        </div>

        <div className="section-divider" />

        {/* SECTION 4 */}
        <div className="section">
          <div className="section-label">The Proposal</div>
          <h2 className="section-title">AI as epistemic scaffold, not output generator</h2>
          <p>
            This paper introduces an intermediate integration layer that functions as an informational scaffold between the human user and large-scale data systems. Rather than relying on continuous extraction of personal data or optimizing primarily for engagement, this layer prioritizes epistemic alignment: the fit between incoming information, contextual relevance, and the user&apos;s current goals, state, and meaning structures.
          </p>
          <p>
            In predictive processing terms, such a system attempts to reduce unnecessary uncertainty at the level of interaction by organizing information in ways that are more interpretable, relevant, and temporally sequenced for the human user. When the integration layer is designed for coherence rather than engagement, prediction error decreases — not only in machine outputs, but in the cognitive load placed on the human receiving them.
          </p>
          <p>
            Acting as an external scaffold, the system may help users recognize patterns, clarify goals, and transform fragmented inputs into coherent action — not by replacing intelligence, but by supporting the organization of intelligence already present within the human system.
          </p>

          <div className="key-claim">
            The next frontier of human-AI interaction may not be faster output, but deeper integration. The call is not simply to build smarter machines, but to design tools that help humans become more coherent, more aware, and more capable of transforming information into meaning.
          </div>
        </div>

        <div className="section-divider" />

        {/* SECTION 5 */}
        <div className="section">
          <div className="section-label">Limitations</div>
          <h2 className="section-title">What this work does not claim</h2>
          <p>
            This framework remains in its early conceptual stages. The theoretical architecture and design principles proposed here have not yet been empirically validated, and claims about effectiveness — in reducing prediction error, supporting coherence, or improving mental health outcomes — await systematic testing. What is offered here is not a finished system, but a structured proposal: grounded in established research, internally consistent, and designed to generate testable predictions.
          </p>
          <p>
            A companion paper introduces the M-RFT metric — a preliminary mathematical index designed to estimate coherence across layers of the human system. That manuscript is currently under embargo and available upon request for academic or research purposes. Empirical validation requires multimodal data collection combining physiological, neuroimaging, and narrative measures.
          </p>
        </div>

        {/* CTA */}
        <div className="cta-block">
          <a href="https://doi.org/10.5281/zenodo.20060589" target="_blank" rel="noopener noreferrer" className="cta-link primary">
            Read full paper on Zenodo ↗
          </a>
          <a href="/contact" className="cta-link">
            Request M-RFT metric →
          </a>
          <a href="/" className="cta-link">
            ← Back to Root Lab
          </a>
        </div>

      </main>
    </>
  )
}