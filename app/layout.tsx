import type { Metadata } from 'next';
import { Noto_Sans_JP } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WebsiteSchema } from '@/components/StructuredData';

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

const SITE_NAME = 'MensFix';
const SITE_URL = 'https://mens-miname-diagnosis.pages.dev';

export const metadata: Metadata = {
  title: 'MensFix - あなたの「見た目の悩み」に最適な解決策を診断',
  description: '60秒の無料診断で、ニキビ・薄毛・脱毛・歯並び・デリケートな悩みに最適なクリニックが見つかる。7つの質問であなたにピッタリの解決策を提案します。',
  verification: {
    google: 'Mlqh5zm0FnokIIIavzUIGMbvBVSdL-3x8VQhTys_fuQ',
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
        <WebsiteSchema
          siteName={SITE_NAME}
          siteUrl={SITE_URL}
          description="男性の見た目の悩みに最適な解決策を見つける無料診断サービス"
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
