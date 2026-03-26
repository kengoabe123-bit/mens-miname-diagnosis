'use client';

import { useState, useCallback, useEffect, useRef } from 'react';
import { questions, calculateResults, DiagnosisResult } from '@/lib/diagnosis';
import { SITE_CONFIG } from '@/lib/config';

type Phase = 'questions' | 'results';

export default function DiagnosisPage() {
    const [phase, setPhase] = useState<Phase>('questions');
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState<number[]>([]);
    const [results, setResults] = useState<DiagnosisResult[]>([]);
    const [animationClass, setAnimationClass] = useState('animate-slide-in');
    const [showConfetti, setShowConfetti] = useState(false);
    const [displayRates, setDisplayRates] = useState<number[]>([0, 0, 0]);
    const [copiedToast, setCopiedToast] = useState(false);
    const animatingRef = useRef(false);

    // === Conversion Boosters State ===
    const [showStickyCtaBar, setShowStickyCtaBar] = useState(false);
    const [showExitPopup, setShowExitPopup] = useState(false);
    const [exitPopupShown, setExitPopupShown] = useState(false);
    const [countdown, setCountdown] = useState({ h: 0, m: 0, s: 0 });

    useEffect(() => {
        if (phase !== 'results' || results.length === 0) return;
        const targetRates = results.map((r) => r.matchRate);
        const duration = 1500;
        const startTime = performance.now();
        const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
        const animate = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = easeOutCubic(progress);
            setDisplayRates(targetRates.map((target) => Math.round(eased * target)));
            if (progress < 1) requestAnimationFrame(animate);
        };
        const timer = setTimeout(() => requestAnimationFrame(animate), 800);
        return () => clearTimeout(timer);
    }, [phase, results]);

    useEffect(() => {
        if (phase === 'results') {
            setShowConfetti(true);
            const timer = setTimeout(() => setShowConfetti(false), 4000);
            return () => clearTimeout(timer);
        }
    }, [phase]);


    // === Sticky CTA: show when scrolled past first CTA ===
    useEffect(() => {
        if (phase !== 'results') return;
        const onScroll = () => { setShowStickyCtaBar(window.scrollY > 600); };
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, [phase]);

    // === Exit Intent Popup ===
    useEffect(() => {
        if (phase !== 'results' || exitPopupShown) return;
        const onMouseLeave = (e: MouseEvent) => {
            if (e.clientY <= 0 && !exitPopupShown) { setShowExitPopup(true); setExitPopupShown(true); }
        };
        const mobileTimer = setTimeout(() => {
            if (!exitPopupShown) { setShowExitPopup(true); setExitPopupShown(true); }
        }, 30000);
        document.addEventListener('mouseleave', onMouseLeave);
        return () => { document.removeEventListener('mouseleave', onMouseLeave); clearTimeout(mobileTimer); };
    }, [phase, exitPopupShown]);

    // === Countdown Timer ===
    useEffect(() => {
        if (phase !== 'results') return;
        const KEY = 'cv_mens_start';
        let start = localStorage.getItem(KEY);
        if (!start) { start = String(Date.now()); localStorage.setItem(KEY, start); }
        const endTime = Number(start) + 24 * 60 * 60 * 1000;
        const tick = () => {
            const remaining = Math.max(0, endTime - Date.now());
            if (remaining <= 0) localStorage.removeItem(KEY);
            const h = Math.floor(remaining / 3600000);
            const m = Math.floor((remaining % 3600000) / 60000);
            const s = Math.floor((remaining % 60000) / 1000);
            setCountdown({ h, m, s });
        };
        tick();
        const interval = setInterval(tick, 1000);
        return () => clearInterval(interval);
    }, [phase]);

    const handleAnswer = useCallback(
        (optionIndex: number) => {
            if (animatingRef.current) return;
            animatingRef.current = true;
            const newAnswers = [...answers, optionIndex];
            setAnswers(newAnswers);
            if (currentQuestion < questions.length - 1) {
                setAnimationClass('animate-slide-out');
                setTimeout(() => {
                    setCurrentQuestion((prev) => prev + 1);
                    setAnimationClass('animate-slide-in');
                    animatingRef.current = false;
                }, 300);
            } else {
                const diagnosisResults = calculateResults(newAnswers);
                setResults(diagnosisResults);
                setDisplayRates([0, 0, 0]);
                setPhase('results');
                animatingRef.current = false;
            }
        },
        [answers, currentQuestion]
    );

    const handleBack = useCallback(() => {
        if (currentQuestion > 0 && !animatingRef.current) {
            animatingRef.current = true;
            setAnimationClass('animate-slide-out');
            setTimeout(() => {
                setCurrentQuestion((prev) => prev - 1);
                setAnswers((prev) => prev.slice(0, -1));
                setAnimationClass('animate-slide-in');
                animatingRef.current = false;
            }, 300);
        }
    }, [currentQuestion]);

    const handleRestart = useCallback(() => {
        window.location.href = '/';
    }, []);

    const handleShare = useCallback(
        (platform: 'x' | 'line' | 'copy') => {
            if (results.length === 0) return;
            const topResult = results[0];
            const shareText = `あなたの見た目の悩みに最適な解決策は「${topResult.service.name}」（おすすめ度${topResult.matchRate}%）でした！\n\n無料で見た目改革診断\n${SITE_CONFIG.url}/diagnosis`;
            if (platform === 'x') {
                window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`, '_blank');
            } else if (platform === 'line') {
                window.open(`https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(SITE_CONFIG.url + '/diagnosis')}&text=${encodeURIComponent(shareText)}`, '_blank');
            } else {
                navigator.clipboard.writeText(shareText).then(() => {
                    setCopiedToast(true);
                    setTimeout(() => setCopiedToast(false), 2000);
                });
            }
        },
        [results]
    );

    if (phase === 'questions') {
        const question = questions[currentQuestion];
        const progressPercent = Math.round(((currentQuestion + 1) / questions.length) * 100);
        return (
            <section className="question-section">
                <div className="progress-container">
                    <span className="progress-label">質問 {currentQuestion + 1} / {questions.length}</span>
                    <div className="progress-bar-bg">
                        <div className="progress-bar-fill" style={{ width: `${progressPercent}%` }} />
                    </div>
                    <span className="progress-text">{progressPercent}%</span>
                </div>
                <div className={`question-card ${animationClass}`} key={`q-${currentQuestion}`}>
                    <div className="question-header">
                        <div className="question-number">{currentQuestion + 1}</div>
                        <div className="question-text">{question.text}</div>
                        {question.subtext && <div className="question-subtext">{question.subtext}</div>}
                    </div>
                    <div className="options-list">
                        {question.options.map((option, index) => (
                            <button key={index} className="option-btn" onClick={() => handleAnswer(index)} id={`option-${currentQuestion}-${index}`}>
                                <span>{option.label}</span>
                            </button>
                        ))}
                    </div>
                    {currentQuestion > 0 && (
                        <button className="back-btn" onClick={handleBack}>前の質問に戻る</button>
                    )}
                </div>
            </section>
        );
    }

    return (
        <>
            {showConfetti && (
                <div className="confetti-container">
                    {Array.from({ length: 40 }).map((_, i) => (
                        <div key={i} className="confetti-piece" style={{
                            left: `${Math.random() * 100}%`,
                            backgroundColor: ['#5BA4B5', '#7ec8d8', '#a8dce8', '#f0c27f', '#e8b4b8', '#b8d4e3'][Math.floor(Math.random() * 6)],
                            animationDuration: `${2 + Math.random() * 3}s`,
                            animationDelay: `${Math.random() * 2}s`,
                            width: `${6 + Math.random() * 6}px`,
                            height: `${6 + Math.random() * 6}px`,
                            borderRadius: Math.random() > 0.5 ? '50%' : '2px',
                        }} />
                    ))}
                </div>
            )}
            <section className="results-section">
                <div className="results-header">
                    <h2>あなたにおすすめの見た目改革 TOP3</h2>
                    <p className="results-subtitle">回答を分析し、あなたに最適な解決策を選びました</p>
                    <div style={{
                        background: 'linear-gradient(135deg, #5BA4B5 0%, #7ec8d8 100%)',
                        color: 'white',
                        padding: '0.8rem 1.2rem',
                        borderRadius: '10px',
                        marginTop: '1rem',
                        fontSize: '0.85rem',
                        fontWeight: 700,
                        textAlign: 'center' as const,
                        lineHeight: 1.6,
                    }}>
                        💪 行動した男性の<span style={{ fontSize: '1.2em', textDecoration: 'underline' }}>86%</span>が
                        「印象が変わった」と実感
                    </div>
                </div>
                <div className="results-list">
                    {results.map((result, index) => (
                        <div key={result.service.id} className="result-card">
                            <div className="result-card-header">
                                <span className="rank-label">第<span className="rank-number">{index + 1}</span>位</span>
                                <div className="match-rate">
                                    <span className="match-rate-label">おすすめ度</span>
                                    <span className="match-number">{displayRates[index]}<span className="percent">%</span></span>
                                </div>
                            </div>
                            <div className="result-card-body">
                                <h3 className="result-name">{result.service.name}</h3>
                                <p className="result-target">{result.service.target}</p>
                                <p className="result-description">{result.service.description}</p>
                                <ul className="feature-list-compact">
                                    {result.service.features.slice(0, 2).map((f, i) => (<li key={i}>{f}</li>))}
                                </ul>
                                <a href={result.service.affiliateUrl} target="_blank" rel="noopener noreferrer" className="btn-cta" style={{ background: result.service.color, fontWeight: 800, fontSize: index === 0 ? '1.05rem' : undefined }} id={`cta-${result.service.id}`}>
                                    {index === 0 ? '🔥 今すぐ無料で試す →' : '無料で試す →'}
                                </a>
                                <p style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.5)', marginTop: '0.4rem', textAlign: 'center' as const }}>※ 完全無料・安心の返金保証付き</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="share-section">
                    <h3>診断結果をシェアする</h3>
                    <div className="share-buttons">
                        <button className="share-btn x" onClick={() => handleShare('x')} id="share-x">X でシェア</button>
                        <button className="share-btn line" onClick={() => handleShare('line')} id="share-line">LINEで送る</button>
                        <button className="share-btn copy" onClick={() => handleShare('copy')} id="share-copy">コピー</button>
                    </div>
                </div>
                <div style={{
                    background: 'rgba(91, 164, 181, 0.1)',
                    border: '1px solid rgba(91, 164, 181, 0.25)',
                    borderRadius: '10px',
                    padding: '1.2rem',
                    marginBottom: '1.5rem',
                    textAlign: 'center' as const,
                }}>
                    <p style={{ fontSize: '0.9rem', fontWeight: 700, color: '#5BA4B5', marginBottom: '0.4rem' }}>
                        ⚠️ 見た目を変えれば、人生が変わる
                    </p>
                    <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>
                        第一印象は3秒で決まる。<strong>今が始めどき</strong>です。
                    </p>
                </div>
                <div className="retry-section">
                    <button className="btn-secondary" onClick={handleRestart} id="retry-diagnosis">もう一度診断する</button>
                    <a href={results[0]?.service.affiliateUrl} target="_blank" rel="noopener noreferrer" className="btn-cta" style={{ background: results[0]?.service.color, display: 'inline-block', marginTop: '0.8rem', fontWeight: 800 }}>
                        🔥 1位のケアを無料で試す →
                    </a>
                </div>
            </section>
            {/* === スティッキーCTA === */}
            {phase === 'results' && showStickyCtaBar && results.length > 0 && (
                <div style={{
                    position: 'fixed',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: 'linear-gradient(135deg, #5BA4B5 0%, #5BA4B5dd 100%)',
                    padding: '0.8rem 1rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.8rem',
                    zIndex: 1000,
                    boxShadow: '0 -4px 20px rgba(91, 164, 181, 0.4)',
                }}>
                    <span style={{ color: 'white', fontSize: '0.85rem', fontWeight: 700 }}>
                        1位: {results[0]?.service.name}
                    </span>
                    <a
                        href={results[0]?.service.affiliateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            background: 'white',
                            color: '#5BA4B5',
                            padding: '0.5rem 1.2rem',
                            borderRadius: '25px',
                            fontWeight: 900,
                            fontSize: '0.85rem',
                            textDecoration: 'none',
                            whiteSpace: 'nowrap' as const,
                        }}
                    >
                        🔥 ケアを無料で試す →
                    </a>
                </div>
            )}
            {/* === 離脱防止ポップアップ === */}
            {showExitPopup && results.length > 0 && (
                <div style={{
                    position: 'fixed',
                    top: 0, left: 0, right: 0, bottom: 0,
                    background: 'rgba(0,0,0,0.7)',
                    zIndex: 2000,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '1rem',
                }} onClick={() => setShowExitPopup(false)}>
                    <div onClick={(e: React.MouseEvent) => e.stopPropagation()} style={{
                        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
                        borderRadius: '16px',
                        padding: '2rem 1.5rem',
                        maxWidth: '380px',
                        width: '100%',
                        textAlign: 'center' as const,
                        border: '2px solid rgba(91, 164, 181, 0.3)',
                        boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
                    }}>
                        <div style={{ fontSize: '2.5rem', marginBottom: '0.8rem' }}>💪</div>
                        <h3 style={{ color: 'white', fontSize: '1.2rem', fontWeight: 800, marginBottom: '0.8rem' }}>
                            見た目を変えれば人生が変わる
                        </h3>
                        <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', lineHeight: 1.6, marginBottom: '1.2rem' }}>
                            第一印象は3秒で決まります。<br />
                            <strong style={{ color: '#5BA4B5' }}>今なら無料</strong>で始められます！
                        </p>
                        <a
                            href={results[0]?.service.affiliateUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: 'block',
                                background: 'linear-gradient(135deg, #5BA4B5 0%, #5BA4B5dd 100%)',
                                color: 'white',
                                padding: '0.9rem',
                                borderRadius: '12px',
                                fontWeight: 900,
                                fontSize: '1rem',
                                textDecoration: 'none',
                                marginBottom: '0.8rem',
                            }}
                        >
                            🔥 無料でケア体験 →
                        </a>
                        <button
                            onClick={() => setShowExitPopup(false)}
                            style={{
                                background: 'none',
                                border: 'none',
                                color: 'rgba(255,255,255,0.4)',
                                fontSize: '0.75rem',
                                cursor: 'pointer',
                                padding: '0.5rem',
                            }}
                        >
                            閉じる（今のままでいい）
                        </button>
                    </div>
                </div>
            )}

            <div className={`copied-toast${copiedToast ? ' show' : ''}`}>コピーしました</div>
        </>
    );
}
