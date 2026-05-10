'use client'

import React, { useState } from "react"

const sessions = [
    { ts: "2026-04-16T21:40", m: 0.63, state: "FRAGMENTED", trigger: "Coffee", narrative: "I've been working on fixing my app errors. I just had some food and a lot of coffee." },
    { ts: "2026-04-16T21:43", m: 0.38, state: "FRAGMENTED", trigger: "", narrative: "This is a test run. A software engineering day, which I'm learning as I go." },
    { ts: "2026-04-16T21:57", m: 10.00, state: "RESILIENT", trigger: "", narrative: "I've been building this app now for 3 hours nonstop. The mix of uncertainty of functionality with caffeine intake might be making me uneasy." },
    { ts: "2026-04-16T22:49", m: 10.00, state: "RESILIENT", trigger: "Hard work day", narrative: "On a break from my heavy coding work. Playing with a cat. Feeling more relaxed and motivated to keep going." },
    { ts: "2026-04-17T01:46", m: 3.62, state: "RESILIENT", trigger: "Aha moment", narrative: "I just had a breakthrough moment where I saw clearly the next big events of my life — the synchronicities, the exact papers I needed." },
    { ts: "2026-04-17T06:21", m: 0.30, state: "FRAGMENTED", trigger: "Birth of a real insight", narrative: "I'm having an insight moment. Started to watch an interview with Karl Friston, and within minutes I paused to understand better the concepts." },
    { ts: "2026-04-17T07:36", m: 0.22, state: "FRAGMENTED", trigger: "", narrative: "Going from a 'what the fuck' moment to complete blank. My brain feels wired but in a weird battery save mode." },
    { ts: "2026-04-17T23:00", m: 1.36, state: "RESILIENT", trigger: "Breakthrough", narrative: "I just scheduled my first meeting with someone that is important for what I'm building. Excitement, confusion, surrender, anxiety." },
    { ts: "2026-04-17T23:49", m: 1.54, state: "RESILIENT", trigger: "Breakthrough 2", narrative: "From being anxious about a meeting to having a wake-up on how amazing this opportunity is itself. I'm entering the testing stage of my theory." },
    { ts: "2026-04-18T03:09", m: 0.29, state: "FRAGMENTED", trigger: "", narrative: "Light feeling in my body, broad 3D aspect to my vision. Deep connection to past, present, and future at the same time." },
    { ts: "2026-04-18T04:38", m: 0.53, state: "FRAGMENTED", trigger: "Breakthrough 5", narrative: "Measuring in the middle of intense study with high intentional drive. After eating, studying connections between my framework and spiritual approaches." },
    { ts: "2026-04-18T17:25", m: 4.54, state: "RESILIENT", trigger: "Breakthrough 6", narrative: "It clicked that I get to prepare for a meaningful environment to present my idea — one that can actually test and validate it." },
    { ts: "2026-04-18T19:13", m: 3.35, state: "RESILIENT", trigger: "Breakthrough 7", narrative: "The more I prepare for my meeting the more mind-blowing it gets. I'm definitely following a coherent signal." },
    { ts: "2026-04-19T01:14", m: 0.71, state: "FRAGMENTED", trigger: "Pre-meeting", narrative: "Today was a weird day. Prepared the research on Keith Heinzerling to be fully ready for the meeting." },
    { ts: "2026-04-20T04:07", m: 1.49, state: "RESILIENT", trigger: "Pre-meeting!", narrative: "Today is a really exciting day. I'm prepping for my meeting tomorrow — a real chance to present my protocol." },
    { ts: "2026-04-20T04:21", m: 2.59, state: "RESILIENT", trigger: "Pre-meeting — grateful", narrative: "I used to sit in my bean bag to cry myself to sleep. Now I'm sitting while prepping for a meeting with someone that was just a dream." },
    { ts: "2026-04-20T18:01", m: 0.70, state: "FRAGMENTED", trigger: "Final session before meeting", narrative: "This is the session before meeting. Feeling very grateful for the opportunity to finally show years of work." },
    { ts: "2026-04-20T18:08", m: 1.12, state: "STABLE", trigger: "Post grounding session", narrative: "Follow up after grounding exercise. I repeated the grounding sentences from my own framework. Noticeably shifted." },
    { ts: "2026-04-20T20:39", m: 1.51, state: "RESILIENT", trigger: "", narrative: "Resting in the certainty that I'm not leaving myself again. I'll keep believing, listening to my heart, guts and soul." },
    { ts: "2026-04-20T23:15", m: 2.79, state: "RESILIENT", trigger: "Last one before meeting!", narrative: "20 minutes to my meeting with Dr. Heinzerling. Feeling nervous, but with a sense of calm within. I ran some grounding exercises." },
    { ts: "2026-04-21T14:40", m: 0.61, state: "FRAGMENTED", trigger: "Walking", narrative: "Testing entry while talking to Claude and deciding next steps of my project. Using this synchronization I built to think." },
    { ts: "2026-04-21T16:42", m: 1.59, state: "RESILIENT", trigger: "Actions after insight", narrative: "I'm doing my morning shift as a nanny. I channeled all new ideas and insights into doable next steps." },
    { ts: "2026-04-22T03:43", m: 10.00, state: "RESILIENT", trigger: "AI discovery", narrative: "I'm in an awe moment. I tested my theory on an AI model and it worked. My coherence layers reflected back on it." },
    { ts: "2026-04-22T06:22", m: 0.87, state: "STABLE", trigger: "Oh shit", narrative: "I'm starting to really receive how big what I am holding actually is. A tool that merges phenomenology with neuroscience." },
    { ts: "2026-04-23T04:23", m: 1.20, state: "RESILIENT", trigger: "Hunger + spirals", narrative: "Today was an intense day. Probably high F from the amount of uncertainty my narrative currently occupies." },
    { ts: "2026-04-23T16:14", m: 9.29, state: "RESILIENT", trigger: "What is going on", narrative: "I noticed a shift. Too focused on numbers, reaching goals. Now coming back to the actual signal." },
    { ts: "2026-04-24T02:39", m: 1.33, state: "RESILIENT", trigger: "I feel coherent", narrative: "In the middle of an awe/insight moment. System buffering, mix of frustration and deep sense of direction." },
    { ts: "2026-04-24T22:46", m: 0.57, state: "FRAGMENTED", trigger: "", narrative: "Living on the liminal line between what you know and what you don't know. Walking that edge." },
    { ts: "2026-04-25T18:37", m: 10.00, state: "RESILIENT", trigger: "I don't even know", narrative: "Meaningful synchronicities. I found a treehouse that resembled the one I used to play at as a child." },
    { ts: "2026-04-25T19:37", m: 2.31, state: "RESILIENT", trigger: "", narrative: "I wrote down the ideas, the new study plan, the steps to my new paper. I went back and read old pages of my journal." },
    { ts: "2026-04-26T00:40", m: 0.64, state: "FRAGMENTED", trigger: "Treehouse", narrative: "Sitting on top of a treehouse I discovered yesterday. Witnessed an encounter with a blue heron. Deep stillness." },
    { ts: "2026-04-27T05:27", m: 1.77, state: "RESILIENT", trigger: "Church day", narrative: "Still having meaningful coincidences. Right people showing at the right time. Connection with a blue heron." },
    { ts: "2026-04-27T19:09", m: 2.93, state: "RESILIENT", trigger: "Meeting — anxiety", narrative: "I caught my anxious agent working. Woke up at 3am, brain doing simulations of the future. Noticed it without fusing." },
    { ts: "2026-04-28T17:32", m: 5.04, state: "RESILIENT", trigger: "", narrative: "Getting good at noticing my anxious agent. My body is slowly fading away the necessity of being in defensive mode." },
    { ts: "2026-04-28T23:26", m: 7.04, state: "RESILIENT", trigger: "Angry as fuck", narrative: "I've been holding a framework that can integrate different frameworks in neuroscience, interoception and active inference." },
    { ts: "2026-04-29T00:47", m: 0.51, state: "FRAGMENTED", trigger: "Aha", narrative: "Heart beating fast, feet tingling, deep feeling of joy and gratefulness. In the middle of something big." },
    { ts: "2026-04-30T17:53", m: 0.37, state: "FRAGMENTED", trigger: "Big day", narrative: "Downloads on my paper going up with 95% download rate — crazy high for an independent researcher. Something is resonating." },
    { ts: "2026-05-01T14:03", m: 1.20, state: "RESILIENT", trigger: "I sent the email!", narrative: "I'm an independent researcher in cognitive systems. I never thought I would get here. I was driven here." },
    { ts: "2026-05-02T06:54", m: 0.94, state: "STABLE", trigger: "What is reality", narrative: "I'm really touching something deeper than me. What I was holding wasn't something I created — it was given." },
    { ts: "2026-05-02T23:20", m: 8.51, state: "RESILIENT", trigger: "Shower download", narrative: "Woke up from a dream where I was sharing a room with peer scientists in interoception and active inference." },
    { ts: "2026-05-05T04:49", m: 1.09, state: "STABLE", trigger: "Blank mode", narrative: "Feeling a little blank today. Went to work as a nanny. Writing an important paper on AI as epistemic scaffolding." },
    { ts: "2026-05-07T20:49", m: 3.51, state: "RESILIENT", trigger: "Life is good again", narrative: "It's been a few days since my last log. I feel so present — spiritually, mentally, emotionally." },
]

const stateColor: Record<string, string> = {
    RESILIENT: "#27ae60",
    STABLE: "#f0a500",
    FRAGMENTED: "#c0392b",
}

const stateLabel: Record<string, string> = {
    RESILIENT: "Resilient",
    STABLE: "Stable",
    FRAGMENTED: "Fragmented",
}

export default function NOf1() {
    const [hovered, setHovered] = useState<number | null>(null)

    const W = 680
    const H = 240
    const PAD_L = 20
    const PAD_R = 12
    const PAD_T = 16
    const PAD_B = 32

    const xs = sessions.map((_, i) => PAD_L + (i / (sessions.length - 1)) * (W - PAD_L - PAD_R))
    const toY = (m: number) => PAD_T + (1 - m / 10) * (H - PAD_T - PAD_B)

    const pathD = sessions.map((s, i) => `${i === 0 ? "M" : "L"}${xs[i].toFixed(1)},${toY(s.m).toFixed(1)}`).join(" ")
    const areaD = pathD + ` L${xs[sessions.length - 1].toFixed(1)},${H - PAD_B} L${xs[0].toFixed(1)},${H - PAD_B} Z`

    const hovS = hovered !== null ? sessions[hovered] : null

    return (
        <>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;500&display=swap" />
            <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: system-ui, sans-serif; background: #fff; color: #111; }
        header { position: fixed; top: 0; left: 0; right: 0; z-index: 100; background: #fff; border-bottom: 1px solid #eee; padding: 0 32px; }
        .header-inner { max-width: 900px; margin: 0 auto; display: flex; align-items: center; justify-content: center; gap: 40px; padding: 14px 0; }
        .header-name { font-size: 16px; font-weight: 500; color: #111; font-family: system-ui; white-space: nowrap; text-decoration: none; }
        nav { display: flex; gap: 24px; }
        nav a { font-size: 15px; color: #555; text-decoration: none; font-family: system-ui; white-space: nowrap; transition: color 0.15s; }
        nav a:hover { color: #111; }
        nav a.active { color: #111; font-weight: 500; }
        main { padding-top: 100px; padding-bottom: 100px; padding-left: 24px; padding-right: 24px; max-width: 760px; margin: 0 auto; }
        .back { font-size: 13px; color: #999; text-decoration: none; display: inline-block; margin-bottom: 48px; }
        .back:hover { color: #111; }
        .hero-label { font-size: 10px; font-weight: 600; color: #888; text-transform: uppercase; letter-spacing: 0.14em; font-family: system-ui; margin-bottom: 16px; }
        .hero-title { font-family: 'EB Garamond', Georgia, serif; font-size: clamp(32px, 5vw, 52px); font-weight: 500; color: #111; line-height: 1.15; margin-bottom: 16px; }
        .hero-subtitle { font-family: 'EB Garamond', Georgia, serif; font-size: clamp(16px, 2vw, 20px); font-weight: 400; color: #555; line-height: 1.6; margin-bottom: 24px; }
        .hero-meta { display: flex; gap: 24px; flex-wrap: wrap; align-items: center; font-size: 12px; color: #888; font-family: system-ui; margin-bottom: 56px; }
        .divider { width: 100%; height: 1px; background: #eee; margin: 48px 0; }
        .section { margin-bottom: 52px; }
        .section-label { font-size: 10px; font-weight: 600; color: #888; text-transform: uppercase; letter-spacing: 0.14em; font-family: system-ui; margin-bottom: 12px; }
        .section-title { font-family: 'EB Garamond', Georgia, serif; font-size: clamp(20px, 3vw, 26px); font-weight: 500; color: #111; line-height: 1.2; margin-bottom: 20px; }
        .section p { font-size: 16px; line-height: 1.9; color: #444; font-family: system-ui; margin-bottom: 16px; text-align: justify; hyphens: auto; }
        .section p:last-child { margin-bottom: 0; }
        .stat-row { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2px; margin-bottom: 32px; }
        .stat-card { border: 1px solid #eee; background: #fafafa; padding: 20px; }
        .stat-val { font-family: 'EB Garamond', Georgia, serif; font-size: 36px; font-weight: 500; color: #111; line-height: 1; margin-bottom: 6px; }
        .stat-label { font-size: 11px; color: #888; font-family: system-ui; text-transform: uppercase; letter-spacing: 0.1em; }
        .timeline-row { display: flex; gap: 20px; align-items: flex-start; padding: 16px 0; border-bottom: 1px solid #eee; }
        .timeline-row:last-child { border-bottom: none; }
        .timeline-dot { width: 10px; height: 10px; border-radius: 50%; flex-shrink: 0; margin-top: 6px; }
        .timeline-date { font-size: 11px; color: #aaa; font-family: system-ui; white-space: nowrap; padding-top: 2px; min-width: 90px; }
        .timeline-content { flex: 1; }
        .timeline-event { font-size: 14px; font-weight: 500; color: #111; font-family: system-ui; margin-bottom: 4px; }
        .timeline-desc { font-size: 13px; color: #666; font-family: system-ui; line-height: 1.6; }
        .cta-block { border-top: 1px solid #eee; padding-top: 32px; margin-top: 56px; display: flex; gap: 12px; flex-wrap: wrap; align-items: center; }
        .cta-link { font-size: 13px; color: #111; text-decoration: none; border: 1px solid #ddd; padding: 9px 20px; font-family: system-ui; letter-spacing: 0.04em; transition: border-color 0.15s, background 0.15s; }
        .cta-link:hover { border-color: #111; background: #f7f7f7; }
        .disclaimer { font-size: 12px; color: #aaa; font-family: system-ui; line-height: 1.7; font-style: italic; border-top: 1px solid #eee; padding-top: 20px; margin-top: 40px; }
        @media (max-width: 640px) { .stat-row { grid-template-columns: 1fr; } .header-inner { flex-direction: column; gap: 10px; padding: 12px 0; } }
      `}</style>

            <header>
                <div className="header-inner">
                    <a href="/" className="header-name">Root Lab</a>
                    <nav>
                        <a href="/n-of-1" className="active">N=1 Study</a>
                        <a href="/about-the-author">About the Author</a>
                        <a href="/contact">Contact</a>
                    </nav>
                </div>
            </header>

            <main>
                <a href="/" className="back">← Back</a>

                <div className="hero-label">Active · April 2026 — October 2026</div>
                <h1 className="hero-title">Root Extension — N=1 Longitudinal Study</h1>
                <p className="hero-subtitle">A self-as-instrument protocol tracking coherence across physiological, interoceptive, and narrative layers in real time</p>
                <div className="hero-meta">
                    <span>Bianca Avanzo · Independent Researcher</span>
                    <span>48 sessions · April 16 – May 7, 2026</span>
                    <span>HRV + heartbeat task + narrative scoring</span>
                </div>

                <div className="section">
                    <div className="section-label">Origin</div>
                    <h2 className="section-title">The research began as observation of myself</h2>
                    <p>In December 2024, before there was a framework or a metric or an app, there was a practice: longitudinal self-tracking, journaling, and deep inner work. I was observing myself the way a researcher observes a system — mapping symptoms, tracking patterns, re-contextualizing childhood experiences through what I was learning about brain development and nervous system regulation.</p>
                    <p>This was neurophenomenology applied not in a lab, but in a life. The systematic observation of my own experiential field — across states of fragmentation and integration, across days of clarity and days of collapse — produced the first dataset that Root Frequency Theory was built on.</p>
                    <p>What I noticed, over months of this work, was a direction. The more coherent I became at the symbolic layer — the more my self-narrative aligned with what my body was actually signaling — the sharper my perception became. Not smarter. More accurate. I was already measurably coherent by the time I began formal tracking. The inner work preceded the instrument. The instrument followed the pattern.</p>
                    <p>By February 2026, those observations had crystallized into two things: the RFT framework and the M-RFT metric. Root Extension became the way to formalize what I had already been doing informally — measuring coherence as it happens, in real time, in ecological conditions.</p>
                </div>

                <div className="divider" />

                <div className="section">
                    <div className="section-label">Protocol</div>
                    <h2 className="section-title">What gets measured and how</h2>
                    <p>Each session captures three components of the M-RFT metric simultaneously. Φ is derived from Apple Watch HRV — SDNN indexed against a 30-day rolling baseline, reflecting autonomic flexibility as a proxy for large-scale network coordination. Kₑ combines interoceptive accuracy from a randomized heartbeat detection task with narrative coherence scored via NLP across semantic, temporal, and causal dimensions. F is computed from HRV drop below baseline.</p>
                    <p>Sessions are initiated at ecologically naturalistic moments — not at fixed times — to capture coherence variation as it actually occurs: before meetings, during insight moments, in states of fragmentation, after grounding practices. This is not a controlled intervention study. It is a longitudinal ecological protocol designed to generate the kind of real-world data that lab studies cannot produce.</p>
                </div>

                <div className="divider" />

                <div className="section-label" style={{ marginBottom: 16 }}>Live data — April 16 to May 7, 2026</div>
                <div className="stat-row">
                    <div className="stat-card">
                        <div className="stat-val">48</div>
                        <div className="stat-label">Sessions logged</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-val">2.74</div>
                        <div className="stat-label">Mean M score</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-val">58%</div>
                        <div className="stat-label">Resilient states</div>
                    </div>
                </div>

                {/* Legend */}
                <div style={{ display: "flex", gap: 20, marginBottom: 12, flexWrap: "wrap" as const }}>
                    {(["RESILIENT", "STABLE", "FRAGMENTED"] as const).map(s => (
                        <div key={s} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 11, color: "#666", fontFamily: "system-ui" }}>
                            <div style={{ width: 8, height: 8, borderRadius: "50%", background: stateColor[s], flexShrink: 0 }} />
                            {stateLabel[s]}
                        </div>
                    ))}
                </div>

                {/* Chart */}
                <div style={{ position: "relative" as const, marginBottom: 8 }}>
                    <svg
                        width="100%"
                        viewBox={`0 0 ${W} ${H}`}
                        style={{ display: "block", cursor: "crosshair" }}
                        onMouseLeave={() => setHovered(null)}
                    >
                        {[0, 2.5, 5, 7.5, 10].map(v => (
                            <g key={v}>
                                <line x1={PAD_L} y1={toY(v)} x2={W - PAD_R} y2={toY(v)} stroke="#f0f0f0" strokeWidth="1" />
                                <text x={PAD_L - 2} y={toY(v) + 3} fontSize="9" fill="#ccc" fontFamily="system-ui" textAnchor="end">{v}</text>
                            </g>
                        ))}
                        <path d={areaD} fill="#111" fillOpacity="0.03" />
                        <path d={pathD} fill="none" stroke="#111" strokeWidth="1.5" strokeLinejoin="round" />
                        {sessions.map((s, i) => (
                            <circle
                                key={i}
                                cx={xs[i]}
                                cy={toY(s.m)}
                                r={hovered === i ? 6 : 4}
                                fill={stateColor[s.state]}
                                stroke="#fff"
                                strokeWidth="1.5"
                                style={{ cursor: "pointer", transition: "r 0.1s" }}
                                onMouseEnter={() => setHovered(i)}
                            />
                        ))}
                        {sessions.map((s, i) => {
                            if (i % 7 !== 0) return null
                            return (
                                <text key={i} x={xs[i]} y={H - 4} textAnchor="middle" fontSize="9" fill="#bbb" fontFamily="system-ui">
                                    {s.ts.slice(5, 10)}
                                </text>
                            )
                        })}
                    </svg>

                    {hovS && (
                        <div style={{
                            position: "absolute" as const, top: 0, right: 0,
                            background: "#111", color: "#fff",
                            padding: "10px 14px", fontFamily: "system-ui", fontSize: 12,
                            lineHeight: 1.6, maxWidth: 260, pointerEvents: "none" as const,
                        }}>
                            <div style={{ fontWeight: 600, marginBottom: 4, color: stateColor[hovS.state] }}>
                                {stateLabel[hovS.state]} · M = {hovS.m.toFixed(2)}
                            </div>
                            <div style={{ color: "#aaa", marginBottom: 6 }}>
                                {hovS.ts.replace("T", " ")}{hovS.trigger ? ` · ${hovS.trigger}` : ""}
                            </div>
                            <div style={{ color: "#ddd" }}>{hovS.narrative.slice(0, 140)}{hovS.narrative.length > 140 ? "…" : ""}</div>
                        </div>
                    )}
                </div>

                <p style={{ fontSize: 11, color: "#bbb", fontFamily: "system-ui", marginBottom: 48, fontStyle: "italic" }}>
                    Each point is one session. Hover to read the entry. M score 0–10. Color indicates state classification at time of measurement.
                </p>

                <div className="divider" />

                <div className="section">
                    <div className="section-label">Timeline</div>
                    <h2 className="section-title">From observation to instrument</h2>
                    <div style={{ marginTop: 8 }}>
                        {[
                            { date: "Dec 2024", color: "#888", event: "Longitudinal self-tracking begins", desc: "Daily journaling, symptom mapping, and deep inner work. Neurophenomenological observation of my own experiential field — fragmentation patterns, recovery trajectories, the relationship between narrative reframing and physiological shift." },
                            { date: "Feb 2026", color: "#444", event: "Root Frequency Theory published + M-RFT metric registered", desc: "14 months of first-person observation crystallize into a formal framework. C0–C4 nested architecture. M = (Φ · Kₑ) / F. DOI timestamped on PsyArXiv (embargoed). The metric precedes the instrument — the pattern preceded the measurement." },
                            { date: "Mar 2026", color: "#111", event: "Root Extension — first HRV session", desc: "The instrument becomes functional. Apple Watch HRV feeds the Φ proxy. Heartbeat task scores interoceptive accuracy. Narrative entry is scored for semantic, temporal, and causal coherence via Claude API. The N=1 study begins." },
                            { date: "Apr–Oct 2026", color: "#27ae60", event: "Active data collection", desc: "48 sessions across 21 days so far. M scores from 0.22 (acute fragmentation) to 10.00 (full resilience). Breakthrough moments, pre-meeting anxiety, grounding recovery cycles, insight states — all captured in real time." },
                            { date: "Dec 2026", color: "#27ae60", event: "Simultaneous launch", desc: "N=1 longitudinal paper submitted. M-RFT metric embargo lifts. Root Extension app publicly available. Six months of ecological coherence data — the first dataset of its kind." },
                        ].map((row, i) => (
                            <div className="timeline-row" key={i}>
                                <div className="timeline-dot" style={{ background: row.color }} />
                                <div className="timeline-date">{row.date}</div>
                                <div className="timeline-content">
                                    <div className="timeline-event">{row.event}</div>
                                    <div className="timeline-desc">{row.desc}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="divider" />

                <div className="section">
                    <div className="section-label">What this study investigates</div>
                    <h2 className="section-title">Coherence as a measurable, trackable property of lived experience</h2>
                    <p>This is not a clinical trial. There is no control condition, no blinding, no randomized intervention. What it is: a six-month ecological record of coherence variation in one person, across real conditions, using a novel multimodal instrument. The researcher is the subject. The app is simultaneously the intervention and the measurement instrument.</p>
                    <p>The N=1 longitudinal format is appropriate for this stage. It allows the detection of within-person patterns — fragmentation cascades, recovery trajectories, the lag between physiological disruption and narrative reintegration — that between-person designs cannot capture at this resolution. It generates the preliminary data structure needed to design a formal N=20–40 validation trial.</p>
                    <p>The question being tracked: does M score, computed from HRV, interoceptive accuracy, and narrative coherence, covary with subjective reports of experiential integration? Does the metric capture something real about the person's state — or does it miss the signal entirely? The early data suggests it captures something. The next step is to find out how much.</p>
                </div>

                <div className="cta-block">
                    <a href="/contact" className="cta-link" style={{ background: "#111", color: "#fff", borderColor: "#111" }}>Request protocol details →</a>
                    <a href="/research-plan" className="cta-link">M-RFT Coherence Metric →</a>
                    <a href="/" className="cta-link">← Back to Root Lab</a>
                </div>

                <p className="disclaimer">
                    This protocol is conducted as independent research in development, not as a clinical intervention. Data collection is ongoing. Results presented here are preliminary and pre-empirical. The researcher is the sole participant at this stage. IRB review will be required before any formal clinical trial.
                </p>
            </main>
        </>
    )
}