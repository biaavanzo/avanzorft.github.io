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
        .hero { margin-bottom: 56px; }
        .hero-label { font-size: 10px; font-weight: 600; color: #888; text-transform: uppercase; letter-spacing: 0.14em; font-family: system-ui; margin-bottom: 16px; }
        .hero-title { font-family: 'EB Garamond', Georgia, serif; font-size: clamp(32px, 5vw, 52px); font-weight: 500; color: #111; line-height: 1.15; margin-bottom: 16px; }
        .hero-subtitle { font-family: 'EB Garamond', Georgia, serif; font-size: clamp(16px, 2vw, 20px); font-weight: 400; color: #555; line-height: 1.6; margin-bottom: 24px; }
        .hero-meta { display: flex; gap: 24px; flex-wrap: wrap; align-items: center; font-size: 12px; color: #888; font-family: system-ui; }
        .hero-meta a { color: #888; text-decoration: none; border-bottom: 1px solid #ddd; }
        .hero-meta a:hover { color: #111; border-color: #111; }
        .abstract-block { background: #fafafa; border: 1px solid #eee; padding: 28px 32px; margin-bottom: 56px; }
        .abstract-label { font-size: 10px; font-weight: 600; color: #888; text-transform: uppercase; letter-spacing: 0.14em; font-family: system-ui; margin-bottom: 14px; }
        .abstract-text { font-size: 15px; line-height: 1.85; color: #444; font-family: system-ui; text-align: justify; hyphens: auto; }
        .section { margin-bottom: 56px; }
        .section-label { font-size: 10px; font-weight: 600; color: #888; text-transform: uppercase; letter-spacing: 0.14em; font-family: system-ui; margin-bottom: 12px; }
        .section-title { font-family: 'EB Garamond', Georgia, serif; font-size: clamp(22px, 3vw, 28px); font-weight: 500; color: #111; line-height: 1.2; margin-bottom: 20px; }
        .section p { font-size: 16px; line-height: 1.9; color: #444; font-family: system-ui; margin-bottom: 16px; text-align: justify; hyphens: auto; }
        .section p:last-child { margin-bottom: 0; }
        .figure { margin: 40px 0; }
        .figure-caption { font-size: 12px; color: #888; font-family: system-ui; line-height: 1.6; margin-top: 12px; font-style: italic; padding: 0 4px; }
        .figure-caption strong { color: #555; font-style: normal; }
        .figure-pair { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin: 40px 0; }
        .figure-pair .figure { margin: 0; }
        .section-divider { width: 100%; height: 1px; background: #eee; margin: 48px 0; }
        .key-claim { font-family: 'EB Garamond', Georgia, serif; font-size: clamp(18px, 2.4vw, 24px); font-weight: 400; color: #111; line-height: 1.65; border-left: 2px solid #ddd; padding-left: 24px; margin: 32px 0; font-style: italic; }
        .cta-block { border-top: 1px solid #eee; padding-top: 32px; margin-top: 56px; display: flex; gap: 12px; flex-wrap: wrap; align-items: center; }
        .cta-link { font-size: 13px; color: #111; text-decoration: none; border: 1px solid #ddd; padding: 9px 20px; font-family: system-ui; letter-spacing: 0.04em; transition: border-color 0.15s, background 0.15s; }
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
            <a href="/n-of-1">N=1 Study</a>
            <a href="/about-the-author">About the Author</a>
            <a href="/contact">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <a href="/" className="back">← Back</a>

        <div className="hero">
          <div className="hero-label">Published · May 2026</div>
          <h1 className="hero-title">Root Knowledge</h1>
          <p className="hero-subtitle">Embodied Knowledge as a Foundation for Coherent Human–AI Interaction</p>
          <div className="hero-meta">
            <span>Bianca Avanzo · Independent Researcher</span>
            <a href="https://doi.org/10.5281/zenodo.20060589" target="_blank" rel="noopener noreferrer">DOI: 10.5281/zenodo.20060589 ↗</a>
            <a href="https://zenodo.org/records/20060589" target="_blank" rel="noopener noreferrer">Full paper on Zenodo ↗</a>
          </div>
        </div>

        <div className="abstract-block">
          <div className="abstract-label">Abstract</div>
          <p className="abstract-text">
            Neuroscience increasingly explains the body, brain, and self through interoception, prediction, embodiment, and spatiotemporal accounts of psychopathology — yet it remains unclear how these layers interact to produce a coherent self-narrative. In parallel, artificial intelligence has advanced to large-scale generative systems capable of organizing information and producing precise outputs, but remains largely disconnected from how such outputs are integrated by the human system. This paper proposes a coherence-centered model of human-AI interaction in which AI is designed not only to generate faster or smarter output, but to scaffold information in ways that support meaning-making, self-narrative continuity, and integration across physical, biological, neural, and symbolic layers.
          </p>
        </div>

        <div className="section-divider" />

        <div className="section">
          <div className="section-label">The Starting Point</div>
          <h2 className="section-title">Intelligence begins in the body</h2>
          <p>Before modern computation, intelligence was already functioning as prediction through structure. Friston formalized this as a unifying principle — that perception, action, learning, and biological self-organization may all be understood as continuous prediction error minimization across hierarchical levels of the nervous system. Yet a central gap remains: how information becomes meaningful, integrated across time, or experienced as a coherent lived reality is not fully explained by output-level models.</p>
          <p>The body is not a passive receiver. Interoceptive signals — heartbeat, breath, visceral tension — actively shape emotion, decision-making, and self-awareness. The self is not a fixed internal object but a temporally organized process shaped by prediction, bodily regulation, and ongoing interaction with the environment.</p>

          <div className="figure">
            <svg width="100%" viewBox="0 0 680 420" role="img">
              <title>Root of Knowledge — layered framework of embodied knowing</title>
              <defs>
                <marker id="arr1" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M2 1L8 5L2 9" fill="none" stroke="context-stroke" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </marker>
              </defs>
              <rect x="40" y="320" width="600" height="72" rx="8" fill="#F1EFE8" stroke="#B4B2A9" strokeWidth="0.5" />
              <text x="340" y="348" textAnchor="middle" fontFamily="system-ui" fontSize="13" fontWeight="500" fill="#444441">Roots</text>
              <text x="340" y="366" textAnchor="middle" fontFamily="system-ui" fontSize="12" fill="#888780">Grounding · Core drives · Body wisdom · Foundation for growth</text>
              <rect x="40" y="210" width="600" height="80" rx="8" fill="#E1F5EE" stroke="#5DCAA5" strokeWidth="0.5" />
              <text x="340" y="240" textAnchor="middle" fontFamily="system-ui" fontSize="13" fontWeight="500" fill="#085041">Interoception</text>
              <text x="340" y="258" textAnchor="middle" fontFamily="system-ui" fontSize="12" fill="#0F6E56">Sensing the internal state of the body</text>
              <text x="340" y="276" textAnchor="middle" fontFamily="system-ui" fontSize="12" fill="#0F6E56">Heartbeat · Breath · Gut sensations · Muscle tension · Emotions</text>
              <rect x="40" y="50" width="600" height="128" rx="8" fill="#FAEEDA" stroke="#EF9F27" strokeWidth="0.5" />
              <text x="340" y="80" textAnchor="middle" fontFamily="system-ui" fontSize="13" fontWeight="500" fill="#633806">Limbic System — Emotional home</text>
              <text x="340" y="100" textAnchor="middle" fontFamily="system-ui" fontSize="12" fill="#854F0B">Filters the world through how you feel</text>
              <text x="340" y="120" textAnchor="middle" fontFamily="system-ui" fontSize="12" fill="#854F0B">Emotional coloring · Tags events as internally important</text>
              <text x="340" y="140" textAnchor="middle" fontFamily="system-ui" fontSize="12" fill="#854F0B">Stores charged emotional memories · Modulates motivation</text>
              <text x="340" y="160" textAnchor="middle" fontFamily="system-ui" fontSize="12" fill="#854F0B">Controls appetites and sleep cycles · Promotes bonding</text>
              <line x1="300" y1="210" x2="300" y2="194" stroke="#888780" strokeWidth="1" markerEnd="url(#arr1)" markerStart="url(#arr1)" fill="none" />
              <line x1="380" y1="210" x2="380" y2="194" stroke="#888780" strokeWidth="1" markerEnd="url(#arr1)" markerStart="url(#arr1)" fill="none" />
              <line x1="300" y1="320" x2="300" y2="304" stroke="#888780" strokeWidth="1" markerEnd="url(#arr1)" markerStart="url(#arr1)" fill="none" />
              <line x1="380" y1="320" x2="380" y2="304" stroke="#888780" strokeWidth="1" markerEnd="url(#arr1)" markerStart="url(#arr1)" fill="none" />
              <text x="24" y="360" textAnchor="middle" fontFamily="system-ui" fontSize="11" fill="#888780" transform="rotate(-90, 24, 360)">Anchors</text>
              <text x="24" y="255" textAnchor="middle" fontFamily="system-ui" fontSize="11" fill="#0F6E56" transform="rotate(-90, 24, 255)">Signals</text>
              <text x="24" y="115" textAnchor="middle" fontFamily="system-ui" fontSize="11" fill="#854F0B" transform="rotate(-90, 24, 115)">Filters</text>
            </svg>
            <p className="figure-caption"><strong>Figure 1.</strong> The Root of Knowledge: A Limbic-Interoceptive-Foundational Framework. A layered view of embodied knowing, moving from bodily grounding and interoceptive signaling to emotional filtering and meaning-making. Adapted from Avanzo (2026a).</p>
          </div>
        </div>

        <div className="section-divider" />

        <div className="section">
          <div className="section-label">The Problem</div>
          <h2 className="section-title">Fragmentation as cross-layer misalignment</h2>
          <p>Modern conditions amplify fragmentation. Information overload, digital saturation, sleep disruption, and chronic uncertainty place sustained pressure on regulatory systems. Research increasingly suggests that many mental health conditions involve disturbances in large-scale brain dynamics, interoceptive processing, temporal continuity, and self-modeling rather than isolated cognitive deficits.</p>
          <p>Fragmentation reflects dysregulation across multiple interacting layers of the human system — not a failure of thought, but a failure of coordination across body, neural dynamics, and self-narrative. The felt sense of continuity depends on successful cross-level coordination.</p>

          <div className="figure">
            <svg width="100%" viewBox="0 0 680 340" role="img">
              <title>Fragmented system cycle</title>
              <defs>
                <marker id="arr2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M2 1L8 5L2 9" fill="none" stroke="context-stroke" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </marker>
              </defs>
              <text x="40" y="32" fontFamily="system-ui" fontSize="11" fontWeight="500" fill="#888780" letterSpacing="0.1em">INTEGRATIVE INSTABILITY — FRAGMENTATION CASCADE</text>
              {[
                { y: 56, label: "Environmental", sub: "Allostatic load · Increasing stress", fill: "#FCEBEB", stroke: "#F09595", text: "#A32D2D", sub2: "#791F1F" },
                { y: 112, label: "Autonomic", sub: "Greater regulatory effort · HRV declines", fill: "#FAEEDA", stroke: "#EF9F27", text: "#633806", sub2: "#854F0B" },
                { y: 168, label: "Neural", sub: "↑ Prediction error · Difficulty filtering signals", fill: "#FAEEDA", stroke: "#EF9F27", text: "#633806", sub2: "#854F0B" },
                { y: 224, label: "Representational", sub: "↓ Coherent self-model · Kₑ degrades", fill: "#FAECE7", stroke: "#F0997B", text: "#712B13", sub2: "#993C1D" },
                { y: 280, label: "Experiential", sub: "Hypervigilance · Fragmented self-continuity", fill: "#FCEBEB", stroke: "#F09595", text: "#A32D2D", sub2: "#791F1F" },
              ].map((row, i) => (
                <g key={i}>
                  <circle cx="60" cy={row.y + 18} r="8" fill={row.fill} stroke={row.stroke} strokeWidth="0.5" />
                  <rect x="80" y={row.y} width="460" height="36" rx="6" fill={row.fill} stroke={row.stroke} strokeWidth="0.5" />
                  <text x="100" y={row.y + 14} fontFamily="system-ui" fontSize="13" fontWeight="500" fill={row.text}>{row.label}</text>
                  <text x="100" y={row.y + 28} fontFamily="system-ui" fontSize="11" fill={row.sub2}>{row.sub}</text>
                  {i < 4 && <line x1="60" y1={row.y + 26} x2="60" y2={row.y + 46} stroke="#D3D1C7" strokeWidth="1" markerEnd="url(#arr2)" fill="none" />}
                </g>
              ))}
              <path d="M 542 298 C 620 298, 640 56, 542 56" fill="none" stroke="#D3D1C7" strokeWidth="1" strokeDasharray="4 3" markerEnd="url(#arr2)" />
              <text x="648" y="182" fontFamily="system-ui" fontSize="10" fill="#888780" textAnchor="middle">Loop</text>
            </svg>
            <p className="figure-caption"><strong>Figure 2.</strong> Self-amplifying cycle of integrative instability. Sustained allostatic load propagates downward across regulatory levels, reducing autonomic flexibility, increasing prediction error, and degrading the coherent self-model. Adapted from Avanzo (2026a).</p>
          </div>
        </div>

        <div className="section-divider" />

        <div className="section">
          <div className="section-label">The Diagnosis</div>
          <h2 className="section-title">Current AI amplifies what it should reduce</h2>
          <p>Current human-AI interaction is largely organized around efficiency metrics: faster answers, task completion, personalization, and output optimization. These advances are valuable, yet they primarily treat intelligence as production rather than integration. AI systems are not typically designed to support how information is interpreted, embodied, and integrated into lived experience.</p>

          <div className="key-claim">
            When an already overloaded human system interacts with an AI architecture optimized primarily for engagement, the interaction may amplify fragmentation rather than support integration.
          </div>

          <div className="figure-pair">
            <div className="figure">
              <svg width="100%" viewBox="0 0 320 260" role="img">
                <title>Current model — epistemic misalignment</title>
                <defs>
                  <marker id="arr3" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M2 1L8 5L2 9" fill="none" stroke="context-stroke" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </marker>
                </defs>
                <text x="160" y="24" textAnchor="middle" fontFamily="system-ui" fontSize="11" fontWeight="500" fill="#A32D2D" letterSpacing="0.08em">CURRENT MODEL</text>
                <rect x="20" y="40" width="80" height="52" rx="6" fill="#FCEBEB" stroke="#F09595" strokeWidth="0.5" />
                <text x="60" y="62" textAnchor="middle" fontFamily="system-ui" fontSize="11" fontWeight="500" fill="#A32D2D">Interface</text>
                <text x="60" y="76" textAnchor="middle" fontFamily="system-ui" fontSize="10" fill="#791F1F">Human</text>
                <text x="60" y="88" textAnchor="middle" fontFamily="system-ui" fontSize="10" fill="#791F1F">noisy state</text>
                <line x1="100" y1="66" x2="118" y2="66" stroke="#D3D1C7" strokeWidth="1" markerEnd="url(#arr3)" fill="none" />
                <rect x="120" y="40" width="80" height="52" rx="6" fill="#FAEEDA" stroke="#EF9F27" strokeWidth="0.5" />
                <text x="160" y="60" textAnchor="middle" fontFamily="system-ui" fontSize="11" fontWeight="500" fill="#633806">AI Layer</text>
                <text x="160" y="74" textAnchor="middle" fontFamily="system-ui" fontSize="10" fill="#854F0B">engagement</text>
                <text x="160" y="86" textAnchor="middle" fontFamily="system-ui" fontSize="10" fill="#854F0B">optimized</text>
                <line x1="200" y1="66" x2="218" y2="66" stroke="#D3D1C7" strokeWidth="1" markerEnd="url(#arr3)" fill="none" />
                <rect x="220" y="40" width="80" height="52" rx="6" fill="#FCEBEB" stroke="#F09595" strokeWidth="0.5" />
                <text x="260" y="60" textAnchor="middle" fontFamily="system-ui" fontSize="11" fontWeight="500" fill="#A32D2D">Output</text>
                <text x="260" y="74" textAnchor="middle" fontFamily="system-ui" fontSize="10" fill="#791F1F">amplified</text>
                <text x="260" y="86" textAnchor="middle" fontFamily="system-ui" fontSize="10" fill="#791F1F">noise</text>
                <text x="160" y="130" textAnchor="middle" fontFamily="system-ui" fontSize="10" fill="#888780">No feedback. No learning about the human.</text>
                <text x="20" y="180" fontFamily="system-ui" fontSize="10" fill="#A32D2D">✗ Reinforces prediction errors</text>
                <text x="20" y="196" fontFamily="system-ui" fontSize="10" fill="#A32D2D">✗ Increases attentional load</text>
                <text x="20" y="212" fontFamily="system-ui" fontSize="10" fill="#A32D2D">✗ No coherence gate</text>
                <text x="20" y="228" fontFamily="system-ui" fontSize="10" fill="#A32D2D">✗ Stabilizes maladaptive patterns</text>
              </svg>
              <p className="figure-caption"><strong>Current model.</strong> Epistemic misalignment. No feedback loop between output and human state.</p>
            </div>

            <div className="figure">
              <svg width="100%" viewBox="0 0 320 260" role="img">
                <title>Root Knowledge model — coherence-centered architecture</title>
                <defs>
                  <marker id="arr4" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M2 1L8 5L2 9" fill="none" stroke="context-stroke" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </marker>
                </defs>
                <text x="160" y="24" textAnchor="middle" fontFamily="system-ui" fontSize="11" fontWeight="500" fill="#085041" letterSpacing="0.08em">ROOT KNOWLEDGE MODEL</text>
                <rect x="20" y="40" width="80" height="52" rx="6" fill="#E1F5EE" stroke="#5DCAA5" strokeWidth="0.5" />
                <text x="60" y="62" textAnchor="middle" fontFamily="system-ui" fontSize="11" fontWeight="500" fill="#085041">Interface</text>
                <text x="60" y="76" textAnchor="middle" fontFamily="system-ui" fontSize="10" fill="#0F6E56">Human</text>
                <text x="60" y="88" textAnchor="middle" fontFamily="system-ui" fontSize="10" fill="#0F6E56">current state</text>
                <line x1="100" y1="66" x2="118" y2="66" stroke="#5DCAA5" strokeWidth="1" markerEnd="url(#arr4)" fill="none" />
                <rect x="120" y="40" width="80" height="52" rx="6" fill="#E1F5EE" stroke="#1D9E75" strokeWidth="1" />
                <text x="160" y="60" textAnchor="middle" fontFamily="system-ui" fontSize="11" fontWeight="500" fill="#085041">Integration</text>
                <text x="160" y="74" textAnchor="middle" fontFamily="system-ui" fontSize="10" fill="#0F6E56">epistemic</text>
                <text x="160" y="86" textAnchor="middle" fontFamily="system-ui" fontSize="10" fill="#0F6E56">alignment</text>
                <line x1="200" y1="66" x2="218" y2="66" stroke="#5DCAA5" strokeWidth="1" markerEnd="url(#arr4)" fill="none" />
                <rect x="220" y="40" width="80" height="52" rx="6" fill="#E1F5EE" stroke="#5DCAA5" strokeWidth="0.5" />
                <text x="260" y="60" textAnchor="middle" fontFamily="system-ui" fontSize="11" fontWeight="500" fill="#085041">Output</text>
                <text x="260" y="74" textAnchor="middle" fontFamily="system-ui" fontSize="10" fill="#0F6E56">coherent</text>
                <text x="260" y="86" textAnchor="middle" fontFamily="system-ui" fontSize="10" fill="#0F6E56">meaningful</text>
                <path d="M 260 92 C 260 130, 60 130, 60 92" fill="none" stroke="#9FE1CB" strokeWidth="1" strokeDasharray="3 3" markerEnd="url(#arr4)" />
                <text x="160" y="148" textAnchor="middle" fontFamily="system-ui" fontSize="10" fill="#0F6E56">Feedback loop active</text>
                <text x="20" y="180" fontFamily="system-ui" fontSize="10" fill="#085041">✓ Reduces prediction error</text>
                <text x="20" y="196" fontFamily="system-ui" fontSize="10" fill="#085041">✓ Supports narrative continuity</text>
                <text x="20" y="212" fontFamily="system-ui" fontSize="10" fill="#085041">✓ Calibrated to coherence state</text>
                <text x="20" y="228" fontFamily="system-ui" fontSize="10" fill="#085041">✓ Decreases informational waste</text>
              </svg>
              <p className="figure-caption"><strong>Root Knowledge model.</strong> Coherence-centered architecture. Integration layer prioritizes epistemic alignment over engagement.</p>
            </div>
          </div>
        </div>

        <div className="section-divider" />

        <div className="section">
          <div className="section-label">The Proposal</div>
          <h2 className="section-title">AI as epistemic scaffold, not output generator</h2>
          <p>This paper introduces an intermediate integration layer that functions as an informational scaffold between the human user and large-scale data systems. Rather than optimizing primarily for engagement, this layer prioritizes epistemic alignment: the fit between incoming information, contextual relevance, and the user&apos;s current goals, state, and meaning structures.</p>
          <p>In predictive processing terms, such a system attempts to reduce unnecessary uncertainty at the level of interaction by organizing information in ways that are more interpretable, relevant, and temporally sequenced for the human user. When the integration layer is designed for coherence rather than engagement, prediction error decreases — not only in machine outputs, but in the cognitive load placed on the human receiving them.</p>
          <div className="key-claim">
            The next frontier of human-AI interaction may not be faster output, but deeper integration. The call is not simply to build smarter machines, but to design tools that help humans become more coherent, more aware, and more capable of transforming information into meaning.
          </div>
        </div>

        <div className="section-divider" />

        <div className="section">
          <div className="section-label">Limitations</div>
          <h2 className="section-title">What this work does not claim</h2>
          <p>This framework remains in its early conceptual stages. The theoretical architecture and design principles proposed here have not yet been empirically validated, and claims about effectiveness await systematic testing. What is offered here is not a finished system, but a structured proposal: grounded in established research, internally consistent, and designed to generate testable predictions.</p>
          <p>A companion paper introduces the M-RFT metric — a preliminary mathematical index designed to estimate coherence across layers of the human system. The N=1 longitudinal study using the Root Extension application provides preliminary feasibility data. Both are embargoed until June 1, 2026 and available upon request for academic or research purposes. Full empirical validation requires multimodal data collection combining physiological, neuroimaging, and narrative measures — the target of the planned N=20–40 validation trial.</p>
        </div>

        <div className="cta-block">
          <a href="https://doi.org/10.5281/zenodo.20060589" target="_blank" rel="noopener noreferrer" className="cta-link primary">Read full paper on Zenodo ↗</a>
          <a href="/metric" className="cta-link">M-RFT Metric →</a>
          <a href="/n-of-1" className="cta-link">N=1 Study →</a>
          <a href="/" className="cta-link">← Back to Root Lab</a>
        </div>

      </main>
    </>
  )
}