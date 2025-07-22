// Dashboard_ThreeColumn.tsx
// 3カラムレイアウトの哲学を反映したプロトタイプ

import React, { useState } from 'react';

// --- 型定義 (TypeScript) ---
type Syllabus = {
  id: string;
  title: string;
  instructor: string;
  faculty: string;
  code: string;
  summary: string;
  details: string;
};

// --- ダミーデータ ---
// 本来はAPIから取得するシラバスのデータ
const dummySyllabusData: Syllabus[] = [
  { id: 's001', title: '異文化コミュニケーション論', instructor: '佐藤 由美', faculty: '国際関係学部', code: 'GC101', summary: 'グローバル社会における多様な文化背景を持つ人々との円滑なコミュニケーション能力を養う。', details: '詳細な授業計画はここに長文で記載されます。第1回はガイダンス、第2回は...'},
  { id: 's002', title: '社会情報学概論', instructor: '鈴木 一郎', faculty: '情報科学類', code: 'CS203', summary: '情報技術が社会に与える影響を多角的に考察する。', details: 'この授業では、プライバシー問題やデジタルデバイドについて議論します。詳細は...'},
  { id: 's003', title: '統計学入門', instructor: '高橋 花子', faculty: '理学部', code: 'MA301', summary: 'データ分析の基礎となる統計学の考え方と手法を学ぶ。', details: '記述統計と推測統計の初歩を学びます。R言語を使用する予定です。詳細は...'},
];

// --- デザインシステム (前回と同様) ---
// ... (ライトテーマ・ダークテーマの定義は前回と同じなので省略) ...
const lightTheme = { background: '#F8F9FA', cardBg: '#FFFFFF', textColor: '#212529', subtleText: '#6C757D', primary: '#005FAC', accent: '#007BFF', fontFamilyBody: '"BIZ UDPGothic", sans-serif', fontFamilyHeading: '"BIZ UDPMincho", serif' };

// --- コンポーネント本体 ---

export const Dashboard_ThreeColumn = () => {
  const currentTheme = lightTheme; // 今回はライトテーマで固定
  
  // --- 状態管理 ---
  // 検索結果のリストを保持
  const [searchResults, setSearchResults] = useState<Syllabus[]>(dummySyllabusData);
  // 中央カラムで選択されたシラバスのIDを保持
  const [selectedSyllabusId, setSelectedSyllabusId] = useState<string | null>('s001'); // 初期状態で1つ目を選択

  const selectedSyllabus = dummySyllabusData.find(s => s.id === selectedSyllabusId);

  // --- スタイル定義 ---
  const styles = {
    // 全体をFlexboxで3つのカラムに分割
    container: {
      backgroundColor: currentTheme.background,
      color: currentTheme.textColor,
      fontFamily: currentTheme.fontFamilyBody,
      display: 'flex',
      height: '100vh',
    },
    // カラム1: サイドナビゲーション
    navColumn: {
      width: '240px',
      flexShrink: 0, // 縮まないようにする
      backgroundColor: '#FFFFFF',
      borderRight: '1px solid #E0E0E0',
      padding: '24px',
    },
    // カラム2: 一覧表示
    listColumn: {
      width: '400px',
      flexShrink: 0,
      borderRight: '1px solid #E0E0E0',
      overflowY: 'auto', // 内容が多い場合はスクロール
    } as React.CSSProperties,
    // カラム3: 詳細表示
    detailColumn: {
      flexGrow: 1, // 残りの幅をすべて取る
      padding: '48px',
      overflowY: 'auto' as const, // 
    },
    // 検索結果リストの各アイテム
    listItem: (isSelected: boolean) => ({
      padding: '16px 24px',
      borderBottom: '1px solid #F0F0F0',
      cursor: 'pointer',
      backgroundColor: isSelected ? currentTheme.accent + '1A' : 'transparent', // 選択されているアイテムをハイライト
      borderLeft: isSelected ? `4px solid ${currentTheme.accent}` : 'none',
      paddingLeft: isSelected ? '20px' : '24px',
    }),
    // その他スタイル (見やすさのため省略)
    h1: { fontFamily: currentTheme.fontFamilyHeading },
    h2: { fontFamily: currentTheme.fontFamilyHeading, fontSize: '2rem' },
    h3: { fontFamily: currentTheme.fontFamilyHeading, fontSize: '1.5rem' },
  };

  return (
    <div style={styles.container}>
      {/* ===== カラム1: 機能ナビゲーション ===== */}
      <nav style={styles.navColumn}>
        <h1 style={styles.h1}>CobS</h1>
        {/* ... (ナビゲーションリンクは省略) ... */}
        <p style={{marginTop: '40px', color: '#6C757D'}}>シラバス参照</p>
      </nav>

      {/* ===== カラム2: 検索フォームと結果一覧 ===== */}
      <div style={styles.listColumn}>
        {/* 検索フォーム部分はここに配置 (今回は省略) */}
        <div style={{padding: '24px'}}>
          <h2 style={{...styles.h1, fontSize: '1.8rem'}}>シラバス検索</h2>
          <input type="text" placeholder="キーワード、科目名、教員名" style={{width: '100%', padding: '12px', fontSize: '1rem', boxSizing: 'border-box'}} />
        </div>
        
        {/* 検索結果の一覧 */}
        <div>
          {searchResults.map((syllabus) => (
            <div
              key={syllabus.id}
              style={styles.listItem(syllabus.id === selectedSyllabusId)}
              onClick={() => setSelectedSyllabusId(syllabus.id)}
            >
              <div style={{fontWeight: 'bold'}}>{syllabus.title}</div>
              <div style={{fontSize: '0.9rem', color: '#6C757D'}}>{syllabus.instructor} / {syllabus.faculty}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ===== カラム3: 選択された項目の詳細 ===== */}
      {/* 項目が選択されている場合のみ表示 */}
      <main style={styles.detailColumn}>
        {selectedSyllabus ? (
          <div>
            <p style={{color: currentTheme.subtleText}}>{selectedSyllabus.faculty} / {selectedSyllabus.code}</p>
            <h2 style={styles.h2}>{selectedSyllabus.title}</h2>
            <p style={{fontSize: '1.2rem'}}>担当教員：{selectedSyllabus.instructor}</p>
            
            <hr style={{margin: '32px 0', border: 'none', borderTop: '1px solid #E0E0E0'}} />

            <h3 style={styles.h3}>授業概要</h3>
            <p>{selectedSyllabus.summary}</p>
            
            <h3 style={{...styles.h3, marginTop: '40px'}}>授業計画</h3>
            <p style={{lineHeight: 1.8}}>{selectedSyllabus.details}</p>
          </div>
        ) : (
          // 何も選択されていない場合の表示
          <div style={{textAlign: 'center', color: '#B0B0B0', paddingTop: '100px'}}>
            <p>左のリストからシラバスを選択してください</p>
          </div>
        )}
      </main>
    </div>
  );
};