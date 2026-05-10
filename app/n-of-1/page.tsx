'use client'

import React, { useState } from "react"

const sessions = [
    { ts: "2026-04-16T21:40", m: 0.63, state: "FRAGMENTED", trigger: "Coffee", narrative: "Post-caffeine intake. Autonomic arousal elevated. Engaged in high-cognitive-load technical work with unresolved error states." },
    { ts: "2026-04-16T21:43", m: 0.38, state: "FRAGMENTED", trigger: "", narrative: "First test session during active app debugging. Sustained attention under uncertainty. Regulatory burden elevated." },
    { ts: "2026-04-16T21:57", m: 10.00, state: "RESILIENT", trigger: "", narrative: "Three hours of uninterrupted deep work. Physiological arousal present but interpreted as engagement rather than threat." },
    { ts: "2026-04-16T22:49", m: 10.00, state: "RESILIENT", trigger: "Recovery break", narrative: "Intentional rest break mid-work session. Subjective state shifted toward relaxation and renewed motivational orientation." },
    { ts: "2026-04-17T01:46", m: 3.62, state: "RESILIENT", trigger: "Insight moment", narrative: "Spontaneous integration of previously disparate knowledge structures. Narrative coherence elevated. System appeared to be updating predictive models rapidly." },
    { ts: "2026-04-17T06:21", m: 0.30, state: "FRAGMENTED", trigger: "Theoretical insight", narrative: "Deep conceptual engagement with predictive processing literature. Insight state present but HRV suppressed — high cognitive load with low somatic integration." },
    { ts: "2026-04-17T07:36", m: 0.22, state: "FRAGMENTED", trigger: "", narrative: "Post-insight depletion state. Subjective experience of blank, dissociated quality. System likely in consolidation mode following rapid model updating." },
    { ts: "2026-04-17T23:00", m: 1.36, state: "RESILIENT", trigger: "High-stakes meeting scheduled", narrative: "First professional meeting with a senior researcher confirmed. Mixed autonomic state: elevated arousal with maintained regulatory capacity." },
    { ts: "2026-04-17T23:49", m: 1.54, state: "RESILIENT", trigger: "Reappraisal", narrative: "Cognitive reappraisal of upcoming meeting. Shift from threat-oriented to opportunity-oriented framing. Subjective coherence increased." },
    { ts: "2026-04-18T03:09", m: 0.29, state: "FRAGMENTED", trigger: "", narrative: "Preparation phase for high-stakes meeting. Autonomic state fragmented despite elevated subjective meaning. Cross-scale misalignment present." },
    { ts: "2026-04-18T04:38", m: 0.53, state: "FRAGMENTED", trigger: "Deep study", narrative: "Intensive theoretical reading session. Intentional focus state with elevated regulatory burden. HRV suppressed below baseline." },
    { ts: "2026-04-18T17:25", m: 4.54, state: "RESILIENT", trigger: "Clarity", narrative: "Sudden integration: clarity about the significance of presenting theoretical work to an external validation context for the first time." },
    { ts: "2026-04-18T19:13", m: 3.35, state: "RESILIENT", trigger: "Preparation", narrative: "Continued meeting preparation. Narrative coherence high. Signal orientation maintained throughout session." },
    { ts: "2026-04-19T01:14", m: 0.71, state: "FRAGMENTED", trigger: "Pre-meeting", narrative: "Post-preparation state. Autonomic dysregulation despite high subjective coherence — possible anticipatory allostatic load." },
    { ts: "2026-04-20T04:07", m: 1.49, state: "RESILIENT", trigger: "Pre-meeting", narrative: "Morning session prior to first professional presentation. Excitement and regulatory activation co-present." },
    { ts: "2026-04-20T04:21", m: 2.59, state: "RESILIENT", trigger: "Gratitude", narrative: "Reflection on longitudinal personal trajectory. High narrative coherence. Sense of continuity between past and present self-states." },
    { ts: "2026-04-20T18:01", m: 0.70, state: "FRAGMENTED", trigger: "Pre-meeting baseline", narrative: "Baseline measurement immediately before high-stakes meeting. Autonomic arousal elevated. Subjective coherence paradoxically high." },
    { ts: "2026-04-20T18:08", m: 1.12, state: "STABLE", trigger: "Grounding protocol", narrative: "Post-grounding session using framework-derived self-anchoring phrases. Measurable shift in regulatory state following symbolic intervention." },
    { ts: "2026-04-20T20:39", m: 1.51, state: "RESILIENT", trigger: "", narrative: "Stable resting state. Subjective sense of self-continuity present. Regulatory burden reduced from earlier session." },
    { ts: "2026-04-20T23:15", m: 2.79, state: "RESILIENT", trigger: "Final pre-meeting", narrative: "Final session prior to meeting. Anxiety present alongside regulated calm. Grounding exercises conducted immediately before." },
    { ts: "2026-04-21T14:40", m: 0.61, state: "FRAGMENTED", trigger: "Walking", narrative: "Ambulatory session during active planning. Low HRV relative to baseline. Cognitive load high despite low subjective distress." },
    { ts: "2026-04-21T16:42", m: 1.59, state: "RESILIENT", trigger: "Post-insight integration", narrative: "Session during caregiving work shift. Insights from prior day translated into structured action plan. Regulatory state stabilized." },
    { ts: "2026-04-22T03:43", m: 10.00, state: "RESILIENT", trigger: "Theoretical validation", narrative: "Empirical test of framework on an AI system produced output coherent with theoretical predictions. High subjective coherence and full physiological resilience." },
    { ts: "2026-04-22T06:22", m: 0.87, state: "STABLE", trigger: "Integration moment", narrative: "Delayed processing of the scope of current work. Autonomic state suppressed. Cognitive-somatic lag observed." },
    { ts: "2026-04-23T04:23", m: 1.20, state: "RESILIENT", trigger: "High-load day", narrative: "End of high-uncertainty day. Elevated F score earlier in the day. Narrative coherence recovering by session time." },
    { ts: "2026-04-23T16:14", m: 9.29, state: "RESILIENT", trigger: "Recalibration", narrative: "Noticed over-indexing on outcome metrics. Intentional reorientation toward signal-following. Subjective coherence shifted markedly." },
    { ts: "2026-04-24T02:39", m: 1.33, state: "RESILIENT", trigger: "Coherence state", narrative: "Mid-insight session. Mixed frustration and directional clarity. Subjective coherence rated high despite moderate M score." },
    { ts: "2026-04-24T22:46", m: 0.57, state: "FRAGMENTED", trigger: "", narrative: "Liminal epistemic state — at the boundary between established knowledge and emerging theoretical understanding. Autonomic state fragmented." },
    { ts: "2026-04-25T18:37", m: 10.00, state: "RESILIENT", trigger: "Meaningful coincidence", narrative: "Sequence of temporally proximate meaningful environmental stimuli noted. High subjective coherence. Full physiological resilience." },
    { ts: "2026-04-25T19:37", m: 2.31, state: "RESILIENT", trigger: "", narrative: "Post-insight documentation session. Study plan and paper outline produced. Retrospective journal review conducted." },
    { ts: "2026-04-26T00:40", m: 0.64, state: "FRAGMENTED", trigger: "Environmental immersion", narrative: "Outdoor session in novel environment. High subjective meaning. Autonomic state fragmented — possible allostatic recovery in progress." },
    { ts: "2026-04-27T05:27", m: 1.77, state: "RESILIENT", trigger: "Social context", narrative: "Community engagement day. Continued pattern of environmentally meaningful encounters. Regulatory state moderate." },
    { ts: "2026-04-27T19:09", m: 2.93, state: "RESILIENT", trigger: "Anticipatory anxiety", narrative: "Nocturnal anticipatory activation noted on waking. Anxious regulatory pattern observed without fusion. Metacognitive capacity maintained." },
    { ts: "2026-04-28T17:32", m: 5.04, state: "RESILIENT", trigger: "", narrative: "Improved detection of anxious regulatory patterns across sessions. Defensive activation decreasing. Self-monitoring capacity increasing." },
    { ts: "2026-04-28T23:26", m: 7.04, state: "RESILIENT", trigger: "High epistemic load", narrative: "Engaged with the integrative scope of current theoretical work. High arousal state with strong narrative coherence. F score within resilient range." },
    { ts: "2026-04-29T00:47", m: 0.51, state: "FRAGMENTED", trigger: "Insight onset", narrative: "Physiological markers consistent with insight state onset: elevated heart rate, peripheral activation, positive affect. HRV suppressed." },
    { ts: "2026-04-30T17:53", m: 0.37, state: "FRAGMENTED", trigger: "High-activity day", narrative: "Significant external traction noted in paper download metrics. Autonomic state fragmented despite high subjective salience of events." },
    { ts: "2026-05-01T14:03", m: 1.20, state: "RESILIENT", trigger: "Outreach sent", narrative: "First formal researcher outreach submitted. Subjective sense of identity-role coherence elevated. Regulatory state moderate." },
    { ts: "2026-05-02T06:54", m: 0.94, state: "STABLE", trigger: "Liminal state", narrative: "Subjective sense of contact with something beyond individual authorship. Autonomic state stable. Reflective processing mode active." },
    { ts: "2026-05-02T23:20", m: 8.51, state: "RESILIENT", trigger: "Integration after sleep", narrative: "Post-sleep integration of prior day's material. Dream content consistent with active processing of research directions. Full physiological resilience." },
    { ts: "2026-05-05T04:49", m: 1.09, state: "STABLE", trigger: "Low-arousal state", narrative: "Low-arousal session following caregiving work shift. Reduced subjective engagement. Writing process ongoing at reduced intensity." },
    { ts: "2026-05-07T20:49", m: 3.51, state: "RESILIENT", trigger: "Return to baseline", narrative: "Return after multi-day gap. Subjective report of increased presence across experiential domains. Regulatory state fully stabilized." },
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

function AppPrototype() {
    const [step, setStep] = useState(0)
    const [timer, setTimer] = useState<number | null>(null)
    const [secs, setSecs] = useState(15)
    const [running, setRunning] = useState(false)
    const [conf, setConf] = useState("Very sure")
    const [coherence, setCoherence] = useState(10)
    const intervalRef = React.useRef<ReturnType<typeof setInterval> | null>(null)

    const startTimer = () => {
        if (running) return
        setRunning(true)
        setSecs(15)
        intervalRef.current = setInterval(() => {
            setSecs(s => {
                if (s <= 1) {
                    clearInterval(intervalRef.current!)
                    setRunning(false)
                    return 0
                }
                return s - 1
            })
        }, 1000)
    }

    const slides = [
        // Step 1 — narrative
        <div key="s1" style={{ display: "flex", flexDirection: "column" as const, height: "100%" }}>
            <div style={{ fontSize: 9, fontWeight: 700, color: "#888", letterSpacing: "0.1em", textTransform: "uppercase" as const, marginBottom: 4, fontFamily: "system-ui" }}>Step 1 of 3</div>
            <div style={{ fontSize: 17, fontWeight: 700, color: "#111", lineHeight: 1.2, marginBottom: 4, fontFamily: "system-ui" }}>What's happening in your body right now?</div>
            <div style={{ fontSize: 12, color: "#aaa", marginBottom: 12, fontFamily: "system-ui" }}>Write anything — sensations, feelings, what you notice. There's no right answer.</div>
            <div style={{ background: "#f8f8f6", border: "1px solid #e8e8e3", borderRadius: 10, padding: "10px 12px", fontSize: 12, color: "#555", lineHeight: 1.6, marginBottom: 14, flex: 1, fontFamily: "system-ui" }}>
                It's been a few days since my last log. I feel so present — spiritually, mentally, emotionally. Sleeping feels like being embraced by pure calm. I wake up grateful, refreshed.
            </div>
            <button onClick={() => setStep(1)} style={{ background: "#2563eb", color: "#fff", border: "none", borderRadius: 14, padding: "13px", fontSize: 15, fontWeight: 600, cursor: "pointer", fontFamily: "system-ui" }}>Next →</button>
        </div>,

        // Step 2 — heartbeat
        <div key="s2" style={{ display: "flex", flexDirection: "column" as const, height: "100%", alignItems: "stretch" }}>
            <div style={{ fontSize: 9, fontWeight: 700, color: "#888", letterSpacing: "0.1em", textTransform: "uppercase" as const, marginBottom: 4, fontFamily: "system-ui" }}>Step 2 of 3</div>
            <div style={{ fontSize: 17, fontWeight: 700, color: "#111", marginBottom: 4, fontFamily: "system-ui" }}>Sense your heartbeat.</div>
            <div style={{ fontSize: 12, color: "#aaa", marginBottom: 16, fontFamily: "system-ui" }}>Without touching your body, notice your heartbeat from the inside. Count each pulse you sense for 15 seconds.</div>
            <div style={{ display: "flex", justifyContent: "center", marginBottom: 16 }}>
                <button onClick={startTimer} style={{
                    width: 100, height: 100, borderRadius: "50%",
                    border: `3px solid ${running ? "#1d4ed8" : "#2563eb"}`,
                    background: running ? "#eff6ff" : "#fff",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    cursor: running ? "default" : "pointer", transition: "all .2s",
                }}>
                    <span style={{ fontSize: 18, fontWeight: 700, color: "#111", fontFamily: "system-ui" }}>
                        {secs === 0 ? "Done" : running ? `${secs}s` : "Start"}
                    </span>
                </button>
            </div>
            <div style={{ fontSize: 13, color: "#333", marginBottom: 6, fontFamily: "system-ui" }}>How many beats did you sense?</div>
            <input defaultValue="23" style={{ border: "1px solid #e0e0d8", borderRadius: 8, padding: "8px 10px", fontSize: 14, marginBottom: 10, fontFamily: "system-ui", width: "100%", boxSizing: "border-box" as const }} />
            <div style={{ fontSize: 13, color: "#333", marginBottom: 8, fontFamily: "system-ui" }}>How confident are you?</div>
            <div style={{ display: "flex", gap: 6, marginBottom: 14 }}>
                {["Not sure", "Somewhat", "Very sure"].map(c => (
                    <button key={c} onClick={() => setConf(c)} style={{
                        flex: 1, padding: "7px 4px", borderRadius: 20,
                        border: `1px solid ${conf === c ? "#999" : "#e0e0d8"}`,
                        background: conf === c ? "#f0f0ec" : "#fff",
                        fontSize: 11, color: conf === c ? "#111" : "#666",
                        fontWeight: conf === c ? 600 : 400, cursor: "pointer", fontFamily: "system-ui",
                    }}>{c}</button>
                ))}
            </div>
            <button onClick={() => setStep(2)} style={{ background: "#2563eb", color: "#fff", border: "none", borderRadius: 14, padding: "13px", fontSize: 15, fontWeight: 600, cursor: "pointer", fontFamily: "system-ui" }}>Next →</button>
        </div>,

        // Step 3 — trigger + coherence
        <div key="s3" style={{ display: "flex", flexDirection: "column" as const, height: "100%" }}>
            <div style={{ fontSize: 9, fontWeight: 700, color: "#888", letterSpacing: "0.1em", textTransform: "uppercase" as const, marginBottom: 4, fontFamily: "system-ui" }}>Step 3 of 3</div>
            <div style={{ fontSize: 17, fontWeight: 700, color: "#111", marginBottom: 14, fontFamily: "system-ui" }}>Almost done.</div>
            <div style={{ fontSize: 13, fontWeight: 500, color: "#111", marginBottom: 3, fontFamily: "system-ui" }}>What triggered this state, if anything?</div>
            <div style={{ fontSize: 11, color: "#aaa", marginBottom: 6, fontFamily: "system-ui" }}>Optional — a situation, thought, or event.</div>
            <input defaultValue="Life is good again" style={{ border: "1px solid #2563eb", borderRadius: 8, padding: "8px 10px", fontSize: 13, marginBottom: 14, fontFamily: "system-ui", width: "100%", boxSizing: "border-box" as const }} />
            <div style={{ fontSize: 13, fontWeight: 500, color: "#111", marginBottom: 6, fontFamily: "system-ui" }}>How coherent do you feel right now? <strong>{coherence}/10</strong></div>
            <input type="range" min={1} max={10} value={coherence} onChange={e => setCoherence(Number(e.target.value))}
                style={{ width: "100%", accentColor: "#2563eb", marginBottom: 4 }} />
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 10, color: "#aaa", marginBottom: 14, fontFamily: "system-ui" }}>
                <span>Scattered</span><span>Fully here</span>
            </div>
            <button onClick={() => setStep(3)} style={{ background: "#16a34a", color: "#fff", border: "none", borderRadius: 14, padding: "13px", fontSize: 15, fontWeight: 600, cursor: "pointer", fontFamily: "system-ui" }}>Calculate M →</button>
        </div>,

        // Result
        <div key="s4" style={{ display: "flex", flexDirection: "column" as const, height: "100%" }}>
            <div style={{ background: "#f0fdf4", borderRadius: 16, padding: "16px 14px", marginBottom: 12, textAlign: "center" as const }}>
                <div style={{ fontSize: 11, fontWeight: 600, color: "#888", letterSpacing: "0.1em", textTransform: "uppercase" as const, marginBottom: 4, fontFamily: "system-ui" }}>Session Result</div>
                <div style={{ fontSize: 60, fontWeight: 800, color: "#16a34a", lineHeight: 1, fontFamily: "system-ui" }}>3.51</div>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", color: "#16a34a", marginBottom: 12, fontFamily: "system-ui" }}>RESILIENT</div>
                <div style={{ display: "flex", gap: 6 }}>
                    {[["Φ", "1.00"], ["Kₑ", "0.61"], ["F", "0.08"]].map(([sym, val]) => (
                        <div key={sym} style={{ flex: 1, background: "#fff", borderRadius: 10, padding: "8px 4px", textAlign: "center" as const, border: "1px solid #e8e8e3" }}>
                            <div style={{ fontSize: 10, color: "#aaa", fontFamily: "system-ui" }}>{sym}</div>
                            <div style={{ fontSize: 15, fontWeight: 700, color: "#111", fontFamily: "system-ui" }}>{val}</div>
                        </div>
                    ))}
                </div>
            </div>
            <div style={{ background: "#f1f0f0", borderRadius: 12, padding: "12px", flex: 1, marginBottom: 12 }}>
                <div style={{ fontSize: 9, color: "#aaa", letterSpacing: "0.1em", textTransform: "uppercase" as const, marginBottom: 6, fontFamily: "system-ui" }}>⌁ Epistemic scaffolding</div>
                <div style={{ fontSize: 12, color: "#333", lineHeight: 1.6, fontFamily: "system-ui" }}>Your nervous system has shifted into a high-coherence, low-load state (Φ=1.00, F=0.08) — interoceptive alignment is bridging prediction and sensation cleanly. The blank-mind clarity is your dopaminergic system stabilizing after rapid narrative restructuring.</div>
            </div>
            <button onClick={() => setStep(4)} style={{ background: "#444", color: "#fff", border: "none", borderRadius: 14, padding: "11px", fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "system-ui" }}>View detail →</button>
        </div>,

        // Detail
        <div key="s5" style={{ display: "flex", flexDirection: "column" as const, height: "100%", overflowY: "auto" as const }}>
            <div style={{ fontSize: 9, color: "#aaa", letterSpacing: "0.1em", textTransform: "uppercase" as const, marginBottom: 10, fontFamily: "system-ui" }}>What was measured</div>
            {[
                { sym: "Φ", name: "Body integration", val: "1.00", desc: "Your nervous system was operating as a unified system. HRV at full baseline." },
                { sym: "IA", name: "Heartbeat accuracy", val: "1.00", desc: "Your heartbeat count matched Apple Watch ground truth exactly." },
                { sym: "NC", name: "Narrative coherence", val: "1.00", desc: "Your entry was fully time-anchored, semantically connected, and causally integrated." },
                { sym: "Kₑ", name: "Mind-body alignment", val: "0.61", desc: "IA × NC — how well your internal signals and your narrative about them matched." },
                { sym: "F", name: "Nervous system load", val: "0.08", desc: "Minimal regulatory burden relative to your 30-day baseline. System operating with ease." },
            ].map(({ sym, name, val, desc }) => (
                <div key={sym} style={{ background: "#fff", borderRadius: 10, padding: "10px 12px", marginBottom: 8, border: "1px solid #eee" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 3 }}>
                        <span style={{ fontSize: 13, fontWeight: 600, color: "#2563eb", fontFamily: "system-ui" }}>{sym} &nbsp;{name}</span>
                        <span style={{ fontSize: 14, fontWeight: 700, color: "#111", fontFamily: "system-ui" }}>{val}</span>
                    </div>
                    <div style={{ fontSize: 11, color: "#888", lineHeight: 1.4, fontFamily: "system-ui" }}>{desc}</div>
                </div>
            ))}
            <button onClick={() => { setStep(0); setSecs(15); setRunning(false); if (intervalRef.current) clearInterval(intervalRef.current) }}
                style={{ background: "#111", color: "#fff", border: "none", borderRadius: 14, padding: "11px", fontSize: 13, fontWeight: 600, cursor: "pointer", marginTop: 4, fontFamily: "system-ui" }}>Done</button>
        </div>,
    ]

    const navLabels = ["Check-In — Step 1 of 3", "Check-In — Step 2 of 3", "Check-In — Step 3 of 3", "Session Result", "Session Detail"]

    return (
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 48 }}>
            {/* Phone */}
            <div style={{ background: "#1c1c1e", borderRadius: 44, padding: 10, boxShadow: "0 0 0 1px #2a2a2a, 0 24px 48px rgba(0,0,0,0.18)", width: 300, flexShrink: 0 }}>
                {/* Notch */}
                <div style={{ background: "#1c1c1e", borderRadius: "20px 20px 0 0", height: 28, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <div style={{ width: 80, height: 22, background: "#000", borderRadius: 20, display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#1a1a1a", border: "1px solid #333" }} />
                    </div>
                </div>
                {/* Screen */}
                <div style={{ background: "#f5f5f0", borderRadius: "0 0 32px 32px", overflow: "hidden" }}>
                    {/* Status + nav */}
                    <div style={{ background: "#fff", padding: "10px 16px 8px", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #f0f0ec" }}>
                        <span style={{ fontSize: 11, fontWeight: 600, color: "#555", fontFamily: "system-ui" }}>{navLabels[step]}</span>
                        <button onClick={() => { setStep(0); setSecs(15); setRunning(false); if (intervalRef.current) clearInterval(intervalRef.current) }}
                            style={{ fontSize: 12, color: "#666", background: "#f0f0ec", border: "none", borderRadius: 20, padding: "3px 10px", cursor: "pointer", fontFamily: "system-ui" }}>
                            {step === 0 ? "Cancel" : "Done"}
                        </button>
                    </div>
                    {/* Progress dots */}
                    <div style={{ display: "flex", gap: 5, justifyContent: "center", padding: "8px 0 4px", background: "#fff" }}>
                        {[0, 1, 2, 3, 4].map(i => (
                            <div key={i} style={{ width: 6, height: 6, borderRadius: "50%", background: i === step ? "#2563eb" : "#ddd", transition: "background .2s" }} />
                        ))}
                    </div>
                    {/* Slide */}
                    <div style={{ padding: "16px 18px 20px", height: 500, display: "flex", flexDirection: "column" as const, overflowY: "auto" as const }}>
                        {slides[step]}
                    </div>
                </div>
            </div>
        </div>
    )
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
        .hero-meta { display: flex; gap: 24px; flex-wrap: wrap; align-items: center; font-size: 12px; color: #888; font-family: system-ui; margin-bottom: 48px; }
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

                {/* APP PROTOTYPE */}
                <div className="section-label" style={{ marginBottom: 16 }}>The instrument</div>
                <AppPrototype />

                {/* STATS */}
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

                {/* LEGEND */}
                <div style={{ display: "flex", gap: 20, marginBottom: 12, flexWrap: "wrap" as const }}>
                    {(["RESILIENT", "STABLE", "FRAGMENTED"] as const).map(s => (
                        <div key={s} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 11, color: "#666", fontFamily: "system-ui" }}>
                            <div style={{ width: 8, height: 8, borderRadius: "50%", background: stateColor[s], flexShrink: 0 }} />
                            {stateLabel[s]}
                        </div>
                    ))}
                </div>

                {/* CHART */}
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
                            <div style={{ color: "#ddd" }}>{hovS.narrative}</div>
                        </div>
                    )}
                </div>

                <p style={{ fontSize: 11, color: "#bbb", fontFamily: "system-ui", marginBottom: 48, fontStyle: "italic" }}>
                    Each point is one session. Hover to read the session note. M score 0–10. Color indicates state classification at time of measurement.
                </p>

                <div className="divider" />

                <div className="section">
                    <div className="section-label">Origin</div>
                    <h2 className="section-title">The research began as observation of the self</h2>
                    <p>In December 2024, before there was a framework or a metric or an app, there was a practice: longitudinal self-tracking, journaling, and sustained inner work grounded in neurophenomenological method. The process involved mapping symptoms, tracking patterns across time, and re-contextualizing early developmental experiences through contemporary knowledge of brain development and nervous system regulation.</p>
                    <p>This was neurophenomenology applied not in a controlled laboratory, but in the conditions of everyday life. The systematic observation of one's own experiential field — across states of fragmentation and integration, across days of acute clarity and acute dysregulation — produced the first dataset from which Root Frequency Theory was constructed.</p>
                    <p>What emerged from months of this work was a direction: the more coherent the symbolic layer became — the more the self-narrative aligned with what the body was actually signaling — the more accurate the perception of internal and external states. Coherence was measurably present before formal tracking began. The inner work preceded the instrument. The instrument followed the observed pattern.</p>
                    <p>By February 2026, those observations had crystallized into two formal outputs: the RFT framework and the M-RFT metric. Root Extension became the means by which an informal practice was formalized into a replicable measurement instrument — computing coherence in real time, under ecological conditions, session by session.</p>
                </div>

                <div className="divider" />

                <div className="section">
                    <div className="section-label">Protocol</div>
                    <h2 className="section-title">What gets measured and how</h2>
                    <p>Each session captures three components of the M-RFT metric simultaneously. Φ is derived from Apple Watch HRV — SDNN indexed against a 30-day rolling baseline, reflecting autonomic flexibility as a proxy for large-scale network coordination. Kₑ combines interoceptive accuracy from a randomized heartbeat detection task with narrative coherence scored across semantic, temporal, and causal dimensions via natural language processing. F is computed from HRV drop below baseline, indexing regulatory burden.</p>
                    <p>Sessions are initiated at ecologically naturalistic moments rather than at fixed times, in order to capture coherence variation as it actually occurs: prior to high-stakes professional encounters, during spontaneous insight states, during acute fragmentation, and following deliberate grounding practices. This is not a controlled intervention study. It is a longitudinal ecological protocol designed to generate the kind of within-person, real-world data that laboratory designs cannot produce at this resolution.</p>
                </div>

                <div className="divider" />

                <div className="section">
                    <div className="section-label">Timeline</div>
                    <h2 className="section-title">From observation to instrument</h2>
                    <div style={{ marginTop: 8 }}>
                        {[
                            { date: "Dec 2024", color: "#888", event: "Longitudinal self-tracking begins", desc: "Daily journaling, symptom mapping, and sustained inner work. Neurophenomenological observation of one's own experiential field — fragmentation patterns, recovery trajectories, and the relationship between narrative reframing and physiological shift." },
                            { date: "Feb 2026", color: "#444", event: "Root Frequency Theory published · M-RFT metric registered", desc: "Fourteen months of first-person observation crystallize into a formal framework. C0–C4 nested architecture. Preprint registered with DOI (embargoed). The metric precedes the instrument — the theoretical pattern preceded the measurement instrument." },
                            { date: "Mar 2026", color: "#111", event: "Root Extension — first HRV session", desc: "The instrument becomes functional. Apple Watch HRV feeds the Φ proxy. Heartbeat task scores interoceptive accuracy. Narrative entry scored for semantic, temporal, and causal coherence via API. N=1 data collection begins." },
                            { date: "Apr–Oct 2026", color: "#27ae60", event: "Active data collection", desc: "48 sessions across 21 days to date. M scores ranging from 0.22 (acute fragmentation) to 10.00 (full physiological resilience). Insight states, anticipatory anxiety, grounding recovery cycles — all captured under real-world ecological conditions." },
                            { date: "Dec 2026", color: "#27ae60", event: "Simultaneous public launch", desc: "N=1 longitudinal paper submitted. M-RFT metric embargo lifts. Root Extension app publicly available. Six months of ecological coherence data — the first dataset of its kind in the field." },
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
                    <p>This is not a clinical trial. There is no control condition, no blinding, no randomized intervention. What it is: a six-month ecological record of coherence variation in one participant, across real-world conditions, using a novel multimodal instrument. The researcher is the subject. The app is simultaneously the intervention and the measurement instrument.</p>
                    <p>The N=1 longitudinal format is appropriate for this stage of investigation. It permits the detection of within-person patterns — fragmentation cascades, recovery trajectories, the temporal lag between physiological disruption and narrative reintegration — that between-person designs cannot resolve at this level of granularity. It generates the preliminary data structure required to design a formal N=20–40 validation trial.</p>
                    <p>The central empirical question: does M score, computed from HRV, interoceptive accuracy, and narrative coherence, covary with subjective reports of experiential integration? The preliminary data suggests the metric is tracking something. The next step is to determine how much, and under what conditions.</p>
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