/**
 * BioX Website Internationalization (i18n) System
 * Supports Traditional Chinese (zh-TW) and English (en)
 */

const translations = {
    // Page titles and meta descriptions
    'page.title': {
        'zh': 'BioX - STEM，生物科技，創科，深科技教育專家',
        'en': 'BioX - STEM, Biotech, Innovation & DeepTech Education Experts'
    },
    'page.title.team': {
        'zh': 'Printact - STEM，生物科技，創科，深科技教育專家',
        'en': 'Printact - STEM, Biotech, Innovation & DeepTech Education Experts'
    },
    'page.title.itlab': {
        'zh': 'BioX - STEM，生物科技，創科，深科技教育專家',
        'en': 'BioX - STEM, Biotech, Innovation & DeepTech Education Experts'
    },
    'page.description': {
        'zh': 'STEM, 生物科技, 科學, 科技, 工程, 數學, 教育, STEM 教育',
        'en': 'STEM, Biotech, Science, Technology, Engineering, Mathematics, Education'
    },

    '404.title': {
        'zh': '找不到頁面',
        'en': 'Page not found.'
    },
    '404.desc': {
        'zh': '抱歉，我們找不到您要找的頁面。',
        'en': 'We are sorry. But the page you are looking for cannot be found.'
    },
    '404.back': {
        'zh': '返回首頁',
        'en': 'Back to Home'
    },

    // Navigation menu items
    'nav.team': {
        'zh': '👨‍🔬 博士團隊',
        'en': '👨‍🔬 Team'
    },
    'nav.courses': {
        'zh': '📚 課程',
        'en': '📚 Courses'
    },
    'nav.science': {
        'zh': '🧪 零式科學',
        'en': '🧪 0x2A Science'
    },
    'nav.maker': {
        'zh': '🛠️ 自造者學院',
        'en': '🛠️ Maker Academy'
    },
    'nav.deeptech': {
        'zh': '🚀 深科技AI學校',
        'en': '🚀 DeepTech AI School'
    },
    'nav.itlab': {
        'zh': '👩‍🔬 中學IT創新實驗室',
        'en': '👩‍🔬 IT Innovation Lab'
    },

    // Footer
    'footer.about.title': { zh: '關於BioX', en: 'About BioX' },
    'footer.about.desc': { zh: 'BioX 成立於2012年，為香港首間研發3D打印機及自動化系統的初創，並教授自造者技術。<br><br>於2020年，合併42Lab從而成立三大品牌：零式科學、自造者學院、深科技AI學校。', en: 'BioX was founded in 2012 as Hong Kong\'s first startup to develop 3D printers and automation systems, and to teach maker technology.<br><br>In 2020, we merged with 42Lab to establish three major brands: 0x2A Science, MakerTech Academy, and DeepTech AI School.' },
    'footer.links.title': { zh: '快速鏈結', en: 'Quick Links' },
    'footer.links.home': { zh: '首頁', en: 'Home' },
    'footer.links.courses': { zh: '線上、實體、到校及公開課程', en: 'Online, In-person & Public Courses' },
    'footer.contact.title': { zh: '聯絡我們', en: 'Contact Us' },
    'footer.contact.address.hk': { zh: '辦公地址（香港）：<br> 香港島堅尼地城士美菲路12號祥興大廈8樓', en: 'Office Address (Hong Kong):<br> 8/F, Cheung Hing Building, 12 Smithfield, Kennedy Town, Hong Kong' },
    'footer.contact.address.sg': { zh: '辦公地址（新加坡）需預約： <br>71 Ayer Rajah Crescent, #02-01, Singapore 139951', en: 'Office Address (Singapore) By Appointment: <br>71 Ayer Rajah Crescent, #02-01, Singapore 139951' },
    'footer.contact.phone': { zh: '聯絡電話/Whatsapp: <br> (+852) 9721-1314', en: 'Phone/Whatsapp: <br> (+852) 9721-1314' },
    'footer.copyright': { zh: 'BioX Limited. 版權所有。', en: 'BioX Limited. All rights reserved.' },

    // Hero section
    'hero.title': {
        'zh': 'BioX',
        'en': 'BioX'
    },
    'hero.subtitle': {
        'zh': '為STEM、生物科技、創科、深科技教育專家，提供多元、有趣、嶄新及具有教育意義的STEM課程，產品及器材，師資指導予香港不同類型的中、小學，以至一般大眾。',
        'en': 'As STEM, Biotech, Innovation & DeepTech education experts, we provide diverse, engaging, innovative and educational STEM courses, products, equipment, and teacher training to various primary and secondary schools in Hong Kong, as well as the general public.'
    },
    'hero.categories': {
        'zh': 'BioX創立三個類別創科科目：1)生物科技; 2)自造者技術; 3)深科技。我們希望由基礎教育，特殊及資優教育及至普及教育做起，改善創科學習經驗，為香港以至亞洲培養更多創科人才。',
        'en': 'BioX established three categories of innovation subjects: 1) Biotechnology; 2) Maker Technology; 3) DeepTech. We aim to improve innovation learning experiences from basic education, special and gifted education, to popular education, nurturing more innovation talents for Hong Kong and Asia.'
    },

    // Three brands section
    'brand.science.name': {
        'zh': '零式科學',
        'en': '0x2A Science'
    },
    'brand.science.category': {
        'zh': '生物科技',
        'en': 'Biotechnology'
    },
    'brand.science.desc': {
        'zh': '基因，生物科技，生物藝術，彷生學',
        'en': 'DNA, Biotech, BioArt, Bionics...etc'
    },
    'brand.maker.name': {
        'zh': '自造者技術學院',
        'en': 'MakerTech Academy'
    },
    'brand.maker.category': {
        'zh': '工程',
        'en': 'Engineering'
    },
    'brand.maker.desc': {
        'zh': '電子學，機械學，物聯網，自動化',
        'en': 'Electronics, Mechanics, IoT, Automation...etc'
    },
    'brand.deeptech.name': {
        'zh': '深科技AI學校',
        'en': 'DeepTech AI School'
    },
    'brand.deeptech.category': {
        'zh': '電腦科學，深度科技，創業精神',
        'en': 'Computer Science, DeepTech, Entrepreneurship'
    },
    'brand.deeptech.desc': {
        'zh': '編程，區塊鏈，去中心金融，量子電腦，生物信息學，人工智能，使用者經驗設計，商業模式設計',
        'en': 'Coding, Blockchain, DeFi, Quantum Computing, Bioinformatics, AI, UX/UI, Business Canvas...etc'
    },

    // Research-based section
    'research.title': {
        'zh': '由科研設計的STEM及創科課程',
        'en': 'Research-Designed STEM & Innovation Courses'
    },
    'research.subtitle': {
        'zh': '我們的STEM及創科的課程及產品基於<br>麻省理工學院(MIT)及香港教育大學(HKEdU)<br>的教育研究及創科研究框架來設計，<br>以聯合國(UN)17個可持續發展目標(SDG)為本',
        'en': 'Our STEM and innovation courses and products are designed based on<br>educational research and innovation frameworks from MIT and<br>The Education University of Hong Kong (EdUHK),<br>aligned with the UN\'s 17 Sustainable Development Goals (SDGs)'
    },

    // Curriculum page
    'curriculum.suitable': {
        'zh': '課程適用對象：',
        'en': 'Suitable for:'
    },
    'curriculum.primary': {
        'zh': '小學課程',
        'en': 'Primary School'
    },
    'curriculum.secondary': {
        'zh': '中學課程',
        'en': 'Secondary School'
    },
    'curriculum.sen': {
        'zh': 'SEN課程',
        'en': 'SEN Courses'
    },
    'curriculum.gifted': {
        'zh': '資優教育',
        'en': 'Gifted Education'
    },
    'curriculum.adult': {
        'zh': '成人教育',
        'en': 'Adult Education'
    },
    'curriculum.adult.desc': {
        'zh': '成人教育 (18歲以上)',
        'en': 'Adult Education (18 y.o. +)'
    },
    'curriculum.adult.detail': {
        'zh': '我們的課程能配合不同的人士學懂不同範疇的科技，讓他們都可以享受STEM/創科的學習的樂趣及應用於事業之中。',
        'en': 'Our courses cater to different individuals to learn various technologies, allowing them to enjoy STEM/Innovation learning and apply it to their careers.'
    },
    'curriculum.subject.title': {
        'zh': '課程種類：',
        'en': 'Subject'
    },
    'curriculum.subject.science.title': {
        'zh': '零式科學',
        'en': '0x2A.science'
    },
    'curriculum.subject.science.desc': {
        'zh': '科學、生物科技及合成生物學',
        'en': 'Science, Biotech and Synthetic Biology'
    },
    'curriculum.subject.maker.title': {
        'zh': '自造者技術學院',
        'en': 'Maker Academy'
    },
    'curriculum.subject.maker.desc': {
        'zh': '物聯網、5G網絡、機器人、工業4.0及自造技術',
        'en': 'IoT, 5G, Robotics, Industrial 4.0 and Maker Skills'
    },
    'curriculum.subject.deeptech.title': {
        'zh': '深科技AI學校',
        'en': 'DeepTech AI School'
    },
    'curriculum.subject.deeptech.desc': {
        'zh': '人工智能、區塊鏈、數據科學、量子計算、太空技術',
        'en': 'A.I., Blockchain, Data Science, Quantum Computing, SpaceTech'
    },

    // Team page
    'team.title': {
        'zh': '博士團隊',
        'en': 'Team'
    },

    // Footer - Removed duplicates


    // Contact/CTA section
    'cta.title': {
        'zh': '對我們的課程有興趣？',
        'en': 'Interested in our courses?'
    },

    // Maker page
    'maker.title': {
        'zh': '自造者技術學院',
        'en': 'MakerTech Academy'
    },
    'maker.3dprinting': {
        'zh': '3D打印及建模課程/工作坊',
        'en': '3D Printing & Modeling Courses/Workshops'
    },
    'maker.cad': {
        'zh': 'CAD設計及激光切割課程/工作坊',
        'en': 'CAD Design & Laser Cutting Courses/Workshops'
    },
    'maker.cnc': {
        'zh': 'CAD設計及CNC課程/工作坊',
        'en': 'CAD Design & CNC Courses/Workshops'
    },

    // DeepTech page
    'deeptech.title': {
        'zh': 'DeepTech AI School 深科技AI學校',
        'en': 'DeepTech AI School'
    },
    'deeptech.blockchain': {
        'zh': '區塊鏈及去中心化(DeFi)課程/工作坊',
        'en': 'Blockchain & DeFi Courses/Workshops'
    },
    'deeptech.tokenization': {
        'zh': '代幣化及代幣經濟課程/工作坊',
        'en': 'Tokenization & Token Economy Courses/Workshops'
    },
    'deeptech.bioinformatics': {
        'zh': '生物信息學課程/工作坊',
        'en': 'Bioinformatics Courses/Workshops'
    },

    // Index Page - Research Section
    'index.research.title': {
        'zh': '由科研設計的STEM及創科課程',
        'en': 'Research-Designed STEM & Innovation Courses'
    },
    'index.research.subtitle': {
        'zh': '我們的STEM及創科的課程及產品基於<br>麻省理工學院(MIT)及香港教育大學(HKEdU)<br>的教育研究及創科研究框架來設計，<br>以聯合國(UN)17個可持續發展目標(SDG)為本',
        'en': 'Our STEM and innovation courses and products are designed based on<br>educational research and innovation frameworks from MIT and<br>The Education University of Hong Kong (EdUHK),<br>aligned with the UN\'s 17 Sustainable Development Goals (SDGs)'
    },

    // Course Features Section
    'features.title': {
        'zh': 'BioX 的課程及教材的特點',
        'en': 'Features of BioX Courses and Materials'
    },
    'features.sdg.title': {
        'zh': '以SDG為本，問題為本學習，與生活息息相關',
        'en': 'SDG-based, Problem-based Learning, Relevant to Daily Life'
    },
    'features.sdg.desc': {
        'zh': '我們的課程以聯合國(UN)17個<span class="vlt-highlight">可持續發展目標(SDG)</span>為問題引子設計，所以課程及教案均與日常生活相關到世界問題有關，從而啟發學生對身邊問題的好奇心，提升自主學習性。<BR><br>而教授的創科解難技巧均能應用於生活當中，從而令到學生學以致用，融會貫通；能啟發思考，舉一反三。',
        'en': 'Our courses are designed with the UN\'s 17 <span class="vlt-highlight">Sustainable Development Goals (SDGs)</span> as problem triggers, relating curriculum and lesson plans to daily life and global issues, inspiring curiosity and enhancing self-directed learning.<BR><br>The innovation problem-solving skills taught can be applied in daily life, enabling students to apply what they learn, integrate knowledge, and think critically.'
    },
    'features.modular.title': {
        'zh': '獨有模組設計，因材施教，拔尖補底',
        'en': 'Unique Modular Design, Tailored Teaching, Catering to All Abilities'
    },
    'features.modular.desc': {
        'zh': 'BioX 的STEM及創科課程能以自主研發的<span class="vlt-highlight">創科技能樹</span>及<span class="vlt-highlight">創科技能原素表模組</span>組合而成，能組合不同程度由淺至進階的課程；既方便學校根據自身狀況訂制自己獨有的校本課程，亦可因應學生的學習差異作出調整。<BR><br>BioX 的模組課程組合既能針對初學者或有特殊學習差異教授入門創科技能，亦能針對進階/資優學生的需要教授高階的創科概念及技能。',
        'en': 'BioX\'s STEM and innovation courses are built using our proprietary <span class="vlt-highlight">Innovation Skill Tree</span> and <span class="vlt-highlight">Innovation Skill Element Modules</span>, allowing for courses ranging from beginner to advanced levels. This facilitates schools in customizing their own school-based curriculum and adjusting for student learning differences.<BR><br>BioX\'s modular course combinations can target beginners or those with special learning needs for introductory skills, as well as advanced/gifted students for high-level concepts and skills.'
    },
    'features.future.title': {
        'zh': '未來適用創科技能',
        'en': 'Future-Ready Innovation Skills'
    },
    'features.future.desc': {
        'zh': 'BioX 除了教授當今熱門的創科技能（如人工智能，物聯網，區塊鏈，大數據外），我們有全亞洲獨有設計及教授未來十年仍適用及熱門的深科技（DeepTech)。例如:生物科技(Biotech)，生物信息學(Bioinformatics)，量子計算(Quantum Computing)，太空科技，去中心化金融。',
        'en': 'Besides teaching currently popular innovation skills (such as AI, IoT, Blockchain, Big Data), BioX uniquely designs and teaches DeepTech that will remain relevant and popular for the next decade in Asia. Examples include: Biotechnology, Bioinformatics, Quantum Computing, SpaceTech, and Decentralized Finance (DeFi).'
    },
    'features.hands_on.title': {
        'zh': '「動手做」及學以致用為本，軟技巧為輔助',
        'en': 'Hands-on & Application-based, Supported by Soft Skills'
    },
    'features.hands_on.desc': {
        'zh': '<br>除了硬科技及技能外，BioX 亦會在課程中加入創科相關的動手應用為本軟技能(Softskills)，例如：設計思維(Design Thinking)，創意框架(Creativity Framework)，商業模式(Biz Canvas)，演說技巧(Pitching Skills)。<br><br>BioX 希望學生學到的技術及概念未來仍能學以致用。',
        'en': '<br>In addition to hard tech and skills, BioX incorporates innovation-related hands-on application-based soft skills into the curriculum, such as: Design Thinking, Creativity Framework, Business Model Canvas, and Pitching Skills.<br><br>BioX hopes that the technologies and concepts students learn will remain applicable in the future.'
    },
    'features.online.title': {
        'zh': '線上(COVID-Proof)及<br>線下獨立或混合模式',
        'en': 'Online (COVID-Proof) &<br>Offline Independent or Hybrid Modes'
    },
    'features.online.desc': {
        'zh': '由於BioX 以獨有模組設計課程及教材內容，輔以大量的例子及練習，加上影片/動畫多媒體幫助，學生可以不斷重覆點播課堂重溫，所以我們的課程適用於線上及線下獨立或混合模式教授，亦適用於疫情下以遙距授課。',
        'en': 'Due to BioX\'s unique modular course design and materials, supplemented by numerous examples and exercises, plus video/animation multimedia support, students can repeatedly review lessons. Therefore, our courses are suitable for online, offline independent, or hybrid teaching modes, and are also suitable for remote teaching during pandemics.'
    },
    'features.bot.title': {
        'zh': 'BOT模式及校本課程',
        'en': 'BOT Model & School-based Curriculum'
    },
    'features.bot.desc': {
        'zh': '除了公開課程外，BioX 首創以BOT模式與不同院校合作，以3個階段: <br> 1). Build （定制） 以我們的模組作為骨幹替院校定制校本課程<br> 2). Operate （運作） 我們到校/線上教授課程 或者 訓練院校老師去教授我們提供的課程<br> 3). Transfer （轉移） 指定運作時間後，我們可以轉移已定制校本課程給院校。',
        'en': 'Apart from public courses, BioX pioneers the BOT model for collaboration with various institutions in 3 stages: <br> 1). Build: Customize school-based curriculum for institutions using our modules as the backbone<br> 2). Operate: We teach courses at school/online OR train school teachers to teach our provided courses<br> 3). Transfer: After a specified operation period, we can transfer the customized school-based curriculum to the institution.'
    },

    // Teachers Page
    'teachers.title': {
        'zh': '專業的創科<Br>博士團隊',
        'en': 'Professional Innovation<Br>PhD Team'
    },
    'teachers.desc': {
        'zh': 'Printact 擁有十多名創科專家及導師，合共擁有超過15年STEM，創科，中小學及高等教育的經驗。',
        'en': 'BioX has over 10 innovation experts and instructors, with a combined experience of over 15 years in STEM, innovation, primary/secondary, and higher education.'
    },
    'teachers.chu.title': { zh: 'Dr. Chu', en: 'Dr. Chu' },
    'teachers.chu.desc': {
        'zh': '物理學及科學課程顧問<br>香港浸會大學物理學系哲學博士，教學經驗超過6年，為本公司的物理學及科學課程顧問，研究區塊鏈，人工智能等，另亦研究科學實驗課程。',
        'en': 'Physics & Science Curriculum Consultant<br>PhD in Physics, HKBU. Over 6 years of teaching experience. Consultant for Physics and Science curricula. Researches Blockchain, AI, and science experiment curricula.'
    },
    'teachers.ko.title': { zh: 'Dr. Ko', en: 'Dr. Ko' },
    'teachers.ko.desc': {
        'zh': '生命科學課程顧問<br>香港大學生態學哲學博士，教學經驗超過3年，為本公司的生命科學課程顧問，研究生命科學及生物科技等。',
        'en': 'Life Science Curriculum Consultant<br>PhD in Ecology, HKU. Over 3 years of teaching experience. Consultant for Life Science curricula. Researches Life Science and Biotechnology.'
    },
    'teachers.cheung.title': { zh: 'Dr. Cheung', en: 'Dr. Cheung' },
    'teachers.cheung.desc': {
        'zh': '電子工程學博士 <br>從事教育與培訓工作超過10年，曾教授多間學校及教育機構STEM及創科課程，擅長電子學及固件編程 ，曾為知名機構設計智能大廈系統及AR濾鏡。',
        'en': 'PhD in Electronic Engineering<br>Over 10 years in education and training. Taught STEM and innovation courses at various schools and institutions. Expert in Electronics and Firmware Programming. Designed smart building systems and AR filters for renowned organizations.'
    },
    'teachers.law.title': { zh: 'Mr. Law', en: 'Mr. Law' },
    'teachers.law.desc': {
        'zh': '物理學碩士<br>從事創科教育工作超過4年，精通數個電腦編程語言例如：Swift, Javascript, Python等，擔任Printact的資訊科技總監，及監修所有與電腦編程相關的課程教材。',
        'en': 'Master of Physics<br>Over 4 years in innovation education. Proficient in multiple programming languages (Swift, Javascript, Python, etc.). IT Director at BioX, overseeing all programming-related course materials.'
    },

    // Dr. Ng Profile
    'dr_ng.name': { zh: '吳卓光博士', en: 'Dr. Data Ng' },
    'dr_ng.title': { zh: '創辦人及首席科學家', en: 'Founder & Chief Scientist' },
    'dr_ng.qual.1': { zh: '香港大學哲學博士, PhD (研究項目：生物物理、正電子物理及半導體物理)', en: 'PhD in Physics, HKU (Research: Biophysics, Positron Physics, Semiconductor Physics)' },
    'dr_ng.qual.2': { zh: '香港大學理學士, BSc. （雙主修物理學和金融，副修天文學)', en: 'BSc, HKU (Double Major in Physics and Finance, Minor in Astronomy)' },
    'dr_ng.qual.3': { zh: '香港大學理學院物理學系教學實驗室前首席指導員', en: 'Former Chief Instructor, Physics Teaching Lab, Faculty of Science, HKU' },
    'dr_ng.qual.4': { zh: '英國物理學會會員', en: 'Member, Institute of Physics (IOP), UK' },
    'dr_ng.qual.5': { zh: '數碼港創業學會副會長', en: 'Vice President, Cyberport Startup Alumni Association (CSAA)' },
    'dr_ng.qual.6': { zh: '香港大學畢業生議會常委', en: 'Standing Committee Member, HKU Convocation' },
    'dr_ng.qual.7': { zh: '香港大學校董會前成員', en: 'Former Member, HKU Court' },
    'dr_ng.qual.8': { zh: '香港資優教育學苑前導師', en: 'Former Instructor, The Hong Kong Academy for Gifted Education' },
    
    'dr_ng.bio.p1': {
        'zh': '吳卓光博士於香港大學取得物理學系哲學博士及理學士。他亦為英國物理學會會員及香港資優教育學苑的會員，校友及導師。吳博士曾為香港大學物理學系設計及編寫一年級至三年級的所有實驗課程及教材予物理學系及工程學院共超過1000位學生。他亦曾教授香港大學專業進修學院副學士一年級的物理學導修科。多年來，他教授的科目的學生評分均高於物理學系不同科目的平均分。',
        'en': 'Dr. Data Ng obtained his PhD and BSc in Physics from the University of Hong Kong (HKU). He is a member of the Institute of Physics (UK) and a member, alumnus, and instructor of The Hong Kong Academy for Gifted Education. Dr. Ng designed and authored all Year 1-3 experimental curricula and materials for over 1000 students in the Physics Department and Faculty of Engineering at HKU. He also taught Year 1 Physics tutorials at HKU SPACE. For years, his student evaluation scores consistently exceeded the departmental average.'
    },
    'dr_ng.bio.p2': {
        'zh': '吳博士自中學開始熱衷於機械及電子設備的製作和改裝，並於2010年DIY了他首部3D打印機，此後一直進行研究3D打印技術及自動化技術。同時，吳博士亦希望能將個人化製作科技普及化，故於2013年創立了Printact，向大眾推廣創客文化、3D打印、數碼製造科技及自動化技術。',
        'en': 'Dr. Ng has been passionate about making and modifying mechanical and electronic devices since secondary school. He DIY-ed his first 3D printer in 2010 and has since been researching 3D printing and automation technologies. Aiming to democratize personalized manufacturing technology, he founded Printact in 2013 to promote maker culture, 3D printing, digital fabrication, and automation technologies to the public.'
    },
    'dr_ng.bio.p3': {
        'zh': '於2018，他亦創立了42Labs - 為亞洲首個推廣以STEM中的生物科技的教育初創企業。於2020，吳博士制作亞洲首個中學生而設的量子計算(Quantum Computing)及生物信息學（bioinformatic)的課程。',
        'en': 'In 2018, he founded 42Labs, Asia\'s first education startup promoting Biotechnology in STEM. In 2020, Dr. Ng created Asia\'s first Quantum Computing and Bioinformatics courses designed for secondary school students.'
    },
    'dr_ng.bio.p4': {
        'zh': '吳博士取得不同科技機構的認證，如香港首位IBM認証的Qiskit導師 - 為IBM推廣量子計算，Google的機器學習証書，哈佛大學的計算機科學証書。吳博士亦為香港電台CIBS節目《區塊鏈與你》及《土炮科研》的主持人，教授大眾有關區塊鏈的原理及不同的應用，和香港的創科成果。',
        'en': 'Dr. Ng holds certifications from various tech organizations, including being Hong Kong\'s first IBM-certified Qiskit Advocate promoting Quantum Computing, Google Machine Learning Certificate, and Harvard Computer Science Certificate. He is also the host of RTHK CIBS programs "Blockchain and You" and "Local Research", educating the public on Blockchain principles, applications, and Hong Kong\'s innovation achievements.'
    },
    'dr_ng.bio.p5': {
        'zh': '由於吳博士精通不同類型的創科學科，他被不同機構邀請作為創科比賽及黑客松(Hackathon)的導師及評判。它亦在多個創科比賽及黑客松贏得冠軍及特別優秀獎，如HackTrain，Jumpstarter，Elevator Pitch@HKSTP等等。',
        'en': 'Due to his expertise in various innovation disciplines, Dr. Ng is frequently invited as a mentor and judge for innovation competitions and Hackathons. He has also won championships and special awards in numerous competitions, such as HackTrain, Jumpstarter, and Elevator Pitch@HKSTP.'
    },
    'dr_ng.bio.p6': {
        'zh': '吳博士亦活躍於推廣創業的活動，並舉辦了香港大學創業週末及AngelHack@HKU黑客馬拉松等超過40個不同創業活動及黑客松。吳博士曾被邀請到香港大學、上海復旦大學、TEDxCUHK、數碼港、前海厚德創業孵化器及香港青年協會等機構分享以創新科技創業的經驗。',
        'en': 'Dr. Ng is also active in promoting entrepreneurship, having organized over 40 startup events and hackathons, including HKU Startup Weekend and AngelHack@HKU. He has been invited to share his tech entrepreneurship experience at HKU, Fudan University Shanghai, TEDxCUHK, Cyberport, Qianhai Houde Incubator, and HKFYG.'
    },
    'dr_ng.caption': {
        'zh': '吳卓光博士(圖左)，Tesla 創辦人-伊隆·馬斯克 Elon Musk(圖右)',
        'en': 'Dr. Data Ng (Left), Tesla Founder - Elon Musk (Right)'
    },

    // Call To Action
    'cta.title': { zh: '對我們的課程有興趣？', en: 'Interested in our courses?' },
    'cta.address.hk': {
        'zh': '辦公地址（香港）：<br> 香港島堅尼地城士美菲路12號祥興大廈8樓',
        'en': 'Office Address (Hong Kong):<br> 8/F, Cheung Hing Building, 12 Smithfield, Kennedy Town, Hong Kong Island'
    },
    'cta.address.sg': {
        'zh': '辦公地址（新加坡）需預約： <br>71 Ayer Rajah Crescent, #02-01, Singapore 139951',
        'en': 'Office Address (Singapore) By Appointment: <br>71 Ayer Rajah Crescent, #02-01, Singapore 139951'
    },
    'cta.contact': {
        'zh': '聯絡電話/Whatsapp: <br> (+852) 9721-1314',
        'en': 'Contact/Whatsapp: <br> (+852) 9721-1314'
    },

    // Curriculum Page
    'curriculum.title': { zh: 'BioX - STEM，生物科技，創科，深科技教育專家', en: 'BioX - STEM, Biotech, Innovation, Deep Tech Education Experts' },
    'curriculum.subtitle': {
        'zh': '課程及教材以 <br><span class="vlt-second-color">大學科研及教育研究</span><br>來開發 <br>',
        'en': 'Curriculum and materials developed based on <br><span class="vlt-second-color">University Research & Educational Studies</span><br>'
    },
    'curriculum.suitable_for': { zh: 'Suitable for <Br> 課程適用對象：', en: 'Suitable for:' },
    'curriculum.primary': { zh: '小學課程', en: 'Primary School' },
    'curriculum.primary.desc': { zh: 'Primary School (P3-P6)', en: 'Primary School (P3-P6)' },
    'curriculum.secondary': { zh: '中學課程', en: 'Secondary School' },
    'curriculum.secondary.desc': { zh: 'Secondary School (S1-S6)', en: 'Secondary School (S1-S6)' },
    'curriculum.gifted': { zh: '資優教育', en: 'Gifted Education' },
    'curriculum.gifted.desc': { zh: 'Gifted Education', en: 'Gifted Education' },
    'curriculum.primary.highlight': { zh: '小學課程', en: 'Primary School' },
    'curriculum.primary.detail': {
        'zh': '我們的課程能配合香港的不同小學課程，如常識科、科學科、資訊科技科',
        'en': 'Our curriculum aligns with various Hong Kong primary school subjects, such as General Studies, Science, and IT.'
    },
    'curriculum.secondary.highlight': { zh: '中學課程', en: 'Secondary School' },
    'curriculum.secondary.detail': {
        'zh': '我們的課程能配合香港的不同中學課程，如綜合科學科、物理科、生物學、化學科，資訊科技科、設計及科技科',
        'en': 'Our curriculum aligns with various Hong Kong secondary school subjects, such as Integrated Science, Physics, Biology, Chemistry, IT, and Design & Technology.'
    },
    'curriculum.sen': { zh: '特殊學習需要課程(SEN)', en: 'Special Education Need (SEN)' },
    'curriculum.sen.desc': { zh: 'Special Education Need', en: 'Special Education Need' },
    'curriculum.sen.highlight': { zh: '特殊學習需要課程(SEN)', en: 'Special Education Need (SEN)' },
    'curriculum.sen.detail': {
        'zh': '我們的課程能配合不同程度的特殊學習需要的學生，令到他們都可以享受STEM學習的樂趣',
        'en': 'Our curriculum caters to students with different levels of special educational needs, allowing them to enjoy the fun of STEM learning.'
    },
    'curriculum.gifted.highlight': { zh: '資優教育', en: 'Gifted Education' },
    'curriculum.gifted.detail': {
        'zh': '我們的課程能配合不同的資優教育學生，由曾擔任香港資優教育學苑的導師設計課程及教材',
        'en': 'Our curriculum caters to various gifted students, designed by former instructors of The Hong Kong Academy for Gifted Education.'
    },

    'curriculum.mode.title': { zh: 'Mode <Br> 課程模式：', en: 'Mode:' },
    'curriculum.mode.intro.title': { zh: 'Intro. Course <br> 入門簡介課程', en: 'Introductory Course' },
    'curriculum.mode.intro.desc': {
        'zh': '45 - 60 mins 入門課程，深入淺出，讓你了解不同創科範疇的概念、發展趨勢與應用',
        'en': '45 - 60 mins Introductory Course providing a brief overview with deep understanding of different innovation and technology subjects/aspects, development trends, and applications.'
    },
    'curriculum.mode.pbl.title': { zh: 'Project-based Learning (PBL) Workshop <br> 項目主導工作坊', en: 'Project-based Learning (PBL) Workshop' },
    'curriculum.mode.pbl.desc': {
        'zh': '2-12 小時學習目標與項目為本工作坊 (入門課程的增值選項)',
        'en': '2-12 hours Learning Outcomes and Project Outputs Focused Workshop (complimentary value-add content with intro course).'
    },
    'curriculum.mode.advanced.title': { zh: 'Advanced Course/ Workshop <Br> 進階課程/工作坊', en: 'Advanced Course/ Workshop' },
    'curriculum.mode.advanced.desc': {
        'zh': '48 - 60 小時 進階課程/工作坊及師友計劃。各同學會被配對不同的導師；完成課程後，同學將被推薦到不同的創科初創/公司進行實習',
        'en': '48 - 60 hours mentorship-empowered advanced course/workshop. Students will be matched with mentors; upon completion, students will be recommended for internships at various innovation startups/companies.'
    },

    // Maker Page
    'maker.title': { zh: '自造者技術學院', en: 'Maker Academy' },
    'maker.3d': { zh: '3D打印及建模課程/工作坊', en: '3D Printing & Modeling Course/Workshop' },
    'maker.laser': { zh: 'CAD設計及激光切割課程/工作坊', en: 'CAD Design & Laser Cutting Course/Workshop' },
    'maker.cnc': { zh: 'CAD設計及CNC課程/工作坊', en: 'CAD Design & CNC Course/Workshop' },
    'maker.pcb': { zh: '基礎電路板PCB設計及原型課程/工作坊', en: 'PCB Design & Prototyping Course/Workshop' },
    'maker.microcontroller': { zh: '微控制器:Arduino, ESP32, Raspberry Pi 課程/工作坊', en: 'Microcontroller: Arduino, ESP32, Raspberry Pi Course/Workshop' },
    'maker.canva': { zh: '用Canva 進行圖象設計課程/工作坊', en: 'Graphic Design with Canva Course/Workshop' },
    'maker.uiux': { zh: '使用者介面(UI)，使用者體驗(UX)課程/工作坊', en: 'UI/UX Design Course/Workshop' },

    // DeepTech Page
    'deeptech.title': { zh: 'DeepTech AI School 深科技AI學校', en: 'DeepTech AI School' },
    'deeptech.blockchain': { zh: '區塊鏈及去中心化(DeFi)課程/工作坊', en: 'Blockchain & DeFi Course/Workshop' },
    'deeptech.token': { zh: '代幣化及代幣經濟課程/工作坊', en: 'Tokenization & Tokenomics Course/Workshop' },
    'deeptech.bioinfo': { zh: '生物信息學課程/工作坊', en: 'Bioinformatics Course/Workshop' },
    'deeptech.quantum': { zh: '量子計算課程/工作坊', en: 'Quantum Computing Course/Workshop' },
    'deeptech.quantum_info': { zh: '量子計算及量子信息課程/工作坊', en: 'Quantum Computing & Quantum Information Course/Workshop' },
    'deeptech.deep_learning': { zh: '深度學習及AWS DeepRacer 課程/工作坊', en: 'Deep Learning & AWS DeepRacer Course/Workshop' },
    'deeptech.data_science': { zh: '數據科學及機器學習課程/工作坊', en: 'Data Science & Machine Learning Course/Workshop' },
    'deeptech.nocode_ai': { zh: '低/無編程APP開發及人工智能課程/工作坊', en: 'Low/No-Code App Development & AI Course/Workshop' },
    'deeptech.blocky': { zh: 'Blocky 編程課程/工作坊', en: 'Blocky Programming Course/Workshop' },

    // IT Lab Page
    'itlab.title': {
        'zh': '「中學IT 創新實驗室」計劃 2020/21–2023/24',
        'en': '"IT Innovation Lab in Secondary Schools" Programme 2020/21–2023/24'
    },
    'itlab.origin.title': {
        'zh': '計劃由來',
        'en': 'Programme Origin'
    },
    'itlab.origin.p1': {
        'zh': '1. 於2017 年《施政報告》中，香港政府為了推動香港創科發展，並加強香港中學科學的科普教育及「科學、科技、工程和數學」(STEM)教育。',
        'en': '1. In the 2017 Policy Address, the Hong Kong government aimed to promote I&T development in Hong Kong and strengthen popular science education and STEM education in secondary schools.'
    },
    'itlab.origin.p2.part1': {
        'zh': '2. 財政司司長在《2019-20年度財政預算案》為了',
        'en': '2. In the 2019-20 Budget, the Financial Secretary proposed the "IT Innovation Lab in Secondary Schools" programme to '
    },
    'itlab.origin.p2.highlight': {
        'zh': '鼓勵學校推行科普教育，培養本地的科技人才',
        'en': 'encourage schools to implement popular science education and cultivate local technology talent'
    },
    'itlab.origin.p2.part2': {
        'zh': '，提出「中學IT創新實驗室」計劃：',
        'en': ':'
    },
    'itlab.implementation.title': {
        'zh': '計劃實施',
        'en': 'Programme Implementation'
    },
    'itlab.implementation.desc': {
        'zh': '政府資訊科技總監辦公室在現行的「中學資訊科技增潤計劃」下推行「中學IT創新實驗室」計劃，在2020-2021，2021-2022至2022-2023這3個學年，向公帑資助的中學每所提供最高 100 萬元的資助，讓學校自行購置所需的資訊科技設備和專業服務，以及舉辦與資訊科技相關的課外活動，加深同學對嶄新資訊科技的認識，例如人工智能、區塊鏈、雲端運算、大數據等',
        'en': 'The Office of the Government Chief Information Officer (OGCIO) implements the "IT Innovation Lab in Secondary Schools" programme under the existing "Enriched IT Programme in Secondary Schools". For the three school years from 2020/21 to 2022/23, each publicly funded secondary school will be provided with funding of up to $1 million to procure necessary IT equipment and professional services, and organize IT-related extra-curricular activities to deepen students\' understanding of cutting-edge IT, such as Artificial Intelligence, Blockchain, Cloud Computing, Big Data, etc.'
    },
    'itlab.objective.title': {
        'zh': '計劃目的',
        'en': 'Programme Objectives'
    },
    'itlab.objective.intro': {
        'zh': '政府計劃透過中學生IT創新實驗室計劃：',
        'en': 'Through the "IT Innovation Lab in Secondary Schools" programme, the government aims to:'
    },
    'itlab.objective.p1': {
        'zh': '1. 提高年輕人（包括中學生）對資訊科技和創新思維的興趣，並營造一種資訊科技學習氛圍',
        'en': '1. Enhance the interest of young people (including secondary students) in IT and innovative thinking, and foster an IT learning atmosphere;'
    },
    'itlab.objective.p2': {
        'zh': '2. 鼓勵他們選擇科技有關的高等教育課程，並在將來投身創科行業。',
        'en': '2. Encourage them to choose technology-related tertiary education courses and pursue a career in the I&T industry in the future.'
    },
    'itlab.eligibility.title': {
        'zh': '計劃資格',
        'en': 'Programme Eligibility'
    },
    'itlab.eligibility.intro': {
        'zh': '公帑資助的中學：',
        'en': 'Publicly funded secondary schools:'
    },
    'itlab.eligibility.list1': {
        'zh': '官立中學',
        'en': 'Government secondary schools'
    },
    'itlab.eligibility.list2': {
        'zh': '資助中學',
        'en': 'Aided secondary schools'
    },
    'itlab.eligibility.list3': {
        'zh': '按位津貼中學中學',
        'en': 'Caput secondary schools'
    },
    'itlab.eligibility.list4': {
        'zh': '直接資助計劃（「直資」）中學',
        'en': 'Direct Subsidy Scheme (DSS) secondary schools'
    },
    'itlab.funding.title': {
        'zh': '資助項目',
        'en': 'Funding Scope'
    },
    'itlab.funding.item1.title': {
        'zh': '一、 購置和維修保養切合學校及學生需要的資訊科技設備及基礎設施：',
        'en': '1. Procurement and maintenance of IT equipment and infrastructure that meet the needs of the school and students:'
    },
    'itlab.funding.item1.desc': {
        'zh': '如伺服器端及客戶端的硬件和軟件、光纖及寬頻網絡、 雲端伺服器及儲存服務 以及採購相關專業服務（如雲端服務）',
        'en': 'Such as server-side and client-side hardware and software, optical fiber and broadband networks, cloud servers and storage services, and procurement of related professional services (such as cloud services).'
    },
    'itlab.funding.item2.title': {
        'zh': '二、 舉辦與資訊科技相關的活動',
        'en': '2. Organizing IT-related activities'
    },
    'itlab.funding.item2.desc': {
        'zh': '如工作坊、短期課程、體驗活動，例子包括學習編程、認識人工智能、無人機、機械人技術、VR/AR (虛擬實境／ 擴增實境)等新科技、應用資訊科技等。資助金額用途包括：活動的營運開支（例如為支援學習而設的維修保養和專業服務）​及行政費用',
        'en': 'Such as workshops, short courses, experiential activities, examples include learning coding, understanding AI, drones, robotics, VR/AR (Virtual Reality / Augmented Reality) and other new technologies, applying IT, etc. Funding usage includes: operational expenses of activities (e.g., maintenance and professional services for supporting learning) and administrative fees.'
    },
    'itlab.application.title': {
        'zh': '計劃申請程序',
        'en': 'Application Procedures'
    },
    'itlab.application.desc': {
        'zh': '公帑資助的中學：申請學校可以在計劃期內（2020-2021，2021-2022至2022-2023學年）全年提交申請。<br><br>收到申請後，正常的批准時間約為一個月或一個月以上，具體取決於申請的完整性、收到的申請數量和審核委員會的會議次數。 首批符合條件的學校將估計在2021年初將收到資助。<br><br> 對於需要在財政年度結束（即3月31日）之前處理資金的申請，學校必須在2月1日或之前提交申請。',
        'en': 'Publicly funded secondary schools: Schools can submit applications throughout the programme period (2020/21 to 2022/23 school years).<br><br>Upon receipt of an application, the normal approval time is about one month or more, depending on the completeness of the application, the number of applications received, and the frequency of Vetting Committee meetings. The first batch of eligible schools is estimated to receive funding in early 2021.<br><br> For applications requiring funding processing before the end of the financial year (i.e., March 31), schools must submit applications on or before February 1.'
    },
    'itlab.ai.title': {
        'zh': 'AI 人工智能課程/工作坊',
        'en': 'AI Artificial Intelligence Courses/Workshops'
    },
    'itlab.ai.item1': {
        'zh': '人工智能簡介工作坊',
        'en': 'Introduction to AI Workshop'
    },
    'itlab.ai.item2': {
        'zh': '語音辨識應用',
        'en': 'Voice Recognition Applications'
    },
    'itlab.ai.item3': {
        'zh': '視覺辨識應用',
        'en': 'Visual Recognition Applications'
    },
    'itlab.ai.item4': {
        'zh': '機器學習應用',
        'en': 'Machine Learning Applications'
    },
    'itlab.ai.item5': {
        'zh': '深度學習應用',
        'en': 'Deep Learning Applications'
    },
    'itlab.ai.item6': {
        'zh': '人工智能的道德及操守',
        'en': 'AI Ethics and Conduct'
    },
    'itlab.iot.title': {
        'zh': '物聯網(IoT)及工業4.0課程/工作坊',
        'en': 'IoT & Industry 4.0 Courses/Workshops'
    },
    'itlab.iot.item1': {
        'zh': '物聯網(IoT)簡介:傳感器及5G網絡',
        'en': 'Introduction to IoT: Sensors & 5G Networks'
    },
    'itlab.iot.item2': {
        'zh': '物聯網(IoT)應用：智能課室',
        'en': 'IoT Application: Smart Classroom'
    },
    'itlab.iot.item3': {
        'zh': '物聯網(IoT)應用：智能家居',
        'en': 'IoT Application: Smart Home'
    },
    'itlab.iot.item4': {
        'zh': '物聯網(IoT)應用：智能校園',
        'en': 'IoT Application: Smart Campus'
    },
    'itlab.iot.item5': {
        'zh': '物聯網(IoT)應用：智能大廈',
        'en': 'IoT Application: Smart Building'
    },
    'itlab.iot.item6': {
        'zh': '物聯網(IoT)應用：智能城市',
        'en': 'IoT Application: Smart City'
    },
    'itlab.iot.item7': {
        'zh': '物聯網(IoT)應用：智能生產 - 工業4.0',
        'en': 'IoT Application: Smart Manufacturing - Industry 4.0'
    },
    'itlab.blockchain.title': {
        'zh': '區塊鏈，加密貨幣及DeFi課程/工作坊',
        'en': 'Blockchain, Cryptocurrency & DeFi Courses/Workshops'
    },
    'itlab.blockchain.item1': {
        'zh': '區塊鏈簡介工作坊',
        'en': 'Introduction to Blockchain Workshop'
    },
    'itlab.blockchain.item2': {
        'zh': '加密貨幣及DeFi',
        'en': 'Cryptocurrency & DeFi'
    },
    'itlab.blockchain.item3': {
        'zh': '金融科技(Fintech)',
        'en': 'Fintech'
    },
    'itlab.blockchain.item4': {
        'zh': '區塊鏈應用, 如Token Economy (代幣經濟)',
        'en': 'Blockchain Applications, e.g., Token Economy'
    },
    'itlab.blockchain.item5': {
        'zh': '區塊鏈，加密貨幣及DeFi的道德及操守',
        'en': 'Ethics and Conduct in Blockchain, Cryptocurrency & DeFi'
    },
    'itlab.nocode.title': {
        'zh': '低/無編程開發 📱',
        'en': 'Low/No-Code Development 📱'
    },
    'itlab.nocode.item1': {
        'zh': '使用者介面/體驗設計',
        'en': 'UI/UX Design'
    },
    'itlab.nocode.item2': {
        'zh': '低/無編程手機程式開發',
        'en': 'Low/No-Code Mobile App Development'
    },
    'itlab.nocode.item3': {
        'zh': '低/無編程網頁程式開發',
        'en': 'Low/No-Code Web App Development'
    },
    'itlab.nocode.item4': {
        'zh': '低/無編程自動化程式開發',
        'en': 'Low/No-Code Automation Development'
    },
    'itlab.nocode.item5': {
        'zh': '低/無編程物聯網(IoT)手機程式開發',
        'en': 'Low/No-Code IoT Mobile App Development'
    },
    'itlab.nocode.item6': {
        'zh': '低/無編程去中心化程式(DApp)開發',
        'en': 'Low/No-Code DApp Development'
    },
    'itlab.cloud.title': {
        'zh': '雲端計算、霧端計算及邊緣計算課程/工作坊',
        'en': 'Cloud, Fog & Edge Computing Courses/Workshops'
    },
    'itlab.cloud.item1': {
        'zh': '雲端計算簡介工作坊',
        'en': 'Introduction to Cloud Computing Workshop'
    },
    'itlab.cloud.item2': {
        'zh': '霧端計算及邊緣計算簡介工作坊',
        'en': 'Introduction to Fog & Edge Computing Workshop'
    },
    'itlab.cloud.item3': {
        'zh': '雲端計算、霧端計算及邊緣計算應用',
        'en': 'Applications of Cloud, Fog & Edge Computing'
    },
    'itlab.bigdata.title': {
        'zh': '大數據課程/工作坊',
        'en': 'Big Data Courses/Workshops'
    },
    'itlab.bigdata.item1': {
        'zh': '大數據簡介',
        'en': 'Introduction to Big Data'
    },
    'itlab.bigdata.item2': {
        'zh': '大數據應用：數據抓取及分析',
        'en': 'Big Data Application: Data Scraping & Analysis'
    },
    'itlab.bigdata.item3': {
        'zh': '大數據應用：數據可視化及分析',
        'en': 'Big Data Application: Data Visualization & Analysis'
    },
    'itlab.chatbot.title': {
        'zh': '人工智能聊天機械人課程課程/工作坊',
        'en': 'AI Chatbot Courses/Workshops'
    },
    'itlab.chatbot.item1': {
        'zh': '人工智能聊天機械人設計工作坊',
        'en': 'AI Chatbot Design Workshop'
    },

    // Language toggle
    'lang.toggle': {
        'zh': 'En',
        'en': '繁'
    }
};

// Current language (default to Chinese)
let currentLang = localStorage.getItem('biox-lang') || 'zh';

/**
 * Get translation for a key
 * @param {string} key - Translation key
 * @param {string} lang - Language code (optional, uses current language if not specified)
 * @returns {string} - Translated text
 */
function t(key, lang = currentLang) {
    if (translations[key] && translations[key][lang]) {
        return translations[key][lang];
    }
    console.warn(`Translation not found for key: ${key}`);
    return key;
}

/**
 * Switch language
 * @param {string} lang - Language code ('zh' or 'en')
 */
function switchLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('biox-lang', lang);
    console.log('Switching language to:', lang);
    updatePageContent();
    updateSEO();
    updateMainContent();
}

/**
 * Toggle between languages
 */
function toggleLanguage() {
    const newLang = currentLang === 'zh' ? 'en' : 'zh';
    console.log('Toggle language from', currentLang, 'to', newLang);
    switchLanguage(newLang);
}

/**
 * Update all translatable content on the page
 */
function updatePageContent() {
    // Update elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.textContent = t(key);
    });

    // Update elements with data-i18n-html attribute (for HTML content)
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
        const key = el.getAttribute('data-i18n-html');
        el.innerHTML = t(key);
    });

    // Update placeholder attributes
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        el.placeholder = t(key);
    });

    // Update language toggle buttons (both desktop and mobile)
    const langToggle = document.getElementById('lang-toggle');
    const langToggleMobile = document.getElementById('lang-toggle-mobile');
    const toggleText = t('lang.toggle');
    
    if (langToggle) {
        langToggle.textContent = toggleText;
    }
    if (langToggleMobile) {
        langToggleMobile.textContent = toggleText;
    }

    // Update navigation menu items dynamically
    // updateNavigationMenu();
    
    // Update footer content dynamically
    // updateFooterContent();
}

/**
 * Update navigation menu items based on current language
 */
function updateNavigationMenu() {
    // Define menu mappings with emojis
    const menuMappings = [
        { href: 'team.html', zhText: '👨‍🔬 博士團隊', enText: '👨‍🔬 Team' },
        { href: 'curriculum.html', zhText: '📚 課程', enText: '📚 Courses' },
        { href: 'http://0x2A.science', zhText: '🧪 零式科學', enText: '🧪 0x2A Science' },
        { href: 'Maker.html', zhText: '🛠️ 自造者學院', enText: '🛠️ MakerTech' },
        { href: 'DeepTech.html', zhText: '🚀 深科技AI學校', enText: '🚀 DeepTech AI' }
    ];

    menuMappings.forEach(mapping => {
        // Select all links with matching href (works for both desktop and mobile menus)
        document.querySelectorAll(`a[href="${mapping.href}"]`).forEach(link => {
            const span = link.querySelector('span');
            if (span) {
                span.textContent = currentLang === 'en' ? mapping.enText : mapping.zhText;
            }
        });
    });
    
    // Update language toggle button text
    const langToggle = document.getElementById('lang-toggle');
    const langToggleMobile = document.getElementById('lang-toggle-mobile');
    const toggleText = currentLang === 'en' ? '繁' : 'En';
    
    if (langToggle) langToggle.textContent = toggleText;
    if (langToggleMobile) langToggleMobile.textContent = toggleText;
    
    console.log('Navigation menu updated to:', currentLang);
}

/**
 * Update footer content based on current language
 */
function updateFooterContent() {
    // Update footer widget titles
    const titleMappings = {
        '關於BioX': { zh: '關於BioX', en: 'About BioX' },
        'About BioX': { zh: '關於BioX', en: 'About BioX' },
        '快速鏈結': { zh: '快速鏈結', en: 'Quick Links' },
        'Quick Links': { zh: '快速鏈結', en: 'Quick Links' },
        '聯絡我們': { zh: '聯絡我們', en: 'Contact Us' },
        'Contact Us': { zh: '聯絡我們', en: 'Contact Us' }
    };

    document.querySelectorAll('.vlt-widget__title').forEach(el => {
        const currentText = el.textContent.trim();
        if (titleMappings[currentText]) {
            el.textContent = titleMappings[currentText][currentLang];
        }
    });

    // Update footer about description
    document.querySelectorAll('.vlt-widget-text p').forEach(el => {
        const text = el.textContent;
        if (text.includes('BioX') && (text.includes('成立於') || text.includes('founded'))) {
            el.innerHTML = currentLang === 'en' 
                ? 'BioX was founded in 2012 as Hong Kong\'s first startup to develop 3D printers and automation systems, and to teach maker technology.<br><br>In 2020, we merged with 42Lab to establish three major brands: 0x2A Science, MakerTech Academy, and DeepTech AI School.'
                : 'BioX 成立於2012年，為香港首間研發3D打印機及自動化系統的初創，並教授自造者技術。<br><br>於2020年，合併42Lab從而成立三大品牌：零式科學、自造者學院、深科技AI學校。';
        }
    });

    // Update footer quick links
    const quickLinkMappings = {
        '首頁': { zh: '首頁', en: 'Home' },
        'Home': { zh: '首頁', en: 'Home' },
        '博士團隊': { zh: '博士團隊', en: 'Team' },
        'Team': { zh: '博士團隊', en: 'Team' },
        '線上、實體、到校及公開課程': { zh: '線上、實體、到校及公開課程', en: 'Online, In-person & Public Courses' },
        'Online, In-person & Public Courses': { zh: '線上、實體、到校及公開課程', en: 'Online, In-person & Public Courses' },
        '零式科學': { zh: '零式科學', en: '0x2A Science' },
        '0x2A Science': { zh: '零式科學', en: '0x2A Science' },
        '自造者學院': { zh: '自造者學院', en: 'MakerTech Academy' },
        'MakerTech Academy': { zh: '自造者學院', en: 'MakerTech Academy' },
        '深科技AI學校': { zh: '深科技AI學校', en: 'DeepTech AI School' },
        'DeepTech AI School': { zh: '深科技AI學校', en: 'DeepTech AI School' }
    };

    document.querySelectorAll('.vlt-widget-nav-menu a').forEach(el => {
        const currentText = el.textContent.trim();
        if (quickLinkMappings[currentText]) {
            el.textContent = quickLinkMappings[currentText][currentLang];
        }
    });

    // Update contact section
    document.querySelectorAll('.vlt-widget-subscribe span').forEach(el => {
        const text = el.textContent;
        if (text.includes('辦公地址（香港）') || text.includes('Office Address (Hong Kong)')) {
            el.innerHTML = currentLang === 'en'
                ? 'Office Address (Hong Kong):<br> 8/F, Cheung Hing Building, 12 Smithfield, Kennedy Town, Hong Kong'
                : '辦公地址（香港）：<br> 香港島堅尼地城士美菲路12號祥興大廈8樓';
        }
        if (text.includes('辦公地址（新加坡）') || text.includes('Office Address (Singapore)')) {
            el.innerHTML = currentLang === 'en'
                ? 'Office Address (Singapore) By Appointment:<br>71 Ayer Rajah Crescent, #02-01, Singapore 139951'
                : '辦公地址（新加坡）需預約：<br>71 Ayer Rajah Crescent, #02-01, Singapore 139951';
        }
        if (text.includes('聯絡電話') || text.includes('Phone/Whatsapp')) {
            el.innerHTML = currentLang === 'en'
                ? 'Phone/Whatsapp:<br> (+852) 9721-1314'
                : '聯絡電話/Whatsapp:<br> (+852) 9721-1314';
        }
    });

    // Update copyright
    document.querySelectorAll('.vlt-footer-copyright p').forEach(el => {
        const year = new Date().getFullYear();
        el.textContent = currentLang === 'en'
            ? `© ${year} BioX Limited. All rights reserved.`
            : `© ${year} BioX Limited. 版權所有。`;
    });
    
    console.log('Footer content updated to:', currentLang);
}

/**
 * Update main page content based on current language
 */
function updateMainContent() {
    // Update hero section description
    document.querySelectorAll('.tp-caption p, #slide-2-layer-1').forEach(el => {
        if (el.tagName === 'P') {
            const text = el.textContent;
            if (text.includes('STEM') && (text.includes('生物科技') || text.includes('Biotech'))) {
                el.innerHTML = currentLang === 'en'
                    ? '<br><br>BioX is a specialist in STEM, Biotechnology, Innovation & Technology, and DeepTech education. We provide diverse, engaging, innovative and educational STEM courses, products and equipment, as well as teacher training for various primary and secondary schools in Hong Kong, and the general public.<br><br>BioX has established three categories of Innovation & Technology subjects:<br> 1) Biotechnology; 2) MakerTech; 3) DeepTech.<br>We hope to improve the Innovation & Technology learning experience starting from basic education, special needs and gifted education, to general education, nurturing more innovation and technology talents for Hong Kong and Asia.<br><br>'
                    : '<br><br>為STEM、生物科技、創科、深科技教育專家，提供多元、有趣、嶄新及具有教育意義的STEM課程，產品及器材，師資指導予香港不同類型的中、小學，以至一般大眾。<br><br>BioX創立三個類別創科科目：<BR> 1)生物科技; 2)自造者技術; 3)深科技。<br>我們希望由基礎教育，特殊及資優教育及至普及教育做起，改善創科學習經驗，為香港以至亞洲培養更多創科人才。<br><br>';
            }
        }
    });

    // Update research section titles
    document.querySelectorAll('h1.vlt-white-color, h2.vlt-white-color').forEach(el => {
        if (el.textContent.includes('科研') || el.textContent.includes('Research')) {
            el.textContent = currentLang === 'en' ? 'Research' : '科研';
        }
    });

    // Update brand showcase names
    const brandElements = document.querySelectorAll('.vlt-service-box h3, .vlt-post-title');
    brandElements.forEach(el => {
        const text = el.textContent.trim();
        const brandMappings = {
            '零式科學': { zh: '零式科學', en: '0x2A Science' },
            '0x2A Science': { zh: '零式科學', en: '0x2A Science' },
            '自造者技術學院': { zh: '自造者技術學院', en: 'MakerTech Academy' },
            'MakerTech Academy': { zh: '自造者技術學院', en: 'MakerTech Academy' },
            '深科技AI學校': { zh: '深科技AI學校', en: 'DeepTech AI School' },
            'DeepTech AI School': { zh: '深科技AI學校', en: 'DeepTech AI School' }
        };
        if (brandMappings[text]) {
            el.textContent = brandMappings[text][currentLang];
        }
    });

    // Update CTA section
    document.querySelectorAll('.vlt-section-title h2').forEach(el => {
        if (el.textContent.includes('課程有興趣') || el.textContent.includes('Interested')) {
            el.textContent = currentLang === 'en' 
                ? 'Interested in our courses?'
                : '對我們的課程有興趣？';
        }
    });

    // Update brand descriptions
    document.querySelectorAll('.vlt-service-box p, .vlt-post-content p').forEach(el => {
        const text = el.textContent;
        // Science brand
        if (text.includes('零式科學') || text.includes('0x2A Science')) {
            if (text.includes('致力於') || text.includes('dedicated')) {
                el.textContent = currentLang === 'en'
                    ? '0x2A Science is dedicated to promoting science education and provides biotechnology courses & workshops, including genetic engineering, DNA extraction, PCR, and microscopy training.'
                    : '零式科學致力於推廣科學教育，提供生物科技課程/工作坊，包括基因工程、DNA提取、PCR、顯微鏡培訓等。';
            }
        }
        // Maker brand
        if (text.includes('自造者') || text.includes('MakerTech')) {
            if (text.includes('專注於') || text.includes('focuses on')) {
                el.textContent = currentLang === 'en'
                    ? 'MakerTech Academy focuses on digital fabrication and engineering education, offering 3D printing, laser cutting, CNC machining, and CAD design courses & workshops.'
                    : '自造者技術學院專注於數碼製造和工程教育，提供3D打印、激光切割、CNC加工、CAD設計課程/工作坊。';
            }
        }
        // DeepTech brand
        if (text.includes('深科技') || text.includes('DeepTech')) {
            if (text.includes('培養') || text.includes('nurturing')) {
                el.textContent = currentLang === 'en'
                    ? 'DeepTech AI School is committed to nurturing next-generation technology talents, offering blockchain, AI, bioinformatics, and tokenization courses & workshops.'
                    : '深科技AI學校致力於培養下一代科技人才，提供區塊鏈、人工智能、生物信息學、代幣化課程/工作坊。';
            }
        }
    });
    
    console.log('Main content updated to:', currentLang);
}

/**
 * Update SEO metadata based on current language
 */
function updateSEO() {
    // Update HTML lang attribute
    document.documentElement.lang = currentLang === 'zh' ? 'zh-TW' : 'en';

    // Update page title
    const titleEl = document.querySelector('title');
    if (titleEl) {
        const key = titleEl.getAttribute('data-i18n');
        if (key) {
            titleEl.textContent = t(key);
        } else {
            titleEl.textContent = t('page.title');
        }
    }

    // Update meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
        metaDesc.setAttribute('content', t('page.description'));
    }

    // Update Open Graph tags if present
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
        ogTitle.setAttribute('content', t('page.title'));
    }

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
        ogDesc.setAttribute('content', t('page.description'));
    }
}

/**
 * Get current language
 * @returns {string} - Current language code
 */
function getCurrentLanguage() {
    return currentLang;
}

/**
 * Initialize i18n system
 */
function initI18n() {
    console.log('Initializing i18n with language:', currentLang);
    // Apply saved language preference
    updatePageContent();
    updateSEO();
    updateMainContent();
}

// Auto-initialize when window is fully loaded (including all scripts and document.write)
window.addEventListener('load', initI18n);

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { t, switchLanguage, toggleLanguage, getCurrentLanguage, translations };
}
