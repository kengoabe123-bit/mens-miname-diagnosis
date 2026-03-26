import Link from 'next/link';

export default function Home() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>自信のある自分へ。<br />最適な解決策が見つかる。</h1>
        <p>7つの質問に答えるだけで、あなたの「見た目の悩み」にピッタリの解決策が見つかります。</p>
        {/* 共感コピー */}
        <div style={{
          background: 'rgba(255,255,255,0.05)',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: '12px',
          padding: '1.2rem',
          marginBottom: '1.5rem',
          textAlign: 'left' as const,
        }}>
          <p style={{ fontSize: '0.9rem', fontWeight: 700, color: 'white', marginBottom: '0.8rem', textAlign: 'center' as const }}>
            こんな悩み、ありませんか？
          </p>
          <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, margin: '0.3rem 0' }}>「第一印象で損してる気がする…」</p>
          <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, margin: '0.3rem 0' }}>「何から始めればいいかわからない」</p>
          <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, margin: '0.3rem 0' }}>「自分に似合うスタイルがわからない」</p>
        </div>
        {/* ソーシャルプルーフ */}
        <p style={{
          fontSize: '0.85rem',
          fontWeight: 700,
          color: '#ffd700',
          textAlign: 'center' as const,
          marginBottom: '1rem',
        }}>
          💪 3,000人以上が診断済み
        </p>

        <div className="hero-features">
          <span className="hero-feature">約60秒で完了</span>
          <span className="hero-feature">7問の簡単な質問</span>
          <span className="hero-feature">個人情報不要</span>
        </div>
        <Link href="/diagnosis" className="btn-primary" id="start-diagnosis-hero">
          💪 無料で診断する（60秒）
        </Link>
        <p style={{
          fontSize: '0.7rem',
          color: 'rgba(255,255,255,0.4)',
          marginTop: '0.6rem',
          textAlign: 'center' as const,
        }}>
          ※ 登録不要・完全無料・結果はすぐに表示されます
        </p>
      
        <Link href="/services" style={{
          display: 'block',
          fontSize: '0.75rem',
          color: 'rgba(255,255,255,0.5)',
          textDecoration: 'underline',
          textAlign: 'center' as const,
          marginTop: '1rem',
        }}>
          サービス一覧を見る →
        </Link>
      </div>
    </section>
  );
}
