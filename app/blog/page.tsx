import type { Metadata } from 'next';
import { getAllArticles } from '@/content/articles';
import { ArticleCard } from '@/components/ArticleCard';
import { BlogCTA } from '@/components/BlogCTA';

export const metadata: Metadata = {
  title: 'お役立ち記事 | MensFix 男の見た目の悩み診断',
  description: 'ニキビ・薄毛・脱毛・歯並び・ワキガなど、男性の見た目の悩みに役立つ記事をまとめました。原因・対策・費用まで徹底解説。',
  openGraph: {
    title: 'お役立ち記事 | MensFix 男の見た目の悩み診断',
    description: '男性の見た目の悩みに役立つ記事をまとめました。',
    type: 'website',
    locale: 'ja_JP',
  },
};

export default function BlogPage() {
  const articles = getAllArticles();

  return (
    <main className="blog-page">
      <section className="blog-hero">
        <h1>男の見た目の悩みを解決するお役立ち記事</h1>
        <p>ニキビ・薄毛・脱毛・歯並び・デリケートな悩みまで、原因と解決策を徹底解説します。</p>
      </section>

      <section className="blog-list">
        {articles.map((article) => (
          <ArticleCard
            key={article.slug}
            slug={article.slug}
            title={article.title}
            description={article.description}
            publishedAt={article.publishedAt}
            category={article.category}
          />
        ))}
      </section>

      <BlogCTA />
    </main>
  );
}
