import React from 'react';
import { type Syllabus } from '../../data/mockSyllabusData';
import { useTheme } from '../../contexts/ThemeContext';

// 親コンポーネントから受け取るデータの型を定義
type Props = {
  syllabus: Syllabus;
};

export const DetailedInfoTab = ({ syllabus }: Props) => {
  const { currentTheme } = useTheme();

  // --- スタイル定義 ---
const styles = {
    h4: {
      fontSize: '1rem', 
      paddingBottom: '8px',
    },
    h3: {
      fontFamily: currentTheme.fontFamilyHeading, 
      fontSize: '1.5rem', 
      marginTop: '32px',
      paddingBottom: '8px',
      borderBottom: `2px solid ${currentTheme.primary + '40'}`,
    },
    criteriaTable: {
      width: '100%',
      borderCollapse: 'collapse',
      marginTop: '8px',
    },
    criteriaTableCell: {
      border: `1px solid ${currentTheme.cardBg === '#FFFFFF' ? '#E0E0E0' : '#333'}`,
      padding: '12px',
      textAlign: 'left',
      verticalAlign: 'top',
    },
    criteriaTableHeader: {
      fontWeight: 'bold',
      backgroundColor: currentTheme.primary + '10',
    },
    bookTable: {
      width: '100%',
      borderCollapse: 'collapse',
      marginTop: '8px',
      tableLayout: 'fixed' as const,
    },
    bookTableLabelCell: {
      border: `1px solid ${currentTheme.cardBg === '#FFFFFF' ? '#E0E0E0' : '#333'}`,
      padding: '12px',
      textAlign: 'center',
      fontWeight: 'bold',
      backgroundColor: currentTheme.primary + '10',
      width: '120px',
    },
    bookTableCell: {
      border: `1px solid ${currentTheme.cardBg === '#FFFFFF' ? '#E0E0E0' : '#333'}`,
      padding: '12px',
      verticalAlign: 'top',
    },
  };

  return (
    <div>
      <h3 style={styles.h3}>授業の概要</h3>
      <p style={{whiteSpace: 'pre-wrap'}}>{syllabus.overview}</p>

      <h3 style={styles.h3}>キーワード</h3>
      <div style={{display: 'flex', flexWrap: 'wrap', gap: '8px'}}>
        {syllabus.keywords.map(kw => <span key={kw} style={{backgroundColor: currentTheme.primary + '20', padding: '4px 8px', borderRadius: '4px', fontSize: '0.9rem'}}>{kw}</span>)}
      </div>

      <h3 style={styles.h3}>到達目標</h3>
      <p style={{whiteSpace: 'pre-wrap'}}>{syllabus.objectives}</p>

      <h3 style={styles.h3}>成績評価</h3>
      <div>
        <h4><b>評価方法:</b></h4>
        <p>{syllabus.gradingMethod}</p>
      </div>
      <b>評価基準:</b>
      <table style={styles.criteriaTable}>
        <thead>
          <tr>
            <th style={{...styles.criteriaTableCell, ...styles.criteriaTableHeader, width: '80px'}}>評価</th>
            <th style={{...styles.criteriaTableCell, ...styles.criteriaTableHeader}}>基準</th>
          </tr>
        </thead>
        <tbody>
          {syllabus.gradingCriteria.map((item) => (
            <tr key={item.grade}>
              <td style={{...styles.criteriaTableCell, fontWeight: 'bold'}}>{item.grade}</td>
              <td style={styles.criteriaTableCell}>{item.description}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3 style={styles.h3}>教科書・参考書</h3>
      <b>教科書</b>
      {syllabus.textbooks && syllabus.textbooks.length > 0 ? (
        syllabus.textbooks.map((book, index) => (
            <div key={`textbook-${index}`} style={{marginBottom: '24px'}}>
            <table style={styles.bookTable}>
                <tbody>
                <tr>
                    <td style={styles.bookTableLabelCell}>書名</td>
                    <td style={styles.bookTableCell}>{book.bookTitle}</td>
                    <td style={styles.bookTableLabelCell}>教材費</td>
                    <td style={styles.bookTableCell}>{book.price ? `${book.price}円` : ''}</td>
                </tr>
                <tr>
                    <td style={styles.bookTableLabelCell}>著者名</td>
                    <td style={styles.bookTableCell} colSpan={3}>{book.author}</td>
                </tr>
                <tr>
                    <td style={styles.bookTableLabelCell}>出版社</td>
                    <td style={styles.bookTableCell}>{book.publisher}</td>
                    <td style={styles.bookTableLabelCell}>出版年</td>
                    <td style={styles.bookTableCell}>{book.yearOfPublication}</td>
                </tr>
                <tr>
                    <td style={styles.bookTableLabelCell}>ISBN</td>
                    <td style={styles.bookTableCell} colSpan={3}>{book.isbn}</td>
                </tr>
                <tr>
                    <td style={styles.bookTableLabelCell}>備考</td>
                    <td style={styles.bookTableCell} colSpan={3}>{book.note}</td>
                </tr>
                </tbody>
            </table>
            </div>
        ))
    ):(
        <p>なし</p>
    )}
      <b>参考書</b>
      {syllabus.referenceBooks && syllabus.referenceBooks.length > 0 ? (
        syllabus.referenceBooks.map((book, index) => (
            <div key={`textbook-${index}`} style={{marginBottom: '24px'}}>
            <table style={styles.bookTable}>
                <tbody>
                <tr>
                    <td style={styles.bookTableLabelCell}>書名</td>
                    <td style={styles.bookTableCell}>{book.bookTitle}</td>
                    <td style={styles.bookTableLabelCell}>教材費</td>
                    <td style={styles.bookTableCell}>{book.price ? `${book.price}円` : ''}</td>
                </tr>
                <tr>
                    <td style={styles.bookTableLabelCell}>著者名</td>
                    <td style={styles.bookTableCell} colSpan={3}>{book.author}</td>
                </tr>
                <tr>
                    <td style={styles.bookTableLabelCell}>出版社</td>
                    <td style={styles.bookTableCell}>{book.publisher}</td>
                    <td style={styles.bookTableLabelCell}>出版年</td>
                    <td style={styles.bookTableCell}>{book.yearOfPublication}</td>
                </tr>
                <tr>
                    <td style={styles.bookTableLabelCell}>ISBN</td>
                    <td style={styles.bookTableCell} colSpan={3}>{book.isbn}</td>
                </tr>
                <tr>
                    <td style={styles.bookTableLabelCell}>備考</td>
                    <td style={styles.bookTableCell} colSpan={3}>{book.note}</td>
                </tr>
                </tbody>
            </table>
            </div>
        ))
    ):(
        <p>なし</p>
    )}

      <h3 style={styles.h3}>その他</h3>
      <b>履修上の注意:</b><p><span style={{whiteSpace: 'pre-wrap'}}>{syllabus.notes}</span></p>
      <b>情報端末の活用:</b><p><span style={{whiteSpace: 'pre-wrap'}}>{syllabus.deviceRequirements}</span></p>
      <b>合理的配慮への対応:</b><p>{syllabus.accommodation}</p>
      <b>オフィスアワー:</b><p>{syllabus.officeHours}</p>
    </div>
  );
};