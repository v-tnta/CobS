// src/components/Dashboard.tsx (レイアウト修正版)

import React from 'react';
import { Link } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { useTheme } from '../contexts/ThemeContext';

// 型定義やダミーデータは変更なし
type Task = { id: string; deadline: string; taskName: string; courseName: string; };
type Announcement = { id: string; title: string; source: string; };
const dummyTasks: Task[] = [ { id: 't001', deadline: '本日 23:59まで', taskName: '第4回 リアクションペーパー', courseName: '異文化コミュニケーション論' } ];
const dummyAnnouncements: Announcement[] = [ { id: 'a001', title: '【休講連絡】7月20日の「統計学入門」', source: '学務情報システム課' } ];

export const Dashboard = () => {
  const { isDarkMode, toggleTheme, currentTheme } = useTheme();

  // スタイル定義をシンプルに
  const styles = {
    container: {
      display: 'flex', // これがレイアウトの核
      minHeight: '100vh',
      backgroundColor: currentTheme.background,
      color: currentTheme.textColor,
      fontFamily: currentTheme.fontFamilyBody,
    },
    mainContent: {
      flex: 1, // これがメインコンテンツを広げるための指定
      padding: '48px',
      overflowY: 'auto' as const,
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
    card: {
      backgroundColor: currentTheme.cardBg,
      borderRadius: '12px',
      padding: '24px',
      marginBottom: '32px',
    },
    cardTitle: {
      fontFamily: currentTheme.fontFamilyHeading,
      fontSize: '1.5rem',
      marginBottom: '20px',
    },
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
        deadline: { color: currentTheme.accent, fontWeight: 'bold' },
        taskName: { fontSize: '1.1rem', margin: '4px 0' },
        courseName: { color: currentTheme.subtleText },
    },
    button: {
      padding: '10px 20px',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      backgroundColor: currentTheme.primary,
      color: '#FFFFFF',
      fontSize: '1rem',
    },
    themeSwitch: {
      cursor: 'pointer',
      padding: '8px',
      borderRadius: '50%',
      backgroundColor: currentTheme.cardBg,
    },
  };

  return (
    <div style={styles.container}>
      {/* 共通サイドバーコンポーネント */}
      <Sidebar theme={currentTheme} />
      
      {/* メインコンテンツ */}
      <main style={styles.mainContent}>
        <header style={styles.header}>
          <h2 style={styles.heading}>ホーム</h2>
          <div onClick={toggleTheme} style={styles.themeSwitch} title="テーマを切り替える">
            {isDarkMode ? '☀️' : '🌙'}
          </div>
        </header>

        {/* --- 今日のやることリスト --- */}
        <section style={styles.card}>
          最新のお知らせ: <br/>　　　　　　　　　　　　　　　　〜〜〜〜〜〜
        </section>

        {/* --- 次の授業 --- */}
        <section style={styles.card}>
            test 2
        </section>

        {/* --- 最近のお知らせ --- */}
        <section style={styles.card}>
            test 3
        </section>
      </main>
    </div>
  );
};