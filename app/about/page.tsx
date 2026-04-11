import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '運営者情報 | MensFix',
  description: 'MensFixの運営者情報です。サイトの目的、運営方針をご確認ください。',
};

export default function AboutPage() {
  return (
    <main className="legal-page">
      <article className="legal-content">
        <h1>運営者情報</h1>
        <p className="legal-updated">最終更新日：2026年4月11日</p>

        <section className="legal-section">
          <h2>サイト名</h2>
          <p>MensFix</p>
        </section>

        <section className="legal-section">
          <h2>サイトの目的</h2>
          <p>「MensFix」は、男性の見た目の悩みに最適な解決策を見つける無料診断サービスです。7つの質問に答えるだけで、あなたの悩みに最も適したクリニックや解決策をご提案します。</p>
        </section>

        <section className="legal-section">
          <h2>運営方針</h2>
          <ul>
            <li>ユーザーの悩みに真摯に向き合い、正確で役立つ情報を提供します</li>
            <li>紹介するサービスは、実績・評判・安全性を確認した上で掲載しています</li>
            <li>アフィリエイトプログラムに参加していますが、報酬額ではなくユーザーにとっての有用性を基準にサービスを紹介します</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>お問い合わせ</h2>
          <p>サイトに関するお問い合わせは<a href="/contact">こちら</a>からお願いいたします。</p>
        </section>
      </article>
    </main>
  );
}
