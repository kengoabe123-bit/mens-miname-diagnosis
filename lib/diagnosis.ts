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
                scores: { 'houkei-clinic-a': 0, 'houkei-clinic-b': 0, 'mens-supplement': 0, 'nioi-care': 1, 'skincare': 5, 'houkei-goods': 0, 'datsumo-cream': 0, 'aga-item': 0, 'muscle-diet': 0 },
            },
            {
                label: '髪が薄くなってきた・抜け毛が増えた',
                scores: { 'houkei-clinic-a': 0, 'houkei-clinic-b': 0, 'mens-supplement': 0, 'nioi-care': 0, 'skincare': 0, 'houkei-goods': 0, 'datsumo-cream': 0, 'aga-item': 5, 'muscle-diet': 0 },
            },
            {
                label: 'ムダ毛・ヒゲが気になる',
                scores: { 'houkei-clinic-a': 0, 'houkei-clinic-b': 0, 'mens-supplement': 0, 'nioi-care': 0, 'skincare': 0, 'houkei-goods': 0, 'datsumo-cream': 5, 'aga-item': 0, 'muscle-diet': 0 },
            },
            {
                label: 'デリケートゾーンの悩みがある',
                scores: { 'houkei-clinic-a': 5, 'houkei-clinic-b': 5, 'mens-supplement': 5, 'nioi-care': 0, 'skincare': 0, 'houkei-goods': 5, 'datsumo-cream': 0, 'aga-item': 0, 'muscle-diet': 0 },
            },
            {
                label: '体臭・ニオイが気になる',
                scores: { 'houkei-clinic-a': 0, 'houkei-clinic-b': 0, 'mens-supplement': 0, 'nioi-care': 5, 'skincare': 2, 'houkei-goods': 0, 'datsumo-cream': 0, 'aga-item': 0, 'muscle-diet': 0 },
            },
            {
                label: '体型・筋肉に自信がない',
                scores: { 'houkei-clinic-a': 0, 'houkei-clinic-b': 0, 'mens-supplement': 2, 'nioi-care': 0, 'skincare': 0, 'houkei-goods': 0, 'datsumo-cream': 0, 'aga-item': 0, 'muscle-diet': 5 },
            },
        ],
    },
    {
        id: 2,
        text: 'その悩みをどのくらいの期間抱えていますか？',
        options: [
            {
                label: '最近気になり始めた（1年以内）',
                scores: { 'houkei-clinic-a': 3, 'houkei-clinic-b': 3, 'mens-supplement': 4, 'nioi-care': 4, 'skincare': 5, 'houkei-goods': 4, 'datsumo-cream': 5, 'aga-item': 5, 'muscle-diet': 4 },
            },
            {
                label: '数年前から気になっている',
                scores: { 'houkei-clinic-a': 4, 'houkei-clinic-b': 4, 'mens-supplement': 4, 'nioi-care': 4, 'skincare': 4, 'houkei-goods': 4, 'datsumo-cream': 4, 'aga-item': 4, 'muscle-diet': 4 },
            },
            {
                label: '10年以上ずっと悩んでいる',
                scores: { 'houkei-clinic-a': 5, 'houkei-clinic-b': 5, 'mens-supplement': 4, 'nioi-care': 4, 'skincare': 3, 'houkei-goods': 5, 'datsumo-cream': 3, 'aga-item': 3, 'muscle-diet': 4 },
            },
            {
                label: 'ずっとコンプレックスだった',
                scores: { 'houkei-clinic-a': 5, 'houkei-clinic-b': 5, 'mens-supplement': 5, 'nioi-care': 5, 'skincare': 3, 'houkei-goods': 5, 'datsumo-cream': 4, 'aga-item': 4, 'muscle-diet': 5 },
            },
        ],
    },
    {
        id: 3,
        text: 'これまでに何か対策を試したことはありますか？',
        options: [
            {
                label: '特に何もしていない',
                scores: { 'houkei-clinic-a': 4, 'houkei-clinic-b': 3, 'mens-supplement': 5, 'nioi-care': 5, 'skincare': 5, 'houkei-goods': 5, 'datsumo-cream': 5, 'aga-item': 5, 'muscle-diet': 4 },
            },
            {
                label: '市販品を試したが効果がなかった',
                scores: { 'houkei-clinic-a': 3, 'houkei-clinic-b': 3, 'mens-supplement': 3, 'nioi-care': 4, 'skincare': 3, 'houkei-goods': 3, 'datsumo-cream': 3, 'aga-item': 3, 'muscle-diet': 4 },
            },
            {
                label: 'エステやサロンに通ったことがある',
                scores: { 'houkei-clinic-a': 3, 'houkei-clinic-b': 4, 'mens-supplement': 2, 'nioi-care': 3, 'skincare': 2, 'houkei-goods': 2, 'datsumo-cream': 2, 'aga-item': 2, 'muscle-diet': 5 },
            },
            {
                label: '病院・クリニックに行ったことがある',
                scores: { 'houkei-clinic-a': 5, 'houkei-clinic-b': 5, 'mens-supplement': 2, 'nioi-care': 2, 'skincare': 2, 'houkei-goods': 2, 'datsumo-cream': 2, 'aga-item': 2, 'muscle-diet': 3 },
            },
        ],
    },
    {
        id: 4,
        text: '治療やケアにかけられる月々の予算は？',
        options: [
            {
                label: 'まずは無料カウンセリングから',
                scores: { 'houkei-clinic-a': 4, 'houkei-clinic-b': 4, 'mens-supplement': 3, 'nioi-care': 3, 'skincare': 3, 'houkei-goods': 3, 'datsumo-cream': 3, 'aga-item': 3, 'muscle-diet': 3 },
            },
            {
                label: '月5,000円〜1万円くらい',
                scores: { 'houkei-clinic-a': 2, 'houkei-clinic-b': 3, 'mens-supplement': 5, 'nioi-care': 5, 'skincare': 5, 'houkei-goods': 5, 'datsumo-cream': 5, 'aga-item': 5, 'muscle-diet': 3 },
            },
            {
                label: '月1万〜3万円まで出せる',
                scores: { 'houkei-clinic-a': 4, 'houkei-clinic-b': 4, 'mens-supplement': 4, 'nioi-care': 4, 'skincare': 4, 'houkei-goods': 3, 'datsumo-cream': 4, 'aga-item': 4, 'muscle-diet': 4 },
            },
            {
                label: '効果があるなら金額は気にしない',
                scores: { 'houkei-clinic-a': 5, 'houkei-clinic-b': 5, 'mens-supplement': 4, 'nioi-care': 4, 'skincare': 3, 'houkei-goods': 2, 'datsumo-cream': 2, 'aga-item': 3, 'muscle-diet': 5 },
            },
        ],
    },
    {
        id: 5,
        text: 'ケアのスタイルはどれが理想ですか？',
        options: [
            {
                label: '自宅でできるセルフケアがいい',
                scores: { 'houkei-clinic-a': 1, 'houkei-clinic-b': 1, 'mens-supplement': 5, 'nioi-care': 5, 'skincare': 5, 'houkei-goods': 5, 'datsumo-cream': 5, 'aga-item': 5, 'muscle-diet': 3 },
            },
            {
                label: 'ネットで注文して自宅に届けてほしい',
                scores: { 'houkei-clinic-a': 1, 'houkei-clinic-b': 1, 'mens-supplement': 5, 'nioi-care': 5, 'skincare': 5, 'houkei-goods': 5, 'datsumo-cream': 5, 'aga-item': 5, 'muscle-diet': 3 },
            },
            {
                label: 'プロに相談・施術してもらいたい',
                scores: { 'houkei-clinic-a': 5, 'houkei-clinic-b': 5, 'mens-supplement': 1, 'nioi-care': 1, 'skincare': 2, 'houkei-goods': 1, 'datsumo-cream': 1, 'aga-item': 1, 'muscle-diet': 4 },
            },
            {
                label: 'まずは手軽なものから試したい',
                scores: { 'houkei-clinic-a': 2, 'houkei-clinic-b': 2, 'mens-supplement': 4, 'nioi-care': 4, 'skincare': 5, 'houkei-goods': 4, 'datsumo-cream': 5, 'aga-item': 5, 'muscle-diet': 3 },
            },
        ],
    },
    {
        id: 6,
        text: 'ケアしていることを周囲に知られたくないですか？',
        options: [
            {
                label: '絶対にバレたくない',
                scores: { 'houkei-clinic-a': 5, 'houkei-clinic-b': 4, 'mens-supplement': 5, 'nioi-care': 5, 'skincare': 4, 'houkei-goods': 5, 'datsumo-cream': 5, 'aga-item': 5, 'muscle-diet': 3 },
            },
            {
                label: 'できればバレたくない',
                scores: { 'houkei-clinic-a': 4, 'houkei-clinic-b': 4, 'mens-supplement': 4, 'nioi-care': 4, 'skincare': 4, 'houkei-goods': 4, 'datsumo-cream': 4, 'aga-item': 4, 'muscle-diet': 4 },
            },
            {
                label: '別に気にしない',
                scores: { 'houkei-clinic-a': 3, 'houkei-clinic-b': 3, 'mens-supplement': 3, 'nioi-care': 3, 'skincare': 4, 'houkei-goods': 3, 'datsumo-cream': 4, 'aga-item': 4, 'muscle-diet': 4 },
            },
            {
                label: 'むしろ周りにもすすめたい',
                scores: { 'houkei-clinic-a': 3, 'houkei-clinic-b': 5, 'mens-supplement': 3, 'nioi-care': 3, 'skincare': 4, 'houkei-goods': 3, 'datsumo-cream': 4, 'aga-item': 4, 'muscle-diet': 5 },
            },
        ],
    },
    {
        id: 7,
        text: 'いつまでに改善したいですか？',
        options: [
            {
                label: '今すぐにでも始めたい',
                scores: { 'houkei-clinic-a': 5, 'houkei-clinic-b': 4, 'mens-supplement': 5, 'nioi-care': 5, 'skincare': 5, 'houkei-goods': 5, 'datsumo-cream': 5, 'aga-item': 5, 'muscle-diet': 4 },
            },
            {
                label: '1〜3ヶ月以内に変わりたい',
                scores: { 'houkei-clinic-a': 5, 'houkei-clinic-b': 5, 'mens-supplement': 4, 'nioi-care': 4, 'skincare': 4, 'houkei-goods': 4, 'datsumo-cream': 4, 'aga-item': 4, 'muscle-diet': 5 },
            },
            {
                label: '半年くらいかけてじっくり',
                scores: { 'houkei-clinic-a': 3, 'houkei-clinic-b': 3, 'mens-supplement': 4, 'nioi-care': 3, 'skincare': 3, 'houkei-goods': 3, 'datsumo-cream': 3, 'aga-item': 4, 'muscle-diet': 4 },
            },
            {
                label: 'いい方法が見つかれば、いつでも',
                scores: { 'houkei-clinic-a': 3, 'houkei-clinic-b': 3, 'mens-supplement': 4, 'nioi-care': 4, 'skincare': 4, 'houkei-goods': 4, 'datsumo-cream': 4, 'aga-item': 4, 'muscle-diet': 3 },
            },
        ],
    },
];

const conditionalReasons: Record<string, ConditionalReason[]> = {
    'houkei-clinic-a': [
        { condition: (a) => a[0] === 3 && a[5] === 0, text: '絶対にバレたくないとのこと。ABCクリニックは完全個室制で、カウンセリングから施術まで全て男性医師が対応。他の患者と顔を合わせることもありません。' },
        { condition: (a) => a[0] === 3 && a[6] === 0, text: '今すぐ始めたいとのこと。日帰り手術が可能で、翌日から日常生活に戻れます。まずは無料カウンセリングで相談してみましょう。' },
        { condition: (a) => a[0] === 3 && a[1] >= 2, text: '長年悩まれているとのこと。一人で抱え込む必要はありません。ABCクリニックの男性医師による完全個室のカウンセリングで、安心して相談できる環境が整っています。' },
        { condition: () => true, text: '男性医師のみが対応する完全個室のクリニック。プライバシーに最大限配慮した環境で、安心して相談・治療が受けられます。' },
    ],
    'houkei-clinic-b': [
        { condition: (a) => a[0] === 3 && a[3] === 3, text: '効果重視とのこと。東京ノーストクリニックは豊富な施術実績があり、複数の術式から最適な方法を提案してもらえます。実績の多さが安心の証です。' },
        { condition: (a) => a[0] === 3 && a[3] === 1, text: '費用を抑えたいとのこと。東京ノーストクリニックは分割払いの月額プランがあり、無理のない支払い計画を相談できます。' },
        { condition: (a) => a[0] === 3 && a[4] === 2, text: 'プロに相談したいとのこと。全国展開のクリニックで通いやすく、カウンセリングで丁寧に術式の説明を受けられます。' },
        { condition: () => true, text: '豊富な施術実績を誇る包茎治療専門クリニック。笑気麻酔対応で痛みにも配慮しています。' },
    ],
    'mens-supplement': [
        { condition: (a) => a[0] === 3 && a[4] <= 1, text: '自宅でセルフケアをしたいとのこと。男性向け活力サプリなら、特許成分やクラチャイダム配合のプレミアムサプリを自宅に届けてもらえます。500円のお試しから始められ、誰にも知られずにケアできます。' },
        { condition: (a) => a[0] === 3 && a[5] === 0, text: '絶対にバレたくないとのこと。サプリメントなら外見からは一切わからず、自宅に届く箱も無地。プライバシーを完全に守りながらケアできます。' },
        { condition: (a) => a[0] === 5, text: '体型・自信のお悩みに。活力サプリは内側からのパワーアップをサポート。トレーニングとの相乗効果で、メンタル面の自信にもつながります。' },
        { condition: () => true, text: '特許成分やクラチャイダム配合のプレミアムサプリで内側からパワーアップ。500円のお試しから始められ、誰にも知られずに自宅でケアできます。' },
    ],
    'nioi-care': [
        { condition: (a) => a[0] === 4 && a[4] <= 1, text: '自宅でセルフケアをご希望とのこと。デオドラントスプレー・ボディソープ・エチケットサプリの3方向からニオイの元を徹底ケア。累計30万本突破の実力派アイテムが揃っています。' },
        { condition: (a) => a[0] === 4 && a[6] === 0, text: '今すぐ始めたいとのこと。デオドラントスプレーなら届いたその日から効果を実感できます。衣類にスプレーするだけのタイプなら、肌が弱い方にも安心です。' },
        { condition: (a) => a[0] === 4 && a[3] === 1, text: '月5,000円〜1万円のご予算に最適。ボディソープを変えるだけでも大きく変わります。ニオイ対策のボディソープは通常のものと同価格帯から始められます。' },
        { condition: () => true, text: '加齢臭・ワキガ・口臭など男性特有のニオイ悩みに特化。デオドラントスプレー、ボディソープ、サプリの3方向からアプローチできます。' },
    ],
    'skincare': [
        { condition: (a) => a[0] === 0 && a[4] <= 1, text: '自宅でセルフケアをご希望とのこと。メンズ専用の洗顔料やBBクリームなら、毎日のルーティンに組み込むだけで清潔感のある肌を目指せます。まずは洗顔を変えることから始めてみましょう。' },
        { condition: (a) => a[0] === 0 && a[2] === 0, text: 'まだ何もケアをしていないとのこと。メンズスキンケアは洗顔から始めるのが基本。ニキビ予防×体臭ケアができるボディウォッシュなら、1本で顔も体もまとめてケアできます。' },
        { condition: (a) => a[0] === 4, text: 'ニオイの悩みもある場合、薬用ボディウォッシュなら背中ニキビを防ぎつつ体臭も抑えてくれます。清潔感アップに最適な一石二鳥のアイテムです。' },
        { condition: () => true, text: '男性の肌質に特化したスキンケアアイテム。洗顔・保湿・BBクリームの3ステップで、簡単に清潔感のある肌を手に入れられます。' },
    ],
    'houkei-goods': [
        { condition: (a) => a[0] === 3 && a[4] <= 1, text: '自宅でセルフケアをご希望とのこと。世界で唯一の真性包茎矯正グッズ「キトー君」や仮性包茎補助テープなど、手術なしで始められるアイテムが揃っています。クリニックより圧倒的に安く済みます。' },
        { condition: (a) => a[0] === 3 && a[3] === 1, text: '月5,000円〜1万円のご予算に最適。矯正グッズなら一度購入すれば繰り返し使え、クリニックの10分の1以下の費用で対策できます。' },
        { condition: (a) => a[0] === 3 && a[2] === 0, text: 'まだ何もケアをしていないとのこと。いきなりクリニックは勇気がいりますよね。まずは自宅でできる矯正グッズから始めてみるのがおすすめです。' },
        { condition: () => true, text: '手術不要で自宅でケアできる包茎矯正グッズ。「キトー君」や補助テープなど、クリニックに行く勇気がまだない方にも安心の選択肢です。' },
    ],
    'datsumo-cream': [
        { condition: (a) => a[0] === 2 && a[4] <= 1, text: '自宅でセルフケアをご希望とのこと。除毛クリームなら塗って流すだけの簡単ケア。VIO対応の薬用タイプや楽天1位獲得の実力派まで、自宅で好きな時にムダ毛処理ができます。' },
        { condition: (a) => a[0] === 2 && a[3] === 1, text: '月5,000円〜1万円のご予算に最適。除毛クリームならクリニックの10分の1以下の費用でムダ毛処理ができます。まずはお試しから始めてみましょう。' },
        { condition: (a) => a[0] === 2 && a[2] === 0, text: 'まだ何もケアをしていないとのこと。除毛クリームは脱毛初心者に最適な選択肢。痛みもほぼなく、カミソリ負けの心配もありません。' },
        { condition: () => true, text: '塗って流すだけの簡単ムダ毛処理。VIO対応の薬用タイプから楽天1位のアフターケアローションまで、自宅で手軽にスベ肌を目指せます。' },
    ],
    'aga-item': [
        { condition: (a) => a[0] === 1 && a[4] <= 1, text: '自宅でセルフケアをご希望とのこと。販売実績260万本・リピート率93%の発毛促進剤や、頭皮ケアNo.1のスカルプシャンプーなど、自宅で始められる薄毛ケアアイテムが揃っています。' },
        { condition: (a) => a[0] === 1 && a[2] === 0, text: 'まだ何もケアをしていないとのこと。まずはシャンプーを変えることから始めてみませんか？スカルプシャンプーなら頭皮環境を整えて、抜け毛の予防効果が期待できます。' },
        { condition: (a) => a[0] === 1 && a[3] === 1, text: '月5,000円〜1万円のご予算に最適。育毛アイテムなら月数千円から始められ、自宅で手軽にケアできる最初のステップとして最適です。' },
        { condition: () => true, text: '販売実績260万本の発毛促進剤や頭皮ケアNo.1のスカルプシャンプーなど、自宅で手軽に始められる薄毛ケアアイテム。まず試したい方に最適です。' },
    ],
    'muscle-diet': [
        { condition: (a) => a[0] === 5 && a[4] === 2, text: 'プロの指導を受けたいとのこと。RIZAPやダンディハウスのパーソナルジムなら、プロのトレーナーがマンツーマンで指導。確実に理想のカラダに近づけます。' },
        { condition: (a) => a[0] === 5 && a[4] <= 1, text: '自宅でセルフケアをご希望とのこと。HMBサプリや加圧シャツなら自宅で手軽にボディメイク。オンラインジムなら自宅でプロの指導も受けられます。' },
        { condition: (a) => a[0] === 5 && a[3] === 3, text: '効果重視とのこと。RIZAPなら「結果にコミット」の実績で確実に変われます。遺伝子検査付きのオンラインジムなら、科学的に最適なダイエットプランを提案してもらえます。' },
        { condition: () => true, text: 'HMBサプリ・加圧シャツ・パーソナルジムなど、あなたのレベルに合った方法で理想のカラダを目指せます。自宅ケアからプロの指導まで幅広く対応。' },
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
