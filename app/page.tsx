import Link from 'next/link';

export default function Home() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>自信のある自分へ。<br />最適な解決策が見つかる。</h1>
        <p>7つの質問に答えるだけで、あなたの「見た目の悩み」にピッタリの解決策が見つかります。</p>
        <div className="hero-features">
          <span className="hero-feature">約60秒で完了</span>
          <span className="hero-feature">7問の簡単な質問</span>
          <span className="hero-feature">個人情報不要</span>
        </div>
        <Link href="/diagnosis" className="btn-primary" id="start-diagnosis-hero">
          無料で診断する
        </Link>
      </div>
    </section>
  );
}
