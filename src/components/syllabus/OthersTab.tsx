import React from 'react';
import { type Syllabus } from '../../data/mockSyllabusData';
import { useTheme } from '../../contexts/ThemeContext';

// 親コンポーネントから受け取るデータの型を定義
type Props = {
  syllabus: Syllabus;
};

export const OthersTab = ({ syllabus }: Props) => {
  const { currentTheme } = useTheme();

  // --- スタイル定義 (BasicInfoTabと共通) ---
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
      width: '300px', // ラベルが長いため幅を広げる
    } as React.CSSProperties,
    valueCell: {
      border: `1px solid ${currentTheme.cardBg === '#FFFFFF' ? '#E0E0E0' : '#333'}`,
      padding: '12px',
      textAlign: 'center',
    } as React.CSSProperties,
    sectionHeaderCell: {
      backgroundColor: currentTheme.subtleText,
      color: currentTheme.cardBg,
      fontWeight: 'bold',
      padding: '8px',
      textAlign: 'left',
    } as React.CSSProperties,
  };

  return (
    <center>
        <table style={styles.table}>
        <tbody>
            {/* --- ディプロマポリシー --- */}
            <tr>
            <td style={styles.sectionHeaderCell} colSpan={2}>ディプロマポリシーとの関連</td>
            </tr>
            <tr>
            <td style={styles.labelCell}>世界の俯瞰的理解</td>
            <td style={styles.valueCell}>{syllabus.dp_large_perspective}</td>
            </tr>
            <tr>
            <td style={styles.labelCell}>専門分野の学力</td>
            <td style={styles.valueCell}>{syllabus.dp_specialized_knowledge}</td>
            </tr>
            <tr>
            <td style={styles.labelCell}>課題解決能力</td>
            <td style={styles.valueCell}>{syllabus.dp_problem_solving}</td>
            </tr>
            <tr>
            <td style={styles.labelCell}>コミュニケーション力</td>
            <td style={styles.valueCell}>{syllabus.dp_communication}</td>
            </tr>
            <tr>
            <td style={styles.labelCell}>実践的英語力</td>
            <td style={styles.valueCell}>{syllabus.dp_english_skills}</td>
            </tr>
            <tr>
            <td style={styles.labelCell}>社会人としての姿勢</td>
            <td style={styles.valueCell}>{syllabus.dp_social_attitude}</td>
            </tr>
            <tr>
            <td style={styles.labelCell}>地域活性化志向</td>
            <td style={styles.valueCell}>{syllabus.dp_regional_revitalization}</td>
            </tr>

            {/* --- 科目分類 --- */}
            <tr>
            <td style={styles.sectionHeaderCell} colSpan={2}>科目分類</td>
            </tr>
            <tr>
            <td style={styles.labelCell}>アクティブ・ラーニング型科目</td>
            <td style={styles.valueCell}>{syllabus.active_learning}</td>
            </tr>
            <tr>
            <td style={styles.labelCell}>使用言語</td>
            <td style={styles.valueCell}>{syllabus.language}</td>
            </tr>
            <tr>
            <td style={styles.labelCell}>教員免許関連科目</td>
            <td style={styles.valueCell}>{syllabus.teaching_license}</td>
            </tr>
            <tr>
            <td style={styles.labelCell}>SDGs関連科目</td>
            <td style={styles.valueCell} style={{...styles.valueCell, whiteSpace: 'pre-wrap'}}>{syllabus.sdgs}</td>
            </tr>
        </tbody>
        </table>
    </center>
  );
};