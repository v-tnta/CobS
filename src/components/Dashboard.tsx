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
  const { isDarkMode, toggleTheme, currentTheme } = useTheme();

  const styles = {
    container: {
      display: 'flex',
      minHeight: '100vh',
      backgroundColor: currentTheme.background,
      color: currentTheme.textColor,
      fontFamily: currentTheme.fontFamilyBody,
    },
    mainContent: {
      flex: 1,
      padding: '48px',
      overflowY: 'auto' as const,
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '40px',
      userSelect:'none',
    },
    heading: {
      fontFamily: currentTheme.fontFamilyHeading,
      fontSize: '2.5rem',
      margin: 0,
      userSelect:'none',
    },
    card: {
      backgroundColor: currentTheme.cardBg,
      borderRadius: '12px',
      padding: '24px',
      marginBottom: '32px',
      userSelect:'none',
    },
    cardTitle: {
      fontFamily: currentTheme.fontFamilyHeading,
      fontSize: '1.5rem',
      marginBottom: '20px',
      userSelect:'none',
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
      userSelect:'none',
    },
    taskInfo: {
        deadline: { color: currentTheme.accent, fontWeight: 'bold' as const },
        taskName: { fontSize: '1.1rem', margin: '4px 0' },
        courseName: { color: currentTheme.subtleText },
        userSelect:'none',
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
      <Sidebar theme={currentTheme} />
      
      <main style={styles.mainContent}>
        <header style={styles.header}>
          <h2 style={styles.heading}>ホーム</h2>
          <div onClick={toggleTheme} style={styles.themeSwitch} title="テーマを切り替える">
            {isDarkMode ? '☀️' : '🌙'}
          </div>
        </header>

        {/* --- 今日のやることリスト --- */}
        <section style={styles.card}>
          <h3 style={styles.cardTitle}>今日のやることリスト</h3>
          <ul style={styles.taskList}>
            {dummyTasks.length > 0 ? (
              dummyTasks.map(task => (
                <li key={task.id} style={styles.taskItem}>
                  <div>
                    <div style={styles.taskInfo.deadline}>{task.deadline}</div>
                    <div style={styles.taskInfo.taskName}>{task.taskName}</div>
                    <div style={styles.taskInfo.courseName}>{task.courseName}</div>
                  </div>
                  <button style={styles.button}>提出する</button>
                </li>
              ))
            ) : (
              <li style={{ color: currentTheme.subtleText, padding: '20px 0' }}>
                今日が締め切りの課題はありません。ゆっくり休んでくださいね。
              </li>
            )}
          </ul>
        </section>

        {/* --- 次の授業 --- */}
        <section style={styles.card}>
          <h3 style={styles.cardTitle}>次の授業</h3>
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            <div style={{ fontSize: '2rem', fontFamily: currentTheme.fontFamilyHeading }}>3限</div>
            <div>
              <div style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>社会情報学概論</div>
              <div style={{ color: currentTheme.subtleText }}>B-201教室</div>
            </div>
          </div>
        </section>

        {/* --- 最近のお知らせ --- */}
        <section style={styles.card}>
          <h3 style={styles.cardTitle}>最近のお知らせ</h3>
          <ul style={styles.taskList}>
            {dummyAnnouncements.map(announcement => (
              <li key={announcement.id} style={styles.taskItem}>
                <div>
                  <div style={styles.taskInfo.taskName}>{announcement.title}</div>
                  <div style={styles.taskInfo.courseName}>{announcement.source}</div>
                </div>
                <button style={{ ...styles.button, backgroundColor: String(currentTheme.subtleText) }}>詳細を見る</button>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
};