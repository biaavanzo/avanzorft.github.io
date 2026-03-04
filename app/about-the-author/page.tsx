'use client'

export default function AboutTheAuthor() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;500&display=swap"
      />

      <header style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: "#fff", borderBottom: "1px solid #eee", padding: "0 32px",
      }}>
        <div style={{
          maxWidth: 900, margin: "0 auto", display: "flex",
          alignItems: "center", justifyContent: "center", gap: 40, padding: "14px 0",
        }}>
          <a href="/" style={{ fontSize: 16, fontWeight: 500, color: "#111", fontFamily: "system-ui", whiteSpace: "nowrap", textDecoration: "none" }}>
            Bianca Avanzo — The Root Frequency Theory
          </a>
          <nav style={{ display: "flex", gap: 24 }}>
            <a href="/the-paper" style={{ fontSize: 15, color: "#555", textDecoration: "none", fontFamily: "system-ui", whiteSpace: "nowrap" }}>About RFT</a>
            <a href="/about-the-author" style={{ fontSize: 15, color: "#555", textDecoration: "none", fontFamily: "system-ui", whiteSpace: "nowrap" }}>About the Author</a>
            <a href="/contact" style={{ fontSize: 15, color: "#555", textDecoration: "none", fontFamily: "system-ui", whiteSpace: "nowrap" }}>Contact</a>
          </nav>
        </div>
      </header>

      <main style={{
        paddingTop: 100, paddingBottom: 100, paddingLeft: 24, paddingRight: 24,
        fontFamily: "system-ui", maxWidth: 680, margin: "0 auto",
      }}>
        <a href="/" style={{ display: "inline-block", fontSize: 13, color: "#777", textDecoration: "none", marginBottom: 48, letterSpacing: "0.02em" }}>
          ← Back
        </a>

        {/* Name + avatar */}
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <div style={{
            width: 80, height: 80, borderRadius: "50%",
            overflow: "hidden", margin: "0 auto 24px",
            border: "1px solid #ddd", flexShrink: 0,
          }}>
            <img src="/bianca.jpg" alt="Bianca Avanzo" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", display: "block", pointerEvents: "none" as const }} />
          </div>
          <h1 style={{
            fontFamily: "'EB Garamond', Georgia, serif",
            fontSize: "clamp(28px, 5vw, 44px)",
            fontWeight: 500, color: "#111", marginBottom: 8, lineHeight: 1.2,
          }}>
            Bianca Avanzo
          </h1>
          <p style={{ fontSize: 13, color: "#777", letterSpacing: "0.1em", textTransform: "uppercase", margin: 0 }}>
            Independent Researcher
          </p>
        </div>

        {/* BACKGROUND */}
        <section style={{ marginBottom: 52 }}>
          <h2 style={{ fontSize: 17, fontWeight: 700, color: "#111", textAlign: "center", marginBottom: 20, fontFamily: "system-ui" }}>
            Background
          </h2>
          <div style={{ fontSize: 17, lineHeight: 1.9, color: "#444" }}>
            <p style={{ marginBottom: 20, textIndent: '2em', textAlign: 'justify' as const, hyphens: 'auto' as const }}>
              I am an independent researcher working at the intersection of cognitive science, neurophenomenology, and the science of self. My work investigates how a coherent sense of self is maintained, and how it becomes vulnerable to fragmentation, across biological, neural, and symbolic scales of organization.
            </p>
            <p style={{ marginBottom: 12, fontWeight: 500, color: "#111", fontSize: 17 }}>My Approach</p>
            <div style={{ display: "flex", flexDirection: "column" as const, gap: 14 }}>
              {[
                { label: "Analytical Autoethnography", text: "Root Frequency Theory (RFT) emerged from a sustained period of longitudinal first-person inquiry. I treat structured subjective observation as a rigorous source of scientific constraint to guide hypothesis formation." },
                { label: "Transdisciplinary Modeling", text: "The framework is developed in active dialogue with contemporary neuroscience, particularly the Free Energy Principle (FEP), Integrated Information Theory (IIT), and Menon's Triple Network Model." },
                { label: "The Goal", text: "To translate phenomenological insights into a formally investigable architecture, clarifying how experiential organization may relate to underlying mechanisms through operational tools such as the M-RFT metric." },
              ].map(({ label, text }) => (
                <div key={label} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <span style={{ color: "#666", flexShrink: 0, paddingTop: 4, fontSize: 17 }}>·</span>
                  <p style={{ margin: 0, fontSize: 17, lineHeight: 1.9, color: "#444" }}>
                    <span style={{ fontWeight: 500, color: "#111" }}>{label}:</span>{" "}{text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* RESEARCH INTERESTS */}
        <section style={{ marginBottom: 52 }}>
          <h2 style={{ fontSize: 17, fontWeight: 700, color: "#111", textAlign: "center", marginBottom: 20, fontFamily: "system-ui" }}>
            Research Interests
          </h2>
          <div style={{ display: "flex", flexDirection: "column" as const, gap: 10 }}>
            {[
              "Consciousness and experiential continuity across time;",
              "Large-scale brain network dynamics (DMN, salience, executive networks);",
              "Predictive processing and active inference;",
              "Neurophenomenology and first-person methodology;",
              "Stress, psychopathology, and multiscale dysalignment;",
              "Coherence metrics and health-technology scaffolds.",
            ].map((item) => (
              <div key={item} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                <span style={{ color: "#666", flexShrink: 0, paddingTop: 4, fontSize: 17 }}>·</span>
                <span style={{ fontSize: 17, lineHeight: 1.9, color: "#444" }}>{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CURRENT WORK */}
        <section style={{ marginBottom: 52 }}>
          <h2 style={{ fontSize: 17, fontWeight: 700, color: "#111", textAlign: "center", marginBottom: 20, fontFamily: "system-ui" }}>
            Current Work
          </h2>
          <div style={{ fontSize: 17, lineHeight: 1.9, color: "#444" }}>
            <p style={{ marginBottom: 14, textIndent: '2em', textAlign: 'justify' as const, hyphens: 'auto' as const }}>
              The Root Frequency Theory framework and its associated operational tools are currently under active development, including the M-RFT metric—a proposed measure of cross-scale alignment designed to track the precision of internal models—and the development of computational scaffolds to support systemic integration.
            </p>
            <p style={{ marginBottom: 32, textIndent: '2em', textAlign: 'justify' as const, hyphens: 'auto' as const }}>
              Efforts are also directed toward establishing R&D partnerships, academic–industry mentorship, and access to multimodal neurophysiological environments to rigorously examine the framework's core predictions and explore its potential computational translation into scalable health-technology contexts.
            </p>

            {/* CTA */}
            <div style={{
              padding: "32px 28px",
              border: "1px solid #eee",
              background: "#fafafa", textAlign: "center",
            }}>
              <p style={{
                margin: "0 0 20px 0",
                fontFamily: "'EB Garamond', Georgia, serif",
                fontSize: 19, color: "#111", lineHeight: 1.5,
              }}>
                Interested in collaborating or learning more about the project?
              </p>
              <a href="/contact" style={{
                display: "inline-block", fontSize: 13, color: "#fff",
                background: "#111", padding: "10px 28px",
                border: "none", letterSpacing: "0.06em",
                fontFamily: "system-ui", cursor: "pointer",
                textDecoration: "none",
              }}>
                Get in touch
              </a>
            </div>
          </div>
        </section>

      </main>
    </>
  )
}