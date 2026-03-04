'use client'

import React, { useState } from "react"
import emailjs from "@emailjs/browser"

const SERVICE_ID = "service_9qxsgga"
const TEMPLATE_ID = "template_fs8gnoe"
const PUBLIC_KEY = "FUT2r59cTE4THMcRk"

const navLink: React.CSSProperties = {
    fontSize: 15, color: "#555", textDecoration: "none",
    fontFamily: "system-ui", whiteSpace: "nowrap",
}

const labelStyle: React.CSSProperties = {
    fontSize: 11, color: "#666", letterSpacing: "0.12em",
    textTransform: "uppercase", marginBottom: 6, display: "block",
}

const inputStyle: React.CSSProperties = {
    width: "100%", padding: "10px 12px",
    border: "1px solid #e0e0e0", borderRadius: 0,
    fontSize: 14, color: "#111", fontFamily: "system-ui",
    background: "#fff", outline: "none", boxSizing: "border-box",
}

const contactLink: React.CSSProperties = {
    fontSize: 14, color: "#111", textDecoration: "none",
    borderBottom: "1px solid #ddd", paddingBottom: 2,
}

export default function Contact() {
    const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" })
    const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle")

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        setStatus("sending")
        try {
            await emailjs.send(
                SERVICE_ID,
                TEMPLATE_ID,
                {
                    name: form.name,
                    email: form.email,
                    subject: form.subject,
                    message: form.message,
                    time: new Date().toLocaleString(),
                },
                PUBLIC_KEY
            )
            setStatus("sent")
            setForm({ name: "", email: "", subject: "", message: "" })
        } catch {
            setStatus("error")
        }
    }

    return (
        <>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;500&display=swap" />

            {/* TOP BAR */}
            <header style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, background: "#fff", borderBottom: "1px solid #eee", padding: "0 32px" }}>
                <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "center", gap: 40, padding: "14px 0" }}>
                    <a href="/" style={{ fontSize: 16, fontWeight: 500, color: "#111", fontFamily: "system-ui", whiteSpace: "nowrap", textDecoration: "none" }}>
                        Bianca Avanzo — The Root Frequency Theory
                    </a>
                    <nav style={{ display: "flex", gap: 24 }}>
                        <a href="/the-paper" style={navLink}>About RFT</a>
                        <a href="/about-the-author" style={navLink}>About the Author</a>
                        <a href="/contact" style={{ ...navLink, color: "#111", fontWeight: 500 }}>Contact</a>
                    </nav>
                </div>
            </header>

            <main style={{ paddingTop: 100, paddingBottom: 100, paddingLeft: 24, paddingRight: 24, fontFamily: "system-ui", maxWidth: 680, margin: "0 auto" }}>
                <a href="/" style={{ display: "inline-block", fontSize: 13, color: "#999", textDecoration: "none", marginBottom: 48, letterSpacing: "0.02em" }}>
                    ← Back
                </a>

                <h1 style={{ fontFamily: "'EB Garamond', Georgia, serif", fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 500, color: "#111", textAlign: "center", marginBottom: 12, lineHeight: 1.2 }}>
                    Contact
                </h1>
                <p style={{ textAlign: "center", color: "#999", fontSize: 14, marginBottom: 56, fontStyle: "italic" }}>
                    Research inquiries, collaboration proposals, and mentorship
                </p>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 48 }}>

                    {/* Left — info */}
                    <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
                        <div>
                            <p style={labelStyle}>Email</p>
                            <a href="mailto:avanzzorft@outlook.com" style={contactLink}>
                                avanzzorft@outlook.com
                            </a>
                        </div>

                        <div>
                            <p style={labelStyle}>LinkedIn</p>
                            <a href="https://www.linkedin.com/in/bianca-avanzo-b1b5231a9/" target="_blank" rel="noopener noreferrer" style={contactLink}>
                                Bianca Avanzo
                            </a>
                        </div>

                        <div>
                            <p style={labelStyle}>Topics</p>
                            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                                {["Academic mentorship", "Research collaboration", "M-RFT technical paper request", "Press / media", "Other"].map((t) => (
                                    <span key={t} style={{ fontSize: 13, color: "#666", lineHeight: 1.5 }}>— {t}</span>
                                ))}
                            </div>
                        </div>

                        <div style={{ borderTop: "1px solid #eee", paddingTop: 20 }}>
                            <p style={{ fontSize: 13, color: "#aaa", lineHeight: 1.7, fontStyle: "italic" }}>
                                To request the M-RFT technical paper, select that subject or include it in your message.
                            </p>
                        </div>
                    </div>

                    {/* Right — form */}
                    <div>
                        {status === "sent" ? (
                            <div style={{ border: "1px solid #eee", borderRadius: 10, padding: "36px 28px", textAlign: "center", background: "#fafafa" }}>
                                <p style={{ fontFamily: "'EB Garamond', Georgia, serif", fontSize: 22, color: "#111", marginBottom: 10 }}>
                                    Message sent.
                                </p>
                                <p style={{ fontSize: 14, color: "#888", lineHeight: 1.7, marginBottom: 24 }}>
                                    Thank you — I will get back to you as soon as possible.
                                </p>
                                <button onClick={() => setStatus("idle")} style={{ fontSize: 12, color: "#aaa", background: "none", border: "none", cursor: "pointer", textDecoration: "underline" }}>
                                    Send another message
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 18 }}>

                                <div>
                                    <label style={labelStyle} htmlFor="name">Name</label>
                                    <input id="name" name="name" type="text" required placeholder="Your name" value={form.name} onChange={handleChange} style={inputStyle} />
                                </div>

                                <div>
                                    <label style={labelStyle} htmlFor="email">Email</label>
                                    <input id="email" name="email" type="email" required placeholder="your@email.com" value={form.email} onChange={handleChange} style={inputStyle} />
                                </div>

                                <div>
                                    <label style={labelStyle} htmlFor="subject">Subject</label>
                                    <select id="subject" name="subject" value={form.subject} onChange={handleChange} style={{ ...inputStyle, color: form.subject ? "#111" : "#aaa" }}>
                                        <option value="" disabled>Select a topic</option>
                                        <option value="Academic mentorship">Academic mentorship</option>
                                        <option value="Research collaboration">Research collaboration</option>
                                        <option value="Request: M-RFT Technical Paper">Request: M-RFT Technical Paper</option>
                                        <option value="Press / media">Press / media</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>

                                <div>
                                    <label style={labelStyle} htmlFor="message">Message</label>
                                    <textarea id="message" name="message" required rows={5} placeholder="Your message..." value={form.message} onChange={handleChange} style={{ ...inputStyle, resize: "vertical", minHeight: 120 }} />
                                </div>

                                {status === "error" && (
                                    <p style={{ fontSize: 13, color: "#c0392b", margin: 0 }}>
                                        Something went wrong. Please try again or email directly at avanzzorft@outlook.com
                                    </p>
                                )}

                                <button
                                    type="submit"
                                    disabled={status === "sending"}
                                    style={{
                                        alignSelf: "flex-start", padding: "10px 24px",
                                        background: status === "sending" ? "#aaa" : "#111",
                                        color: "#fff", border: "none", fontSize: 13,
                                        letterSpacing: "0.04em", cursor: status === "sending" ? "not-allowed" : "pointer",
                                        transition: "background 0.2s",
                                    }}
                                >
                                    {status === "sending" ? "Sending..." : "Send Message"}
                                </button>

                                <p style={{ fontSize: 12, color: "#bbb", marginTop: -8 }}>
                                    Message sent directly to inbox — no mail client needed.
                                </p>
                            </form>
                        )}
                    </div>
                </div>
            </main>
        </>
    )
}

