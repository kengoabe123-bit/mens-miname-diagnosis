import type { Metadata } from 'next';
import { Noto_Sans_JP } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'MensFix - あなたの「見た目の悩み」に最適な解決策を診断',
  description: '60秒の無料診断で、ニキビ・薄毛・脱毛・歯並び・デリケートな悩みに最適なクリニックが見つかる。7つの質問であなたにピッタリの解決策を提案します。',
  verification: {
    google: 'KvzKu39UZd83_x3idpa06ZQbeXzlo5J-Mn1ACXskPf0',
  },
  openGraph: {
    title: 'MensFix - あなたの「見た目の悩み」に最適な解決策を診断',
    description: '60秒の無料診断で、あなたの見た目の悩みに最適な解決策が見つかる。',
    type: 'website',
    locale: 'ja_JP',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className={notoSansJP.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
