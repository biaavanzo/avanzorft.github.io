'use client'

import React from "react"

export default function AboutTheAuthor() {
  return (
    <>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;500&display=swap" />

      <header style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, background: "#fff", borderBottom: "1px solid #eee", padding: "0 32px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "center", gap: 40, padding: "14px 0" }}>
          <a href="/" style={{ fontSize: 16, fontWeight: 500, color: "#111", fontFamily: "system-ui", whiteSpace: "nowrap", textDecoration: "none" }}>Root Lab</a>
          <nav style={{ display: "flex", gap: 24, alignItems: "center" }}>
            <a href="/research-overview" style={{ fontSize: 15, color: "#555", textDecoration: "none", fontFamily: "system-ui", whiteSpace: "nowrap" }}>Research Overview</a>
            <a href="/n-of-1" style={{ fontSize: 15, color: "#555", textDecoration: "none", fontFamily: "system-ui", whiteSpace: "nowrap" }}>N=1 Study</a>
            <a href="/about-the-author" style={{ fontSize: 15, color: "#111", fontWeight: 500, textDecoration: "none", fontFamily: "system-ui", whiteSpace: "nowrap" }}>About the Author</a>
            <a href="/contact" style={{ fontSize: 15, color: "#555", textDecoration: "none", fontFamily: "system-ui", whiteSpace: "nowrap" }}>Contact</a>
            <a href="https://www.linkedin.com/in/bianca-avanzo-b1b5231a9" target="_blank" rel="noopener noreferrer" style={{ color: "#555", display: "flex", alignItems: "center" }} aria-label="LinkedIn">
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

      <main style={{ paddingTop: 100, paddingBottom: 100, paddingLeft: 24, paddingRight: 24, fontFamily: "system-ui", maxWidth: 680, margin: "0 auto" }}>
        <a href="/" style={{ display: "inline-block", fontSize: 13, color: "#777", textDecoration: "none", marginBottom: 48, letterSpacing: "0.02em" }}>← Back</a>

        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <div style={{ width: 88, height: 88, borderRadius: "50%", overflow: "hidden", margin: "0 auto 20px", border: "1px solid #ddd" }}>
            <img src="/bianca.jpg" alt="Bianca Avanzo" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", display: "block", pointerEvents: "none" as const }} />
          </div>
          <h1 style={{ fontFamily: "'EB Garamond', Georgia, serif", fontSize: "clamp(28px, 5vw, 44px)", fontWeight: 500, color: "#111", marginBottom: 8, lineHeight: 1.2 }}>
            Bianca Avanzo
          </h1>
          <p style={{ fontSize: 13, color: "#888", letterSpacing: "0.1em", textTransform: "uppercase" as const, margin: "0 0 6px" }}>
            Independent Researcher
          </p>
          <p style={{ fontSize: 13, color: "#bbb", letterSpacing: "0.04em", margin: 0 }}>
            avanzorft.com
          </p>
        </div>

        <div style={{ marginBottom: 48 }}>
          <p style={{ fontSize: 17, lineHeight: 1.9, color: "#444", marginBottom: 16, textAlign: "justify" as const, hyphens: "auto" as const }}>
            Root Frequency Theory did not begin as a theory. It began as a practice — sustained neurophenomenological observation, longitudinal self-tracking, and deep inner work, starting in December 2024. The observation came first. The framework followed the pattern.
          </p>
          <p style={{ fontSize: 17, lineHeight: 1.9, color: "#444", marginBottom: 16, textAlign: "justify" as const, hyphens: "auto" as const }}>
            The central question that emerged: how does a coherent sense of self maintain itself across time, and what exactly fails when it doesn&apos;t? Not at the level of diagnosis — at the level of mechanism, across biological, neural, and symbolic scales simultaneously.
          </p>
          <p style={{ fontSize: 17, lineHeight: 1.9, color: "#444", textAlign: "justify" as const, hyphens: "auto" as const }}>
            That question produced four papers, a coherence metric, and an iOS app built to measure what no existing tool was measuring: cross-scale alignment in real time, in ecological conditions, outside the scanner.
          </p>
        </div>

        <div style={{ width: "100%", height: 1, background: "#eee", margin: "0 0 48px" }} />

        <div style={{ marginBottom: 48 }}>
          <div style={{ fontSize: 10, fontWeight: 600, color: "#888", textTransform: "uppercase" as const, letterSpacing: "0.14em", marginBottom: 20 }}>Theoretical grounding</div>
          <div style={{ display: "flex", flexDirection: "column" as const, gap: 14 }}>
            {[
              { label: "Free Energy Principle", text: "Friston's active inference framework provides the mechanistic backbone — fragmentation as increased variational free energy, coherence as prediction error minimization across interoceptive hierarchies." },
              { label: "Interoceptive predictive coding", text: "Garfinkel & Seth's work on interoceptive accuracy and awareness grounds the measurement approach. The heartbeat detection task is drawn directly from Garfinkel et al. (2015)." },
              { label: "Integrated Information Theory", text: "Tononi's Φ as a formal proxy for cross-scale integration, adapted as the physiological coherence component of the metric." },
              { label: "Spatiotemporal neuroscience", text: "Northoff's work on self-related processing and large-scale network dynamics — particularly the role of the DMN in maintaining narrative continuity across time." },
            ].map(({ label, text }) => (
              <div key={label} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                <span style={{ color: "#ccc", flexShrink: 0, paddingTop: 6, fontSize: 14 }}>·</span>
                <p style={{ margin: 0, fontSize: 15, lineHeight: 1.85, color: "#444" }}>
                  <span style={{ fontWeight: 500, color: "#111" }}>{label} — </span>{text}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ width: "100%", height: 1, background: "#eee", margin: "0 0 48px" }} />

        <div style={{ marginBottom: 48 }}>
          <div style={{ fontSize: 10, fontWeight: 600, color: "#888", textTransform: "uppercase" as const, letterSpacing: "0.14em", marginBottom: 20 }}>Current status</div>
          <div style={{ display: "flex", flexDirection: "column" as const }}>
            {[
              { date: "Published", text: "Root Frequency Theory — Zenodo, February 2026. DOI: 10.5281/zenodo.18905376." },
              { date: "Published", text: "Root Knowledge — Embodied knowledge as a foundation for coherent human–AI interaction. Zenodo, May 2026. DOI: 10.5281/zenodo.20060589." },
              { date: "Embargo Jun 1", text: "M-RFT Coherence Metric — registered preprint. DOI: 10.5281/zenodo.19423115. Available to academic collaborators upon request." },
              { date: "Embargo Jun 1", text: "Before Fragmentation — N=1 longitudinal study. DOI: 10.5281/zenodo.20261109. 321 sessions, April–May 2026." },
              { date: "Targeting", text: "PhD — interoception, computational psychiatry, or neuroscience-AI. Applications in progress." },
            ].map(({ date, text }) => (
              <div key={text} style={{ display: "flex", gap: 16, alignItems: "flex-start", padding: "12px 0", borderBottom: "1px solid #f0f0f0" }}>
                <span style={{ fontSize: 10, fontWeight: 600, color: "#aaa", letterSpacing: "0.08em", textTransform: "uppercase" as const, flexShrink: 0, paddingTop: 3, minWidth: 88 }}>{date}</span>
                <span style={{ fontSize: 14, lineHeight: 1.7, color: "#444" }}>{text}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ width: "100%", height: 1, background: "#eee", margin: "0 0 48px" }} />

        <div style={{ marginBottom: 48 }}>
          <div style={{ fontSize: 10, fontWeight: 600, color: "#888", textTransform: "uppercase" as const, letterSpacing: "0.14em", marginBottom: 16 }}>Background</div>
          <p style={{ fontSize: 15, lineHeight: 1.85, color: "#444", textAlign: "justify" as const, hyphens: "auto" as const }}>
            Undergraduate training in integrated design, Universidade do Sagrado Coração (USC), Brazil. Longitudinal neurodevelopmental observation conducted informally through several years of caregiving work with children with special needs in the Bay Area — a context that provided sustained, ecologically valid access to regulatory dysregulation, interoceptive disruption, and the conditions under which self-continuity breaks down across development. That observational ground preceded and shaped the theoretical framework. No institutional affiliation — which has meant no IRB access, no neuroimaging equipment, no co-investigators. It has also meant no committee approval needed to ask the questions that matter, no external timeline, and no pressure to fit the theory to an existing lab&apos;s agenda. The framework was built from first principles, in the conditions of real life.
          </p>
        </div>

        <div style={{ border: "1px solid #eee", background: "#fafafa", padding: "28px", textAlign: "center" as const }}>
          <p style={{ margin: "0 0 20px", fontFamily: "'EB Garamond', Georgia, serif", fontSize: 20, color: "#111", lineHeight: 1.5 }}>
            If this work resonates — or if you see a gap it might close — I&apos;d like to hear from you.
          </p>
          <a href="/contact" style={{ display: "inline-block", fontSize: 13, color: "#fff", background: "#111", padding: "10px 28px", letterSpacing: "0.06em", fontFamily: "system-ui", textDecoration: "none" }}>
            Get in touch
          </a>
        </div>

      </main>
    </>
  )
}