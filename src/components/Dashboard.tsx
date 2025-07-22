import React from 'react';
import { Sidebar } from './Sidebar';
import { useTheme } from '../contexts/ThemeContext';

// --- 型定義 ---
type Task = {
  id: string;
  deadline: string;
  taskName: string;
  courseName: string;
};

type Announcement = {
  id: string;
  title: string;
  source: string;
};

// --- ダミーデータ ---
const dummyTasks: Task[] = [
  { id: 't001', deadline: '本日 23:59まで', taskName: '第4回 リアクションペーパー', courseName: '異文化コミュニケーション論' },
];

const dummyAnnouncements: Announcement[] = [
  { id: 'a001', title: '【休講連絡】7月20日の「統計学入門」', source: '学務情報システム課' },
];

export const Dashboard = () => {
  // テーマ切り替えの状態管理
  const [isDarkMode, setIsDarkMode] = useState(false);
  const currentTheme = isDarkMode ? darkTheme : lightTheme;

  // --- スタイル定義 (CSS-in-JS 風) ---
  // 彩音さんが混乱しないよう、余白を大きく取り、境界線を明確にする
  const styles = {
    container: {
      backgroundColor: currentTheme.background,
      color: currentTheme.textColor,
      fontFamily: currentTheme.fontFamilyBody,
      minHeight: '100vh',
      display: 'flex',
    },
    sidebar: {
      width: '240px',
      backgroundColor: currentTheme.cardBg,
      padding: '24px',
      borderRight: `1px solid ${isDarkMode ? '#333' : '#E0E0E0'}`,
    },
    mainContent: {
      flex: 1,
      padding: '48px', // メインコンテンツは余白を特に大きく取る
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '40px',
    },
    heading: {
      fontFamily: currentTheme.fontFamilyHeading,
      fontSize: '2.5rem',
      margin: 0,
    },
    // カード形式で情報をグループ化し、一度に認識する量を減らす
    card: {
      backgroundColor: currentTheme.cardBg,
      borderRadius: '12px',
      padding: '24px',
      marginBottom: '32px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
    },
    cardTitle: {
      fontFamily: currentTheme.fontFamilyHeading,
      fontSize: '1.5rem',
      marginBottom: '20px',
    },
    // タスクリストのスタイル
    taskList: {
      listStyle: 'none',
      padding: 0,
    },
    taskItem: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '16px 0',
      borderBottom: `1px solid ${isDarkMode ? '#333' : '#F0F0F0'}`,
    },
    taskInfo: {
      deadline: {
        color: currentTheme.accent,
        fontWeight: 'bold',
        fontSize: '0.9rem',
      },
      taskName: {
        fontSize: '1.1rem',
        margin: '4px 0',
      },
      courseName: {
        color: currentTheme.subtleText,
        fontSize: '0.9rem',
      },
    },
    // ボタンのスタイル
    button: {
      padding: '10px 20px',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      backgroundColor: currentTheme.primary,
      color: '#FFFFFF',
      fontSize: '1rem',
    },
    // サイドバーのナビゲーションスタイル
    navLink: {
      display: 'block',
      padding: '12px 16px',
      borderRadius: '8px',
      textDecoration: 'none',
      color: currentTheme.textColor,
      fontSize: '1.1rem',
      marginBottom: '8px',
      transition: 'background-color 0.2s',
    },
    // テーマ切り替えスイッチ
    themeSwitch: {
      cursor: 'pointer',
      padding: '8px',
      borderRadius: '50%',
      backgroundColor: currentTheme.cardBg,
    },
  };

  // --- JSXによる画面構造 ---
  return (
    <div style={styles.container}>
      {/* ===== サイドバー：緊急性の低い、いつでも使える機能群 ===== */}
      {/* 常にそこにあるという安心感を与えるため、位置は固定 */}
      <nav style={styles.sidebar}>
        <h1 style={{ fontFamily: currentTheme.fontFamilyHeading, fontSize: '2rem', color: currentTheme.primary }}>CobS</h1>
        <ul style={{ listStyle: 'none', padding: 0, marginTop: '40px' }}>
          <li><a href="#" style={styles.navLink}>ホーム</a></li>
          <li><a href="#" style={styles.navLink}>時間割</a></li>
          <li><a href="#" style={styles.navLink}>シラバス参照</a></li>
          <li><a href="#" style={styles.navLink}>履修登録</a></li>
          <li><a href="#" style={styles.navLink}>学生情報編集</a></li>
        </ul>
      </nav>

      {/* ===== メインコンテンツ：今、必要な情報だけを表示 ===== */}
      <main style={styles.mainContent}>
        <header style={styles.header}>
          <h2 style={styles.heading}>こんにちは、彩音さん</h2>
          <div 
            onClick={() => setIsDarkMode(!isDarkMode)}
            style={styles.themeSwitch}
            title="テーマを切り替える"
          >
            {isDarkMode ? '☀️' : '🌙'}
          </div>
        </header>

        {/* --- 最優先カード：今日が締め切りの課題 --- */}
        {/* 最も重要な情報を最初に提示し、不安を取り除く */}
        <section style={styles.card}>
          <h3 style={styles.cardTitle}>今日のやることリスト</h3>
          <ul style={styles.taskList}>
            {/* 課題がある場合の表示例 */}
            <li style={styles.taskItem}>
              <div>
                <div style={styles.taskInfo.deadline}>本日 23:59まで</div>
                <div style={styles.taskInfo.taskName}>第4回 リアクションペーパー</div>
                <div style={styles.taskInfo.courseName}>異文化コミュニケーション論</div>
              </div>
              <button style={styles.button}>提出する</button>
            </li>
            {/* 課題がない場合は、安心させるメッセージを表示 */}
            {/* <li style={{color: currentTheme.subtleText, padding: '20px 0'}}>
              今日が締め切りの課題はありません。ゆっくり休んでくださいね。
            </li> 
            */}
          </ul>
        </section>

        {/* --- 2番目のカード：次の授業の情報 --- */}
        {/* 次の行動を明確にし、見通しを立てやすくする */}
        <section style={styles.card}>
          <h3 style={styles.cardTitle}>次の授業</h3>
          <div style={{display: 'flex', alignItems: 'center', gap: '24px'}}>
            <div style={{fontSize: '2rem', fontFamily: currentTheme.fontFamilyHeading}}>3限</div>
            <div>
              <div style={{fontSize: '1.2rem', fontWeight: 'bold'}}>社会情報学概論</div>
              <div style={{color: currentTheme.subtleText}}>B-201教室</div>
            </div>
          </div>
        </section>

        {/* --- 3番目のカード：最近のお知らせ --- */}
        {/* 重要なお知らせを見逃さない安心感を提供するが、優先度は低め */}
        <section style={styles.card}>
          <h3 style={styles.cardTitle}>最近のお知らせ</h3>
          <ul style={styles.taskList}>
            <li style={styles.taskItem}>
              <div>
                <div style={styles.taskInfo.taskName}>【休講連絡】7月20日の「統計学入門」</div>
                <div style={styles.taskInfo.courseName}>学務情報システム課</div>
              </div>
              <button style={{...styles.button, backgroundColor: currentTheme.subtleText}}>詳細を見る</button>
            </li>
          </ul>
        </section>

      </main>
    </div>
  );
};