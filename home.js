(function () {
    const translations = {
        en: {
            "nav.about": "About Us",
            "nav.products": "Products",
            "nav.team": "Core Team",
            "nav.news": "News",
            "nav.contact": "Contact",
            "nav.demo": "Try Demo",
            "hero.eyebrow": "SyncBuddy Tech Limited",
            "hero.tagline": "Your AI Buddy",
            "hero.lede": "We synchronize and add value to our stakeholders with AI, building models and platforms for business and society needs.",
            "cta.about": "About Us",
            "cta.try": "Try Demo",
            "cta.book": "Book a Demo",
            "cta.contact": "Contact Us",
            "radar.title": "Zhang Liang Radar",
            "radar.risk": "Client churn risk",
            "radar.early": "18 days early",
            "radar.alert": "WhatsApp proactive alert",
            "radar.message": "Do not cold call. Send a three-step warm-up sequence first. T+14 is the best close window.",
            "radar.button": "One-tap action sequence",
            "about.kicker": "About Us",
            "about.mission.title": "Our Mission",
            "about.mission.body": "We synchronize and add value to our stakeholders with AI.",
            "about.product.title": "Our Product",
            "about.product.body": "We build AI models or platforms for business or society needs.",
            "about.mission.zh": "Mission: We create value for stakeholders with AI by solving pain points, discovering new business opportunities and growth drivers, improving efficiency, and delivering value.",
            "about.product.zh": "Product: We build AI models or platforms for business or society needs, including AI learning platforms, AI ERP, and AI emotional therapists.",
            "products.kicker": "Our Products",
            "products.heading": "AI platforms for real business and social needs",
            "product.dongfeng.subtitle": "AI strategist for entrepreneurs",
            "product.dongfeng.body1": "An integrated AI platform built for entrepreneurs, using everyday messaging tools such as WhatsApp and WeChat as the entry point so business problems and decisions can be handled through conversation.",
            "product.dongfeng.body2": "An effective customer acquisition tool combining proactive alerts, causal analysis, timing judgment, and action sequences.",
            "product.dongfeng.link": "Try Dong Feng Demo",
            "product.institute.body": "An AI learning platform for professional compliance training, addressing proxy learning fraud, delayed regulatory updates, and cloud proctoring privacy risks.",
            "product.institute.li1": "Verify: Edge-Guard SDK for privacy-preserving identity verification.",
            "product.institute.li2": "Generate: regulatory RAG engine turning PDFs into interactive assessments.",
            "product.institute.li3": "Simulate: synthetic data simulation for audit, risk, and medical case training.",
            "product.institute.li4": "Edge AI: 100% browser-local inference via TensorFlow.js / WASM, with no video streaming or storage.",
            "product.customs.subtitle": "Global Digital Preservation Platform for Traditional Chinese Culture & Rituals",
            "product.customs.li1": "Sync Rituals: real-time blessing and ritual proxy module that lets believers join authentic temple rituals across time and place.",
            "product.customs.li2": "Sync Destiny: Bazi annual-fortune AI mentor that generates sacred-feeling, personalized annual reports from master cases and scriptures.",
            "product.customs.li3": "Sync Jingzhe: AI villain-hitting experience that gamifies and digitizes traditional customs.",
            "team.kicker": "Core Team",
            "team.heading": "Background-rich, battle-tested, deeply networked.",
            "team.carine.title": "Founder & CEO",
            "team.carine.zhrole": "Co-Founder and Chief Executive Officer",
            "team.carine.li1": "Rich experience in top-level capital operations and asset mergers and acquisitions.",
            "team.carine.li2": "Deep expertise in Hong Kong listing rules and senior company secretarial practice.",
            "team.carine.li3": "Outstanding cross-disciplinary management capability and strong sense of social responsibility.",
            "team.match.title": "Co-Founder & CSO",
            "team.match.zhrole": "Co-Founder and Chief Strategy Officer",
            "team.match.li1": "15 years of senior experience in corporate governance and strategic risk management.",
            "team.match.li2": "Dual leadership in frontier AI innovation and commercial value transformation.",
            "team.match.li3": "Strategic influence backed by industry authority and national-level research institution recognition.",
            "team.calvin.title": "Co-Founder",
            "team.calvin.zhrole": "Co-Founder",
            "team.calvin.li1": "Top-tier interdisciplinary background across finance and law.",
            "team.calvin.li2": "Award-winning young entrepreneur and business leader recognized by authoritative institutions.",
            "team.calvin.li3": "Deep social influence and public-service experience across business and government networks.",
            "team.kenneth.title": "Co-Founder & CBO",
            "team.kenneth.zhrole": "Co-Founder and Chief Business Officer",
            "team.kenneth.li1": "Top-tier derivatives marketing capability and outstanding track record, with experience at J.P. Morgan.",
            "team.kenneth.li2": "Compound strengths in trading mindset, data analysis, and cross-functional communication.",
            "team.kenneth.li3": "Strong experience in media relations and investor relations.",
            "news.kicker": "News & Events",
            "news.heading": "News & Events",
            "news.title": "Website refresh",
            "news.body": "SyncBuddy Tech Limited is expanding its company website to cover mission, product roadmap, core team, news, and contact channels.",
            "contact.kicker": "Contact Us",
            "contact.heading": "Contact Us",
            "final.kicker": "Your AI Buddy",
            "final.heading": "Build the next practical AI platform with SyncBuddy Tech Limited."
        },
        zh: {
            "nav.about": "關於我們",
            "nav.products": "我們產品",
            "nav.team": "核心團隊",
            "nav.news": "消息",
            "nav.contact": "聯絡我們",
            "nav.demo": "試用 Demo",
            "hero.eyebrow": "SyncBuddy Tech Limited",
            "hero.tagline": "Your AI Buddy",
            "hero.lede": "我們透過人工智能為持份者創造價值，針對商業或社會需求構建人工智慧模型或平台。",
            "cta.about": "關於我們",
            "cta.try": "試用 Demo",
            "cta.book": "預約 Demo",
            "cta.contact": "聯絡我們",
            "radar.title": "張良雷達",
            "radar.risk": "客戶流失風險",
            "radar.early": "提前 18 天預警",
            "radar.alert": "WhatsApp 主動預警",
            "radar.message": "不要 cold call。先發三步保溫訊息，T+14 才是最佳狙擊窗口。",
            "radar.button": "一鍵執行行動序列",
            "about.kicker": "關於我們",
            "about.mission.title": "使命",
            "about.mission.body": "我們透過人工智能為持份者創造價值。",
            "about.product.title": "產品",
            "about.product.body": "我們針對商業或社會需求，構建人工智慧模型或平台。",
            "about.mission.zh": "使命：我們透過人工智能為持份者創造價值，解決痛點、發掘新商機與增長動力、提高效能、帶來價值。",
            "about.product.zh": "產品：我們針對商業或社會需求，構建人工智慧模型或平台，包括 AI 學習平台、AI ERP、AI 情緒治療師等。",
            "products.kicker": "我們產品",
            "products.heading": "針對商業與社會需求的 AI 平台",
            "product.dongfeng.subtitle": "創業者 AI 軍師",
            "product.dongfeng.body1": "專為創業者而設的 AI 一體化平台，以 WhatsApp、微信等日常通訊軟件為入口，讓每一個商業難題及決策都能在對話中解決。",
            "product.dongfeng.body2": "有效益的獲客工具，結合主動預警、因果分析、時機判斷與行動序列。",
            "product.dongfeng.link": "試用東風 Demo",
            "product.institute.body": "針對專業機構合規培訓的 AI 學習平台，解決代學詐騙、法規更新滯後及雲端監考私隱風險。",
            "product.institute.li1": "Verify：用於私隱保護身分驗證的 Edge-Guard SDK。",
            "product.institute.li2": "Generate：可將法規 PDF 轉為互動測驗的法規 RAG 引擎。",
            "product.institute.li3": "Simulate：用於風險審計與醫療案例培訓的合成數據模擬。",
            "product.institute.li4": "Edge AI：基於 TensorFlow.js / WASM 的 100% 瀏覽器本地推理，不串流也不儲存影片。",
            "product.customs.subtitle": "全球華人非遺民俗與傳統信仰數位傳承平台",
            "product.customs.li1": "Sync Rituals：即時祈福及代燒模組，讓信眾跨越時空參與正宗廟宇祈福儀式。",
            "product.customs.li2": "Sync Destiny：八字流年 AI 導師，生成具神聖感與個性化的流年報告。",
            "product.customs.li3": "Sync Jingzhe：AI 驚蟄打小人，將傳統習俗趣味遊戲化、數位化。",
            "team.kicker": "核心團隊",
            "team.heading": "背景優秀、身經百戰、脈絡深湛。",
            "team.carine.title": "Founder & CEO",
            "team.carine.zhrole": "聯席創辦人兼首席執行官",
            "team.carine.li1": "具備豐富的頂層資本運作與資產併購經驗",
            "team.carine.li2": "精通香港上市法規與深具資深公司秘書專業",
            "team.carine.li3": "卓越的跨領域管理才能與高度的社會責任感",
            "team.match.title": "Co-Founder & CSO",
            "team.match.zhrole": "聯席創辦人兼首席策略官",
            "team.match.li1": "具備 15 年資深的企業治理與戰略風險管理經驗",
            "team.match.li2": "兼具前沿 AI 創新與商業價值轉化的雙棲領導力",
            "team.match.li3": "深具行業權威與國家級研究機構認證的戰略影響力",
            "team.calvin.title": "Co-Founder",
            "team.calvin.zhrole": "聯席創辦人",
            "team.calvin.li1": "頂尖的財務與法律跨領域雙專業背景",
            "team.calvin.li2": "備受權威肯定的傑出青年企業家與商業領袖",
            "team.calvin.li3": "深厚的社會影響力與兩地政商公共服務經驗",
            "team.kenneth.title": "Co-Founder & CBO",
            "team.kenneth.zhrole": "聯席創辦人兼首席商務官",
            "team.kenneth.li1": "頂尖的衍生產品營銷實力與輝煌的業績紀錄，曾任職摩根大通 (J.P. Morgan)",
            "team.kenneth.li2": "兼具交易思維、數據分析與跨部門溝通的複合型能力",
            "team.kenneth.li3": "卓越的媒體公關與投資者關係維護經驗",
            "news.kicker": "消息與活動",
            "news.heading": "消息與活動",
            "news.title": "網站更新",
            "news.body": "SyncBuddy Tech Limited 正在擴展公司網站，涵蓋使命、產品路線、核心團隊、消息與聯絡渠道。",
            "contact.kicker": "聯絡我們",
            "contact.heading": "聯絡我們",
            "final.kicker": "Your AI Buddy",
            "final.heading": "與 SyncBuddy Tech Limited 一起構建下一個實用 AI 平台。"
        }
    };

    const langToggle = document.querySelector(".lang-toggle");
    const langOptions = document.querySelectorAll("[data-lang-option]");

    function setLanguage(lang) {
        const safeLang = translations[lang] ? lang : "en";
        document.documentElement.lang = safeLang === "zh" ? "zh-Hant" : "en";
        document.body.dataset.lang = safeLang;

        document.querySelectorAll("[data-i18n]").forEach((node) => {
            const key = node.dataset.i18n;
            if (translations[safeLang][key]) {
                node.textContent = translations[safeLang][key];
            }
        });

        langOptions.forEach((option) => {
            option.classList.toggle("active", option.dataset.langOption === safeLang);
        });

        if (langToggle) {
            langToggle.setAttribute("aria-pressed", safeLang === "zh" ? "true" : "false");
        }

        localStorage.setItem("syncbuddy_lang", safeLang);
    }

    if (langToggle) {
        langToggle.addEventListener("click", () => {
            const current = document.body.dataset.lang || "en";
            setLanguage(current === "en" ? "zh" : "en");
        });
    }

    const savedLang = localStorage.getItem("syncbuddy_lang");
    const browserLang = navigator.language && navigator.language.toLowerCase().startsWith("zh") ? "zh" : "en";
    setLanguage(savedLang || browserLang);

    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!finePointer || reducedMotion) return;

    const glow = document.querySelector(".cursor-glow");
    let cursorX = window.innerWidth / 2;
    let cursorY = window.innerHeight / 2;
    let glowX = cursorX;
    let glowY = cursorY;

    document.body.classList.add("has-pointer");

    window.addEventListener("pointermove", (event) => {
        cursorX = event.clientX;
        cursorY = event.clientY;
    }, { passive: true });

    function animateGlow() {
        glowX += (cursorX - glowX) * 0.16;
        glowY += (cursorY - glowY) * 0.16;
        if (glow) {
            glow.style.transform = `translate3d(${glowX - 170}px, ${glowY - 170}px, 0)`;
        }
        requestAnimationFrame(animateGlow);
    }
    animateGlow();

    const tiltItems = document.querySelectorAll(
        ".hero-system, .product-card, .leader-card, .news-panel, .console-band, .final-cta"
    );

    tiltItems.forEach((item) => {
        item.classList.add("tilt-card");

        item.addEventListener("pointermove", (event) => {
            const rect = item.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            const px = x / rect.width;
            const py = y / rect.height;
            const rotateX = (0.5 - py) * 8;
            const rotateY = (px - 0.5) * 10;

            item.classList.add("is-tilting");
            item.style.setProperty("--mx", `${px * 100}%`);
            item.style.setProperty("--my", `${py * 100}%`);
            item.style.transform = `perspective(1400px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
        }, { passive: true });

        item.addEventListener("pointerleave", () => {
            item.classList.remove("is-tilting");
            item.style.setProperty("--mx", "50%");
            item.style.setProperty("--my", "50%");
            item.style.transform = "";
        });
    });
})();
