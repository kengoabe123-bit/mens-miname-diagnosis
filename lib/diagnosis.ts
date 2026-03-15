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

export const questions: Question[] = [
    {
        id: 1,
        text: '今、一番気になっている見た目の悩みは？',
        subtext: '最も改善したい悩みを選んでください',
        options: [
            {
                label: '肌荒れ・ニキビが治らない',
                scores: { 'nikibi-clinic-a': 5, 'nikibi-online-b': 5, 'aga-clinic-a': 0, 'aga-online-b': 0, 'gorilla-datsumo': 0, 'mens-rize-datsumo': 0, 'kyousei-clinic-a': 0, 'houkei-clinic-a': 0, 'houkei-clinic-b': 0 },
            },
            {
                label: '髪が薄くなってきた・抜け毛が増えた',
                scores: { 'nikibi-clinic-a': 0, 'nikibi-online-b': 0, 'aga-clinic-a': 5, 'aga-online-b': 5, 'gorilla-datsumo': 0, 'mens-rize-datsumo': 0, 'kyousei-clinic-a': 0, 'houkei-clinic-a': 0, 'houkei-clinic-b': 0 },
            },
            {
                label: 'ムダ毛・ヒゲが気になる',
                scores: { 'nikibi-clinic-a': 0, 'nikibi-online-b': 0, 'aga-clinic-a': 0, 'aga-online-b': 0, 'gorilla-datsumo': 5, 'mens-rize-datsumo': 5, 'kyousei-clinic-a': 0, 'houkei-clinic-a': 0, 'houkei-clinic-b': 0 },
            },
            {
                label: '歯並び・口元に自信がない',
                scores: { 'nikibi-clinic-a': 0, 'nikibi-online-b': 0, 'aga-clinic-a': 0, 'aga-online-b': 0, 'gorilla-datsumo': 0, 'mens-rize-datsumo': 0, 'kyousei-clinic-a': 5, 'houkei-clinic-a': 0, 'houkei-clinic-b': 0 },
            },
            {
                label: 'デリケートゾーンの悩みがある',
                scores: { 'nikibi-clinic-a': 0, 'nikibi-online-b': 0, 'aga-clinic-a': 0, 'aga-online-b': 0, 'gorilla-datsumo': 0, 'mens-rize-datsumo': 0, 'kyousei-clinic-a': 0, 'houkei-clinic-a': 5, 'houkei-clinic-b': 5 },
            },
        ],
    },
    {
        id: 2,
        text: 'その悩みをどのくらいの期間抱えていますか？',
        options: [
            {
                label: '最近気になり始めた（1年以内）',
                scores: { 'nikibi-clinic-a': 3, 'nikibi-online-b': 5, 'aga-clinic-a': 3, 'aga-online-b': 5, 'gorilla-datsumo': 3, 'mens-rize-datsumo': 4, 'kyousei-clinic-a': 4, 'houkei-clinic-a': 3, 'houkei-clinic-b': 3 },
            },
            {
                label: '数年前から気になっている',
                scores: { 'nikibi-clinic-a': 4, 'nikibi-online-b': 3, 'aga-clinic-a': 4, 'aga-online-b': 3, 'gorilla-datsumo': 4, 'mens-rize-datsumo': 4, 'kyousei-clinic-a': 4, 'houkei-clinic-a': 4, 'houkei-clinic-b': 4 },
            },
            {
                label: '10年以上ずっと悩んでいる',
                scores: { 'nikibi-clinic-a': 5, 'nikibi-online-b': 2, 'aga-clinic-a': 5, 'aga-online-b': 2, 'gorilla-datsumo': 5, 'mens-rize-datsumo': 4, 'kyousei-clinic-a': 5, 'houkei-clinic-a': 5, 'houkei-clinic-b': 5 },
            },
            {
                label: 'ずっとコンプレックスだった',
                scores: { 'nikibi-clinic-a': 5, 'nikibi-online-b': 3, 'aga-clinic-a': 5, 'aga-online-b': 3, 'gorilla-datsumo': 5, 'mens-rize-datsumo': 5, 'kyousei-clinic-a': 5, 'houkei-clinic-a': 5, 'houkei-clinic-b': 5 },
            },
        ],
    },
    {
        id: 3,
        text: 'これまでに何か対策を試したことはありますか？',
        options: [
            {
                label: '特に何もしていない',
                scores: { 'nikibi-clinic-a': 3, 'nikibi-online-b': 5, 'aga-clinic-a': 3, 'aga-online-b': 5, 'gorilla-datsumo': 3, 'mens-rize-datsumo': 4, 'kyousei-clinic-a': 4, 'houkei-clinic-a': 4, 'houkei-clinic-b': 3 },
            },
            {
                label: '市販品を試したが効果がなかった',
                scores: { 'nikibi-clinic-a': 5, 'nikibi-online-b': 4, 'aga-clinic-a': 5, 'aga-online-b': 4, 'gorilla-datsumo': 4, 'mens-rize-datsumo': 4, 'kyousei-clinic-a': 3, 'houkei-clinic-a': 3, 'houkei-clinic-b': 3 },
            },
            {
                label: 'エステやサロンに通ったことがある',
                scores: { 'nikibi-clinic-a': 4, 'nikibi-online-b': 3, 'aga-clinic-a': 4, 'aga-online-b': 3, 'gorilla-datsumo': 5, 'mens-rize-datsumo': 5, 'kyousei-clinic-a': 3, 'houkei-clinic-a': 3, 'houkei-clinic-b': 4 },
            },
            {
                label: '病院・クリニックに行ったことがある',
                scores: { 'nikibi-clinic-a': 5, 'nikibi-online-b': 2, 'aga-clinic-a': 5, 'aga-online-b': 3, 'gorilla-datsumo': 4, 'mens-rize-datsumo': 5, 'kyousei-clinic-a': 5, 'houkei-clinic-a': 5, 'houkei-clinic-b': 5 },
            },
        ],
    },
    {
        id: 4,
        text: '治療やケアにかけられる月々の予算は？',
        options: [
            {
                label: 'まずは無料カウンセリングから',
                scores: { 'nikibi-clinic-a': 4, 'nikibi-online-b': 3, 'aga-clinic-a': 4, 'aga-online-b': 3, 'gorilla-datsumo': 4, 'mens-rize-datsumo': 3, 'kyousei-clinic-a': 4, 'houkei-clinic-a': 4, 'houkei-clinic-b': 4 },
            },
            {
                label: '月5,000円〜1万円くらい',
                scores: { 'nikibi-clinic-a': 3, 'nikibi-online-b': 5, 'aga-clinic-a': 3, 'aga-online-b': 5, 'gorilla-datsumo': 3, 'mens-rize-datsumo': 4, 'kyousei-clinic-a': 5, 'houkei-clinic-a': 2, 'houkei-clinic-b': 3 },
            },
            {
                label: '月1万〜3万円まで出せる',
                scores: { 'nikibi-clinic-a': 5, 'nikibi-online-b': 4, 'aga-clinic-a': 5, 'aga-online-b': 4, 'gorilla-datsumo': 5, 'mens-rize-datsumo': 5, 'kyousei-clinic-a': 4, 'houkei-clinic-a': 4, 'houkei-clinic-b': 4 },
            },
            {
                label: '効果があるなら金額は気にしない',
                scores: { 'nikibi-clinic-a': 5, 'nikibi-online-b': 3, 'aga-clinic-a': 5, 'aga-online-b': 3, 'gorilla-datsumo': 5, 'mens-rize-datsumo': 4, 'kyousei-clinic-a': 3, 'houkei-clinic-a': 5, 'houkei-clinic-b': 5 },
            },
        ],
    },
    {
        id: 5,
        text: '通院のスタイルはどれが理想ですか？',
        options: [
            {
                label: 'オンラインで完結したい',
                scores: { 'nikibi-clinic-a': 2, 'nikibi-online-b': 5, 'aga-clinic-a': 2, 'aga-online-b': 5, 'gorilla-datsumo': 1, 'mens-rize-datsumo': 1, 'kyousei-clinic-a': 2, 'houkei-clinic-a': 1, 'houkei-clinic-b': 1 },
            },
            {
                label: '最初だけ対面で、あとはオンライン',
                scores: { 'nikibi-clinic-a': 4, 'nikibi-online-b': 4, 'aga-clinic-a': 4, 'aga-online-b': 4, 'gorilla-datsumo': 3, 'mens-rize-datsumo': 3, 'kyousei-clinic-a': 4, 'houkei-clinic-a': 3, 'houkei-clinic-b': 3 },
            },
            {
                label: 'しっかり対面で相談したい',
                scores: { 'nikibi-clinic-a': 5, 'nikibi-online-b': 2, 'aga-clinic-a': 5, 'aga-online-b': 2, 'gorilla-datsumo': 5, 'mens-rize-datsumo': 5, 'kyousei-clinic-a': 5, 'houkei-clinic-a': 5, 'houkei-clinic-b': 5 },
            },
            {
                label: '自宅でできるセルフケアがいい',
                scores: { 'nikibi-clinic-a': 2, 'nikibi-online-b': 5, 'aga-clinic-a': 2, 'aga-online-b': 5, 'gorilla-datsumo': 1, 'mens-rize-datsumo': 1, 'kyousei-clinic-a': 2, 'houkei-clinic-a': 1, 'houkei-clinic-b': 1 },
            },
        ],
    },
    {
        id: 6,
        text: '治療していることを周囲に知られたくないですか？',
        options: [
            {
                label: '絶対にバレたくない',
                scores: { 'nikibi-clinic-a': 3, 'nikibi-online-b': 5, 'aga-clinic-a': 3, 'aga-online-b': 5, 'gorilla-datsumo': 4, 'mens-rize-datsumo': 3, 'kyousei-clinic-a': 5, 'houkei-clinic-a': 5, 'houkei-clinic-b': 4 },
            },
            {
                label: 'できればバレたくない',
                scores: { 'nikibi-clinic-a': 4, 'nikibi-online-b': 4, 'aga-clinic-a': 4, 'aga-online-b': 4, 'gorilla-datsumo': 4, 'mens-rize-datsumo': 4, 'kyousei-clinic-a': 4, 'houkei-clinic-a': 4, 'houkei-clinic-b': 4 },
            },
            {
                label: '別に気にしない',
                scores: { 'nikibi-clinic-a': 4, 'nikibi-online-b': 4, 'aga-clinic-a': 4, 'aga-online-b': 4, 'gorilla-datsumo': 4, 'mens-rize-datsumo': 4, 'kyousei-clinic-a': 3, 'houkei-clinic-a': 3, 'houkei-clinic-b': 3 },
            },
            {
                label: 'むしろ周りにもすすめたい',
                scores: { 'nikibi-clinic-a': 4, 'nikibi-online-b': 3, 'aga-clinic-a': 4, 'aga-online-b': 3, 'gorilla-datsumo': 4, 'mens-rize-datsumo': 5, 'kyousei-clinic-a': 3, 'houkei-clinic-a': 3, 'houkei-clinic-b': 5 },
            },
        ],
    },
    {
        id: 7,
        text: 'いつまでに改善したいですか？',
        options: [
            {
                label: '今すぐにでも始めたい',
                scores: { 'nikibi-clinic-a': 4, 'nikibi-online-b': 5, 'aga-clinic-a': 4, 'aga-online-b': 5, 'gorilla-datsumo': 4, 'mens-rize-datsumo': 4, 'kyousei-clinic-a': 4, 'houkei-clinic-a': 5, 'houkei-clinic-b': 4 },
            },
            {
                label: '1〜3ヶ月以内に変わりたい',
                scores: { 'nikibi-clinic-a': 5, 'nikibi-online-b': 4, 'aga-clinic-a': 4, 'aga-online-b': 4, 'gorilla-datsumo': 5, 'mens-rize-datsumo': 5, 'kyousei-clinic-a': 3, 'houkei-clinic-a': 5, 'houkei-clinic-b': 5 },
            },
            {
                label: '半年くらいかけてじっくり',
                scores: { 'nikibi-clinic-a': 4, 'nikibi-online-b': 3, 'aga-clinic-a': 5, 'aga-online-b': 4, 'gorilla-datsumo': 4, 'mens-rize-datsumo': 4, 'kyousei-clinic-a': 5, 'houkei-clinic-a': 3, 'houkei-clinic-b': 3 },
            },
            {
                label: 'いい方法が見つかれば、いつでも',
                scores: { 'nikibi-clinic-a': 3, 'nikibi-online-b': 4, 'aga-clinic-a': 3, 'aga-online-b': 4, 'gorilla-datsumo': 3, 'mens-rize-datsumo': 3, 'kyousei-clinic-a': 4, 'houkei-clinic-a': 3, 'houkei-clinic-b': 3 },
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
