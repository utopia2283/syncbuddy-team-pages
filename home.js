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
            "hero.tagline": "#Synchronize #AI #KingMaker",
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
            "product.gutsync.subtitle": "A global digital heritage platform for Chinese folk customs and traditional beliefs",
            "product.gutsync.t1": "Helping users attract fortune and avert misfortune, turning destiny around",
            "product.gutsync.b1": "\"Guiding people toward goodness and settling the mind.\" Gut Sync blends precise technological algorithms with authentic traditional wisdom to offer timely guidance when believers face major life decisions (marriage, starting a business, buying a home, having children) or seasonal turning points such as Jingzhe and Tai Sui years. It provides authentic, non-superstitious resolution and blessing practices grounded in modern psychology and philosophy, helping believers attract good fortune, avoid misfortune, and find peace of mind.",
            "product.gutsync.t2": "Cultural export / promoting local culture",
            "product.gutsync.b2": "As an international metropolis where East meets West, Hong Kong has uniquely preserved many precious Chinese folk customs — the Jingzhe villain-hitting at Goose Neck Bridge, fortune-stick drawing at Wong Tai Sin, Kwun Yam Treasury borrowing and more — treasures of both local Hong Kong culture and the wider Chinese heritage. Starting from these local customs, Gut Sync packages and spreads them through modern digital tools, multilingual support, and a globalized cloud architecture, bringing this profound Chinese heritage and Eastern wisdom to the world stage in a form that fits modern reading habits — achieving true cultural export.",
            "team.kicker": "Core Team",
            "team.heading": "Background-rich, battle-tested, deeply networked.",
            "team.carine.title": "Founder & CEO",
            "team.carine.zhrole": "Co-Founder & Chief Executive Officer",
            "team.carine.li1": "HKICPA",
            "team.carine.li2": "HKACG",
            "team.carine.li3": "MScISM (HKUST)",
            "team.carine.li4": "BBA (CUHK)",
            "team.carine.li5": "Charter President, The Rotary Club of Kwai Tsing",
            "team.carine.li6": "Vice President, Hong Kong Kowloon City Industry and Commerce Association",
            "team.carine.li7": "Vice President, Federation of Community Chest of Kowloon City",
            "team.carine.li8": "Deputy Commander, The Hong Kong Road Safety Patrol",
            "team.carine.li9": "Vice President, Hong Kong InnoVision",
            "team.match.title": "Co-Founder & CSO",
            "team.match.zhrole": "Co-Founder & Chief Strategy Officer",
            "team.match.li1": "Charter President, AI Application Association",
            "team.match.li2": "Director, New Territories General Chamber of Commerce",
            "team.match.li3": "Vice President, Hong Kong InnoVision",
            "team.calvin.title": "Co-Founder",
            "team.calvin.zhrole": "Co-Founder",
            "team.calvin.li1": "FCPA (Practising)",
            "team.calvin.li2": "BBA (CUHK)",
            "team.calvin.li3": "LLB (UOL)",
            "team.calvin.li4": "Master of Chinese Law (Renmin University of China)",
            "team.calvin.li5": "Forbes China Outstanding Business Leaders (2022)",
            "team.calvin.li6": "Ten Outstanding Young Persons of Hong Kong (2022)",
            "team.calvin.li7": "City I&T Grand Challenge Advisory Committee",
            "team.calvin.li8": "Youth Development Commission, HKSAR",
            "team.calvin.li9": "Member, Young Entrepreneur Committee, HKBU Foundation",
            "team.calvin.li10": "Vice President, HKICPA",
            "team.calvin.li11": "Permanent Director, Lok Sin Tong (2021–2023)",
            "team.calvin.li12": "Member, Shandong Provincial Committee of the CPPCC",
            "team.calvin.li13": "Tax Expert, State Taxation Administration (Hong Kong)",
            "team.calvin.li14": "Expert, Zhuhai Municipal Finance and Banking Think Tank",
            "team.kenneth.title": "Co-Founder & CBO",
            "team.kenneth.zhrole": "Co-Founder & Chief Business Officer",
            "team.kenneth.li1": "BBA Marketing (City University of Hong Kong)",
            "team.kenneth.li2": "Charter Member, Rotary Club of Kwai Tsing",
            "team.kenneth.li3": "Vice Secretary, Hong Kong InnoVision",
            "team.kenneth.li4": "SFC Responsible Officer",
            "news.kicker": "News & Events",
            "news.heading": "News & Events",
            "news.title": "Website refresh",
            "news.body": "SyncBuddy Tech Limited is expanding its company website to cover mission, product roadmap, core team, news, and contact channels.",
            "contact.kicker": "Contact Us",
            "contact.heading": "Contact Us",
            "final.kicker": "#Synchronize #AI #KingMaker",
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
            "hero.tagline": "#Synchronize #AI #KingMaker",
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
            "product.gutsync.subtitle": "全球華人非遺民俗與傳統信仰數位傳承平台",
            "product.gutsync.t1": "助用戶趨吉避凶，命轉乾坤",
            "product.gutsync.b1": "「導人向善、安頓心靈」Gut Sync 透過精準的科技算法與正宗的傳統智慧相結合，在信眾面臨人生重大抉擇（如結婚、創業、置業、生子）或面臨驚蟄、犯太歲等年節轉折點時，及時指點迷津。平台提供正宗、不迷信、具備現代心理學與哲學意涵的化解與祈福之道，協助信眾在生活中做到趨吉避凶，達到心靈平安。",
            "product.gutsync.t2": "中華文化輸出 / 推廣本土文化",
            "product.gutsync.b2": "香港作為中西文化交匯的國際大都市，完整且獨特地保留了諸多珍貴的中華傳統民俗（如驚蟄鵝頸橋打小人、黃大仙求籤、觀音借庫等），不僅是香港本土文化的瑰寶，更是中華傳統文化的重要組成部分。Gut Sync 以香港本土民俗為起點，透過現代化數位手段、多語言支持及全球化雲端架構進行包裝與傳播，將博大精深的中華傳統文化與東方智慧，以最符合現代人閱讀習慣的方式推向國際舞台，實現真正的文化輸出。",
            "team.kicker": "核心團隊",
            "team.heading": "背景優秀、身經百戰、脈絡深湛。",
            "team.carine.title": "Founder & CEO",
            "team.carine.zhrole": "聯席創辦人兼首席執行官",
            "team.carine.li1": "香港會計師公會會計師（HKICPA）",
            "team.carine.li2": "香港特許秘書及公司治理師（HKACG）",
            "team.carine.li3": "香港科技大學資訊系統管理理學碩士（MScISM）",
            "team.carine.li4": "香港中文大學工商管理學士（BBA）",
            "team.carine.li5": "葵青扶輪社創社社長",
            "team.carine.li6": "九龍城工商聯會副會長",
            "team.carine.li7": "九龍城公益聯會副會長",
            "team.carine.li8": "香港交通安全隊副總隊監",
            "team.carine.li9": "香港青年新創見副會長",
            "team.match.title": "Co-Founder & CSO",
            "team.match.zhrole": "聯席創辦人兼首席策略官",
            "team.match.li1": "人工智能應用協會創會會長",
            "team.match.li2": "新界總商會董事",
            "team.match.li3": "香港青年新創見副會長",
            "team.calvin.title": "Co-Founder",
            "team.calvin.zhrole": "聯席創辦人",
            "team.calvin.li1": "執業資深會計師（FCPA）",
            "team.calvin.li2": "香港中文大學工商管理學士（BBA）",
            "team.calvin.li3": "倫敦大學法學學士（LLB）",
            "team.calvin.li4": "中國人民大學中國法學碩士",
            "team.calvin.li5": "福布斯中國卓越企業卓越領袖才俊（2022）",
            "team.calvin.li6": "香港十大傑出青年（2022）",
            "team.calvin.li7": "創新科技署城市創科大挑戰諮詢委員會",
            "team.calvin.li8": "香港特區政府青年發展委員會",
            "team.calvin.li9": "香港浸會大學基金會青年企業家委員會委員",
            "team.calvin.li10": "香港會計師公會副會長",
            "team.calvin.li11": "九龍樂善堂常務總理（2021–2023）",
            "team.calvin.li12": "中國人民政治協商會議山東省委員會政協委員",
            "team.calvin.li13": "國家稅務總局港區稅務專家",
            "team.calvin.li14": "珠海市財政金融庫專家",
            "team.kenneth.title": "Co-Founder & CBO",
            "team.kenneth.zhrole": "聯席創辦人兼首席商務官",
            "team.kenneth.li1": "香港城市大學市場營銷系學士",
            "team.kenneth.li2": "葵青扶輪社創社成員",
            "team.kenneth.li3": "香港青年新創見副秘書長",
            "team.kenneth.li4": "香港證監會核准持牌負責人",
            "news.kicker": "消息與活動",
            "news.heading": "消息與活動",
            "news.title": "網站更新",
            "news.body": "SyncBuddy Tech Limited 正在擴展公司網站，涵蓋使命、產品路線、核心團隊、消息與聯絡渠道。",
            "contact.kicker": "聯絡我們",
            "contact.heading": "聯絡我們",
            "final.kicker": "#Synchronize #AI #KingMaker",
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
