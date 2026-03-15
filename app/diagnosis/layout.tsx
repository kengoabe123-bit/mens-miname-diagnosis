import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: '見た目改革診断 | MensFix - あなたに最適な解決策を見つけよう',
    description:
        '7つの質問に答えるだけで、あなたの見た目の悩みに最適な解決策がわかります。ニキビ・薄毛・脱毛・歯並び・デリケートな悩みを総合的に分析。',
    openGraph: {
        title: '見た目改革診断 | MensFix',
        description: '7つの質問であなたの見た目の悩みに最適な解決策を診断。60秒で結果がわかります。',
        type: 'website',
        locale: 'ja_JP',
    },
};

export default function DiagnosisLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
