'use client'

import React, { useState } from "react"

const layers = [
    {
        code: "C0",
        name: "Cosmological Layer",
        title: "Physical Order & Boundary Conditions",
        refs: "Bohm (1980); Aghanim et al. (2020)",
        explanation: "Before the emergence of life, cellular organization, or cognition, the universe evolved within a structured set of physical constraints. Cosmic evolution proceeded under invariant regularities, thermodynamic gradients, and relational order — ideas explored, for example, in Bohm's distinction between implicate and explicate order (Bohm, 1980). These boundary conditions remain empirically accessible through observations such as measurements of the cosmic microwave background (Aghanim et al., 2020) and can be understood as part of the constraint landscape within which subsequent biological and cognitive complexity became possible. Within RFT, C0 designates this foundational constraint regime that enables higher-order organization.",
    },
    {
        code: "C1",
        name: "Biological Layer",
        title: "Autopoiesis, Homeostasis & Structural Coupling",
        refs: "Darwin (1859); Maturana & Varela (1980)",
        explanation: "Within these physical constraints, certain self-organizing biological systems developed the capacity for self-maintenance. Maturana and Varela (1980) described this property as autopoiesis: the ability of living systems to continuously regenerate their own components while preserving organizational integrity. Such systems actively regulate internal states in the face of environmental perturbations, maintaining viability through homeostasis and ongoing structural coupling with the environment (Maturana & Varela, 1987). In the RFT framework, C1 marks the transition from predominantly passive physical processes to biologically regulated systems capable of adaptive self-maintenance.",
    },
    {
        code: "C2",
        name: "Neural Layer",
        title: "Large-Scale Network Coordination & Self-Related Processing",
        refs: "Friston (2010); Menon (2011); Northoff (2014, 2016)",
        explanation: "As organisms increased in complexity and environmental unpredictability intensified, adaptive success increasingly depended on the capacity to anticipate and regulate uncertainty. Contemporary theoretical neuroscience characterizes this pressure in terms of predictive regulation and variational free-energy minimization (Friston, 2010). At the systems level, the Triple Network Model describes how large-scale brain systems — including the default mode network, salience network, and central executive network — dynamically coordinate flexible cognition and behavioral adaptation (Menon, 2011). Converging work further indicates that self-related processing is closely intertwined with the brain's intrinsic activity, particularly within cortical midline structures (Northoff et al., 2006; Northoff, 2016). Within RFT, C2 refers to this regime in which biological regulation becomes increasingly mediated by large-scale predictive and self-related neural dynamics.",
    },
    {
        code: "C3",
        name: "Symbolic Layer",
        title: "Meaning-Making, Narrative Structure & Epistemic Organization",
        refs: "Jung (1959/1968); Cleeremans (2011)",
        explanation: "With the expansion of human social complexity, adaptive regulation increasingly involved not only physical uncertainty but also interpretive and socially mediated forms of uncertainty. Symbolic communication, shared norms, and reputational dynamics introduced additional regulatory demands on cognitive systems. From a psychological perspective, Jung (1968) emphasized the role of symbolic processes in organizing subjective experience, while computational approaches have proposed that conscious access may function as a higher-order representational model of the system's own states (Cleeremans, 2011). Within RFT, C3 designates the level at which neural dynamics become progressively structured into narrative identity, symbolic organization, and higher-order epistemic models that may contribute to the stabilization of self-related processing under increasing socio-environmental complexity.",
    },
    {
        code: "C4",
        name: "Experiential Layer",
        title: "The Continuity of Lived Experience — The Subjective Present",
        refs: "Varela (1996); Northoff (2020)",
        explanation: "C4 refers to the phenomenological level at which interactions across physical, biological, neural, and symbolic processes are experienced as a relatively continuous sense of self over time. When cross-scale coordination is maintained, experience tends to exhibit temporal continuity, narrative coherence, and a stable sense of agency (Northoff, 2016; Seth, 2013). Under conditions of sustained stress or regulatory overload, however, disruptions in large-scale integration have been associated with forms of experiential fragmentation observed across multiple psychopathologies (Menon, 2011; Friston et al., 2016). Within RFT, C4 is therefore not treated as the apex of a simple hierarchy but as an emergent outcome of ongoing multiscale coordination across the nested system.",
    },
]

export default function ThePaper() {
    const [openIndex, setOpenIndex] = useState<number | null>(null)
    const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i)

    return (
        <>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;500&display=swap" />

            <style>{`
        * { box-sizing: border-box; }
        body { font-family: system-ui, sans-serif; background: #fff; color: #111; }

        header { position: fixed; top: 0; left: 0; right: 0; z-index: 100; background: #fff; border-bottom: 1px solid #eee; padding: 0 32px; }
        .header-inner { max-width: 900px; margin: 0 auto; display: flex; align-items: center; justify-content: center; gap: 40px; padding: 14px 0; }
        .header-name { font-size: 16px; font-weight: 500; color: #111; font-family: system-ui; white-space: nowrap; text-decoration: none; }
        nav { display: flex; gap: 24px; }
        nav a { font-size: 15px; color: #555; text-decoration: none; font-family: system-ui; white-space: nowrap; transition: color 0.15s; }
        nav a:hover { color: #111; }

        main { padding-top: 100px; padding-bottom: 100px; padding-left: 24px; padding-right: 24px; max-width: 680px; margin: 0 auto; }

        .page-nav { display: flex; align-items: center; justify-content: space-between; margin-bottom: 56px; }
        .page-nav-back { font-size: 13px; color: #777; text-decoration: none; letter-spacing: 0.02em; }
        .page-nav-links { display: flex; gap: 20px; }
        .page-nav-links a { font-size: 15px; text-decoration: none; color: #555; }
        .page-nav-links a.active { color: #111; border-bottom: 1px solid #111; padding-bottom: 2px; font-weight: 500; }

        .page-title { font-family: 'EB Garamond', Georgia, serif; font-size: clamp(32px, 5vw, 48px); font-weight: 500; color: #111; text-align: center; margin-bottom: 12px; line-height: 1.2; }
        .page-subtitle { text-align: center; font-size: 13px; color: #555; letter-spacing: 0.06em; text-transform: uppercase; font-family: system-ui; margin-bottom: 56px; }

        .section { margin-bottom: 52px; }
        .section-title { font-size: 13px; font-weight: 600; color: #555; text-transform: uppercase; letter-spacing: 0.12em; font-family: system-ui; margin-bottom: 18px; }
        .section p { font-size: 17px; line-height: 1.9; color: #444; font-family: system-ui; margin-bottom: 14px; text-indent: 2em; text-align: justify; hyphens: auto; }
        .section p:last-child { margin-bottom: 0; }
        .section ol { margin: 8px 0 14px 0; padding-left: 24px; }
        .section ol li { margin-bottom: 8px; font-size: 15px; line-height: 1.7; color: #444; font-family: system-ui; }

        .divider { width: 100%; height: 1px; background: #eee; margin: 48px 0; }

        .timeline-label { font-size: 13px; font-weight: 600; color: #555; text-transform: uppercase; letter-spacing: 0.12em; font-family: system-ui; margin-bottom: 24px; }
        .timeline { display: flex; flex-direction: column; gap: 2px; margin-bottom: 52px; }

        .timeline-row { border: 1px solid #eee; background: #fafafa; cursor: pointer; transition: background 0.15s, border-color 0.15s; overflow: hidden; }
        .timeline-row:hover { background: #f4f4f4; border-color: #ddd; }
        .timeline-row.open { background: #f7f7f7; border-color: #ddd; }

        .timeline-header { display: grid; grid-template-columns: 52px 1fr 24px; align-items: stretch; }
        .timeline-code { color: #fff; display: flex; align-items: center; justify-content: center; font-family: 'EB Garamond', Georgia, serif; font-size: 16px; font-weight: 500; flex-shrink: 0; min-height: 64px; }
        .timeline-body { padding: 16px 20px; }
        .timeline-name { font-size: 11px; font-weight: 600; color: #555; text-transform: uppercase; letter-spacing: 0.1em; font-family: system-ui; margin-bottom: 3px; }
        .timeline-title { font-size: 16px; font-weight: 500; color: #111; font-family: system-ui; margin-bottom: 4px; }
        .timeline-refs { font-size: 13px; color: #555; font-family: system-ui; font-style: italic; }

        .timeline-chevron { display: flex; align-items: center; justify-content: center; padding-right: 16px; color: #666; font-size: 12px; transition: transform 0.2s; user-select: none; }
        .timeline-chevron.open { transform: rotate(180deg); }

        .timeline-explanation { padding: 14px 20px 18px 72px; font-size: 15px; line-height: 1.85; color: #555; font-family: system-ui; text-align: justify; hyphens: auto; text-indent: 2em; border-top: 1px solid #eee; animation: fadeIn 0.2s ease; }
        .timeline-connector { width: 1px; height: 14px; background: #ddd; margin-left: 26px; }

        @keyframes fadeIn { from { opacity: 0; transform: translateY(-4px); } to { opacity: 1; transform: translateY(0); } }

        .cite { font-size: 12px; color: #555; font-style: italic; white-space: nowrap; }

        .references { border-top: 1px solid #eee; padding-top: 28px; margin-top: 48px; }
        .references h3 { font-size: 12px; font-weight: 600; color: #555; letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 20px; font-family: system-ui; }
        .references ol { margin: 0; padding-left: 20px; display: flex; flex-direction: column; gap: 10px; list-style-type: decimal; }
        .references li { font-size: 12px; line-height: 1.7; color: #666; font-family: system-ui; }
        .references a { color: #666; text-decoration: underline; }

        @media (max-width: 640px) { .page-nav-links { display: none; } .timeline-explanation { padding-left: 20px; } }
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
                        <a href="/the-paper" className="active">The Paper</a>
                        <a href="/research-plan">M-RFT Coherence Metric</a>
                        <a href="/expected-outcomes">Expected Outcomes</a>
                    </div>
                </div>

                <h1 className="page-title">Root Frequency Theory</h1>
                <p className="page-subtitle">An Integrative Framework for the Continuity of Lived Experience</p>

                {/* ABSTRACT */}
                <div className="section">
                    <div className="section-title">Abstract</div>
                    <p>Contemporary neuroscience has mapped the architecture of the brain in considerable detail, yet a central question remains open: how is a coherent sense of self maintained across time, and under what conditions does it become vulnerable to disruption? Root Frequency Theory (RFT) proposes that experiential continuity may be better understood as an emergent property of cross-scale coordination across five nested layers (C0–C4). Within this view, systemic noise and sustained regulatory load may progressively weaken cross-layer alignment, increasing the risk of fragmentation in self-experience. The M-RFT coherence metric is introduced as a preliminary heuristic tool intended to render these multiscale dynamics empirically investigable.</p>
                </div>

                <div className="divider" />

                {/* INTRODUCTION */}
                <div className="section">
                    <div className="section-title">Introduction</div>
                    <p>The Triple Network Model <span className="cite">(Menon, 2011)</span>, the free-energy principle <span className="cite">(Friston, 2010)</span>, and work on self-related processing <span className="cite">(Northoff, 2014, 2016)</span> have each advanced our understanding of how the brain supports cognition and self-experience. However, these frameworks are often used separately, leaving only partially specified how processes of physiological regulation, large-scale network coordination, and self-related dynamics jointly contribute to the longitudinal continuity of the self over time.</p>
                    <p>RFT suggests that part of this difficulty may reflect the tendency to examine neural components in relative isolation, highlighting the importance of a more integrative analytic perspective.</p>
                    <p>From this standpoint, the present framework begins not with the brain alone but with a nested hierarchy of constraints — physical (C0), biological (C1), neural (C2), and symbolic (C3) — within which both the brain and self emerge. Each layer in this C0–C4 architecture is a distinct organizational level that both influences and is influenced by the others. The dynamic interplay between these layers is explored in the following expandable cards.</p>
                </div>

                <div className="divider" />

                {/* EXPANDABLE LAYERS */}
                <div className="timeline-label">
                    The Layered Architecture — C0 → C4{" "}
                    <span style={{ fontWeight: 400, fontSize: 11, letterSpacing: "0.04em" }}>(click to expand)</span>
                </div>
                <div className="timeline">
                    {layers.map((layer, i) => {
                        const isOpen = openIndex === i
                        const grays = ["#111", "#222", "#333", "#444", "#666"]
                        return (
                            <React.Fragment key={layer.code}>
                                <div className={`timeline-row${isOpen ? " open" : ""}`} onClick={() => toggle(i)}>
                                    <div className="timeline-header">
                                        <div className="timeline-code" style={{ background: grays[i] }}>{layer.code}</div>
                                        <div className="timeline-body">
                                            <div className="timeline-name">{layer.name}</div>
                                            <div className="timeline-title">{layer.title}</div>
                                            <div className="timeline-refs">{layer.refs}</div>
                                        </div>
                                        <div className={`timeline-chevron${isOpen ? " open" : ""}`}>▾</div>
                                    </div>
                                    {isOpen && (
                                        <div className="timeline-explanation">{layer.explanation}</div>
                                    )}
                                </div>
                                {i < layers.length - 1 && <div className="timeline-connector" />}
                            </React.Fragment>
                        )
                    })}
                </div>

                {/* FRAGMENTATION */}
                <div className="section">
                    <div className="section-title">Noise & the Fragmentation Loop</div>
                    <p>Within this nested architecture, chronic stress, environmental volatility, and informational overload may function not only as psychological burdens but also as potential sources of systemic noise that increase regulatory load across multiple levels of the hierarchy. Sustained stress exposure has been associated with alterations in hormonal and epigenetic regulation, with downstream effects on large-scale network dynamics <span className="cite">(Sapolsky, 2004; Yehuda et al., 2015)</span>.</p>
                    <p>As regulatory demands accumulate, the mechanisms responsible for distinguishing relevant signals from background fluctuation may become increasingly strained. Within predictive processing accounts, this condition can be described as an increase in variational free energy <span className="cite">(Friston, 2010)</span>, potentially accompanied by reduced capacity to sustain unified informational structures over time <span className="cite">(Tononi, 2004; Tononi et al., 2016)</span>.</p>
                    <p>Under such conditions, large-scale network coordination — including the salience network and default mode network — may become less stable, while symbolic processes may lose some of their capacity to anchor coherent self-narrative.</p>
                    <p>RFT refers to this proposed cascade as <em>fragmentation</em>: a self-reinforcing dynamic in which cross-scale misalignment at the symbolic level (C3) may propagate across neural (C2) and biological (C1) regulation, ultimately manifesting as experiential discontinuity at the phenomenological level (C4). Converging neuroimaging findings across multiple psychiatric conditions — where alterations tend to appear distributed rather than focal — are broadly consistent with system-level models of dysregulation <span className="cite">(Menon, 2011)</span>.</p>
                    <p>To clarify how these multiscale pressures may interact over time, the following figure presents a conceptual model of the proposed cycle of integrative instability.</p>
                </div>

                {/* INTEGRATIVE INSTABILITY CYCLE DIAGRAM */}
                <div style={{ margin: "0 0 52px 0" }}>
                    <div style={{ fontSize: 10, fontWeight: 600, color: "#666", textTransform: "uppercase" as const, letterSpacing: "0.16em", fontFamily: "system-ui", marginBottom: 40, textAlign: "center" as const }}>
                        Integrative Instability
                    </div>
                    <div style={{ display: "flex", gap: 0 }}>
                        <div style={{ display: "flex", flexDirection: "column" as const, alignItems: "center", width: 28, flexShrink: 0, paddingTop: 20 }}>
                            {([true, false, false, false, false] as boolean[]).map((filled, i) => (
                                <div key={i} style={{ display: "flex", flexDirection: "column" as const, alignItems: "center" }}>
                                    <div style={{ width: 14, height: 14, borderRadius: "50%", background: filled ? "#111" : "#fff", border: "2px solid #111", zIndex: 1, flexShrink: 0 }} />
                                    {i < 4 && <div style={{ width: 2, height: 52, background: "#111" }} />}
                                </div>
                            ))}
                            <div style={{ width: 0, height: 0, borderLeft: "5px solid transparent", borderRight: "5px solid transparent", borderTop: "7px solid #111", marginTop: -1 }} />
                        </div>
                        <div style={{ display: "flex", flexDirection: "column" as const, flex: 1, paddingLeft: 20 }}>
                            {([
                                { code: "C0", sub: "Cosmological", label: "Increasing Environmental Stress" },
                                { code: "C1", sub: "Biological", label: "Greater Regulatory Effort Required" },
                                { code: "C2", sub: "Neural", label: "↑ Uncertainty · Difficulty Filtering Signals" },
                                { code: "C3", sub: "Symbolic", label: "↓ Coherent Structures · Reduced Integration" },
                                { code: "C4", sub: "Experiential", label: "Hypervigilance · Heightened Reactivity" },
                            ] as { code: string; sub: string; label: string }[]).map((row, i) => (
                                <div key={i} style={{ height: i < 4 ? 66 : "auto", display: "flex", flexDirection: "column" as const, justifyContent: "flex-start" }}>
                                    <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 2 }}>
                                        <span style={{ fontFamily: "'EB Garamond', Georgia, serif", fontSize: 18, fontWeight: 500, color: "#111", lineHeight: 1 }}>{row.code}</span>
                                        <span style={{ fontSize: 11, color: "#666", fontFamily: "system-ui", letterSpacing: "0.04em" }}>{row.sub}</span>
                                    </div>
                                    <div style={{ fontSize: 13, color: "#555", fontFamily: "system-ui", lineHeight: 1.4 }}>{row.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div style={{ position: "relative" as const, height: 0, marginTop: -330 }}>
                        <div style={{ position: "absolute" as const, right: 0, top: -18, fontSize: 10, color: "#777", fontFamily: "system-ui", letterSpacing: "0.14em", fontStyle: "italic" as const, whiteSpace: "nowrap" as const }}>LOOP ▲</div>
                        <div style={{ position: "absolute" as const, right: 10, top: 0, width: 0, height: 330, borderRight: "1.5px dashed #ccc" }} />
                    </div>
                    <div style={{ height: 330 }} />
                    <p style={{ fontSize: 12, color: "#666", fontFamily: "system-ui", fontStyle: "italic" as const, lineHeight: 1.7, marginTop: 20 }}>
                        <em>Note.</em> Sustained regulatory load may impair signal filtering across layers, reinforcing a self-amplifying noise cascade from C0 through C4.
                    </p>
                </div>

                <div className="divider" />

                {/* KNOWLEDGE */}
                <div className="section">
                    <div className="section-title">Knowledge as an Epistemic Alignment Mechanism</div>
                    <p>If fragmentation reflects a disruption of cross-scale coherence, restoration may, in principle, be initiated from within the system itself. This possibility is supported by three converging lines of evidence suggesting that meaning-related processing may influence physiological regulation:</p>
                    <ol style={{ listStyleType: "decimal", paddingLeft: 24, margin: "0 0 14px 0" }}>
                        <li style={{ fontSize: 15, lineHeight: 1.85, color: "#444", fontFamily: "system-ui", marginBottom: 8 }}>Self-related information preferentially engages intrinsic DMN dynamics <span className="cite">(Northoff, 2014, 2016)</span>.</li>
                        <li style={{ fontSize: 15, lineHeight: 1.85, color: "#444", fontFamily: "system-ui", marginBottom: 8 }}>The interpretation of a stressor, not only its intensity, can shape its physiological impact <span className="cite">(Sapolsky, 2004)</span>.</li>
                        <li style={{ fontSize: 15, lineHeight: 1.85, color: "#444", fontFamily: "system-ui", marginBottom: 8 }}>Conscious awareness has been proposed to function as a representational resource through which the brain models and helps regulate its own states <span className="cite">(Cleeremans, 2011)</span>.</li>
                    </ol>
                    <p>Taken together, these findings suggest a potential pathway through which structured knowledge may contribute to system-level regulation.</p>
                    <p>RFT formalizes this proposal as <em>Epistemic Synchrony</em> (Kₑ): defined as the degree to which structured self-knowledge at the symbolic layer (C3) provides stable reference points for the system's predictive processes. As Kₑ increases, reflecting greater coherence and explanatory adequacy at the symbolic level, variational free energy at C2 may decrease <span className="cite">(Friston, 2010)</span>. In turn, regulatory load at C1 may stabilize, and experiential continuity at C4 may be more stably maintained. This proposed top-down regulatory dynamic is schematically illustrated in the following figure.</p>
                </div>

                {/* EPISTEMIC SYNCHRONY DIAGRAM */}
                <div style={{ margin: "0 0 52px 0" }}>
                    <div style={{ fontSize: 10, fontWeight: 600, color: "#666", textTransform: "uppercase" as const, letterSpacing: "0.16em", fontFamily: "system-ui", marginBottom: 40, textAlign: "center" as const }}>
                        Epistemic Synchrony Pathway
                    </div>
                    <div style={{ display: "flex", gap: 0 }}>
                        <div style={{ display: "flex", flexDirection: "column" as const, alignItems: "center", width: 28, flexShrink: 0, paddingTop: 20 }}>
                            {([true, false, false, false] as boolean[]).map((filled, i) => (
                                <div key={i} style={{ display: "flex", flexDirection: "column" as const, alignItems: "center" }}>
                                    <div style={{ width: 14, height: 14, borderRadius: "50%", background: filled ? "#111" : "#fff", border: "2px solid #111", zIndex: 1, flexShrink: 0 }} />
                                    {i < 3 && <div style={{ width: 2, height: 52, background: "#111" }} />}
                                </div>
                            ))}
                            <div style={{ width: 2, height: 20, borderLeft: "2px dashed #ccc" }} />
                            <div style={{ display: "flex", flexDirection: "column" as const, alignItems: "center" }}>
                                <div style={{ width: 14, height: 14, borderRadius: "50%", background: "#fff", border: "2px solid #111", zIndex: 1, flexShrink: 0 }} />
                            </div>
                            <div style={{ width: 0, height: 0, borderLeft: "5px solid transparent", borderRight: "5px solid transparent", borderTop: "7px solid #111", marginTop: -1 }} />
                        </div>
                        <div style={{ display: "flex", flexDirection: "column" as const, flex: 1, paddingLeft: 20 }}>
                            {([
                                { code: "C3", sub: "Symbolic", label: "Structured Self-Knowledge introduced", bold: true },
                                { code: "C2", sub: "Neural", label: "Improved Neural Coordination", bold: false },
                                { code: "C1", sub: "Biological", label: "Biological & Behavioral Regulation", bold: false },
                                { code: "C0", sub: "Cosmological", label: "Reduced Perceived Uncertainty", bold: false },
                            ] as { code: string; sub: string; label: string; bold: boolean }[]).map((row, i) => (
                                <div key={i} style={{ height: 66, display: "flex", flexDirection: "column" as const, justifyContent: "flex-start" }}>
                                    <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 2 }}>
                                        <span style={{ fontFamily: "'EB Garamond', Georgia, serif", fontSize: 18, fontWeight: 500, color: "#111", lineHeight: 1 }}>{row.code}</span>
                                        <span style={{ fontSize: 11, color: "#666", fontFamily: "system-ui", letterSpacing: "0.04em" }}>{row.sub}</span>
                                    </div>
                                    <div style={{ fontSize: 13, color: "#555", fontFamily: "system-ui", lineHeight: 1.4, fontWeight: row.bold ? 600 : 400 }}>{row.label}</div>
                                </div>
                            ))}
                            <div style={{ paddingTop: 8 }}>
                                <div style={{ fontSize: 12, color: "#666", fontFamily: "system-ui", fontStyle: "italic" as const, marginBottom: 8 }}>cascade</div>
                                <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 2 }}>
                                    <span style={{ fontFamily: "'EB Garamond', Georgia, serif", fontSize: 18, fontWeight: 500, color: "#111", lineHeight: 1 }}>C4</span>
                                    <span style={{ fontSize: 11, color: "#666", fontFamily: "system-ui", letterSpacing: "0.04em" }}>Experiential</span>
                                </div>
                                <div style={{ fontSize: 13, color: "#555", fontFamily: "system-ui", lineHeight: 1.4 }}>Enhanced Experiential Continuity</div>
                            </div>
                        </div>
                    </div>
                    <div style={{ position: "relative" as const, height: 0, marginTop: -370 }}>
                        <div style={{ position: "absolute" as const, right: 0, top: -18, fontSize: 10, color: "#777", fontFamily: "system-ui", letterSpacing: "0.14em", fontStyle: "italic" as const, whiteSpace: "nowrap" as const }}>REINFORCES ▲</div>
                        <div style={{ position: "absolute" as const, right: 10, top: 0, width: 0, height: 370, borderRight: "1.5px dashed #ccc" }} />
                    </div>
                    <div style={{ height: 370 }} />
                    <p style={{ fontSize: 12, color: "#666", fontFamily: "system-ui", fontStyle: "italic" as const, lineHeight: 1.7, marginTop: 20 }}>
                        <em>Note.</em> Introduction of structured self-knowledge at C3 is hypothesized to cascade toward improved neural coordination (C2), biological regulation (C1), reduced perceived uncertainty (C0), and greater experiential continuity (C4) — which may in turn reinforce the stability of the symbolic layer.
                    </p>
                </div>

                <div className="divider" />

                {/* CONCLUSION */}
                <div className="section">
                    <div className="section-title">Toward an Investigable Framework</div>
                    <p>RFT does not claim to resolve the hard problem of consciousness. Instead, it proposes a structural reframing: that the stability of the lived self may be better understood as a systemic property rather than a localized one, and that its disruption may follow partially predictable patterns of cross-scale misalignment.</p>
                    <p>Within this view, the C0–C4 architecture provides the conceptual scaffold. The fragmentation loop outlines a potential mechanism of breakdown. Epistemic Synchrony points toward a possible pathway of restoration.</p>
                    <p>What remains is measurement. The M-RFT coherence metric, introduced in the next section, represents an initial attempt to operationalize these dynamics and to examine whether variations in cross-scale alignment covary with patterns of experiential disruption across both clinical and everyday contexts.</p>
                </div>


                {/* BOTTOM NAV */}
                <div style={{
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                    borderTop: "1px solid #eee", marginTop: 48, paddingTop: 28,
                    fontFamily: "system-ui",
                }}>
                    <div style={{ fontSize: 13, color: "#ccc" }}>—</div>
                    <a href="/research-plan" style={{
                        fontSize: 14, color: "#555", textDecoration: "none",
                        display: "flex", alignItems: "center", gap: 8,
                    }}>
                        M-RFT Coherence Metric <span style={{ fontSize: 16 }}>→</span>
                    </a>
                </div>

                {/* REFERENCES */}
                <section className="references">
                    <h3>References</h3>
                    <ol>
                        <li>Aghanim, N., et al. (Planck Collaboration). (2020). Planck 2018 results: VI. Cosmological parameters. <em>Astronomy &amp; Astrophysics, 641</em>, A6. <a href="https://doi.org/10.1051/0004-6361/201833910" target="_blank" rel="noopener">https://doi.org/10.1051/0004-6361/201833910</a></li>
                        <li>Bohm, D. (1980). <em>Wholeness and the implicate order.</em> Routledge.</li>
                        <li>Cleeremans, A. (2011). The radical plasticity thesis: How the brain learns to be conscious. <em>Frontiers in Psychology, 2</em>, 86. <a href="https://doi.org/10.3389/fpsyg.2011.00086" target="_blank" rel="noopener">https://doi.org/10.3389/fpsyg.2011.00086</a></li>
                        <li>Darwin, C. (1859). <em>On the origin of species.</em> John Murray.</li>
                        <li>Friston, K. (2010). The free-energy principle: A unified brain theory? <em>Nature Reviews Neuroscience, 11</em>(2), 127–138. <a href="https://doi.org/10.1038/nrn2787" target="_blank" rel="noopener">https://doi.org/10.1038/nrn2787</a></li>
                        <li>Jung, C. G. (1968). <em>The archetypes and the collective unconscious</em> (R. F. C. Hull, Trans.; 2nd ed.). Princeton University Press.</li>
                        <li>Maturana, H. R., &amp; Varela, F. J. (1980). <em>Autopoiesis and cognition: The realization of the living.</em> D. Reidel.</li>
                        <li>Menon, V. (2011). Large-scale brain networks and psychopathology: A unifying triple network model. <em>Trends in Cognitive Sciences, 15</em>(10), 483–506. <a href="https://doi.org/10.1016/j.tics.2011.08.003" target="_blank" rel="noopener">https://doi.org/10.1016/j.tics.2011.08.003</a></li>
                        <li>Northoff, G. (2014). <em>Unlocking the brain: Volume II. Consciousness.</em> Oxford University Press.</li>
                        <li>Northoff, G. (2016). <em>Neuro-philosophy and the healthy mind.</em> W. W. Norton &amp; Company.</li>
                        <li>Northoff, G. (2020). <em>The spontaneous brain.</em> MIT Press.</li>
                        <li>Sapolsky, R. M. (2004). <em>Why zebras don't get ulcers</em> (3rd ed.). Henry Holt.</li>
                        <li>Tononi, G. (2004). An information integration theory of consciousness. <em>BMC Neuroscience, 5</em>, 42. <a href="https://doi.org/10.1186/1471-2202-5-42" target="_blank" rel="noopener">https://doi.org/10.1186/1471-2202-5-42</a></li>
                        <li>Tononi, G., Boly, M., Massimini, M., &amp; Koch, C. (2016). Integrated information theory: From consciousness to its physical substrate. <em>Nature Reviews Neuroscience, 17</em>, 450–461. <a href="https://doi.org/10.1038/nrn.2016.44" target="_blank" rel="noopener">https://doi.org/10.1038/nrn.2016.44</a></li>
                        <li>Varela, F. J. (1996). Neurophenomenology: A methodological remedy for the hard problem. <em>Journal of Consciousness Studies, 3</em>(4), 330–349.</li>
                        <li>Yehuda, R., et al. (2015). Post-traumatic stress disorder. <em>Nature Reviews Disease Primers, 1</em>, 15057. <a href="https://doi.org/10.1038/nrdp.2015.57" target="_blank" rel="noopener">https://doi.org/10.1038/nrdp.2015.57</a></li>
                    </ol>
                </section>

            </main>
        </>
    )
}