export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'ai-ml' | 'nlp' | 'analytics' | 'fullstack';
  categoryLabel: string;
  githubUrl: string;
  image: string;
  summary: string;
  highlights: string[];
  metrics: { label: string; value: string }[];
  technologies: string[];
  role: string;
  timeline: string;
  challenge: string;
  solution: string;
  hasSimulator?: boolean;
}

export interface Experience {
  id: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  badge?: string;
  description: string[];
  techStack: string[];
  keyMetric: string;
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  score: string;
  scoreType: string;
  highlights?: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  category: string;
  year?: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: 'SRIHARIHARAN T',
    displayName: 'Srihariharan T',
    title: 'Data Science & AI-ML Engineer',
    headline: 'Building Production-Grade Machine Learning & NLP Systems',
    bio: 'Data Science & AI-ML Engineer with hands-on experience training models to 93%+ accuracy on 1M+ real-world multimodal biometric samples and engineering AI automation pipelines that eliminate up to 80% of manual effort. Background spanning an NIT Trichy research internship and 3 software engineering roles.',
    email: 'srihariharan213@gmail.com',
    phone: '+91 99445 77396',
    location: 'Tiruchirappalli, Tamil Nadu, India',
    github: 'https://github.com/Hariharan2134',
    linkedin: 'https://linkedin.com/in/srihariharan213',
    stats: [
      { value: '93.1%', label: 'Valence Accuracy', context: 'On 1M+ multimodal biosignals' },
      { value: '1M+', label: 'Biometric Samples', context: 'Trained across BVP & GSR sensors' },
      { value: '80%', label: 'Manual Effort Cut', context: 'Via custom AI web scrapers & agents' },
      { value: '0.0065', label: 'Validation Loss', context: 'CNN-BiLSTM sequence model' },
    ],
  },

  skills: {
    ml_ai: [
      { name: 'Scikit-learn', level: 'Advanced', description: 'Random Forests, SVM, Ensembles, SMOTE, Model Evaluation' },
      { name: 'PyTorch', level: 'Proficient', description: 'Deep neural networks, custom loss functions, tensor operations' },
      { name: 'TensorFlow & Keras', level: 'Proficient', description: 'CNNs, BiLSTMs, sequential time-series modeling' },
      { name: 'Hugging Face', level: 'Advanced', description: 'Transformers, fine-tuning, tokenizers, pipeline deployment' },
      { name: 'NLTK & SpaCy', level: 'Proficient', description: 'Text preprocessing, POS tagging, semantic extraction' },
      { name: 'NVIDIA NIM API', level: 'Working Knowledge', description: 'High-throughput LLM inference, paraphrasing & translation' },
    ],
    data_viz: [
      { name: 'Pandas & NumPy', level: 'Advanced', description: 'Vectorized manipulation, time-series windows, tabular cleaning' },
      { name: 'Matplotlib & Seaborn', level: 'Advanced', description: 'Statistical distributions, confusion matrices, signal plots' },
      { name: 'BeautifulSoup & Selenium', level: 'Advanced', description: 'Headless scraping, automated lead extraction, DOM parsing' },
      { name: 'Tableau', level: 'Intermediate', description: 'Interactive executive reporting, trend visualization' },
    ],
    languages: [
      { name: 'Python', level: 'Expert', description: 'Core DS/ML stack, automation scripting, Streamlit, API clients' },
      { name: 'Java', level: 'Proficient', description: 'Enterprise backend, Spring Boot architecture, OOP patterns' },
      { name: 'JavaScript & TypeScript', level: 'Proficient', description: 'Modern web, dynamic asynchronous applications' },
      { name: 'SQL', level: 'Proficient', description: 'Relational schema design, complex joins, aggregation queries' },
      { name: 'HTML5 & CSS3', level: 'Advanced', description: 'Responsive layouts, modern semantic markup, Tailwind' },
    ],
    frameworks_tools: [
      { name: 'Spring Boot', level: 'Proficient', description: 'RESTful API microservices, JPA/Hibernate, employee systems' },
      { name: 'Angular & React', level: 'Proficient', description: 'Component dashboards, reactive state, SPA development' },
      { name: 'MySQL & MongoDB', level: 'Proficient', description: 'Relational data stores and NoSQL document collections' },
      { name: 'Git & GitHub', level: 'Advanced', description: 'Branch management, CI/CD hooks, open-source repositories' },
      { name: 'Postman & REST APIs', level: 'Advanced', description: 'Endpoint testing, auth token validation, mock servers' },
      { name: 'Firebase', level: 'Intermediate', description: 'Cloud Firestore, real-time database, authentication' },
    ],
  },

  projects: [
    {
      id: 'emotion-prediction',
      title: 'Emotion Prediction from Physiological Signals (GSR & PPG)',
      subtitle: 'Multimodal Biometric Deep Learning & Valence Classification',
      category: 'ai-ml' as const,
      categoryLabel: 'AI / ML & Biometrics',
      githubUrl: 'https://github.com/Hariharan2134/Emotion-Prediction-Using-Physiological-signals-GSR-and-PPG-',
      image: '/src/assets/images/project_emotion_ai_1790340456630.jpg',
      summary: 'Academic research-grade machine learning pipeline analyzing 1M+ physiological samples to predict human emotional states from galvanic skin response and photoplethysmogram waveforms.',
      highlights: [
        'Trained a Random Forest classifier paired with Synthetic Minority Over-sampling Technique (SMOTE) to overcome real-world sensor class imbalance.',
        'Achieved 93.1% classification accuracy in predicting emotional valence states across multi-subject biometric benchmarks.',
        'Engineered a hybrid CNN-BiLSTM deep learning model using sliding time windows to track continuous valence/arousal shifts with 0.0065 validation loss.',
        'Applied specialized bandpass noise filtering and feature extraction on 4 multimodal signal channels, lifting training stability by ~30%.',
      ],
      metrics: [
        { label: 'Valence Accuracy', value: '93.1%' },
        { label: 'Samples Processed', value: '1,000,000+' },
        { label: 'Validation Loss', value: '0.0065' },
        { label: 'Stability Gain', value: '+30%' },
      ],
      technologies: ['Python', 'Pandas', 'Random Forest', 'SMOTE', 'CNN-BiLSTM', 'Scikit-learn', 'NumPy', 'Signal Processing'],
      role: 'Lead ML Researcher & Developer',
      timeline: 'Jun 2024 – Aug 2024',
      challenge: 'Raw physiological sensors (GSR & BVP/PPG) suffer from severe noise artifacts, subject-to-subject baseline drift, and extreme class imbalance in emotional states.',
      solution: 'Developed an end-to-end preprocessing pipeline combining digital frequency filters, statistical feature extraction (mean, variance, peaks, power spectral density), SMOTE balancing, and temporal sequence modeling using Bidirectional LSTMs.',
      hasSimulator: true,
    },
    {
      id: 'idiom-translation',
      title: 'Idiom Translation Using NLP & AI ("Idiom Bridge")',
      subtitle: 'Semantic Idiom Detection, Paraphrasing & Multilingual Translation',
      category: 'nlp' as const,
      categoryLabel: 'NLP & Transformers',
      githubUrl: 'https://github.com/Hariharan2134/Idiom-Translation-Using-NLP-AI',
      image: '/src/assets/images/project_idiom_nlp_1790340469267.jpg',
      summary: 'An intelligent NLP application that detects English idioms in arbitrary text, resolves their figurative meanings, paraphrases them into natural English, and accurately translates them into Tamil.',
      highlights: [
        'Built "Idiom Bridge", an AI-powered Streamlit web application detecting English idioms against a curated 2,000+ entry idiom-meaning linguistic knowledge base.',
        'Engineered a dual-backend NLP pipeline: NVIDIA NIM LLM API for high-precision semantic paraphrasing and context-aware multilingual translation when connected.',
        'Engineered an automatic graceful fallback to a local Hugging Face transformer model for offline and zero-setup deployment.',
        'Eliminated literal word-by-word mistranslation errors common in traditional translation tools for idiomatic expressions.',
      ],
      metrics: [
        { label: 'Curated Idioms', value: '2,000+' },
        { label: 'Supported Languages', value: 'Tamil & Global' },
        { label: 'Dual Pipeline', value: 'NVIDIA NIM + HF' },
        { label: 'Latency', value: '< 250ms' },
      ],
      technologies: ['Python', 'Streamlit', 'Hugging Face Transformers', 'NVIDIA NIM API', 'NLTK', 'RegEx', 'PyTorch'],
      role: 'NLP Engineer & Architect',
      timeline: '2024',
      challenge: 'Idioms like "bite the bullet" or "piece of cake" fail drastically in conventional MT engines because literal word tokens distort the underlying figurative sentiment and semantics.',
      solution: 'Designed a two-phase architecture: 1) Phrase-level token matching with sliding n-grams against an idiom repository, 2) Contextual neural rewriting replacing the idiom with natural explanatory English before passing to target language translation.',
      hasSimulator: true,
    },
    {
      id: 'market-basket',
      title: 'Market Basket Analysis Tool',
      subtitle: 'Frequent Itemset Mining & Retail Cross-Selling Association Rules',
      category: 'analytics' as const,
      categoryLabel: 'Data Analytics & Mining',
      githubUrl: 'https://github.com/Hariharan2134/Market-Basket-Analysis-Tool',
      image: '/src/assets/images/project_market_basket_1790340480609.jpg',
      summary: 'Data mining tool applying the Apriori algorithm on retail transactional datasets to uncover hidden customer buying patterns and rank high-confidence cross-selling recommendations.',
      highlights: [
        'Collaborated on a 5-member team project implementing end-to-end association rule mining using mlxtend and Pandas.',
        'Engineered a resilient data preprocessing pipeline handling transaction deduplication, missing value imputation, and sparse one-hot matrix encoding.',
        'Mined frequent itemsets and ranked association rules by Support, Confidence, and Lift metrics to isolate high-value cross-promotional bundles.',
        'Built visual matrix and network distribution graphs illustrating item co-occurrence probabilities for merchant inventory optimization.',
      ],
      metrics: [
        { label: 'Algorithm', value: 'Apriori' },
        { label: 'Team Size', value: '5 Engineers' },
        { label: 'Metrics Evaluated', value: 'Support, Conf, Lift' },
        { label: 'Output', value: 'Ranked Rules' },
      ],
      technologies: ['Python', 'Apriori (mlxtend)', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
      role: 'Data Pipeline & Algorithm Engineer',
      timeline: '2024',
      challenge: 'High-dimensional retail transaction data quickly leads to combinatorial explosion during candidate itemset generation if pruning thresholds are not mathematically calibrated.',
      solution: 'Streamlined transaction encoding into compressed sparse matrices and tuned minimum support and confidence thresholds to extract actionable rules with Lift > 1.5.',
      hasSimulator: true,
    },
    {
      id: 'leave-attendance',
      title: 'Leave & Attendance Management System',
      subtitle: 'Full-Stack Enterprise HR Platform with Real-Time Analytics',
      category: 'fullstack' as const,
      categoryLabel: 'Full-Stack & Cloud',
      githubUrl: 'https://github.com/Hariharan2134/Leave-Attendance-Management-System',
      image: '/src/assets/images/project_market_basket_1790340480609.jpg',
      summary: 'Enterprise full-stack HR solution featuring Spring Boot RESTful microservices and an Angular manager dashboard with live analytics widgets for attendance and shift tracking.',
      highlights: [
        'Architected a resilient full-stack backend with 10+ REST API endpoints using Spring Boot, Hibernate ORM, and MySQL database.',
        'Engineered employee self-service modules for digital clock-in/out, multi-tier leave application workflows, and automated shift scheduling for 50+ staff.',
        'Constructed an Angular single-page dashboard equipped with 4 real-time analytics widgets: attendance rate, pending leave queue, shift coverage, and absenteeism trends.',
        'Reduced manual HR reporting and administrative paper processing time by ~40%.',
      ],
      metrics: [
        { label: 'REST Endpoints', value: '10+' },
        { label: 'Staff Supported', value: '50+ Records' },
        { label: 'Reporting Effort', value: '-40%' },
        { label: 'Analytics Widgets', value: '4 Real-Time' },
      ],
      technologies: ['Java', 'Spring Boot', 'Angular', 'MySQL', 'REST APIs', 'TypeScript', 'CSS3'],
      role: 'Full-Stack Developer',
      timeline: '2024',
      challenge: 'Traditional paper-based leave logging led to scheduling conflicts, lack of visibility into daily shift coverage, and hours spent compiling monthly HR compliance reports.',
      solution: 'Built a centralized relational schema with transaction isolation, automated validation rules for leave balances, and reactive Angular UI charts providing immediate administrative oversight.',
    },
  ],

  experience: [
    {
      id: 'infogenx',
      role: 'Software Developer Intern',
      organization: 'Infogenx',
      location: 'India',
      period: 'Aug 2025 – Nov 2025',
      badge: 'Automation & AI Integration',
      description: [
        'Built an AI-assisted LinkedIn scraping pipeline using Python (BeautifulSoup, Selenium) targeting 500+ prospects per run, reducing manual lead generation effort by 80% and saving ~10 hours of work per week.',
        'Developed an intelligent email outreach automation agent integrating Bitrix24 CRM with Mailjet API, enabling personalized AI-driven bulk campaigns across 3 pipeline stages and cutting campaign setup time by 60%.',
        'Built a Python-based AI content automation tool that parsed PDFs and auto-published 20+ structured blog articles to the company website, reducing per-article upload time by 70%.',
      ],
      techStack: ['Python', 'Selenium', 'BeautifulSoup', 'Bitrix24 CRM', 'Mailjet API', 'PDF Processing', 'REST APIs'],
      keyMetric: '80% Manual Effort Reduction',
    },
    {
      id: 'nit-trichy',
      role: 'Research Intern',
      organization: 'National Institute of Technology, Tiruchirappalli (NIT Trichy)',
      location: 'Tiruchirappalli, Tamil Nadu',
      period: 'Jun 2024 – Aug 2024',
      badge: 'Premier National Research',
      description: [
        'Built an AI-based emotion recognition pipeline on 1M+ physiological samples (BVP & GSR sensors) using Pandas; trained a Random Forest classifier with SMOTE oversampling, achieving 93.1% valence classification accuracy.',
        'Designed a CNN-BiLSTM deep learning model for continuous valence/arousal prediction using sliding time windows and Bidirectional LSTM with dropout (validation loss: 0.0065).',
        'Performed feature engineering and noise filtering across 4 multimodal signal types, improving training stability by ~30%.',
      ],
      techStack: ['Python', 'PyTorch / Keras', 'CNN-BiLSTM', 'Random Forest', 'SMOTE', 'Pandas', 'Biosignal Processing'],
      keyMetric: '93.1% Valence Accuracy on 1M+ Samples',
    },
    {
      id: 'codebind',
      role: 'Web Developer Intern',
      organization: 'CodeBind Technologies',
      location: 'Trichy, Tamil Nadu',
      period: 'Jul 2023 – Aug 2023',
      badge: 'Frontend Engineering',
      description: [
        'Designed and deployed a fully responsive restaurant website with 5+ interactive sections (menu, reservations, gallery, location) using HTML5, CSS3, and JavaScript, delivered within a 4-week timeline.',
        'Optimized UI across 3 device breakpoints (mobile, tablet, desktop), eliminating responsive layout glitches and improving estimated page load speed by ~25%.',
      ],
      techStack: ['HTML5', 'CSS3', 'JavaScript', 'Responsive UI', 'Performance Optimization'],
      keyMetric: '25% Page Speed Improvement',
    },
  ],

  education: [
    {
      degree: 'B.Tech in Information Technology',
      institution: 'Saranathan College of Engineering',
      location: 'Tiruchirappalli, Tamil Nadu',
      period: '2021 – 2025',
      score: '8.44 / 10',
      scoreType: 'CGPA',
      highlights: [
        'Specialized coursework in Data Structures, Machine Learning, Database Management, and Cloud Computing.',
        'Active contributor in academic research projects and technical symposiums.',
      ],
    },
    {
      degree: '12th Grade (Higher Secondary)',
      institution: 'Chelammal Vidhyaashram Senior Secondary School',
      location: 'Tamil Nadu',
      period: '2020 – 2021',
      score: '85.0%',
      scoreType: 'Percentage',
      highlights: ['Mathematics, Physics, Chemistry, Computer Science stream.'],
    },
    {
      degree: '10th Grade (Secondary)',
      institution: 'Chelammal Vidhyaashram Senior Secondary School',
      location: 'Tamil Nadu',
      period: '2018 – 2019',
      score: '80.8%',
      scoreType: 'Percentage',
    },
  ],

  certifications: [
    {
      title: 'Data Analytics Essentials',
      issuer: 'Cisco Networking Academy',
      category: 'Data Analytics',
    },
    {
      title: 'Data Science Training',
      issuer: 'Internshala',
      category: 'Machine Learning & Python',
    },
    {
      title: 'Data Science: R Programming Complete Diploma',
      issuer: 'Udemy',
      category: 'Statistical Computing',
    },
    {
      title: 'Data Science Essentials with Python',
      issuer: 'Cisco Networking Academy',
      category: 'Python Data Science',
    },
  ],
};
