import React from 'react';
import { type Syllabus } from '../../data/mockSyllabusData';
import { useTheme } from '../../contexts/ThemeContext';

// 親コンポーネントから受け取るデータの型を定義
type Props = {
  syllabus: Syllabus;
};

export const BasicInfoTab = ({ syllabus }: Props) => {
  const { currentTheme } = useTheme();

  // --- スタイル定義 ---
  const styles = {
    table: {
      width: '70%',
      borderCollapse: 'collapse',
      marginTop: '8px',
    } as React.CSSProperties,
    labelCell: {
      border: `1px solid ${currentTheme.cardBg === '#FFFFFF' ? '#E0E0E0' : '#333'}`,
      padding: '12px',
      textAlign: 'center',
      fontWeight: 'bold',
      backgroundColor: currentTheme.primary + '10',
      width: '200px', // ラベルセルの幅を固定
    } as React.CSSProperties,
    valueCell: {
      border: `1px solid ${currentTheme.cardBg === '#FFFFFF' ? '#E0E0E0' : '#333'}`,
      padding: '12px',
    } as React.CSSProperties,
  };

  return (
    <center>
      <table style={styles.table}>
        <tbody>
          <tr>
            <td style={styles.labelCell}>開講学期</td>
            <td style={styles.valueCell}>{syllabus.semester}</td>
          </tr>
          <tr>
            <td style={styles.labelCell}>開講曜日・時限</td>
            <td style={styles.valueCell}>{syllabus.dayPeriod}</td>
          </tr>
          <tr>
            <td style={styles.labelCell}>授業形式</td>
            <td style={styles.valueCell}>{syllabus.courseFormat}</td>
          </tr>
          <tr>
            <td style={styles.labelCell}>単位数</td>
            <td style={styles.valueCell}>{syllabus.credits}</td>
          </tr>
          <tr>
            <td style={styles.labelCell}>対象学年</td>
            <td style={styles.valueCell}>{syllabus.courseYear}年</td>
          </tr>
          <tr>
            <td style={styles.labelCell}>対象学生所属</td>
            <td style={styles.valueCell}>{syllabus.courseStudents}</td>
          </tr>
          <tr>
            <td style={styles.labelCell}>時間割コード</td>
            <td style={styles.valueCell}>{syllabus.courseCode}</td>
          </tr>
          <tr>
            <td style={styles.labelCell}>ナンバリング</td>
            <td style={styles.valueCell}>{syllabus.numbering}</td>
          </tr>
          <tr>
            <td style={styles.labelCell}>シラバスコード</td>
            <td style={styles.valueCell}>{syllabus.syllabusCode}</td>
          </tr>
          <tr>
            <td style={styles.labelCell}>メモ</td>
            <td style={styles.valueCell}>{syllabus.memo}</td>
          </tr>
        </tbody>
      </table>
    </center>
  );
};