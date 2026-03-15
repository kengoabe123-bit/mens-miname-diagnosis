import { services, Service } from './services';

export interface Question {
    id: number;
    text: string;
    subtext?: string;
    options: Option[];
}

export interface Option {
    label: string;
    scores: Record<string, number>;
}

export interface DiagnosisResult {
    service: Service;
    score: number;
    matchRate: number;
    reason: string;
}

interface ConditionalReason {
    condition: (answers: number[]) => boolean;
    text: string;
}

// 新ID: 'mens-supplement', 'nioi-care', 'skincare', 'houkei-goods', 'datsumo-cream', 'aga-item', 'muscle-diet', 'mens-esthe'

export const questions: Question[] = [
    {
        id: 1,
        text: '今、一番気になっている見た目の悩みは？',
        subtext: '最も改善したい悩みを選んでください',
        options: [
            {
                label: '肌荒れ・ニキビが治らない',
                scores: { 'nikibi-clinic-a': 5, 'nikibi-online-b': 5, 'aga-clinic-a': 0, 'aga-online-b': 0, 'gorilla-datsumo': 0, 'mens-rize-datsumo': 0, 'kyousei-clinic-a': 0, 'houkei-clinic-a': 0, 'houkei-clinic-b': 0, 'mens-supplement': 0, 'nioi-care': 1, 'skincare': 5, 'houkei-goods': 0, 'datsumo-cream': 0, 'aga-item': 0, 'muscle-diet': 0, 'mens-esthe': 2 },
            },
            {
                label: '髪が薄くなってきた・抜け毛が増えた',
                scores: { 'nikibi-clinic-a': 0, 'nikibi-online-b': 0, 'aga-clinic-a': 5, 'aga-online-b': 5, 'gorilla-datsumo': 0, 'mens-rize-datsumo': 0, 'kyousei-clinic-a': 0, 'houkei-clinic-a': 0, 'houkei-clinic-b': 0, 'mens-supplement': 0, 'nioi-care': 0, 'skincare': 0, 'houkei-goods': 0, 'datsumo-cream': 0, 'aga-item': 5, 'muscle-diet': 0, 'mens-esthe': 0 },
            },
            {
                label: 'ムダ毛・ヒゲが気になる',
                scores: { 'nikibi-clinic-a': 0, 'nikibi-online-b': 0, 'aga-clinic-a': 0, 'aga-online-b': 0, 'gorilla-datsumo': 5, 'mens-rize-datsumo': 5, 'kyousei-clinic-a': 0, 'houkei-clinic-a': 0, 'houkei-clinic-b': 0, 'mens-supplement': 0, 'nioi-care': 0, 'skincare': 0, 'houkei-goods': 0, 'datsumo-cream': 5, 'aga-item': 0, 'muscle-diet': 0, 'mens-esthe': 2 },
            },
            {
                label: '歯並び・口元に自信がない',
                scores: { 'nikibi-clinic-a': 0, 'nikibi-online-b': 0, 'aga-clinic-a': 0, 'aga-online-b': 0, 'gorilla-datsumo': 0, 'mens-rize-datsumo': 0, 'kyousei-clinic-a': 5, 'houkei-clinic-a': 0, 'houkei-clinic-b': 0, 'mens-supplement': 0, 'nioi-care': 0, 'skincare': 0, 'houkei-goods': 0, 'datsumo-cream': 0, 'aga-item': 0, 'muscle-diet': 0, 'mens-esthe': 0 },
            },
            {
                label: 'デリケートゾーンの悩みがある',
                scores: { 'nikibi-clinic-a': 0, 'nikibi-online-b': 0, 'aga-clinic-a': 0, 'aga-online-b': 0, 'gorilla-datsumo': 0, 'mens-rize-datsumo': 0, 'kyousei-clinic-a': 0, 'houkei-clinic-a': 5, 'houkei-clinic-b': 5, 'mens-supplement': 5, 'nioi-care': 0, 'skincare': 0, 'houkei-goods': 5, 'datsumo-cream': 0, 'aga-item': 0, 'muscle-diet': 0, 'mens-esthe': 1 },
            },
            {
                label: '体臭・ニオイが気になる',
                scores: { 'nikibi-clinic-a': 0, 'nikibi-online-b': 0, 'aga-clinic-a': 0, 'aga-online-b': 0, 'gorilla-datsumo': 0, 'mens-rize-datsumo': 0, 'kyousei-clinic-a': 0, 'houkei-clinic-a': 0, 'houkei-clinic-b': 0, 'mens-supplement': 0, 'nioi-care': 5, 'skincare': 2, 'houkei-goods': 0, 'datsumo-cream': 0, 'aga-item': 0, 'muscle-diet': 0, 'mens-esthe': 1 },
            },
            {
                label: '体型・筋肉に自信がない',
                scores: { 'nikibi-clinic-a': 0, 'nikibi-online-b': 0, 'aga-clinic-a': 0, 'aga-online-b': 0, 'gorilla-datsumo': 0, 'mens-rize-datsumo': 0, 'kyousei-clinic-a': 0, 'houkei-clinic-a': 0, 'houkei-clinic-b': 0, 'mens-supplement': 2, 'nioi-care': 0, 'skincare': 0, 'houkei-goods': 0, 'datsumo-cream': 0, 'aga-item': 0, 'muscle-diet': 5, 'mens-esthe': 4 },
            },
        ],
    },
    {
        id: 2,
        text: 'その悩みをどのくらいの期間抱えていますか？',
        options: [
            {
                label: '最近気になり始めた（1年以内）',
                scores: { 'nikibi-clinic-a': 3, 'nikibi-online-b': 5, 'aga-clinic-a': 3, 'aga-online-b': 5, 'gorilla-datsumo': 3, 'mens-rize-datsumo': 4, 'kyousei-clinic-a': 4, 'houkei-clinic-a': 3, 'houkei-clinic-b': 3, 'mens-supplement': 4, 'nioi-care': 4, 'skincare': 5, 'houkei-goods': 4, 'datsumo-cream': 5, 'aga-item': 5, 'muscle-diet': 4, 'mens-esthe': 4 },
            },
            {
                label: '数年前から気になっている',
                scores: { 'nikibi-clinic-a': 4, 'nikibi-online-b': 3, 'aga-clinic-a': 4, 'aga-online-b': 3, 'gorilla-datsumo': 4, 'mens-rize-datsumo': 4, 'kyousei-clinic-a': 4, 'houkei-clinic-a': 4, 'houkei-clinic-b': 4, 'mens-supplement': 4, 'nioi-care': 4, 'skincare': 4, 'houkei-goods': 4, 'datsumo-cream': 4, 'aga-item': 4, 'muscle-diet': 4, 'mens-esthe': 4 },
            },
            {
                label: '10年以上ずっと悩んでいる',
                scores: { 'nikibi-clinic-a': 5, 'nikibi-online-b': 2, 'aga-clinic-a': 5, 'aga-online-b': 2, 'gorilla-datsumo': 5, 'mens-rize-datsumo': 4, 'kyousei-clinic-a': 5, 'houkei-clinic-a': 5, 'houkei-clinic-b': 5, 'mens-supplement': 4, 'nioi-care': 4, 'skincare': 3, 'houkei-goods': 5, 'datsumo-cream': 3, 'aga-item': 3, 'muscle-diet': 4, 'mens-esthe': 5 },
            },
            {
                label: 'ずっとコンプレックスだった',
                scores: { 'nikibi-clinic-a': 5, 'nikibi-online-b': 3, 'aga-clinic-a': 5, 'aga-online-b': 3, 'gorilla-datsumo': 5, 'mens-rize-datsumo': 5, 'kyousei-clinic-a': 5, 'houkei-clinic-a': 5, 'houkei-clinic-b': 5, 'mens-supplement': 5, 'nioi-care': 5, 'skincare': 3, 'houkei-goods': 5, 'datsumo-cream': 4, 'aga-item': 4, 'muscle-diet': 5, 'mens-esthe': 5 },
            },
        ],
    },
    {
        id: 3,
        text: 'これまでに何か対策を試したことはありますか？',
        options: [
            {
                label: '特に何もしていない',
                scores: { 'nikibi-clinic-a': 3, 'nikibi-online-b': 5, 'aga-clinic-a': 3, 'aga-online-b': 5, 'gorilla-datsumo': 3, 'mens-rize-datsumo': 4, 'kyousei-clinic-a': 4, 'houkei-clinic-a': 4, 'houkei-clinic-b': 3, 'mens-supplement': 5, 'nioi-care': 5, 'skincare': 5, 'houkei-goods': 5, 'datsumo-cream': 5, 'aga-item': 5, 'muscle-diet': 4, 'mens-esthe': 3 },
            },
            {
                label: '市販品を試したが効果がなかった',
                scores: { 'nikibi-clinic-a': 5, 'nikibi-online-b': 4, 'aga-clinic-a': 5, 'aga-online-b': 4, 'gorilla-datsumo': 4, 'mens-rize-datsumo': 4, 'kyousei-clinic-a': 3, 'houkei-clinic-a': 3, 'houkei-clinic-b': 3, 'mens-supplement': 3, 'nioi-care': 4, 'skincare': 3, 'houkei-goods': 3, 'datsumo-cream': 3, 'aga-item': 3, 'muscle-diet': 4, 'mens-esthe': 4 },
            },
            {
                label: 'エステやサロンに通ったことがある',
                scores: { 'nikibi-clinic-a': 4, 'nikibi-online-b': 3, 'aga-clinic-a': 4, 'aga-online-b': 3, 'gorilla-datsumo': 5, 'mens-rize-datsumo': 5, 'kyousei-clinic-a': 3, 'houkei-clinic-a': 3, 'houkei-clinic-b': 4, 'mens-supplement': 2, 'nioi-care': 3, 'skincare': 2, 'houkei-goods': 2, 'datsumo-cream': 2, 'aga-item': 2, 'muscle-diet': 5, 'mens-esthe': 5 },
            },
            {
                label: '病院・クリニックに行ったことがある',
                scores: { 'nikibi-clinic-a': 5, 'nikibi-online-b': 2, 'aga-clinic-a': 5, 'aga-online-b': 3, 'gorilla-datsumo': 4, 'mens-rize-datsumo': 5, 'kyousei-clinic-a': 5, 'houkei-clinic-a': 5, 'houkei-clinic-b': 5, 'mens-supplement': 2, 'nioi-care': 2, 'skincare': 2, 'houkei-goods': 2, 'datsumo-cream': 2, 'aga-item': 2, 'muscle-diet': 3, 'mens-esthe': 3 },
            },
        ],
    },
    {
        id: 4,
        text: '治療やケアにかけられる月々の予算は？',
        options: [
            {
                label: 'まずは無料カウンセリングから',
                scores: { 'nikibi-clinic-a': 4, 'nikibi-online-b': 3, 'aga-clinic-a': 4, 'aga-online-b': 3, 'gorilla-datsumo': 4, 'mens-rize-datsumo': 3, 'kyousei-clinic-a': 4, 'houkei-clinic-a': 4, 'houkei-clinic-b': 4, 'mens-supplement': 3, 'nioi-care': 3, 'skincare': 3, 'houkei-goods': 3, 'datsumo-cream': 3, 'aga-item': 3, 'muscle-diet': 3, 'mens-esthe': 4 },
            },
            {
                label: '月5,000円〜1万円くらい',
                scores: { 'nikibi-clinic-a': 3, 'nikibi-online-b': 5, 'aga-clinic-a': 3, 'aga-online-b': 5, 'gorilla-datsumo': 3, 'mens-rize-datsumo': 4, 'kyousei-clinic-a': 5, 'houkei-clinic-a': 2, 'houkei-clinic-b': 3, 'mens-supplement': 5, 'nioi-care': 5, 'skincare': 5, 'houkei-goods': 5, 'datsumo-cream': 5, 'aga-item': 5, 'muscle-diet': 3, 'mens-esthe': 2 },
            },
            {
                label: '月1万〜3万円まで出せる',
                scores: { 'nikibi-clinic-a': 5, 'nikibi-online-b': 4, 'aga-clinic-a': 5, 'aga-online-b': 4, 'gorilla-datsumo': 5, 'mens-rize-datsumo': 5, 'kyousei-clinic-a': 4, 'houkei-clinic-a': 4, 'houkei-clinic-b': 4, 'mens-supplement': 4, 'nioi-care': 4, 'skincare': 4, 'houkei-goods': 3, 'datsumo-cream': 4, 'aga-item': 4, 'muscle-diet': 4, 'mens-esthe': 4 },
            },
            {
                label: '効果があるなら金額は気にしない',
                scores: { 'nikibi-clinic-a': 5, 'nikibi-online-b': 3, 'aga-clinic-a': 5, 'aga-online-b': 3, 'gorilla-datsumo': 5, 'mens-rize-datsumo': 4, 'kyousei-clinic-a': 3, 'houkei-clinic-a': 5, 'houkei-clinic-b': 5, 'mens-supplement': 4, 'nioi-care': 4, 'skincare': 3, 'houkei-goods': 2, 'datsumo-cream': 2, 'aga-item': 3, 'muscle-diet': 5, 'mens-esthe': 5 },
            },
        ],
    },
    {
        id: 5,
        text: '通院のスタイルはどれが理想ですか？',
        options: [
            {
                label: 'オンラインで完結したい',
                scores: { 'nikibi-clinic-a': 2, 'nikibi-online-b': 5, 'aga-clinic-a': 2, 'aga-online-b': 5, 'gorilla-datsumo': 1, 'mens-rize-datsumo': 1, 'kyousei-clinic-a': 2, 'houkei-clinic-a': 1, 'houkei-clinic-b': 1, 'mens-supplement': 5, 'nioi-care': 5, 'skincare': 5, 'houkei-goods': 5, 'datsumo-cream': 5, 'aga-item': 5, 'muscle-diet': 3, 'mens-esthe': 1 },
            },
            {
                label: '最初だけ対面で、あとはオンライン',
                scores: { 'nikibi-clinic-a': 4, 'nikibi-online-b': 4, 'aga-clinic-a': 4, 'aga-online-b': 4, 'gorilla-datsumo': 3, 'mens-rize-datsumo': 3, 'kyousei-clinic-a': 4, 'houkei-clinic-a': 3, 'houkei-clinic-b': 3, 'mens-supplement': 3, 'nioi-care': 3, 'skincare': 3, 'houkei-goods': 3, 'datsumo-cream': 3, 'aga-item': 3, 'muscle-diet': 3, 'mens-esthe': 3 },
            },
            {
                label: 'しっかり対面で相談したい',
                scores: { 'nikibi-clinic-a': 5, 'nikibi-online-b': 2, 'aga-clinic-a': 5, 'aga-online-b': 2, 'gorilla-datsumo': 5, 'mens-rize-datsumo': 5, 'kyousei-clinic-a': 5, 'houkei-clinic-a': 5, 'houkei-clinic-b': 5, 'mens-supplement': 1, 'nioi-care': 1, 'skincare': 2, 'houkei-goods': 1, 'datsumo-cream': 1, 'aga-item': 1, 'muscle-diet': 4, 'mens-esthe': 5 },
            },
            {
                label: '自宅でできるセルフケアがいい',
                scores: { 'nikibi-clinic-a': 2, 'nikibi-online-b': 5, 'aga-clinic-a': 2, 'aga-online-b': 5, 'gorilla-datsumo': 1, 'mens-rize-datsumo': 1, 'kyousei-clinic-a': 2, 'houkei-clinic-a': 1, 'houkei-clinic-b': 1, 'mens-supplement': 5, 'nioi-care': 5, 'skincare': 5, 'houkei-goods': 5, 'datsumo-cream': 5, 'aga-item': 5, 'muscle-diet': 3, 'mens-esthe': 1 },
            },
        ],
    },
    {
        id: 6,
        text: '治療していることを周囲に知られたくないですか？',
        options: [
            {
                label: '絶対にバレたくない',
                scores: { 'nikibi-clinic-a': 3, 'nikibi-online-b': 5, 'aga-clinic-a': 3, 'aga-online-b': 5, 'gorilla-datsumo': 4, 'mens-rize-datsumo': 3, 'kyousei-clinic-a': 5, 'houkei-clinic-a': 5, 'houkei-clinic-b': 4, 'mens-supplement': 5, 'nioi-care': 5, 'skincare': 4, 'houkei-goods': 5, 'datsumo-cream': 5, 'aga-item': 5, 'muscle-diet': 3, 'mens-esthe': 2 },
            },
            {
                label: 'できればバレたくない',
                scores: { 'nikibi-clinic-a': 4, 'nikibi-online-b': 4, 'aga-clinic-a': 4, 'aga-online-b': 4, 'gorilla-datsumo': 4, 'mens-rize-datsumo': 4, 'kyousei-clinic-a': 4, 'houkei-clinic-a': 4, 'houkei-clinic-b': 4, 'mens-supplement': 4, 'nioi-care': 4, 'skincare': 4, 'houkei-goods': 4, 'datsumo-cream': 4, 'aga-item': 4, 'muscle-diet': 4, 'mens-esthe': 3 },
            },
            {
                label: '別に気にしない',
                scores: { 'nikibi-clinic-a': 4, 'nikibi-online-b': 4, 'aga-clinic-a': 4, 'aga-online-b': 4, 'gorilla-datsumo': 4, 'mens-rize-datsumo': 4, 'kyousei-clinic-a': 3, 'houkei-clinic-a': 3, 'houkei-clinic-b': 3, 'mens-supplement': 3, 'nioi-care': 3, 'skincare': 4, 'houkei-goods': 3, 'datsumo-cream': 4, 'aga-item': 4, 'muscle-diet': 4, 'mens-esthe': 4 },
            },
            {
                label: 'むしろ周りにもすすめたい',
                scores: { 'nikibi-clinic-a': 4, 'nikibi-online-b': 3, 'aga-clinic-a': 4, 'aga-online-b': 3, 'gorilla-datsumo': 4, 'mens-rize-datsumo': 5, 'kyousei-clinic-a': 3, 'houkei-clinic-a': 3, 'houkei-clinic-b': 5, 'mens-supplement': 3, 'nioi-care': 3, 'skincare': 4, 'houkei-goods': 3, 'datsumo-cream': 4, 'aga-item': 4, 'muscle-diet': 5, 'mens-esthe': 5 },
            },
        ],
    },
    {
        id: 7,
        text: 'いつまでに改善したいですか？',
        options: [
            {
                label: '今すぐにでも始めたい',
                scores: { 'nikibi-clinic-a': 4, 'nikibi-online-b': 5, 'aga-clinic-a': 4, 'aga-online-b': 5, 'gorilla-datsumo': 4, 'mens-rize-datsumo': 4, 'kyousei-clinic-a': 4, 'houkei-clinic-a': 5, 'houkei-clinic-b': 4, 'mens-supplement': 5, 'nioi-care': 5, 'skincare': 5, 'houkei-goods': 5, 'datsumo-cream': 5, 'aga-item': 5, 'muscle-diet': 4, 'mens-esthe': 4 },
            },
            {
                label: '1〜3ヶ月以内に変わりたい',
                scores: { 'nikibi-clinic-a': 5, 'nikibi-online-b': 4, 'aga-clinic-a': 4, 'aga-online-b': 4, 'gorilla-datsumo': 5, 'mens-rize-datsumo': 5, 'kyousei-clinic-a': 3, 'houkei-clinic-a': 5, 'houkei-clinic-b': 5, 'mens-supplement': 4, 'nioi-care': 4, 'skincare': 4, 'houkei-goods': 4, 'datsumo-cream': 4, 'aga-item': 4, 'muscle-diet': 5, 'mens-esthe': 5 },
            },
            {
                label: '半年くらいかけてじっくり',
                scores: { 'nikibi-clinic-a': 4, 'nikibi-online-b': 3, 'aga-clinic-a': 5, 'aga-online-b': 4, 'gorilla-datsumo': 4, 'mens-rize-datsumo': 4, 'kyousei-clinic-a': 5, 'houkei-clinic-a': 3, 'houkei-clinic-b': 3, 'mens-supplement': 4, 'nioi-care': 3, 'skincare': 3, 'houkei-goods': 3, 'datsumo-cream': 3, 'aga-item': 4, 'muscle-diet': 4, 'mens-esthe': 3 },
            },
            {
                label: 'いい方法が見つかれば、いつでも',
                scores: { 'nikibi-clinic-a': 3, 'nikibi-online-b': 4, 'aga-clinic-a': 3, 'aga-online-b': 4, 'gorilla-datsumo': 3, 'mens-rize-datsumo': 3, 'kyousei-clinic-a': 4, 'houkei-clinic-a': 3, 'houkei-clinic-b': 3, 'mens-supplement': 4, 'nioi-care': 4, 'skincare': 4, 'houkei-goods': 4, 'datsumo-cream': 4, 'aga-item': 4, 'muscle-diet': 3, 'mens-esthe': 3 },
            },
        ],
    },
];

const conditionalReasons: Record<string, ConditionalReason[]> = {
    'nikibi-clinic-a': [
        { condition: (a) => a[0] === 0 && a[2] === 1, text: '市販品では改善しなかったとのこと。医療レベルのニキビ治療で、根本から肌質を改善するアプローチがおすすめです。皮膚科専門医が一人ひとりの肌状態に合わせた治療プランを提案します。' },
        { condition: (a) => a[0] === 0 && a[1] >= 2, text: '長年ニキビに悩まれているとのこと。専門クリニックでは内服薬・外用薬・レーザーを組み合わせた総合的な治療で、繰り返すニキビとニキビ跡にアプローチできます。' },
        { condition: (a) => a[0] === 0 && a[4] === 2, text: '対面でしっかり相談したいとのこと。皮膚科専門医が直接肌の状態を確認し、最適な治療法を一緒に決めていきます。保険適用の治療も相談可能です。' },
        { condition: () => true, text: '皮膚科専門医が肌の状態を診断し、保険診療と自由診療の両方から最適な治療法を提案。ニキビ跡の改善にも対応しています。' },
    ],
    'nikibi-online-b': [
        { condition: (a) => a[0] === 0 && a[4] === 0, text: 'オンライン完結をご希望とのこと。スマホで肌の写真を送るだけで専門医が診断し、パーソナライズされた処方薬をご自宅にお届けします。通院不要で忙しい方に最適です。' },
        { condition: (a) => a[0] === 0 && a[5] === 0, text: '治療を知られたくないとのこと。オンラインニキビ治療なら、自宅から一歩も出ずに治療を開始でき、薬も無地の箱で配送。プライバシーが守られます。' },
        { condition: (a) => a[0] === 0 && a[3] === 1, text: '月5,000円〜1万円のご予算に最適。月額制のオンラインニキビ治療なら、追加費用なしの明確な料金で始められます。' },
        { condition: () => true, text: 'スマホで完結するオンラインニキビ治療。AI肌診断と専門医の診察で、自宅にいながら本格的な治療を受けられます。' },
    ],
    'aga-clinic-a': [
        { condition: (a) => a[0] === 1 && a[2] === 1, text: '市販の育毛剤で効果がなかったとのこと。AGAクリニックでは、医学的根拠に基づいたフィナステリド・ミノキシジルなどの処方薬で、発毛実績99%以上の本格的な治療が受けられます。' },
        { condition: (a) => a[0] === 1 && a[1] >= 2, text: '長年薄毛に悩まれているとのこと。早期に専門治療を始めるほど効果が出やすいのがAGA治療の特徴です。まずは無料カウンセリングで現在の状態をチェックしてみましょう。' },
        { condition: (a) => a[0] === 1 && a[3] === 3, text: '効果重視とのこと。このクリニックは発毛実績99%以上という圧倒的な結果を出しており、全額返金保証もあるためリスクなく始められます。' },
        { condition: () => true, text: '月額3,000円台から始められるAGA治療。科学的根拠に基づく処方薬で、発毛実績99%以上の実績があります。' },
    ],
    'aga-online-b': [
        { condition: (a) => a[0] === 1 && a[4] === 0, text: 'オンライン完結をご希望とのこと。初診からオンラインでAGA治療が完結し、処方薬は最短翌日にご自宅に配送。誰にも会わずに薄毛治療を始められます。' },
        { condition: (a) => a[0] === 1 && a[5] === 0, text: '治療を絶対にバレたくないとのこと。オンラインAGA治療なら、夜間・休日も診療可能で、薬の定期配送もプライバシーに配慮した梱包でお届けします。' },
        { condition: (a) => a[0] === 1 && a[6] === 0, text: '今すぐ始めたいとのこと。オンラインなら今日中に診察を受けて、最短翌日から治療を開始できます。初月無料キャンペーンもあります。' },
        { condition: () => true, text: '初診からオンラインで完結するAGA治療。夜間・休日も診療可能で、忙しいビジネスマンにも最適です。' },
    ],
    'gorilla-datsumo': [
        { condition: (a) => a[0] === 2 && a[4] === 2, text: '対面でしっかり脱毛したいとのこと。ゴリラクリニックは男性専門で、4種類の脱毛機を肌質・毛質に合わせて使い分け。2種類の麻酔で痛みにも配慮しています。' },
        { condition: (a) => a[0] === 2 && a[5] === 0, text: '治療を知られたくないとのこと。ゴリラクリニックは完全男性専門で、女性患者と顔を合わせることなく気兼ねなく通えます。' },
        { condition: (a) => a[0] === 2 && a[3] === 3, text: '効果重視とのこと。4種類の医療脱毛機を使い分けるゴリラクリニックなら、濃いヒゲや体毛にもしっかり効果を実感できます。' },
        { condition: () => true, text: '4種類の脱毛機と2種類の麻酔を備えた男性専門クリニック。追加費用なしで安心して通えます。' },
    ],
    'mens-rize-datsumo': [
        { condition: (a) => a[0] === 2 && a[3] === 1, text: '月5,000円〜1万円のご予算とのこと。メンズリゼはコース終了後も割引で追加照射でき、長期的に最もコスパが良い選択肢です。' },
        { condition: (a) => a[0] === 2 && a[3] === 2, text: 'コスパ重視の予算感に最適。メンズリゼは全身+ヒゲ5回が約29万円と相場よりお得で、追加費用も一切かかりません。' },
        { condition: (a) => a[0] === 2 && a[2] === 2, text: 'エステ経験があるとのこと。医療脱毛のメンズリゼなら、エステより確実な効果を実感でき、コース後も割引で追加照射が可能です。' },
        { condition: () => true, text: 'コース終了後も割引価格で追加照射できるため、長期的に見てコスパに優れた医療脱毛クリニックです。' },
    ],
    'kyousei-clinic-a': [
        { condition: (a) => a[0] === 3 && a[5] === 0, text: '矯正を絶対にバレたくないとのこと。透明マウスピース矯正なら装着していても周囲に気づかれにくく、仕事中も安心です。' },
        { condition: (a) => a[0] === 3 && a[3] === 1, text: '月5,000円〜1万円のご予算に最適。マウスピース矯正は月額3,000円台から始められ、従来のワイヤー矯正より費用を抑えられます。' },
        { condition: (a) => a[0] === 3 && a[6] === 2, text: 'じっくり治療したいとのこと。マウスピース矯正は半年〜1年程度の治療期間で、痛みも少なく自分のペースで歯並びを改善できます。' },
        { condition: () => true, text: '透明で目立たないマウスピースで、仕事中も気にせず歯並びを改善。月額制で費用も明確です。' },
    ],
    'houkei-clinic-a': [
        { condition: (a) => a[0] === 4 && a[5] === 0, text: '絶対にバレたくないとのこと。このクリニックは完全個室制で、カウンセリングから施術まで全て男性医師が対応。他の患者と顔を合わせることもありません。' },
        { condition: (a) => a[0] === 4 && a[6] === 0, text: '今すぐ始めたいとのこと。日帰り手術が可能で、翌日から日常生活に戻れます。まずは無料カウンセリングで相談してみましょう。' },
        { condition: (a) => a[0] === 4 && a[1] >= 2, text: '長年悩まれているとのこと。一人で抱え込む必要はありません。男性医師による完全個室のカウンセリングで、安心して相談できる環境が整っています。' },
        { condition: () => true, text: '男性医師のみが対応する完全個室のクリニック。プライバシーに最大限配慮した環境で、安心して相談・治療が受けられます。' },
    ],
    'houkei-clinic-b': [
        { condition: (a) => a[0] === 4 && a[3] === 3, text: '効果重視とのこと。累計10万件以上の施術実績があり、4種類の術式から最適な方法を提案してもらえます。実績の多さが安心の証です。' },
        { condition: (a) => a[0] === 4 && a[3] === 1, text: '費用を抑えたいとのこと。このクリニックは分割払いの月額プランがあり、無理のない支払い計画を相談できます。' },
        { condition: (a) => a[0] === 4 && a[4] === 2, text: '対面でしっかり相談したいとのこと。全国30院以上あるため通いやすく、カウンセリングで丁寧に術式の説明を受けられます。' },
        { condition: () => true, text: '累計10万件以上の施術実績を誇る包茎治療専門クリニック。笑気麻酔対応で痛みにも配慮しています。' },
    ],
    'mens-supplement': [
        { condition: (a) => a[0] === 4 && a[4] === 3, text: '自宅でセルフケアをしたいとのこと。男性向け活力サプリなら、特許成分やクラチャイダム配合のプレミアムサプリを自宅に届けてもらえます。500円のお試しから始められ、誰にも知られずにケアできます。' },
        { condition: (a) => a[0] === 4 && a[5] === 0, text: '絶対にバレたくないとのこと。サプリメントなら外見からは一切わからず、自宅に届く箱も無地。プライバシーを完全に守りながらケアできます。' },
        { condition: (a) => a[0] === 6, text: '体型・自信のお悩みに。活力サプリは内側からのパワーアップをサポート。トレーニングとの相乗効果で、メンタル面の自信にもつながります。' },
        { condition: () => true, text: '特許成分やクラチャイダム配合のプレミアムサプリで内側からパワーアップ。500円のお試しから始められ、誰にも知られずに自宅でケアできます。' },
    ],
    'nioi-care': [
        { condition: (a) => a[0] === 5 && a[4] === 3, text: '自宅でセルフケアをご希望とのこと。デオドラントスプレー・ボディソープ・エチケットサプリの3方向からニオイの元を徹底ケア。累計30万本突破の実力派アイテムが揃っています。' },
        { condition: (a) => a[0] === 5 && a[6] === 0, text: '今すぐ始めたいとのこと。デオドラントスプレーなら届いたその日から効果を実感できます。衣類にスプレーするだけのタイプなら、肌が弱い方にも安心です。' },
        { condition: (a) => a[0] === 5 && a[3] === 1, text: '月5,000円〜1万円のご予算に最適。ボディソープを変えるだけでも大きく変わります。ニオイ対策のボディソープは通常のものと同価格帯から始められます。' },
        { condition: () => true, text: '加齢臭・ワキガ・口臭など男性特有のニオイ悩みに特化。デオドラントスプレー、ボディソープ、サプリの3方向からアプローチできます。' },
    ],
    'skincare': [
        { condition: (a) => a[0] === 0 && a[4] === 3, text: '自宅でセルフケアをご希望とのこと。メンズ専用の洗顔料やBBクリームなら、毎日のルーティンに組み込むだけで清潔感のある肌を目指せます。まずは洗顔を変えることから始めてみましょう。' },
        { condition: (a) => a[0] === 0 && a[2] === 0, text: 'まだ何もケアをしていないとのこと。メンズスキンケアは洗顔から始めるのが基本。ニキビ予防×体臭ケアができるボディウォッシュなら、1本で顔も体もまとめてケアできます。' },
        { condition: (a) => a[0] === 5, text: 'ニオイの悩みもある場合、薬用ボディウォッシュなら背中ニキビを防ぎつつ体臭も抑えてくれます。清潔感アップに最適な一石二鳥のアイテムです。' },
        { condition: () => true, text: '男性の肌質に特化したスキンケアアイテム。洗顔・保湿・BBクリームの3ステップで、簡単に清潔感のある肌を手に入れられます。' },
    ],
    'houkei-goods': [
        { condition: (a) => a[0] === 4 && a[4] === 3, text: '自宅でセルフケアをご希望とのこと。世界で唯一の真性包茎矯正グッズ「キトー君」や仮性包茎補助テープなど、手術なしで始められるアイテムが揃っています。クリニックより圧倒的に安く済みます。' },
        { condition: (a) => a[0] === 4 && a[3] === 1, text: '月5,000円〜1万円のご予算に最適。矯正グッズなら一度購入すれば繰り返し使え、クリニックの10分の1以下の費用で対策できます。' },
        { condition: (a) => a[0] === 4 && a[2] === 0, text: 'まだ何もケアをしていないとのこと。いきなりクリニックは勇気がいりますよね。まずは自宅でできる矯正グッズから始めてみるのがおすすめです。' },
        { condition: () => true, text: '手術不要で自宅でケアできる包茎矯正グッズ。「キトー君」や補助テープなど、クリニックに行く勇気がまだない方にも安心の選択肢です。' },
    ],
    'datsumo-cream': [
        { condition: (a) => a[0] === 2 && a[4] === 3, text: '自宅でセルフケアをご希望とのこと。除毛クリームなら塗って流すだけの簡単ケア。VIO対応の薬用タイプや楽天1位獲得の実力派まで、自宅で好きな時にムダ毛処理ができます。' },
        { condition: (a) => a[0] === 2 && a[3] === 1, text: '月5,000円〜1万円のご予算に最適。除毛クリームならクリニックの10分の1以下の費用でムダ毛処理ができます。まずはお試しから始めてみましょう。' },
        { condition: (a) => a[0] === 2 && a[2] === 0, text: 'まだ何もケアをしていないとのこと。除毛クリームは脱毛初心者に最適な選択肢。痛みもほぼなく、カミソリ負けの心配もありません。' },
        { condition: () => true, text: '塗って流すだけの簡単ムダ毛処理。VIO対応の薬用タイプから楽天1位のアフターケアローションまで、自宅で手軽にスベ肌を目指せます。' },
    ],
    'aga-item': [
        { condition: (a) => a[0] === 1 && a[4] === 3, text: '自宅でセルフケアをご希望とのこと。販売実績260万本・リピート率93%の発毛促進剤や、頭皮ケアNo.1のスカルプシャンプーなど、自宅で始められる薄毛ケアアイテムが揃っています。' },
        { condition: (a) => a[0] === 1 && a[2] === 0, text: 'まだ何もケアをしていないとのこと。まずはシャンプーを変えることから始めてみませんか？スカルプシャンプーなら頭皮環境を整えて、抜け毛の予防効果が期待できます。' },
        { condition: (a) => a[0] === 1 && a[3] === 1, text: '月5,000円〜1万円のご予算に最適。育毛アイテムなら月数千円から始められ、クリニックに行く前のファーストステップとして最適です。' },
        { condition: () => true, text: '販売実績260万本の発毛促進剤や頭皮ケアNo.1のスカルプシャンプーなど、自宅で手軽に始められる薄毛ケアアイテム。クリニックの前にまず試したい方に最適です。' },
    ],
    'muscle-diet': [
        { condition: (a) => a[0] === 6 && a[4] === 2, text: '対面でしっかり指導を受けたいとのこと。RIZAPやダンディハウスのパーソナルジムなら、プロのトレーナーがマンツーマンで指導。確実に理想のカラダに近づけます。' },
        { condition: (a) => a[0] === 6 && a[4] === 3, text: '自宅でセルフケアをご希望とのこと。HMBサプリや加圧シャツなら自宅で手軽にボディメイク。オンラインジムなら自宅でプロの指導も受けられます。' },
        { condition: (a) => a[0] === 6 && a[3] === 3, text: '効果重視とのこと。RIZAPなら「結果にコミット」の実績で確実に変われます。遺伝子検査付きのオンラインジムなら、科学的に最適なダイエットプランを提案してもらえます。' },
        { condition: () => true, text: 'HMBサプリ・加圧シャツ・パーソナルジムなど、あなたのレベルに合った方法で理想のカラダを目指せます。自宅ケアからプロの指導まで幅広く対応。' },
    ],
    'mens-esthe': [
        { condition: (a) => a[0] === 6 && a[4] === 2, text: '対面でプロの施術を受けたいとのこと。ダンディハウスのメンズエステなら、ダイエット・フェイシャル・脱毛の総合ケアを男性専門のサロンで受けられます。体験コースから気軽にスタートできます。' },
        { condition: (a) => a[2] === 2, text: 'エステ経験があるとのこと。ダンディハウスのパーソナルジムやメンズエステなら、前回以上の効果を実感できるプレミアムなサービスをご用意しています。' },
        { condition: (a) => a[3] === 3, text: '効果重視とのこと。メンズエステならプロの手技と最新機器で、セルフケアでは実現できない本格的な見た目改善が期待できます。まずは体験コースでその効果を実感してください。' },
        { condition: () => true, text: '男性専門のエステサロンで、ダイエット・フェイシャル・脱毛の総合ケアをプロの手で。体験コースから気軽に始められます。' },
    ],
};

function selectReason(serviceId: string, answers: number[], fallbackReason: string): string {
    const reasons = conditionalReasons[serviceId];
    if (reasons) {
        for (const r of reasons) {
            if (r.condition(answers)) return r.text;
        }
    }
    return fallbackReason;
}

export function calculateResults(answers: number[]): DiagnosisResult[] {
    const scoreMap: Record<string, number> = {};
    services.forEach((s) => { scoreMap[s.id] = 0; });
    answers.forEach((optionIndex, questionIndex) => {
        const question = questions[questionIndex];
        if (question && question.options[optionIndex]) {
            Object.entries(question.options[optionIndex].scores).forEach(([serviceId, score]) => {
                if (scoreMap[serviceId] !== undefined) { scoreMap[serviceId] += score; }
            });
        }
    });
    const results: DiagnosisResult[] = services
        .map((service) => ({ service, score: scoreMap[service.id] || 0, matchRate: 0, reason: selectReason(service.id, answers, service.tagline) }))
        .sort((a, b) => b.score - a.score);
    const top3 = results.slice(0, 3);
    const topScore = top3[0]?.score || 1;
    return top3.map((r, i) => {
        const scoreRatio = topScore > 0 ? r.score / topScore : 0.5;
        let displayRate: number;
        if (i === 0) displayRate = 73 + Math.round(scoreRatio * 12);
        else if (i === 1) displayRate = 67 + Math.round(scoreRatio * 11);
        else displayRate = 60 + Math.round(scoreRatio * 12);
        return { ...r, matchRate: displayRate };
    });
}
