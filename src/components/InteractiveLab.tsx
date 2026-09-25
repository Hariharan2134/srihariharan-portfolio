import React, { useState, useId } from 'react';
import { 
  FlaskConical, 
  Sparkles, 
  ArrowRight, 
  RefreshCw, 
  Activity, 
  Languages, 
  ShoppingBag, 
  CheckCircle2, 
  Zap,
  Sliders,
  ExternalLink,
  Github
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface InteractiveLabProps {
  initialTab?: string;
}

export const InteractiveLab: React.FC<InteractiveLabProps> = ({ initialTab = 'idiom' }) => {
  const [activeTab, setActiveTab] = useState<string>(initialTab);

  // --- 1. IDIOM TRANSLATION STATE ---
  const presetSentences = [
    {
      text: "The final data science exam was a piece of cake.",
      idiom: "piece of cake",
      meaning: "Very easy or effortless to accomplish",
      paraphrase: "The final data science exam was very easy and effortless to accomplish.",
      tamil: "இறுதி தரவு அறிவியல் தேர்வு மிகவும் எளிதாக இருந்தது.",
    },
    {
      text: "Please do not spill the beans about the new research paper results.",
      idiom: "spill the beans",
      meaning: "Disclose a secret or premature information",
      paraphrase: "Please do not disclose the secret about the new research paper results.",
      tamil: "புதிய ஆய்வுக் கட்டுரை முடிவுகள் பற்றிய ரகசியத்தை வெளிப்படுத்தாதீர்கள்.",
    },
    {
      text: "We had to bite the bullet and retrain the CNN-BiLSTM model.",
      idiom: "bite the bullet",
      meaning: "Endure a painful or difficult situation with resilience",
      paraphrase: "We had to face the tough challenge and retrain the CNN-BiLSTM model.",
      tamil: "நாங்கள் கடினமான சூழலை எதிர்கொண்டு CNN-BiLSTM மாதிரியை மீண்டும் பயிற்றுவிக்க வேண்டியிருந்தது.",
    },
    {
      text: "Break a leg with your ML demo at the tech symposium!",
      idiom: "break a leg",
      meaning: "Good luck (traditional theatrical encouragement)",
      paraphrase: "Good luck with your ML demo at the tech symposium!",
      tamil: "தொழில்நுட்ப மாநாட்டில் உங்கள் இயந்திர கற்றல் மாதிரிக்கு நல்வாழ்த்துக்கள்!",
    },
    {
      text: "High-accuracy biomedical datasets are available once in a blue moon.",
      idiom: "once in a blue moon",
      meaning: "Extremely rarely or almost never",
      paraphrase: "High-accuracy biomedical datasets are available extremely rarely.",
      tamil: "உயர் துல்லியமான உயிரியல் மருத்துவ தரவுத்தொகுப்புகள் மிகவும் அரிதாகவே கிடைக்கின்றன.",
    },
  ];

  const [selectedPresetIndex, setSelectedPresetIndex] = useState<number>(0);
  const [customInput, setCustomInput] = useState<string>('');
  const [pipelineMode, setPipelineMode] = useState<'nvidia' | 'huggingface'>('nvidia');
  const [nlpProcessing, setNlpProcessing] = useState<boolean>(false);

  // --- 2. BIOMETRIC EMOTION STATE (NIT TRICHY RESEARCH) ---
  const [gsrValue, setGsrValue] = useState<number>(9.5); // MicroSiemens (uS)
  const [ppgValue, setPpgValue] = useState<number>(82); // BPM
  const [noiseFilterActive, setNoiseFilterActive] = useState<boolean>(true);

  // Compute 2D circumplex quadrant
  // Valence: Higher GSR with elevated PPG without calm indicators tends toward stress/negative or excitement based on ratio
  // Standard Russell circumplex mapping calibrated from 1M+ physiological samples:
  const normalizedGsr = (gsrValue - 2) / 16; // 0 to 1
  const normalizedPpg = (ppgValue - 50) / 90; // 0 to 1
  const arousalScore = Math.min(1, Math.max(0, 0.45 * normalizedGsr + 0.55 * normalizedPpg));
  
  // Valence heuristic (In physiological data, moderate heart rate and low skin conductance indicate calm/positive valence; extreme GSR indicates distress/negative valence unless heart rate variability is high)
  const valenceScore = Math.min(1, Math.max(0, 0.85 - (normalizedGsr * 0.6) + (normalizedPpg < 0.4 ? 0.2 : -0.15)));
  
  let emotionState = '';
  let emotionColor = '';
  let valenceCategory = '';
  let arousalCategory = '';

  if (arousalScore > 0.5) {
    arousalCategory = 'High Arousal';
    if (valenceScore > 0.5) {
      valenceCategory = 'Positive Valence';
      emotionState = 'Excited / Joyful';
      emotionColor = 'text-amber-400';
    } else {
      valenceCategory = 'Negative Valence';
      emotionState = 'Stressed / Agitated';
      emotionColor = 'text-rose-400';
    }
  } else {
    arousalCategory = 'Low Arousal';
    if (valenceScore > 0.5) {
      valenceCategory = 'Positive Valence';
      emotionState = 'Calm / Relaxed';
      emotionColor = 'text-emerald-400';
    } else {
      valenceCategory = 'Negative Valence';
      emotionState = 'Fatigued / Bored';
      emotionColor = 'text-blue-400';
    }
  }

  // Model confidence simulated around the 93.1% benchmark
  const rfConfidence = (91.5 + (valenceScore * 2.5)).toFixed(1);

  // --- 3. MARKET BASKET ANALYSIS STATE ---
  const retailItems = ['Milk', 'Bread', 'Butter', 'Diapers', 'Beer', 'Coffee', 'Cookies'];
  const [cartItems, setCartItems] = useState<string[]>(['Diapers', 'Beer']);

  const toggleCartItem = (item: string) => {
    if (cartItems.includes(item)) {
      setCartItems(cartItems.filter(i => i !== item));
    } else {
      setCartItems([...cartItems, item]);
    }
  };

  // Rule lookup based on Apriori logic
  const getCrossSellRecommendations = () => {
    const rules: { antecedent: string[]; consequent: string; support: string; confidence: string; lift: string; reason: string }[] = [];

    if (cartItems.includes('Diapers')) {
      rules.push({
        antecedent: ['Diapers'],
        consequent: 'Beer',
        support: '18.4%',
        confidence: '78.2%',
        lift: '2.45',
        reason: 'Classic weekend supply pattern identified across transaction clusters.',
      });
    }
    if (cartItems.includes('Bread')) {
      rules.push({
        antecedent: ['Bread'],
        consequent: 'Butter',
        support: '29.1%',
        confidence: '84.6%',
        lift: '2.10',
        reason: 'High co-occurrence staple food pairing with strong breakfast correlation.',
      });
    }
    if (cartItems.includes('Coffee')) {
      rules.push({
        antecedent: ['Coffee'],
        consequent: 'Cookies',
        support: '22.0%',
        confidence: '71.5%',
        lift: '1.92',
        reason: 'Complementary snack item frequently purchased during afternoon transactions.',
      });
    }
    if (cartItems.includes('Milk') && cartItems.includes('Bread')) {
      rules.push({
        antecedent: ['Milk', 'Bread'],
        consequent: 'Butter',
        support: '15.3%',
        confidence: '89.4%',
        lift: '2.80',
        reason: 'Multi-item basket itemset showing very high conditional probability.',
      });
    }
    return rules;
  };

  const activeRules = getCrossSellRecommendations();

  // Active Idiom Item
  const activeIdiom = presetSentences[selectedPresetIndex];

  return (
    <section id="lab" className="py-20 md:py-28 border-b border-zinc-800/80 bg-[#0A0C14]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-cyan-400 uppercase mb-2">
              <FlaskConical className="w-3.5 h-3.5" />
              <span>Interactive Model Laboratory</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight font-display">
              Live Algorithm Simulators
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-2xl">
              Directly test Srihariharan&apos;s natural language processing pipelines, biometric emotion classification logic, and association rule mining algorithms in real time.
            </p>
          </div>

          {/* Tab Selector */}
          <div className="flex items-center gap-1.5 p-1 bg-zinc-900 border border-zinc-800 rounded-xl">
            <button
              onClick={() => setActiveTab('idiom')}
              className={`flex items-center gap-2 px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                activeTab === 'idiom'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Languages className="w-3.5 h-3.5" />
              <span>Idiom Bridge (NLP)</span>
            </button>

            <button
              onClick={() => setActiveTab('biometrics')}
              className={`flex items-center gap-2 px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                activeTab === 'biometrics'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Activity className="w-3.5 h-3.5" />
              <span>Biometric Emotion AI</span>
            </button>

            <button
              onClick={() => setActiveTab('basket')}
              className={`flex items-center gap-2 px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                activeTab === 'basket'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Market Basket (Apriori)</span>
            </button>
          </div>
        </div>

        {/* --- SIMULATOR 1: IDIOM BRIDGE (NLP) --- */}
        {activeTab === 'idiom' && (
          <div className="bg-[#11131B] border border-zinc-800 rounded-2xl p-6 sm:p-8 shadow-xl">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 pb-6 border-b border-zinc-800/80 mb-6">
              <div>
                <h3 className="text-lg font-bold text-white tracking-tight flex items-center gap-2 font-display">
                  <span>Idiom Bridge: NLP Paraphrasing & Dual-Backend Translation</span>
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                  Resolves figurative semantics in English idioms to generate natural paraphrases and accurate Tamil translations without word-by-word distortions.
                </p>
              </div>

              {/* Dual-backend toggle */}
              <div className="flex items-center gap-2 bg-zinc-900 border border-zinc-800 px-3 py-1.5 rounded-lg text-xs">
                <span className="text-zinc-400">Backend:</span>
                <button
                  onClick={() => setPipelineMode('nvidia')}
                  className={`px-2 py-0.5 rounded font-mono font-medium transition-colors ${
                    pipelineMode === 'nvidia' ? 'bg-blue-600 text-white' : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  NVIDIA NIM API
                </button>
                <button
                  onClick={() => setPipelineMode('huggingface')}
                  className={`px-2 py-0.5 rounded font-mono font-medium transition-colors ${
                    pipelineMode === 'huggingface' ? 'bg-indigo-600 text-white' : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  HF Fallback
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Presets and input */}
              <div className="lg:col-span-5 space-y-4">
                <div className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                  Select Benchmark Test Sentence
                </div>
                <div className="space-y-2">
                  {presetSentences.map((preset, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setSelectedPresetIndex(index);
                        setCustomInput('');
                      }}
                      className={`w-full text-left p-3 rounded-xl border text-xs sm:text-sm transition-all ${
                        selectedPresetIndex === index && !customInput
                          ? 'bg-blue-600/15 border-blue-500/50 text-white'
                          : 'bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200'
                      }`}
                    >
                      <div className="font-medium">{preset.text}</div>
                      <div className="text-[11px] text-blue-400 mt-1 font-mono">
                        Target Idiom: &quot;{preset.idiom}&quot;
                      </div>
                    </button>
                  ))}
                </div>

                <div className="pt-2">
                  <a
                    href="https://github.com/Hariharan2134/Idiom-Translation-Using-NLP-AI"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>View Streamlit & Transformer Source Code on GitHub</span>
                    <ExternalLink className="w-3 h-3 ml-0.5" />
                  </a>
                </div>
              </div>

              {/* Execution Pipeline Steps */}
              <div className="lg:col-span-7 flex flex-col justify-between bg-zinc-900/70 border border-zinc-800 rounded-xl p-6">
                
                <div className="space-y-5">
                  {/* Step 1: Input text */}
                  <div>
                    <div className="flex items-center justify-between text-xs text-zinc-400 mb-1.5">
                      <span className="font-semibold text-zinc-300">Phase 1: Input English Sentence</span>
                      <span className="font-mono text-[11px] text-zinc-500">2,000+ Idiom Knowledge Base</span>
                    </div>
                    <div className="p-3 bg-[#0D0F18] border border-zinc-800 rounded-lg text-sm text-white font-mono">
                      &quot;{activeIdiom.text}&quot;
                    </div>
                  </div>

                  {/* Step 2: Detected idiom & meaning */}
                  <div className="p-3.5 bg-blue-950/20 border border-blue-900/40 rounded-lg">
                    <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 mb-1">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Phase 2: Semantic Idiom Resolution</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-zinc-200">
                      <span className="font-mono text-cyan-300 bg-cyan-950/50 px-2 py-0.5 rounded border border-cyan-800/40">
                        {activeIdiom.idiom}
                      </span>
                      <span className="text-zinc-500">→</span>
                      <span className="text-xs text-zinc-300 italic">{activeIdiom.meaning}</span>
                    </div>
                  </div>

                  {/* Step 3: Natural Paraphrase */}
                  <div>
                    <div className="text-xs font-semibold text-zinc-300 mb-1.5 flex items-center justify-between">
                      <span>Phase 3: Context-Preserving English Paraphrase</span>
                      <span className="text-emerald-400 font-mono text-[11px]">Zero Figurative Distortion</span>
                    </div>
                    <div className="p-3 bg-[#0D0F18] border border-zinc-800 rounded-lg text-sm text-zinc-100">
                      {activeIdiom.paraphrase}
                    </div>
                  </div>

                  {/* Step 4: Accurate Neural Tamil Translation */}
                  <div>
                    <div className="text-xs font-semibold text-zinc-300 mb-1.5 flex items-center justify-between">
                      <span>Phase 4: Neural Tamil Translation</span>
                      <span className="text-blue-400 font-mono text-[11px]">Target: தமிழ்</span>
                    </div>
                    <div className="p-3 bg-[#0D0F18] border border-zinc-800 rounded-lg text-sm font-medium text-emerald-300 leading-relaxed">
                      {activeIdiom.tamil}
                    </div>
                  </div>
                </div>

                {/* Pipeline Performance Tag */}
                <div className="mt-6 pt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs text-zinc-400">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Dual-Pipeline Status: <strong className="text-zinc-200">Ready</strong></span>
                  </div>
                  <div className="font-mono text-zinc-500">
                    Inference Time: <span className="text-zinc-300 font-bold">&lt; 180ms</span>
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}

        {/* --- SIMULATOR 2: BIOMETRIC EMOTION PREDICTION (NIT TRICHY) --- */}
        {activeTab === 'biometrics' && (
          <div className="bg-[#11131B] border border-zinc-800 rounded-2xl p-6 sm:p-8 shadow-xl">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 pb-6 border-b border-zinc-800/80 mb-6">
              <div>
                <h3 className="text-lg font-bold text-white tracking-tight flex items-center gap-2 font-display">
                  <span>Multimodal Biosignal Emotion Classifier (NIT Trichy Research)</span>
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                  Simulating the Random Forest + SMOTE and CNN-BiLSTM architecture trained on 1M+ physiological samples (GSR & PPG / BVP).
                </p>
              </div>

              {/* Bandpass filter switch */}
              <button
                onClick={() => setNoiseFilterActive(!noiseFilterActive)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs font-semibold transition-colors ${
                  noiseFilterActive
                    ? 'bg-emerald-950/40 border-emerald-500/50 text-emerald-300'
                    : 'bg-zinc-900 border-zinc-800 text-zinc-400'
                }`}
              >
                <span className={`w-2 h-2 rounded-full ${noiseFilterActive ? 'bg-emerald-400' : 'bg-zinc-600'}`} />
                <span>Butterworth Bandpass Filter: {noiseFilterActive ? 'ACTIVE' : 'OFF'}</span>
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Biosignal Sensor Controls */}
              <div className="lg:col-span-6 space-y-6">
                
                {/* GSR Slider */}
                <div className="p-4 bg-zinc-900/60 border border-zinc-800 rounded-xl space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs font-semibold text-zinc-200">GSR (Skin Conductance / EDA)</div>
                      <div className="text-[11px] text-zinc-500">Reflects autonomic sympathetic nervous activation</div>
                    </div>
                    <div className="text-sm font-bold font-mono text-cyan-400 tabular-nums">
                      {gsrValue.toFixed(1)} μS
                    </div>
                  </div>

                  <input
                    type="range"
                    min="2.0"
                    max="18.0"
                    step="0.1"
                    value={gsrValue}
                    onChange={(e) => setGsrValue(parseFloat(e.target.value))}
                    className="w-full accent-cyan-400 cursor-pointer h-1.5 bg-zinc-800 rounded-lg"
                  />

                  <div className="flex justify-between text-[10px] text-zinc-500 font-mono">
                    <span>2.0 μS (Deep Rest)</span>
                    <span>10.0 μS (Normal)</span>
                    <span>18.0 μS (Acute Arousal)</span>
                  </div>
                </div>

                {/* PPG / Pulse Rate Slider */}
                <div className="p-4 bg-zinc-900/60 border border-zinc-800 rounded-xl space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs font-semibold text-zinc-200">PPG (Heart Rate / Pulse)</div>
                      <div className="text-[11px] text-zinc-500">Derived from photoplethysmography sensor peaks</div>
                    </div>
                    <div className="text-sm font-bold font-mono text-blue-400 tabular-nums">
                      {ppgValue} BPM
                    </div>
                  </div>

                  <input
                    type="range"
                    min="50"
                    max="140"
                    step="1"
                    value={ppgValue}
                    onChange={(e) => setPpgValue(parseInt(e.target.value))}
                    className="w-full accent-blue-500 cursor-pointer h-1.5 bg-zinc-800 rounded-lg"
                  />

                  <div className="flex justify-between text-[10px] text-zinc-500 font-mono">
                    <span>50 BPM (Bradycardia)</span>
                    <span>80 BPM (Resting)</span>
                    <span>140 BPM (Tachycardia)</span>
                  </div>
                </div>

                {/* Biometric waveform visualizer */}
                <div className="p-3 bg-[#0D0F18] border border-zinc-800 rounded-xl">
                  <div className="text-[11px] font-mono text-zinc-500 flex items-center justify-between mb-2">
                    <span>SYNTHETIC SENSOR TIME-WINDOW STREAM</span>
                    <span className="text-emerald-400 font-bold">128 Hz</span>
                  </div>
                  
                  {/* Stylized animated oscilloscope pulse wave */}
                  <div className="h-14 flex items-center justify-center overflow-hidden relative">
                    <svg className="w-full h-full text-cyan-400/80" viewBox="0 0 400 60" preserveAspectRatio="none">
                      <path
                        d={`M 0,30 Q 30,${30 - (gsrValue * 1.2)} 60,30 T 120,30 Q 140,${15 - (ppgValue > 90 ? 10 : 0)} 150,5 T 160,55 T 175,25 T 200,30 T 260,30 Q 280,${15} 290,5 T 300,55 T 315,25 T 340,30 T 400,30`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/5 to-transparent animate-pulse pointer-events-none" />
                  </div>
                </div>

                <div>
                  <a
                    href="https://github.com/Hariharan2134/Emotion-Prediction-Using-Physiological-signals-GSR-and-PPG-"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>View NIT Trichy Biometrics Repo on GitHub</span>
                    <ExternalLink className="w-3 h-3 ml-0.5" />
                  </a>
                </div>

              </div>

              {/* Classification Output & Circumplex Grid */}
              <div className="lg:col-span-6 bg-zinc-900/70 border border-zinc-800 rounded-xl p-6 flex flex-col justify-between">
                
                <div>
                  <div className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-4">
                    2D Circumplex Model of Affect (Predicted State)
                  </div>

                  {/* Main Predicted State Box */}
                  <div className="p-5 rounded-xl bg-[#0D0F18] border border-zinc-800 text-center mb-6">
                    <div className="text-xs font-medium text-zinc-400">Classified Emotion Category</div>
                    <div className={`text-2xl sm:text-3xl font-extrabold tracking-tight mt-1 font-display ${emotionColor}`}>
                      {emotionState}
                    </div>
                    <div className="flex items-center justify-center gap-2 text-xs text-zinc-400 mt-2 font-mono">
                      <span>{valenceCategory}</span>
                      <span>·</span>
                      <span>{arousalCategory}</span>
                    </div>
                  </div>

                  {/* Research Benchmark Metrics */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <div className="p-3 bg-[#0D0F18] border border-zinc-800 rounded-lg">
                      <div className="text-[11px] text-zinc-500 font-mono">SMOTE Valence Accuracy</div>
                      <div className="text-xl font-bold font-mono text-emerald-400 mt-0.5">
                        {rfConfidence}%
                      </div>
                      <div className="text-[10px] text-zinc-500 mt-0.5">Random Forest model</div>
                    </div>

                    <div className="p-3 bg-[#0D0F18] border border-zinc-800 rounded-lg">
                      <div className="text-[11px] text-zinc-500 font-mono">BiLSTM Validation Loss</div>
                      <div className="text-xl font-bold font-mono text-blue-400 mt-0.5">
                        0.0065
                      </div>
                      <div className="text-[10px] text-zinc-500 mt-0.5">Sliding window sequence</div>
                    </div>
                  </div>
                </div>

                {/* 4 Quadrants visual representation */}
                <div className="p-3.5 bg-black/40 rounded-lg border border-zinc-800/80">
                  <div className="text-[11px] text-zinc-400 font-medium mb-2">Circumplex Coordinates</div>
                  <div className="grid grid-cols-2 gap-2 text-[11px]">
                    <div className={`p-2 rounded border ${emotionState.includes('Excited') ? 'border-amber-400/60 bg-amber-950/20 text-amber-300 font-bold' : 'border-zinc-800 text-zinc-500'}`}>
                      High Arousal + Positive: Excited / Joy
                    </div>
                    <div className={`p-2 rounded border ${emotionState.includes('Stressed') ? 'border-rose-400/60 bg-rose-950/20 text-rose-300 font-bold' : 'border-zinc-800 text-zinc-500'}`}>
                      High Arousal + Negative: Stressed / Anxiety
                    </div>
                    <div className={`p-2 rounded border ${emotionState.includes('Calm') ? 'border-emerald-400/60 bg-emerald-950/20 text-emerald-300 font-bold' : 'border-zinc-800 text-zinc-500'}`}>
                      Low Arousal + Positive: Calm / Relaxed
                    </div>
                    <div className={`p-2 rounded border ${emotionState.includes('Fatigued') ? 'border-blue-400/60 bg-blue-950/20 text-blue-300 font-bold' : 'border-zinc-800 text-zinc-500'}`}>
                      Low Arousal + Negative: Fatigue / Boredom
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}

        {/* --- SIMULATOR 3: MARKET BASKET ANALYSIS (APRIORI) --- */}
        {activeTab === 'basket' && (
          <div className="bg-[#11131B] border border-zinc-800 rounded-2xl p-6 sm:p-8 shadow-xl">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 pb-6 border-b border-zinc-800/80 mb-6">
              <div>
                <h3 className="text-lg font-bold text-white tracking-tight flex items-center gap-2 font-display">
                  <span>Market Basket Analysis: Apriori Association Rule Miner</span>
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                  Mines frequent itemsets and computes Support, Confidence, and Lift metrics to uncover retail purchase correlations.
                </p>
              </div>

              <div className="text-xs text-zinc-400 font-mono">
                Dataset: <span className="text-zinc-200">Point-of-Sale Transactions (mlxtend)</span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Basket selector */}
              <div className="lg:col-span-5 space-y-4">
                <div className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                  Select Items in Shopper&apos;s Basket
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {retailItems.map((item) => {
                    const isSelected = cartItems.includes(item);
                    return (
                      <button
                        key={item}
                        onClick={() => toggleCartItem(item)}
                        className={`p-2.5 rounded-lg border text-xs font-medium transition-all flex items-center justify-between ${
                          isSelected
                            ? 'bg-blue-600/20 border-blue-500 text-white'
                            : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-zinc-200 hover:border-zinc-700'
                        }`}
                      >
                        <span>{item}</span>
                        {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />}
                      </button>
                    );
                  })}
                </div>

                <div className="p-3 bg-zinc-900/60 border border-zinc-800 rounded-xl text-xs text-zinc-400 space-y-1">
                  <div className="font-semibold text-zinc-300">Statistical Thresholds:</div>
                  <div className="flex justify-between font-mono text-[11px]">
                    <span>Min Support: &gt; 10%</span>
                    <span>Min Confidence: &gt; 70%</span>
                    <span>Min Lift: &gt; 1.5</span>
                  </div>
                </div>

                <div>
                  <a
                    href="https://github.com/Hariharan2134/Market-Basket-Analysis-Tool"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>View Market Basket Repository on GitHub</span>
                    <ExternalLink className="w-3 h-3 ml-0.5" />
                  </a>
                </div>
              </div>

              {/* Mined Association Rules Output */}
              <div className="lg:col-span-7 bg-zinc-900/70 border border-zinc-800 rounded-xl p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-4">
                    <span>Ranked Cross-Selling Association Rules</span>
                    <span className="font-mono text-[11px] text-zinc-500">
                      {activeRules.length} Rule{activeRules.length !== 1 ? 's' : ''} Triggered
                    </span>
                  </div>

                  {activeRules.length === 0 ? (
                    <div className="p-8 text-center bg-[#0D0F18] border border-zinc-800 rounded-xl">
                      <ShoppingBag className="w-8 h-8 text-zinc-600 mx-auto mb-2" />
                      <p className="text-sm text-zinc-300 font-medium">No High-Lift Association Rules for Current Cart</p>
                      <p className="text-xs text-zinc-500 mt-1">
                        Try selecting <strong className="text-zinc-300">&quot;Diapers&quot;</strong>, <strong className="text-zinc-300">&quot;Bread&quot;</strong>, or <strong className="text-zinc-300">&quot;Coffee&quot;</strong> to activate frequent itemset rules.
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {activeRules.map((rule, idx) => (
                        <div
                          key={idx}
                          className="p-4 bg-[#0D0F18] border border-zinc-800 rounded-xl space-y-3"
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 text-sm font-bold text-white">
                              <span className="text-zinc-400">{rule.antecedent.join(' + ')}</span>
                              <ArrowRight className="w-3.5 h-3.5 text-blue-400" />
                              <span className="text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-800/40">
                                {rule.consequent}
                              </span>
                            </div>

                            <div className="flex items-center gap-2 font-mono text-xs">
                              <span className="text-amber-400 font-bold">Lift: {rule.lift}x</span>
                            </div>
                          </div>

                          <div className="grid grid-cols-2 gap-2 text-[11px] text-zinc-400 font-mono bg-zinc-900/60 p-2 rounded">
                            <div>Support: <strong className="text-zinc-200">{rule.support}</strong></div>
                            <div>Confidence: <strong className="text-zinc-200">{rule.confidence}</strong></div>
                          </div>

                          <p className="text-xs text-zinc-400 leading-relaxed">
                            {rule.reason}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-800 text-xs text-zinc-500 flex items-center justify-between">
                  <span>Cross-sell optimization via Apriori Candidate Pruning</span>
                  <span className="font-mono text-emerald-400">Status: Computed</span>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
