(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,35541,e=>{"use strict";var t=e.i(43476),i=e.i(71645);function n(){let[e,n]=(0,i.useState)(null);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;500&display=swap"}),(0,t.jsx)("style",{children:`
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

        .cite {
          font-size: 12px; color: #555; font-style: italic; white-space: nowrap;
        }

        .divider { width: 100%; height: 1px; background: #eee; margin: 48px 0; }

        /* FORMULA BLOCK */
        .formula-block {
          border: 1px solid #eee; background: #fafafa;
          padding: 36px 32px; margin-bottom: 52px; text-align: center;
        }
        .formula-label {
          font-size: 10px; font-weight: 600; color: #555;
          text-transform: uppercase; letter-spacing: 0.12em;
          font-family: system-ui; margin-bottom: 20px;
        }
        .formula-display {
          font-family: 'EB Garamond', Georgia, serif;
          font-size: 42px; font-weight: 500; color: #111;
          line-height: 1; margin-bottom: 4px;
          display: flex; align-items: center; justify-content: center; gap: 8px;
        }
        .formula-frac {
          display: inline-flex; flex-direction: column;
          align-items: center; gap: 2px;
        }
        .formula-num { font-size: 32px; }
        .formula-bar { width: 80px; height: 1.5px; background: #111; }
        .formula-den { font-size: 32px; }

        .formula-legend {
          margin-top: 28px; display: flex; flex-direction: column; gap: 10px;
          text-align: left; border-top: 1px solid #eee; padding-top: 20px;
        }
        .legend-item {
          display: flex; gap: 14px; align-items: flex-start;
          font-size: 13px; line-height: 1.6;
        }
        .legend-sym {
          font-family: 'EB Garamond', Georgia, serif;
          font-size: 18px; color: #111; min-width: 24px;
          flex-shrink: 0; font-style: italic; padding-top: 1px;
        }
        .legend-def { color: #555; font-family: system-ui; }
        .legend-def strong { color: #111; font-weight: 500; }

        /* PATTERNS */
        .patterns-label {
          font-size: 13px; font-weight: 600; color: #555;
          text-transform: uppercase; letter-spacing: 0.12em;
          font-family: system-ui; margin-bottom: 24px;
        }
        .patterns { display: flex; flex-direction: column; gap: 2px; margin-bottom: 52px; }
        .pattern-row {
          border: 1px solid #eee; background: #fafafa;
          display: grid; grid-template-columns: 4px 1fr;
          transition: background 0.15s;
        }
        .pattern-row:hover { background: #f4f4f4; }
        .pattern-accent { width: 4px; }
        .pattern-body { padding: 18px 20px; }
        .pattern-top {
          display: flex; align-items: baseline;
          justify-content: space-between; margin-bottom: 6px;
        }
        .pattern-name {
          font-size: 14px; font-weight: 500; color: #111; font-family: system-ui;
        }
        .pattern-range {
          font-family: 'EB Garamond', Georgia, serif;
          font-size: 15px; color: #888; font-style: italic;
        }
        .pattern-sig {
          font-family: 'EB Garamond', Georgia, serif;
          font-size: 13px; color: #555; margin-bottom: 6px;
        }
        .pattern-desc {
          font-size: 13px; line-height: 1.65; color: #666; font-family: system-ui;
        }

        /* PROTOCOL STEPS */
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
        .protocol-tags {
          display: flex; gap: 6px; flex-wrap: wrap; margin-top: 10px;
        }
        .protocol-tag {
          font-size: 10px; font-family: system-ui; letter-spacing: 0.05em;
          text-transform: uppercase; padding: 2px 7px;
          border: 1px solid #eee; color: #555;
        }

        /* REFERENCES */
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
          .page-nav-links { display: none; }
        }
      `}),(0,t.jsx)("header",{children:(0,t.jsxs)("div",{className:"header-inner",children:[(0,t.jsx)("a",{href:"/",className:"header-name",children:"Bianca Avanzo — The Root Frequency Theory"}),(0,t.jsxs)("nav",{children:[(0,t.jsx)("a",{href:"/the-paper",children:"About RFT"}),(0,t.jsx)("a",{href:"/about-the-author",children:"About the Author"}),(0,t.jsx)("a",{href:"/contact",children:"Contact"})]})]})}),(0,t.jsxs)("main",{children:[(0,t.jsxs)("div",{className:"page-nav",children:[(0,t.jsx)("a",{href:"/",className:"page-nav-back",children:"← Back"}),(0,t.jsxs)("div",{className:"page-nav-links",children:[(0,t.jsx)("a",{href:"/the-paper",children:"The Paper"}),(0,t.jsx)("a",{href:"/research-plan",className:"active",children:"M-RFT Coherence Metric"}),(0,t.jsx)("a",{href:"/expected-outcomes",children:"Expected Outcomes"})]})]}),(0,t.jsx)("h1",{className:"page-title",children:"M-RFT Coherence Metric"}),(0,t.jsx)("p",{className:"page-subtitle",children:"Operational Proxy for Multiscale Integration"}),(0,t.jsxs)("div",{className:"section",children:[(0,t.jsx)("div",{className:"section-title",children:"Abstract"}),(0,t.jsx)("p",{children:"A persistent challenge in contemporary consciousness research is understanding how multiple layers of human functioning—from biological regulation to personal narrative—interact to support a coherent sense of self. While existing approaches have quantified neural and physiological features, fewer methods attempt to characterize their dynamic alignment. The M-RFT Coherence Metric is proposed as an initial step toward quantifying this integrative dimension."}),(0,t.jsxs)("p",{children:["Building on the C0–C4 architecture established in RFT ",(0,t.jsx)("span",{className:"cite",children:"(Avanzo, 2026)"}),", this study examines whether variation at the symbolic layer (C3) may be associated with changes in multiscale regulation. The central question is whether the introduction of structured epistemic scaffolding—formalized as Epistemic Synchrony (Kₑ)—is associated with reductions in systemic uncertainty, shifts in neural regulatory dynamics (C2), and measurable changes in physiological indices (C1). If such associations are observed, they may be reflected in longitudinal variations in the coherence of self-experience (C4)."]})]}),(0,t.jsx)("div",{className:"divider"}),(0,t.jsxs)("div",{className:"section",children:[(0,t.jsx)("div",{className:"section-title",children:"Origin of the Metric"}),(0,t.jsxs)("p",{children:["The M-RFT Metric was developed through an iterative process of theory-building, grounded in a longitudinal N-of-1 pilot study that employed a neurophenomenological framework ",(0,t.jsx)("span",{className:"cite",children:"(Varela, 1996)"})," and analytic autoethnography. By integrating the roles of researcher and subject, this approach allowed for the systematic documentation of physiological symptoms, reactive behavioral patterns, and cognitive-symbolic shifts. These observations were organized along a spatiotemporal timeline, tracking changes in perceived internal coherence under varying conditions of stress and informational load."]}),(0,t.jsx)("p",{children:"A central observation during this investigative process was the apparent relationship between the structured organization of knowledge and shifts in internal regulatory dynamics. This led to the hypothesis that the acquisition of higher-order symbolic structure may function as a stabilizing constraint on lower-level biological and neural variability. These preliminary insights were subsequently formalized into the M-RFT Metric, which is proposed here as a heuristic bridge to explore the potential correlations between Epistemic Synchrony (Kₑ) and the coordination of systemic dynamics under conditions of informational uncertainty."})]}),(0,t.jsx)("div",{className:"divider"}),(0,t.jsx)("div",{className:"patterns-label",children:"What the Metric Observes"}),(0,t.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:2,marginBottom:32},children:[{sym:"Φ",title:"Degree of informational integration",desc:(0,t.jsxs)(t.Fragment,{children:["A conceptual bridge with Integrated Information Theory ",(0,t.jsx)("span",{className:"cite",children:"(Tononi, 2004; Tononi et al., 2016)"}),". Φ represents the extent to which the system is generating information as a unified whole, rather than as a collection of independent parts."]})},{sym:"Kₑ",title:"Epistemic Synchrony",desc:(0,t.jsx)(t.Fragment,{children:"The degree to which structured self-knowledge at the symbolic layer (C3) provides stable, coherent reference points for the system’s predictive processes. Kₑ is treated as a potentially modulable variable that may increase when the symbolic layer gains explanatory adequacy in relation to sources of uncertainty."})},{sym:"F",title:"Variational free energy",desc:(0,t.jsxs)(t.Fragment,{children:["A formal description of the mismatch between the system's internal model and incoming signals ",(0,t.jsx)("span",{className:"cite",children:"(Friston, 2010)"}),". F functions here as a proxy for systemic noise: the regulatory burden placed on the hierarchy when prediction errors cannot be resolved at the symbolic level."]})}].map((e,i)=>(0,t.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"52px 1fr",border:"1px solid #eee",background:"#fafafa"},children:[(0,t.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"'EB Garamond', Georgia, serif",fontSize:22,fontStyle:"italic",color:"#fff",background:"#111",minHeight:80},children:e.sym}),(0,t.jsxs)("div",{style:{padding:"16px 20px"},children:[(0,t.jsx)("div",{style:{fontSize:16,fontWeight:500,color:"#111",fontFamily:"system-ui",marginBottom:6},children:e.title}),(0,t.jsx)("div",{style:{fontSize:13,lineHeight:1.7,color:"#666",fontFamily:"system-ui"},children:e.desc})]})]},i))}),(0,t.jsx)("div",{className:"patterns-label",children:"Model-Derived Alignment Patterns"}),(0,t.jsx)("div",{className:"patterns",children:[{label:"Fragmentation",range:"M < 1",signature:"Φ · Kₑ < F",desc:"High semantic entropy, narrative instability, and increased regulatory demand across the hierarchy. The system's predictive load exceeds its integrative capacity.",color:"#c0392b"},{label:"Relative Equilibrium",range:"M ≈ 1",signature:"Φ · Kₑ ≈ F",desc:"Minimally stable experiential continuity and baseline homeostatic control. The system is functional but operating near the threshold of coherence.",color:"#e67e22"},{label:"High Coherence",range:"M > 1",signature:"Φ · Kₑ >> F",desc:"Fluid and adaptive experiential organization, high predictive efficiency, and systemic resilience. Epistemic scaffolding appears to support the reduction of cross-layer uncertainty.",color:"#27ae60"}].map((e,i)=>(0,t.jsxs)("div",{className:"pattern-row",children:[(0,t.jsx)("div",{className:"pattern-accent",style:{background:e.color}}),(0,t.jsxs)("div",{className:"pattern-body",children:[(0,t.jsx)("div",{className:"pattern-top",children:(0,t.jsx)("span",{className:"pattern-name",children:e.label})}),(0,t.jsx)("div",{className:"pattern-desc",children:e.desc})]})]},i))}),(0,t.jsx)("div",{className:"divider"}),(0,t.jsxs)("div",{className:"section",children:[(0,t.jsx)("div",{className:"section-title",children:"Proposed Experimental Protocol"}),(0,t.jsx)("p",{children:"The M-RFT metric treats Epistemic Synchrony (Kₑ) as a potentially modulable variable. The protocol is designed to test whether structured epistemic interventions — scaffolding that links somatic signals to narrative context — are associated with measurable shifts in M-RFT across biological, neural, and experiential domains."})]}),(0,t.jsxs)("div",{className:"protocol",style:{marginBottom:52},children:[(0,t.jsxs)("div",{className:"protocol-step",children:[(0,t.jsx)("div",{className:"protocol-num",children:"1"}),(0,t.jsxs)("div",{className:"protocol-body",children:[(0,t.jsx)("div",{className:"protocol-title",children:"Pre-Intervention Baseline"}),(0,t.jsx)("div",{className:"protocol-desc",children:"Assessment of participants' interpretations of internal states through semi-structured interviews, cross-referenced with physiological indices and measures of large-scale network connectivity."})]})]}),(0,t.jsxs)("div",{className:"protocol-step",children:[(0,t.jsx)("div",{className:"protocol-num",children:"2"}),(0,t.jsxs)("div",{className:"protocol-body",children:[(0,t.jsx)("div",{className:"protocol-title",children:"Structured Knowledge Intervention"}),(0,t.jsx)("div",{className:"protocol-desc",children:"Introduction of organized, interdependent information layers targeting detected prediction errors. Explanatory frameworks linking somatic signals to narrative context are implemented to examine whether Kₑ increases and variational free energy (F) correspondingly decreases."})]})]}),(0,t.jsxs)("div",{className:"protocol-step",children:[(0,t.jsx)("div",{className:"protocol-num",children:"3"}),(0,t.jsxs)("div",{className:"protocol-body",children:[(0,t.jsx)("div",{className:"protocol-title",children:"Post-Intervention Assessment"}),(0,t.jsx)("div",{className:"protocol-desc",children:"Re-evaluation of neural, physiological, and phenomenological reports, testing whether increases in Kₑ are associated with corresponding changes in the M-RFT index across the three predicted outcomes."})]})]})]}),(0,t.jsx)("div",{className:"divider"}),(0,t.jsxs)("div",{className:"section",children:[(0,t.jsx)("div",{className:"section-title",children:"Illustrative Case Example"}),(0,t.jsx)("p",{children:"The formal mathematical specification and full research implementation are presented in a separate technical framework and can be provided upon request. The following hypothetical scenario is offered to clarify how structured self-knowledge may function as an epistemic tool within the M-RFT framework."})]}),(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:2,marginBottom:52},children:[(0,t.jsx)("div",{style:{border:"1px solid #eee",background:"#fafafa"},children:(0,t.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"4px 1fr"},children:[(0,t.jsx)("div",{style:{background:"#c0392b"}}),(0,t.jsxs)("div",{style:{padding:"18px 20px 6px"},children:[(0,t.jsx)("div",{style:{fontSize:10,fontWeight:600,color:"#555",textTransform:"uppercase",letterSpacing:"0.1em",fontFamily:"system-ui",marginBottom:4},children:"Scenario A"}),(0,t.jsx)("div",{style:{fontSize:16,fontWeight:500,color:"#111",fontFamily:"system-ui",marginBottom:12},children:"Fragmentation — Lower Epistemic Synchrony"}),(0,t.jsx)("p",{style:{fontSize:14,lineHeight:1.8,color:"#555",fontFamily:"system-ui",marginBottom:12,textIndent:0},children:"João experiences transient tachycardia following caffeine intake. Lacking an accurate symbolic interpretation of the physiological trigger, the C3 layer fails to provide an adequate model for the C1 biological arousal. Under these circumstances, large-scale neural systems associated with self-referential processing (C2) — including regions linked to DMN activity — may interpret the signal as potentially threatening."}),(0,t.jsx)("p",{style:{fontSize:14,lineHeight:1.8,color:"#555",fontFamily:"system-ui",marginBottom:16,textIndent:0},children:"João reports persistent ruminative thoughts, growing self-doubt regarding his ability to focus at work, and anxiety about the potential consequences of this attentional difficulty. Within the RFT framework, this state corresponds to reduced systemic integration, low synchronization between self-narrative and experiential reality, and elevated systemic noise."})]})]})}),(0,t.jsx)("div",{style:{width:1,height:14,background:"#ddd",marginLeft:26}}),(0,t.jsx)("div",{style:{border:"1px solid #eee",background:"#fafafa"},children:(0,t.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"4px 1fr"},children:[(0,t.jsx)("div",{style:{background:"#27ae60"}}),(0,t.jsxs)("div",{style:{padding:"18px 20px 6px"},children:[(0,t.jsx)("div",{style:{fontSize:10,fontWeight:600,color:"#555",textTransform:"uppercase",letterSpacing:"0.1em",fontFamily:"system-ui",marginBottom:4},children:"Scenario B"}),(0,t.jsx)("div",{style:{fontSize:16,fontWeight:500,color:"#111",fontFamily:"system-ui",marginBottom:12},children:"Integration — Higher Epistemic Synchrony"}),(0,t.jsxs)("p",{style:{fontSize:14,lineHeight:1.8,color:"#555",fontFamily:"system-ui",marginBottom:16,textIndent:0},children:["When João correctly updates his generative model — ",(0,t.jsx)("em",{children:"“This sensation is likely related to caffeine intake”"})," — and decouples his identity from the temporary bodily state — ",(0,t.jsx)("em",{children:"“I have experienced this response previously after caffeine”"})," — epistemic alignment increases. The C3 layer now provides an adequate explanatory model for the C1 signal, potentially reducing variational free energy at C2 and attenuating the threat-detection cascade."]})]})]})})]}),(0,t.jsx)("div",{className:"divider"}),(0,t.jsxs)("div",{className:"section",children:[(0,t.jsx)("div",{className:"section-title",children:"Conclusion"}),(0,t.jsx)("p",{children:"The M-RFT metric represents an attempt to move beyond the description of fragmentation toward its measurement. By treating Epistemic Synchrony (Kₑ) as a potentially manipulable variable — introduced at the symbolic layer and tracked across biological and neural indices — this framework opens a tractable research pathway into the dynamics of self-coherence under conditions of informational entropy."}),(0,t.jsx)("p",{children:"The ‘João’ case study illustrates a localized mechanism: the possibility that structured epistemic scaffolding functions as a top-down constraint, associated with reductions in systemic noise (F) and enhanced individual stability. This observation raises a critical research question: if integrative processes are strengthened at the individual level, to what extent might these effects manifest across different spatiotemporal scales? This invites rigorous investigation into whether stabilization at the individual level correlates with more consistent patterns of organization across biological, neural, and socio-environmental domains."}),(0,t.jsx)("p",{children:"The subsequent section evaluates the scope of the M-RFT across clinical and everyday contexts, alongside the empirical requirements necessary to formally assess these cross-scale implications."})]}),(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",borderTop:"1px solid #eee",marginTop:48,paddingTop:28,fontFamily:"system-ui"},children:[(0,t.jsxs)("a",{href:"/the-paper",style:{fontSize:14,color:"#555",textDecoration:"none",display:"flex",alignItems:"center",gap:8},children:[(0,t.jsx)("span",{style:{fontSize:16},children:"←"})," The Paper"]}),(0,t.jsxs)("a",{href:"/expected-outcomes",style:{fontSize:14,color:"#555",textDecoration:"none",display:"flex",alignItems:"center",gap:8},children:["Expected Outcomes ",(0,t.jsx)("span",{style:{fontSize:16},children:"→"})]})]}),(0,t.jsxs)("section",{className:"references",children:[(0,t.jsx)("h3",{children:"References"}),(0,t.jsxs)("ol",{children:[(0,t.jsxs)("li",{children:["Avanzo, B. (2026). ",(0,t.jsx)("em",{children:"Root Frequency Theory: An integrative framework for the continuity of lived experience."})," Independent publication."]}),(0,t.jsxs)("li",{children:["Friston, K. (2010). The free-energy principle: A unified brain theory? ",(0,t.jsx)("em",{children:"Nature Reviews Neuroscience, 11"}),"(2), 127–138. ",(0,t.jsx)("a",{href:"https://doi.org/10.1038/nrn2787",target:"_blank",rel:"noopener",children:"https://doi.org/10.1038/nrn2787"})]}),(0,t.jsxs)("li",{children:["Tononi, G. (2004). An information integration theory of consciousness. ",(0,t.jsx)("em",{children:"BMC Neuroscience, 5"}),", 42. ",(0,t.jsx)("a",{href:"https://doi.org/10.1186/1471-2202-5-42",target:"_blank",rel:"noopener",children:"https://doi.org/10.1186/1471-2202-5-42"})]}),(0,t.jsxs)("li",{children:["Tononi, G., Boly, M., Massimini, M., & Koch, C. (2016). Integrated information theory: From consciousness to its physical substrate. ",(0,t.jsx)("em",{children:"Nature Reviews Neuroscience, 17"}),", 450–461. ",(0,t.jsx)("a",{href:"https://doi.org/10.1038/nrn.2016.44",target:"_blank",rel:"noopener",children:"https://doi.org/10.1038/nrn.2016.44"})]}),(0,t.jsxs)("li",{children:["Varela, F. J. (1996). Neurophenomenology: A methodological remedy for the hard problem. ",(0,t.jsx)("em",{children:"Journal of Consciousness Studies, 3"}),"(4), 330–349."]})]})]})]})]})}e.s(["default",()=>n])}]);