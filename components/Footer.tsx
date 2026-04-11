import Link from 'next/link';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">MensFix</div>
        <p className="footer-text">
          あなたの「見た目の悩み」に最適な解決策を見つける無料診断サービス
        </p>
        <nav className="footer-nav">
          <Link href="/about">運営者情報</Link>
          <Link href="/privacy">プライバシーポリシー</Link>
          <Link href="/contact">お問い合わせ</Link>
          <Link href="/services">サービス一覧</Link>
        </nav>
        <p className="footer-disclaimer">
          ※ 本サイトはアフィリエイトプログラムに参加しています
          <br />※ 診断結果はあくまで参考情報です。最終的な判断はクリニックとのカウンセリングで行ってください。
        </p>
      </div>
    </footer>
  );
}
