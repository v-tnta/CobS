// --- 型定義 ---
export type WeeklyPlan = {
  week: number;
  subject: string;
  content: string;
  notes: string;
};

export type Book = {
  isbn: string;
  price: string;
  bookTitle: string;
  author: string;
  publisher: string;
  yearOfPublication: string;
  note: string;
};

export type Syllabus = {
  id: string;
  title: string;
  titleEn: string;
  instructors: { name: string; nameEn: string }[];
  semester: string;
  department: string;
  courseStudents: string;
  courseYear: string;
  dayPeriod: string;
  credits: number;
  courseCode: string;
  numbering: string;
  syllabusCode: string;
  memo: string;
  overview: string;
  keywords: string[];
  objectives: string;
  notes: string;
  courseFormat: string;
  deviceRequirements: string;
  gradingMethod: string;
  gradingCriteria: { grade: string; description: string }[];
  textbooks: Book[];
  referenceBooks: Book[];
  // OthersTabで使う項目
  dp_large_perspective: string;
  dp_specialized_knowledge: string;
  dp_problem_solving: string;
  dp_communication: string;
  dp_english_skills: string;
  dp_social_attitude: string;
  dp_regional_revitalization: string;
  active_learning: string;
  pbl: string;
  regional_orientation: string;
  language: string;
  teaching_license: string;
  international_collaboration: string;
  sdgs: string;
  accommodation: string;
  officeHours: string;
  weeklyPlan: WeeklyPlan[];
};

// --- ダミーデータ ---
export const testSyllabusData: Syllabus[] = [
  // 1. システム基礎Ⅰ
  {
    id: 'T5010',
    title: 'システム基礎Ⅰ【情報】',
    titleEn: 'Systems Foundations I',
    instructors: [{ name: '鎌田 賢', nameEn: 'KAMADA Masaru' }, { name: '岡田 信一郎', nameEn: 'OKADA Shin\'ichirou' }],
    semester: '3Q/3Q',
    department: '工学部／College of Engineering',
    courseStudents: '情報',
    memo: '情報(18T以降)',
    courseCode: 'T5010',
    numbering: 'T-CPS-1-___',
    syllabusCode: '',
    courseYear: '1,2,3,4',
    dayPeriod: '月 / Mon. 4',
    credits: 1.0,
    overview: 'コンピューターアーキテクチャの入門として、コンピュータの構成要素と動作、性能評価、遅延とキャッシュ、冗長化による信頼性の原理を学ぶ。オペレーティングシステムの概要として、その役割と動作、アプリケーションとの関係、リソースの管理、メモリ保護と仮想化の原理を学ぶ。',
    keywords: ['コンピューターアーキテクチャ', '機械語', '仮想記憶', 'オペレーティングシステム', 'リソース管理', 'メモリ保護'],
    objectives: 'コンピューターシステムへの入門レベルの知識として、コンピューターアーキテクチャとオペレーティングシステムの概要を理解し、説明できる。',
    notes: '遅刻は正当な理由がない限り原則として認めません。教科書はありません（授業資料を電子ファイルで配布します）。必須の費用はありません。',
    courseFormat: '対面授業/face-to-face course',
    deviceRequirements: 'PCを毎回持参してください。授業資料は電子ファイルで提供します。',
    gradingMethod: '各25点のレポート4つで、コンピューターアーキテクチャとオペレーティングシステム概要を理解し、説明できることを評価します。',
    gradingCriteria: [
      { grade: 'A+', description: 'コンピュータシステムの基本的な知識と考え方を十分に修得し、さらにその仕組みについて説明できている。' },
      { grade: 'A', description: 'コンピュータシステムの基本的な知識と考え方を概ね修得し、さらにその仕組みについて説明できている。' },
      { grade: 'B', description: 'コンピュータシステムの基本的な知識と考え方を修得し、さらにその仕組みについて最低限の説明ができている。' },
      { grade: 'C', description: 'コンピュータシステムの基本的な知識と考え方について最低限の修得をしている。' },
      { grade: 'D', description: 'コンピュータシステムの基本的な知識と考え方が修得できていない。' },
    ],
    textbooks: [
      { isbn: '', price: '0', bookTitle: 'なし（授業資料を電子ファイルで配布する）', author: '', publisher: '', yearOfPublication: '', note: '教科書はありません（授業資料を電子ファイルで配布します）。必須の費用はありません。'}
    ],
    referenceBooks: [
      { isbn: '9784254122091', price: '2900', bookTitle: 'コンピューターアーキテクチャ', author: '福本聡, 岩崎一彦 著', publisher: '朝倉書店', yearOfPublication: '2015', note: ''},
      { isbn: '', price: '0', bookTitle: '「知識の森」7群3編 オペレーティングシステム', author: '吉澤康文 編', publisher: '電子情報通信学会 知識ベース', yearOfPublication: '', note: '無料（電子版 http://ieice-hbkb.org/portal/doc_588.html ）'}
    ],
    dp_large_perspective: '―',
    dp_specialized_knowledge: '◎',
    dp_problem_solving: '〇',
    dp_communication: '―',
    dp_english_skills: '―',
    dp_social_attitude: '―',
    dp_regional_revitalization: '―',
    active_learning: '―',
    pbl: '―',
    regional_orientation: '―',
    language: '日本語／Japanese',
    teaching_license: '-',
    international_collaboration: '－',
    sdgs: 'SDGs9 産業と技術革新の基礎をつくろう/Industry, Innovation, and Infrastructure',
    accommodation: '本授業を受けるにあたり、障害に起因した合理的配慮が必要な場合は、所属学部/研究科の障害学生支援担当窓口(学務グループ)やスチューデントアクセシビリティ支援室に相談してください。',
    officeHours: '水戸キャンパスでの授業のため、質問・相談等は、授業の前後、あるいは、メールやTeams内のチャットでもOKです。',
    weeklyPlan: [
      { week: 1, subject: 'アーキテクチャ(1)コンピュータの構成要素と動作', content: '【授業外学修】(1) 各回の講義資料を授業の前に通読してきてください。(所用見込み時間2時間) ... (2) 予習してあれば授業時間中に理解できる内容ですが、講義資料を用いて要点を復習して理解を確認してください。(所用見込み時間1時間)', notes: ''},
      { week: 2, subject: 'アーキテクチャ(2)遅延とキャッシュ',  content: '【授業外学修】(1) ... (2) ... (3) レポートの執筆。(所用見込み時間2時間)', notes: ''},
      { week: 3, subject: 'アーキテクチャ(4)コンピュータの性能評価、冗長化による信頼性',  content: '【授業外学修】(1) ... (2) ... (3) レポートの執筆。(所用見込み時間2時間)', notes: ''},
    ]
  },
  // 2. システム基礎Ⅱ
  {
    id: 'T5011',
    title: 'システム基礎Ⅱ【情報】',
    titleEn: 'Systems Foundations II',
    instructors: [{ name: '大瀧 保広', nameEn: 'OHTAKI Yasuhiro' }],
    semester: '4Q/4Q',
    department: '工学部／College of Engineering',
    courseStudents: '情報(18T以降)',
    courseYear: '1,2,3,4',
    dayPeriod: '月／Mon. 4',
    credits: 1.0,
    courseCode: 'T5011',
    numbering: 'T-CPS-1-___',
    syllabusCode: '',
    memo: '',
    overview: '本講義は並列分散システム入門とIT技術者倫理などについて取り扱う。並列分散処理は、現代の情報システムでは基本的概念であり、その基礎となる考え方と性能の評価尺度について学ぶ。IT技術者倫理などでは、一般的な利用者としての情報リテラシーではなく、ソフトウェア技術者として必要となる知的財産権、個人情報取扱時の注意、職業倫理について学ぶ。\n関連科目：情報処理概論、システム基礎I、並列分散コンピューティング',
    keywords: ['逐次処理', '並列処理', '分散システム', 'プロセスとスレッド', '知的財産権', 'ソフトウエアライセンス', '個人情報', '匿名加工', '技術者倫理'],
    objectives: '並列分散システムの基礎となる考え方と評価方法の基本的な概念が説明できる。\nソフトウェアに関する権利の構造が説明できる。\nソフトウェア技術者やシステム管理者の職業倫理について、状況に応じて適切な判断ができる。',
    notes: '・遅刻は正当な理由がない限り原則として認めません。\n・講義資料を電子的に配布するので、追加で必要となる費用はありません。\n・再履修学生のみ日立キャンパスでのオンライン受講を認めます。',
    courseFormat: '対面授業／face-to-face course',
    deviceRequirements: '・講義資料はmanabaを通じて事前配布するので，毎回の授業時にはPCを持参すること。\n・授業時間内の出席はキャンパススクエアを用いる。',
    gradingMethod: '試験（100％）（授業各回毎に実施する予定）',
    gradingCriteria: [
      { grade: 'A+', description: '並列分散システムに関する基本的な知識を十分に修得し、逐次システムとの違いを説明できている。また技術者倫理の重要性を正しく理解し説明できている。' },
      { grade: 'A', description: '並列分散システムに関する基本的な知識を修得し，逐次システムとの違いを説明できている。また技術者倫理の重要性を概ね理解できている。' },
      { grade: 'B', description: '並列分散システムに関する基本的な知識を概ね修得している。また技術者倫理の重要概念を概ね理解できている。' },
      { grade: 'C', description: '並列分散システムに関する基本的な知識について最低限の修得をしている。また技術者倫理の重要概念について最低限の理解をしてる。' },
      { grade: 'D', description: '並列分散システムに関する基本的な知識について習得できていない。また技術者倫理の重要概念について説明ができない。' },
    ],
    textbooks: [
      { isbn: '', price: '0', bookTitle: '特になし', author: '', publisher: '', yearOfPublication: '', note: '各講義の前に関連資料を配布する。' }
    ],
    referenceBooks: [
      { isbn: '9784339018745', price: '2300', bookTitle: '並列分散処理', author: '谷口秀夫 著', publisher: 'コロナ社', yearOfPublication: '2003', note: '' }
    ],
    dp_large_perspective: '―',
    dp_specialized_knowledge: '◎',
    dp_problem_solving: '◎',
    dp_communication: '△',
    dp_english_skills: '―',
    dp_social_attitude: '◎',
    dp_regional_revitalization: '―',
    active_learning: '―',
    pbl: '―',
    regional_orientation: '―',
    language: '日本語／Japanese',
    teaching_license: '高一（工業）/工業の関係科目',
    international_collaboration: '－',
    sdgs: 'SDGs9 産業と技術革新の基礎をつくろう／Industry, Innovation, and Infrastructure',
    accommodation: '本授業を受けるにあたり，障害に起因した合理的配慮が必要な場合は，所属学部／研究科の障害学生支援担当窓口（学務グループ）やスチューデントサクセスセンターアクセシビリティ支援室に相談してください。',
    officeHours: '原則Teamsのチャットで対応します。毎週月曜日 16時～17時 情報戦略機構 水戸IIMSデジタルサポート窓口',
    weeklyPlan: [
      { week: 1, subject: 'シラバスを用いたガイダンス【並列分散システム】並列処理と分散処理', content: '【授業外学修】講義資料の熟読、小テストの準備', notes: '[全回共通] 講義資料はmanabaにアップロードするので，必ず授業前に読み、分からない用語などはあらかじめ調べておくこと。各回の授業外学習に要する時間は概ね 90 分程度を目安とする。' },
      { week: 2, subject: '【並列分散システム】並列処理の性能評価', content: '【授業外学修】講義資料の熟読、小テストの準備', notes: '' },
      { week: 3, subject: '【並列分散システム】クライアントサーバシステムとP2P', content: '【授業外学修】講義資料の熟読、小テストの準備', notes: '' },
      { week: 4, subject: '【並列分散システム】並行処理の実現方法と並行処理で生じる問題点', content: '【授業外学修】講義資料の熟読、小テストの準備', notes: '' },
      { week: 5, subject: '【IT技術者倫理】知的財産／著作権／ソフトウェアの保護', content: '【授業外学修】講義資料の熟読、小テストの準備', notes: '' },
      { week: 6, subject: '【IT技術者倫理】個人情報と匿名加工', content: '【授業外学修】講義資料の熟読、小テストの準備', notes: '' },
      { week: 7, subject: '【IT技術者倫理】ソフトウェア技術者やシステム管理者の倫理', content: '【授業外学修】講義資料の熟読、小テストの準備', notes: '7 回目後半 53 分に期末試験は実施しない' },
    ]
  },
  // 3. メディア文化入門
  {
    id: 'LA0001',
    title: 'メディア文化入門',
    titleEn: 'Introduction to Media and Information Society',
    instructors: [
      { name: '齋藤 義彦', nameEn: 'Saito Yoshihiko' },
      { name: '鈴木 栄幸', nameEn: 'SUZUKI Hideyuki' },
      { name: '菅谷 克行', nameEn: 'Sugaya Katsuyuki' },
      { name: '高野 光平', nameEn: 'KONO KOHEI' },
    ],
    semester: '前期／Spring semester',
    department: '人文社会科学部／College of Humanities and Social Sciences',
    courseStudents: '1年（2024年度以降入学者）',
    courseYear: '1,2,3,4',
    dayPeriod: '火／Tue. 3',
    credits: 2.0,
    courseCode: 'LA0001',
    numbering: 'L-CUS-1-___',
    syllabusCode: '',
    memo: '',
    overview: '現代社会学科メディア文化メジャーの基礎となるメディア論、電子メディア論、文化研究、ジャーナリズム論に関する入門的な講座である。基礎的な知識と考え方を、４人の教員によるオムニバス形式の講義によって身につけることを目的とする。メディア文化メジャーの修学内容のアウトラインを理解し、専門科目・分野への橋渡しを目指す。',
    keywords: ['インターネット', 'SNS', '電子書籍', '情報メディア', '教育', 'ロボット', '人工知能', 'サブスク', 'ファッション', '音楽', '伝統メディア', 'メディアリテラシー', '調査報道'],
    objectives: '(1) メディアに関する専門領域を知り、関連分野に関する初歩的な知識を知る\n(2) 学問としてのメディア論の基礎知識を知る\n(3) 電子メディアに関する基本知識・現状を理解できる\n(4) 電子メディアが社会に与える影響について理解できる\n(5) 電子メディアに関するこれまでの研究動向を理解できる\n(6) 文化研究の基本的な考え方を理解できる\n(7) メディアと文化の関係を理解できる\n(8) SNS時代のジャーナリズムの役割を知る\n(9) 調査報道と権力との緊張関係について基本的知識を得る',
    notes: '・正当な理由のない欠席が【5回】になった者には原則として単位を与えない。\n・30分以上の正当な理由のない遅刻入室は欠席扱いとする。\n・授業中の内職行為は，見つけ次第欠席扱いとする。\n・担当教員により対面かオンラインか実施方法が異なる。その都度確認すること。\n・斎藤の第１回は対面、その後４回はオンラインで実施する。チームコードはa7fvgr8\n・毎回終了後に、manabaの「アンケート」に、授業の感想や意見などを記した「レスポンスシート」を提出すること。「レスポンスシート」の未提出は欠席とみなす。理由なき未提出が【5回】以上にのぼった場合は原則として単位は発行しない。未提出は記録されるので十分注意すること。\n・教員によっては小テストやレポートを課すので、その都度確認すること。\n・発言を求めるので応答できるようにしておくこと。指名されて発言しない場合は欠席とみなすことがある。\n・第3回は5月8日（木）13：10と変則的なので注意する。他は火曜日３限（13：10～14：55）',
    courseFormat: '対面授業／face-to-face course',
    deviceRequirements: '・授業時に利用できるPCを準備しておくこと・対面の場合でもＰＣでteamsにつないで資料を閲覧する場合がある\n・「レスポンスシート」や課題、レポートは、manaba等を通じて提出すること\n・詳細は各回担当教員の指示に従うこと',
    gradingMethod: '提出物（レスポンスシートやレポート等）を各教員が評価し、その結果を積算し成績評価とする（100%）。\n※期末試験は実施しない。',
    gradingCriteria: [
      { grade: 'A+', description: '電子メディアをはじめとしたメディア、文化研究、ジャーナリズムに関する基本知識や社会に及ぼす影響について十分理解し、それについて研究動向を交えながら説明できる' },
      { grade: 'A', description: '電子メディアをはじめとしたメディア、文化研究、ジャーナリズムに関する基本知識や社会に及ぼす影響について理解し、それについて説明できる' },
      { grade: 'B', description: '電子メディアをはじめとしたメディア、文化研究、ジャーナリズムに関する基本知識や社会に及ぼす影響について概ね理解し、それについて説明できる' },
      { grade: 'C', description: '電子メディアをはじめとしたメディア、文化研究、ジャーナリズムに関する基本知識について最低限を習得している' },
      { grade: 'D', description: '上記基準に届いていない' },
    ],
    textbooks: [],
    referenceBooks: [
      { isbn: '9784641124875', price: '1800', bookTitle: 'メディア文化論 : メディアを学ぶ人のための15話', author: '吉見, 俊哉', publisher: '有斐閣', yearOfPublication: '2012', note: '' }
    ],
    dp_large_perspective: '◎',
    dp_specialized_knowledge: '◎',
    dp_problem_solving: '―',
    dp_communication: '◎',
    dp_english_skills: '―',
    dp_social_attitude: '◎',
    dp_regional_revitalization: '―',
    active_learning: '〇',
    pbl: '―',
    regional_orientation: '―',
    language: '日本語／Japanese',
    teaching_license: '-',
    international_collaboration: '－',
    sdgs: 'SDGs4 質の高い教育をみんなに／Quality Education\nSDGs16 平和と公正をすべての人に／Peace, Justice and Strong Institutions',
    accommodation: '本授業を受けるにあたり，障害に起因した合理的配慮が必要な場合は，所属学部／研究科の障害学生支援担当窓口（学務グループ）やスチューデントサクセスセンターアクセシビリティ支援室に相談してください。',
    officeHours: '菅谷（木曜昼休み：C403）、鈴木（木曜昼休み：A424）、高野（歌火曜昼休み：C402）、斎藤（オンラインで実施するのでメールで申し出ることyoshihiko.saito.cd75@vc.ibaraki.ac.jp）',
    weeklyPlan: [
      { week: 1, subject: 'ガイダンス・メディア論（斎藤）', content: '「メディアとは何か」', notes: '対面授業。授業外学修の目安は13回の講義を通じて60時間。アクティブ・ラーニングの具体的な手法は授業概要に記載している。' },
      { week: 2, subject: 'ジャーナリズム論①（斎藤）', content: '「SNSとジャーナリズムは何が違うのか」', notes: 'オンライン授業' },
      { week: 3, subject: 'ジャーナリズム論②（斎藤）', content: '「誹謗中傷とフェイクニュース」', notes: '（注）第3回（5月8日）。オンライン授業' },
      { week: 4, subject: 'ジャーナリズム論③（斎藤）', content: '「政治を動かす真実－ジャーナリズムの成果」', notes: 'オンライン授業' },
      { week: 5, subject: 'ジャーナリズム論④（斎藤）', content: '「戦争・弾圧と苦闘するジャーナリズム」', notes: 'オンライン授業' },
      { week: 6, subject: '電卓・ヒッピー・ダイナブック（鈴木）', content: '「コンピュータの歴史と現代社会」', notes: '対面授業' },
      { week: 7, subject: '機械の知性（鈴木）', content: '「人工知能の可能性と課題」', notes: '対面授業' },
      { week: 8, subject: 'インターネット（菅谷）', content: '「インターネットの歴史と影響力」', notes: '対面授業' },
      { week: 9, subject: 'XRとメタバース（菅谷）', content: '「XRとメタバースの可能性」', notes: '対面授業' },
      { week: 10, subject: 'メディアと文化（１）（高野）', content: '「文化研究とはなにか／SNS利用状況に関するアンケート」', notes: '対面授業' },
      { week: 11, subject: 'メディアと文化（２）（高野）', content: '「ファッション・音楽とメディア」', notes: '対面授業' },
      { week: 12, subject: 'SNSと文化（１）（高野）', content: '「XとInstagram」', notes: '対面授業' },
      { week: 13, subject: 'SNSと文化（２）（高野）', content: '「受講生のSNS利用状況（アンケート結果の分析）」', notes: '対面授業' },
      { week: 14, subject: '期末試験は実施しない', content: '', notes: '' },
    ]
  },
  {
    id: 'AN1211',
    title: '栽培学',
    titleEn: 'Crop Production Science',
    instructors: [
      { name: '浅木 直美', nameEn: 'ASAGI Naomi' },
      { name: '井上 栄一', nameEn: 'INOUE Eiichi' },
      { name: '中島 雅己', nameEn: 'NAKAJIMA Masami' },
      { name: '久保山 勉', nameEn: 'KUBOYAMA Tsutomu' },
      { name: '菊田 真吾', nameEn: 'KIKUTA Shingo' },
    ],
    semester: '後期／Autumn semester',
    department: '農学部／College of Agriculture',
    courseStudents: '',
    courseYear: '1,2,3,4',
    dayPeriod: '水／Wed. 5',
    credits: 2.0,
    courseCode: 'AN1211',
    numbering: 'A-BOA-1-___',
    syllabusCode: '',
    memo: '',
    overview: '世界の作物生産量は戦後、農業技術の発展とともに増大した。一方で作物の生産は、品質の向上を重視する動きも顕著になってきた。しかし、諸要因により未だに十分な作物生産量が確保されていない国や地域もある。作物の生産量や品質の向上のためには作物の生理・生態を知り、それを生かした栽培技術が必要である。この授業では、作物の栽培に関わる理論と実践を解説する。',
    keywords: ['作物の起源', '学名', '形態', '光合成', '呼吸', 'ストレス', '冷害', '品種', '栽培', '収量'],
    objectives: '以下のテーマと内容について説明できること。\n作物の起源、作物の器官・組織・細胞の形態、光合成と呼吸、冷害、品種の早晩性、草型、施肥・水管理、連作障害、収量および収量構成要素。',
    notes: '（1）作物生産学の入門的性格をもっている。（2）予習・復習を心がけること。（3）関連する科目：作物学、生物学実験、作物学実験。（4）各教員のメールアドレス：当該年度の「農学部履修の手引き」を参照。',
    courseFormat: 'オンライン授業（リアルタイム配信型）／on-line course（real time）',
    deviceRequirements: '授業内でPCを使用し、アンケートなどをとる場合がある。',
    gradingMethod: 'レポート100％',
    gradingCriteria: [
      { grade: 'A+', description: '栽培学の基本的な知識と考え方を十分に修得し，さらにその仕組みについて説明できている。' },
      { grade: 'A', description: '栽培学の基本的な知識と考え方を修得し，さらにその仕組みについて説明できている。' },
      { grade: 'B', description: '栽培学の基本的な知識と考え方を概ね修得し，さらにその仕組みについて説明できている。' },
      { grade: 'C', description: '栽培学の基本的な知識と考え方について最低限の修得をしており，さらにその仕組みについて説明できている。' },
      { grade: 'D', description: '栽培学の基本的な知識と考え方が修得できておらず，さらにその仕組みについての説明ができていない。' },
    ],
    textbooks: [
      { isbn: '', price: '', bookTitle: '特になし', author: '', publisher: '', yearOfPublication: '', note: '' }
    ],
    referenceBooks: [
      { isbn: '4407031409', price: '1600', bookTitle: '栽培環境入門', author: '角田公正・松崎昭夫・松本重男', publisher: '実教出版', yearOfPublication: '1998', note: '' },
      { isbn: '9784540111105', price: '3800', bookTitle: '作物学の基礎Ⅰ 食用作物', author: '後藤雄佐・新田洋司・中村聡', publisher: '農文協', yearOfPublication: '2013', note: '' }
    ],
    dp_large_perspective: '―',
    dp_specialized_knowledge: '〇',
    dp_problem_solving: '―',
    dp_communication: '―',
    dp_english_skills: '―',
    dp_social_attitude: '―',
    dp_regional_revitalization: '―',
    active_learning: '〇',
    pbl: '―',
    regional_orientation: '―',
    language: '日本語／Japanese',
    teaching_license: '高一（農業）/農業の関係科目',
    international_collaboration: '－',
    sdgs: 'SDGs1　貧困をなくそう／No Poverty\nSDGs2　飢餓をゼロに／Zero Hunger\nSDGs13　気候変動に具体的な対策を／Climate Action',
    accommodation: '本授業を受けるにあたり，障害に起因した合理的配慮が必要な場合は，所属学部／研究科の障害学生支援担当窓口（学務グループ）やスチューデントサクセスセンターアクセシビリティ支援室に相談してください。',
    officeHours: '浅木：金曜日12：20～13：10（農学部研究管理棟3階315号室）、久保山：金曜日12:20～13:10（農学部実験研究棟509号室）、中島：月曜日15:00～16:00（農学部実験研究棟427号室）、菊田：月曜日12:20～13:10（農学部実験研究棟421号室）、井上：木曜日15:00～17:00（農学部実験研究棟316号室）',
    weeklyPlan: [
      { week: 1, subject: 'ガイダンス、作物の分類と種類、作物の形態（浅木）', content: '', notes: '［全回共通］・授業計画を参照し教科書や参考書をを読み、関連する専門用語やキーワードの概要を把握したうえで授業にのぞむ。...' },
      { week: 2, subject: '作物の生理 光合成、呼吸、窒素代謝（浅木）', content: '', notes: '' },
      { week: 3, subject: '作物の特性と栽培のしくみ（1）たねと発芽、成長のしくみと管理、作付体系（浅木）', content: '', notes: '' },
      { week: 4, subject: '作物の特性と栽培のしくみ（2）育種（久保山）', content: '', notes: '' },
      { week: 5, subject: '栽培環境のしくみと作物生産 （1）気象要素と作物の生育、気象災害とその対策（浅木）', content: '', notes: '' },
      { week: 6, subject: '栽培環境のしくみと作物生産（2）土の性質と作物の生育（浅木）', content: '', notes: '' },
      { week: 7, subject: '栽培環境のしくみと作物生産（3）作物の養分と肥料（浅木）', content: '', notes: '' },
      { week: 8, subject: '栽培環境のしくみと作物生産（4）病害とその防除（中島）', content: '', notes: '' },
      { week: 9, subject: '栽培環境のしくみと作物生産（5）害虫・雑草とその防除（菊田）', content: '', notes: '' },
      { week: 10, subject: '作物の生産の技術 食用作物（１）食用作物の特徴（浅木）', content: '', notes: '' },
      { week: 11, subject: '作物の生産の技術 食用作物（２）水稲の育苗と本田管理（浅木）', content: '', notes: '' },
      { week: 12, subject: '作物の生産の技術 園芸作物（１）園芸作物の特徴（井上）', content: '', notes: '' },
      { week: 13, subject: '作物の生産の技術 園芸作物（２）園芸作物の生産と利用（井上）', content: '', notes: '' },
      { week: 14, subject: '期末テスト', content: '実施なし', notes: '' },
    ]
  },
  {
    id: 'R2006',
    title: '会計学概論',
    titleEn: 'Outline of Accounting',
    instructors: [{ name: '豊崎 仁美', nameEn: 'Toyosaki Hitomi' }],
    semester: '前期／Spring semester',
    department: '地域未来共創学環',
    courseStudents: '地域未来共創学環(24Rのみ)',
    courseYear: '2,3,4',
    dayPeriod: '火／Tue. 2',
    credits: 2.0,
    courseCode: 'R2006',
    numbering: 'R-MAN-2-ENT',
    syllabusCode: '',
    memo: '',
    overview: '会計は，ビジネスにおける共通言語であり，コミュニケーションツールである。会計学概論では，主に企業で使われる会計（企業会計）の基礎を中心に学習する。具体的には，企業の活動を報告するために用いられる財務諸表（貸借対照表，損益計算書，キャッシュフロー計算書）の仕組み，財務諸表の作成に必要な基本的なルールと手続き，そして財務諸表を使って自社と競合する企業を分析するための方法を学ぶ。\n\n固定グループ（4～5名）を作り，分析する企業を1社選んで，グループで分析するグループワークを実施します。',
    keywords: ['経営', '意思決定', '複式簿記', '貸借対照表', '損益計算書', 'キャッシュフロー計算書', '収益性', '安全性', 'ROE', '財務諸表分析'],
    objectives: '・取引に対して会計的な見方ができる。\n・貸借対照表・損益計算書・キャッシュフロー計算書の構造とそれらの関係性を説明できる。\n・財務諸表から企業の収益性，安全性，成長性を判断でき，課題や解決策を考えることができる。',
    notes: '・ほとんどの回でグループワークがあります。\n・各回の講義内容が関連し合うため，予習・復習に努めること。\n・遅刻をするとその回の授業全体が理解しがたくなるので，定時に出席すること。\n・受講生の理解度や興味関心に応じて授業計画を変更することがある。\n・資料を印刷する場合は各自で行うこと。',
    courseFormat: '対面授業／face-to-face course',
    deviceRequirements: 'manabaやTeams, Excelなどを使用するため，ノートPCは必ず持参すること。',
    gradingMethod: 'グループワークへの取り組み 80%, 確認テスト(最終回に実施）20%の合計100%\n詳しくは，第1回目に説明する。\n期末試験（第14回目）は実施しない。',
    gradingCriteria: [
      { grade: 'A+', description: '財務諸表ならびに財務諸表分析に関わる基本的な知識と考え方を十分に修得している。' },
      { grade: 'A', description: '財務諸表ならびに財務諸表分析に関わる基本的な知識と考え方を修得している。' },
      { grade: 'B', description: '財務諸表ならびに財務諸表分析に関わる基本的な知識と考え方を概ね修得している。' },
      { grade: 'C', description: '財務諸表ならびに財務諸表分析に関わる基本的な知識と考え方について最低限の修得をしている。' },
      { grade: 'D', description: '財務諸表ならびに財務諸表分析に関わる基本的な知識と考え方が修得できていない。' },
    ],
    textbooks: [
      { isbn: '', price: '', bookTitle: '特になし', author: '', publisher: '', yearOfPublication: '', note: '講義内容をまとめた資料を教材とする。' }
    ],
    referenceBooks: [
      { isbn: '4641220611', price: '2100', bookTitle: 'はじめて出会う会計学 新版', author: '川本淳・野口昌良・勝尾 裕子・山田純平・荒田映子', publisher: '有斐閣', yearOfPublication: '2020', note: 'ISBN 978-4-641-22061-4' },
      { isbn: '4495135791', price: '3850', bookTitle: '会計学基礎論（第6版)', author: '神戸大学会計学研究室', publisher: '同文舘出版', yearOfPublication: '2019', note: '' }
    ],
    dp_large_perspective: '〇',
    dp_specialized_knowledge: '〇',
    dp_problem_solving: '〇',
    dp_communication: '―',
    dp_english_skills: '―',
    dp_social_attitude: '△',
    dp_regional_revitalization: '―',
    active_learning: '〇',
    pbl: '―',
    regional_orientation: '―',
    language: '日本語／Japanese',
    teaching_license: 'ー',
    international_collaboration: '－',
    sdgs: 'SDGs4　質の高い教育をみんなに／Quality Education\nSDGs8　働きがいも経済成長も／Decent Work and Economic Growth',
    accommodation: '本授業を受けるにあたり，障害に起因した合理的配慮が必要な場合は，所属学部／研究科の障害学生支援担当窓口（学務グループ）やスチューデントサクセスセンターアクセシビリティ支援室に相談してください。',
    officeHours: '木曜日昼休み（A623）事前に連絡をすること。',
    weeklyPlan: [
      { week: 1, subject: 'ガイダンス・会計の役立ち', content: '会計は何のためにあるのか？について考える。\nこの授業を通して何が学べるのか，また授業の進め方などを理解する。', notes: '授業外学修として，事前配布資料を用いた予習と，各回の講義内容の復習の総学修時間60時間を求める。' },
      { week: 2, subject: '利益とは', content: '利益はどのように算出されるのか？\n・貸借対照表・損益計算書・キャッシュフロー計算書の概要を学ぶ。\n・本授業を受講するにあたって必要なExcelの知識やEDINETの使い方を学ぶ。', notes: 'グループ分け（4~5人1組を予定）を行います。グループは基本的に固定です。' },
      { week: 3, subject: '会計基本原則・連結会計・国際会計基準', content: 'どのようなルールに基づいて財務諸表は作成されているのか？\n・財務諸表を作成する際の基本的な考え方。\n・連結財務諸表の連結の意味を知る。\n・日本会計基準と国際会計基準の違い。', notes: 'グループワークあり\nグループワークは，1つの対象企業を決め，その企業について毎回の授業内容に関連することを調査，分析・考察することを行います。エクセルなどを使用するためPCは必須です。' },
      { week: 4, subject: '取引の見方と財務諸表作成', content: '取引はどのように認識されているのか？', notes: '' },
      { week: 5, subject: '貸借対照表', content: '貸借対照表は何をどのように表しているのか？\n貸借対照表の構造を理解する。\n貸借対照表から企業の財政状況の安全性を把握し，課題などを見出す。', notes: 'グループワークあり' },
      { week: 6, subject: '損益計算書', content: '損益計算書は何をどのように表しているのか？\n損益計算書の構造を理解する。\n損益計算書から企業の収益性を把握し，課題などを見出す。', notes: 'グループワークあり' },
      { week: 7, subject: '減価償却', content: '設備投資など多額の費用がかかる資産は一度に費用計上しないのはなぜか？', notes: 'グループワークあり' },
      { week: 8, subject: '引当金・棚卸資産', content: '支出していないにもかかわらず，費用として計上しているのはなぜか？\n在庫はどのように表現されているのか？', notes: 'グループワークあり' },
      { week: 9, subject: 'ROE', content: 'ROEとは何か？なぜ注目されているのか？\nROEの3つの分解式がさす意味とは？\n実際にROEを算出し，そこから特徴や課題を見つける。', notes: 'グループワークあり' },
      { week: 10, subject: 'キャッシュフロー計算書', content: '黒字なのに，倒産するのはなぜか？\nキャッシュフロー計算書は何をどのように表しているのか？\nキャッシュフロー計算書からどのようなことがいえるのか？', notes: 'グループワークあり' },
      { week: 11, subject: '企業間の比較', content: '企業間の比較によって，どのようなことが見えてくるだろうか？\n複数年間の会計情報を集めて，どのような特徴がみえるかについて考える。', notes: 'グループワークあり' },
      { week: 12, subject: '原価計算・管理会計', content: '財務会計との違いは何か？\n経営の意思決定に役立つ会計情報とはどのようなものか？\n会計情報の限界は何か？', notes: '' },
      { week: 13, subject: 'まとめと確認テスト', content: '', notes: '' },
      { week: 14, subject: '期末試験', content: '実施しない', notes: '' },
    ]
  },
  {
    id: 'S1431',
    title: '岩石鉱物学実験【前期】',
    titleEn: 'Exercise in Petrographic Microscope',
    instructors: [{ name: '長谷川 健', nameEn: 'Hasegawa Takeshi' }],
    semester: '前期／Spring semester',
    department: '理学部／College of Science',
    courseStudents: '',
    courseYear: '3,4',
    dayPeriod: '木／Thu. 4, 木／Thu. 5',
    credits: 2.0,
    courseCode: 'S1431',
    numbering: 'S-EPS-3-___',
    syllabusCode: '',
    memo: '',
    overview: '目的：固体惑星物質の主体をなす火成岩（火山岩および深成岩）を、記載・解析する能力を身につけてもらう。\n方針：薄片作成技術、基礎的光学知識、偏光顕微鏡操作法、鉱物鑑定法、記載岩石学的分類法を順次習得してもらう。さらに、記載岩石学的特徴から、岩石の成因を考察する面白さを知ってもらう。',
    keywords: ['偏光顕微鏡', '記載岩石学', '結晶光学', '造岩鉱物', '火山岩', '深成岩', '組織（テクスチュア）', 'モード組成', '結晶作用'],
    objectives: '岩石試料から、記載可能な薄片を作成できるようになる ２．結晶光学の基礎と、偏光顕微鏡の原理・操作法を習得する ３．顕微鏡を用いて、火成岩に産する主要な造岩鉱物を鑑定できるようになる ４．共通の用語を用いて岩石を記載し、モード測定の結果などから岩石命名ができるようになる ５．顕微鏡で観察した組織や鉱物組み合わせなどから、岩石の成因が議論できることを理解する',
    notes: 'オフィスアワーは火曜４講時を基本とし、適時相談に応じる（予約は授業終了直後もしくはメールで）。本授業は地球科学技術者養成プログラムの学習・教育目標Dに対応する科目群の一つである。',
    courseFormat: '対面授業／face-to-face course',
    deviceRequirements: '',
    gradingMethod: '到達目標１は、薄片作成法の理解度をみて評価（5％） 到達目標２は、４～５回目の授業終盤に課すレポート（10％）と最終レポートで評価 到達目標３は、６～８回目の授業終盤に課すレポート（15%）と最終レポートで評価 到達目標４は、９～11および13回目の授業終盤に課すレポート（20%）と最終レポートで評価 到達目標５は、最終レポートで評価 （％は配点率：小レポート１回5%、最終レポートは50%）※定期試験は行わない',
    gradingCriteria: [],
    textbooks: [
      { isbn: '', price: '4300', bookTitle: '「偏光顕微鏡と岩石鉱物」第２版（共立出版）', author: '黒田吉益・諏訪兼位著', publisher: '', yearOfPublication: '', note: '' }
    ],
    referenceBooks: [],
    dp_large_perspective: '◎',
    dp_specialized_knowledge: '◎',
    dp_problem_solving: '◎',
    dp_communication: '◎',
    dp_english_skills: '◎',
    dp_social_attitude: '◎',
    dp_regional_revitalization: '◎',
    active_learning: '〇',
    pbl: '〇',
    regional_orientation: '〇',
    language: '日本語／Japanese',
    teaching_license: '',
    international_collaboration: '',
    sdgs: '―（いずれにも該当しない）／Not applicable',
    accommodation: '本授業を受けるにあたり，障害に起因した合理的配慮が必要な場合は，所属学部／研究科の障害学生支援担当窓口（学務グループ）やスチューデントサクセスセンターアクセシビリティ支援室に相談してください。',
    officeHours: 'メールでアポりましょう',
    weeklyPlan: [
      { week: 1, subject: 'ガイダンス', content: '本実験の意義・目的および今後の予定を説明', notes: '' },
      { week: 2, subject: '薄片作成法1', content: '', notes: '' },
      { week: 3, subject: '薄片作成法2', content: '', notes: '' },
      { week: 4, subject: '結晶光学と顕微鏡の仕組み１', content: '光学的等・異方体の説明、開放・直交ニコル', notes: '' },
      { week: 5, subject: '結晶光学と顕微鏡の仕組み２', content: '検板などの操作', notes: '' },
      { week: 6, subject: '結晶光学と顕微鏡の仕組み３', content: '光学的１・２軸性の説明、コノスコープ像などの観察', notes: '' },
      { week: 7, subject: '造岩鉱物の観察前半', content: '代表的造岩鉱物のうち、無色鉱物の観察', notes: '' },
      { week: 8, subject: '造岩鉱物の観察中盤', content: '代表的有色鉱物のうち、角閃石と黒雲母の観察', notes: '' },
      { week: 9, subject: '造岩鉱物の観察後半', content: '代表的有色鉱物のうち、輝石とかんらん石の観察', notes: '' },
      { week: 10, subject: '火成岩の組織と命名法', content: '深成岩と火山岩における、組織や命名法の違いを説明', notes: '' },
      { week: 11, subject: '深成岩の記載と命名', content: '深成岩の観察・記載および命名', notes: '' },
      { week: 12, subject: '火山岩の記載と命名', content: '火山岩の観察・記載および命名', notes: '' },
      { week: 13, subject: '最終レポート作成', content: '最終レポート作成にあたっての質疑応答およびアドバイス', notes: '' },
    ]
  },
];