(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,31713,e=>{"use strict";var t=e.i(43476);function i(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;500&display=swap"}),(0,t.jsx)("style",{children:`
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
          font-family: system-ui; white-space: nowrap;
        }
        nav { display: flex; gap: 24px; }
        nav a {
          font-size: 15px; color: #555; text-decoration: none;
          font-family: system-ui; white-space: nowrap;
          transition: color 0.15s;
        }
        nav a:hover { color: #111; }

        main {
          padding-top: 120px; padding-bottom: 80px;
          padding-left: 24px; padding-right: 24px;
          max-width: 900px; margin: 0 auto;
        }

        /* HERO */
        .hero { margin-bottom: 64px; display: flex; flex-direction: column; align-items: stretch; }
        .hero-title-center { display: flex; flex-direction: column; align-items: center; }
        .hero-title-wrap { position: relative; line-height: 1; }
        .hero-title-wrap svg {
          position: absolute; bottom: -22px; left: 4px;
          overflow: visible; pointer-events: none; width: 46px;
        }
        .hero-title {
          font-family: 'EB Garamond', Georgia, serif;
          font-size: clamp(64px, 10vw, 104px);
          font-weight: 500; letter-spacing: -0.01em;
          color: #111; margin: 0; line-height: 1;
        }
        .hero-subtitle-row {
          width: 100%; display: flex; justify-content: center;
          margin-top: 18px; padding-left: 2%;
        }
        .hero-subtitle {
          font-family: 'EB Garamond', Georgia, serif;
          font-size: clamp(11px, 1.4vw, 15px);
          font-weight: 400; letter-spacing: 0.45em;
          color: #555; text-transform: uppercase;
        }
        .hero-divider {
          width: 100%; max-width: 900px; height: 1px;
          background: #ddd; margin-top: 24px;
        }

        .hero-desc {
          margin-top: 56px; margin-bottom: 24px; color: #222;
          line-height: 1.85; text-align: center;
          width: 100%; max-width: 580px; margin-left: auto; margin-right: auto;
          padding: 0 24px;
        }

        /* CARDS — quick scan after abstract */
        .cards-section { margin-top: 8px; margin-bottom: 0; }
        .cards-label {
          font-size: 16px; font-weight: 700; color: #111;
          text-transform: uppercase; letter-spacing: 0.12em;
          font-family: system-ui; margin-bottom: 24px;
          text-align: center;
        }
        .cards {
          display: grid; grid-template-columns: repeat(3, 1fr);
          gap: 2px; align-items: stretch;
        }
        .card-wrapper {
          text-decoration: none; text-align: left;
          display: flex; flex-direction: column; height: 100%; cursor: pointer; justify-content: space-between;
          border: 1px solid #e8e8e8; padding: 22px 20px;
          background: linear-gradient(to right, #f5f5f4 0%, #fafafa 30%, #ffffff 50%, #fafafa 70%, #f5f5f4 100%);
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.9), inset 0 -1px 0 rgba(0,0,0,0.04);
          transition: background 0.2s, border-color 0.2s, box-shadow 0.2s;
        }
        .card-wrapper:hover {
          background: linear-gradient(to right, #f0f0ee 0%, #f8f8f7 30%, #ffffff 50%, #f8f8f7 70%, #f0f0ee 100%);
          border-color: #ccc;
          box-shadow: inset 0 1px 0 rgba(255,255,255,1), inset 0 -1px 0 rgba(0,0,0,0.06), 0 2px 8px rgba(0,0,0,0.06);
        }
        .card-num {
          font-family: 'EB Garamond', Georgia, serif;
          font-size: 13px; color: #bbb; margin-bottom: 10px;
        }
        .card-title {
          font-size: 13px; font-weight: 600; color: #111;
          font-family: system-ui; margin-bottom: 20px; line-height: 1.3; text-align: center; text-transform: uppercase; letter-spacing: 0.08em;
        }
        .card-text { font-size: 15px; line-height: 1.7; color: #333; font-family: system-ui; text-align: center; flex: 1; display: flex; align-items: center; justify-content: center; }

        /* SECTION DIVIDER */
        .section-divider {
          width: 100%; height: 1px; background: #eee; margin: 48px 0;
        }

        /* WHY — secondary attention block */
        .why h2 {
          font-family: 'EB Garamond', Georgia, serif;
          font-size: clamp(32px, 4vw, 44px);
          font-weight: 500; color: #111;
          margin-bottom: 36px; text-align: center;
          letter-spacing: -0.01em; line-height: 1.2;
        }
        .why-body { display: flex; flex-direction: column; gap: 0; }
        .why-body p {
          margin: 0 0 16px 0; font-size: 17px; line-height: 1.9; color: #444;
          font-family: system-ui; text-indent: 2em;
          text-align: justify; hyphens: auto;
        }
        .why-body p:last-child { margin-bottom: 0; }
        sup { font-size: 10px; vertical-align: super; line-height: 0; color: #aaa; }

        /* CTA back to cards */
        .cta-row {
          margin-top: 72px; display: flex; gap: 12px; justify-content: center;
          flex-wrap: wrap;
        }
        .cta-link {
          font-size: 13px; color: #111; text-decoration: none;
          border: 1px solid #ddd; padding: 9px 20px;
          font-family: system-ui; letter-spacing: 0.04em;
          transition: border-color 0.15s, background 0.15s;
        }
        .cta-link:hover { border-color: #111; background: #f7f7f7; }
        .cta-link.primary {
          background: #111; color: #fff; border-color: #111;
        }
        .cta-link.primary:hover { background: #333; }

        /* REFERENCES */
        .references {
          border-top: 1px solid #eee; padding-top: 28px;
          max-width: 900px; margin: 96px auto 80px;
        }
        .references h3 {
          font-size: 12px; font-weight: 600; color: #aaa;
          letter-spacing: 0.12em; text-transform: uppercase;
          margin-bottom: 20px; font-family: system-ui;
        }
        .references ol {
          margin: 0; padding-left: 20px;
          display: flex; flex-direction: column; gap: 10px;
          list-style-type: decimal;
        }
        .references li { font-size: 12px; line-height: 1.7; color: #888; font-family: system-ui; }
        .references a { color: #888; text-decoration: underline; }

        @media (max-width: 640px) {
          .header-inner { flex-direction: column; gap: 10px; padding: 12px 0; }
          main { padding-top: 100px; }
          .cards { grid-template-columns: 1fr; }
          .abstract-block { padding: 24px 20px; }
        }
      `}),(0,t.jsx)("header",{children:(0,t.jsxs)("div",{className:"header-inner",children:[(0,t.jsx)("span",{className:"header-name",children:"Bianca Avanzo — The Root Frequency Theory"}),(0,t.jsxs)("nav",{children:[(0,t.jsx)("a",{href:"/the-paper",children:"About RFT"}),(0,t.jsx)("a",{href:"/about-the-author",children:"About the Author"}),(0,t.jsx)("a",{href:"/contact",children:"Contact"})]})]})}),(0,t.jsxs)("main",{children:[(0,t.jsxs)("section",{className:"hero",children:[(0,t.jsxs)("div",{className:"hero-title-center",children:[(0,t.jsxs)("div",{className:"hero-title-wrap",children:[(0,t.jsxs)("svg",{viewBox:"0 0 60 28","aria-hidden":"true",children:[(0,t.jsx)("line",{x1:"22",y1:"0",x2:"4",y2:"18",stroke:"#111",strokeWidth:"1.6",strokeLinecap:"round"}),(0,t.jsx)("line",{x1:"22",y1:"0",x2:"22",y2:"22",stroke:"#111",strokeWidth:"1.6",strokeLinecap:"round"}),(0,t.jsx)("line",{x1:"22",y1:"0",x2:"40",y2:"16",stroke:"#111",strokeWidth:"1.6",strokeLinecap:"round"}),(0,t.jsx)("line",{x1:"4",y1:"18",x2:"-2",y2:"27",stroke:"#111",strokeWidth:"1",strokeLinecap:"round"}),(0,t.jsx)("line",{x1:"22",y1:"22",x2:"16",y2:"28",stroke:"#111",strokeWidth:"1",strokeLinecap:"round"}),(0,t.jsx)("line",{x1:"40",y1:"16",x2:"46",y2:"26",stroke:"#111",strokeWidth:"1",strokeLinecap:"round"})]}),(0,t.jsx)("h1",{className:"hero-title",children:"Root Frequency"})]}),(0,t.jsx)("div",{className:"hero-subtitle-row",children:(0,t.jsx)("span",{className:"hero-subtitle",children:"Theory"})}),(0,t.jsx)("div",{className:"hero-divider"})]}),(0,t.jsx)("div",{className:"hero-desc-wrap",children:(0,t.jsx)("p",{className:"hero-desc",style:{fontSize:22,fontWeight:500,color:"#555"},children:"What sustains a coherent sense of self? Root Frequency Theory proposes an integrative framework for understanding how brain, body, and lived experience might remain aligned across time, and what conditions could disrupt this coherence."})})]}),(0,t.jsxs)("section",{className:"cards-section",children:[(0,t.jsx)("div",{className:"cards-label",children:"Explore the framework"}),(0,t.jsxs)("div",{className:"cards",children:[(0,t.jsxs)("a",{href:"/the-paper",className:"card-wrapper",children:[(0,t.jsx)("div",{className:"card-title",style:{paddingTop:8},children:"The Paper"}),(0,t.jsx)("p",{className:"card-text",children:"Theoretical foundations, key gaps in consciousness research, and the C0–C4 multiscale architecture."})]}),(0,t.jsxs)("a",{href:"/research-plan",className:"card-wrapper",children:[(0,t.jsx)("div",{className:"card-title",children:"M-RFT Coherence Metric"}),(0,t.jsx)("p",{className:"card-text",children:"Formalization of the metric and proposed study designs for investigating cross-scale coordination."})]}),(0,t.jsxs)("a",{href:"/expected-outcomes",className:"card-wrapper",children:[(0,t.jsx)("div",{className:"card-title",style:{paddingTop:8},children:"Expected Outcomes"}),(0,t.jsx)("p",{className:"card-text",children:"Potential implications for psychopathology research and invitation for academic collaboration."})]})]})]}),(0,t.jsx)("div",{className:"section-divider"}),(0,t.jsxs)("section",{className:"why",children:[(0,t.jsx)("h2",{children:"Why does this matter?"}),(0,t.jsxs)("div",{className:"why-body",children:[(0,t.jsxs)("p",{children:["Contemporary neuroscience has made major advances in characterizing neural dynamics",(0,t.jsx)("sup",{children:"1"}),", intrinsic self-related activity",(0,t.jsx)("sup",{children:"2"}),", and the organization of large-scale brain networks, along with their associated vulnerabilities",(0,t.jsx)("sup",{children:"3,4,5,6,7"}),". Yet these domains are often investigated separately, leaving open a critical question: could multiscale alignment play a key role in understanding the maintenance and potential perturbation of lived-experience continuity?"]}),(0,t.jsxs)("p",{children:["This question becomes increasingly relevant in today's information-dense and cognitively demanding environments. Within this context, Root Frequency Theory considers how cognitive information overload may impact cross-level coordination. We hypothesize that under such sustained load, the system's integrative capacity may be reduced",(0,t.jsx)("sup",{children:"8"}),", thereby placing increased demands on predictive regulation",(0,t.jsx)("sup",{children:"1"}),"."]}),(0,t.jsxs)("p",{children:["The proposed M-RFT metric aims to quantify variations in cross-scale alignment and examine whether such variations help predict emerging patterns of experiential fragmentation across both clinical and everyday contexts",(0,t.jsx)("sup",{children:"3,7"}),"."]})]}),(0,t.jsxs)("div",{className:"cta-row",children:[(0,t.jsx)("a",{href:"/the-paper",className:"cta-link primary",children:"Read the paper →"}),(0,t.jsx)("a",{href:"/research-plan",className:"cta-link",children:"M-RFT Metric"}),(0,t.jsx)("a",{href:"/expected-outcomes",className:"cta-link",children:"Expected Outcomes"})]})]}),(0,t.jsxs)("section",{className:"references",children:[(0,t.jsx)("h3",{children:"References"}),(0,t.jsx)("ol",{children:[{text:"Friston, K. (2010). The free-energy principle: A unified brain theory? Nature Reviews Neuroscience, 11(2), 127–138.",url:"https://doi.org/10.1038/nrn2787"},{text:"Northoff, G. (2016). Neuro-philosophy and the healthy mind: Learning from the unwell brain. W. W. Norton & Company.",url:null},{text:"Menon, V. (2011). Large-scale brain networks and psychopathology: A unifying triple network model. Trends in Cognitive Sciences, 15(10), 483–506.",url:"https://doi.org/10.1016/j.tics.2011.08.003"},{text:"Seth, A. K., Dienes, Z., Cleeremans, A., Overgaard, M., & Pessoa, L. (2008). Measuring consciousness: Relating behavioural and neurophysiological approaches. Trends in Cognitive Sciences, 12(8), 314–321.",url:"https://doi.org/10.1016/j.tics.2008.04.008"},{text:"Edelman, G. M., Gally, J. A., & Baars, B. J. (2011). Biology of consciousness. Frontiers in Psychology, 2, 4.",url:"https://doi.org/10.3389/fpsyg.2011.00004"},{text:"Cleeremans, A. (2011). The radical plasticity thesis: How the brain learns to be conscious. Frontiers in Psychology, 2, 86.",url:"https://doi.org/10.3389/fpsyg.2011.00086"},{text:"Sapolsky, R. M. (2004). Why zebras don't get ulcers (3rd ed.). Henry Holt.",url:null},{text:"Tononi, G., Boly, M., Massimini, M., & Koch, C. (2016). Integrated information theory: From consciousness to its physical substrate. Nature Reviews Neuroscience, 17, 450–461.",url:"https://doi.org/10.1038/nrn.2016.44"}].map((e,i)=>(0,t.jsxs)("li",{children:[e.text," ",e.url&&(0,t.jsx)("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",children:e.url})]},i))})]})]})]})}e.s(["default",()=>i])}]);