import React, { useState, FormEvent, useMemo } from 'react';
import { Sidebar } from './Sidebar';
import { useTheme } from '../contexts/ThemeContext';
import { type Syllabus, testSyllabusData} from '../data/mockSyllabusData'

// 各要素、コンポーネント
import { BasicInfoTab } from './syllabus/BasicInfoTab';
import { DetailedInfoTab } from './syllabus/DetailedInfoTab';
import { ScheduleTab } from './syllabus/ScheduleTab';
import { OthersTab} from './syllabus/OthersTab';

export const SyllabusSearch = () => {
  const { currentTheme } = useTheme();
  
  // --- 検索フォーム用の状態管理 ---
  const [year, setYear] = useState('2025');
  const [department, setDepartment] = useState('');
  const [courseCode, setCourseCode] = useState('');
  const [title, setTitle] = useState('');

  // --- 表示結果用の状態管理 ---
  const [searchResults, setSearchResults] = useState<Syllabus[]>([]);
  const [selectedSyllabusId, setSelectedSyllabusId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'basic' | 'detailed' | 'schedule' | 'others'>('basic');
  
  // --- データ準備 ---
  const selectedSyllabus = searchResults.find(s => s.id === selectedSyllabusId);

  // データから動的にユニークな所属リストを作成
  const uniqueDepartments = useMemo(() => {
    const allDepartments = testSyllabusData.map(syllabus => syllabus.department);
    return [...new Set(allDepartments)];
  }, []);

  // --- 機能ロジック ---
  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    let results = testSyllabusData;

    if (courseCode) {
      results = results.filter(s => s.courseCode.toLowerCase().includes(courseCode.toLowerCase()));
    }
    if (title) {
      results = results.filter(s => s.title.toLowerCase().includes(title.toLowerCase()));
    }
    if (department) {
      results = results.filter(s => s.department === department);
    }
    
    setSearchResults(results);
  };

  const handleClear = () => {
    setYear('2025');
    setDepartment('');
    setCourseCode('');
    setTitle('');
    setSearchResults([]);
  };

  // --- スタイル定義 ---
  const styles = {
    container: { display: 'flex', height: '100vh', backgroundColor: currentTheme.background, color: currentTheme.textColor, fontFamily: currentTheme.fontFamilyBody },
    listColumn: { width: '400px', flexShrink: 0, borderRight: `1px solid ${currentTheme.cardBg === '#FFFFFF' ? '#E0E0E0' : '#333'}`, overflowY: 'auto', backgroundColor: currentTheme.cardBg } as React.CSSProperties,
    detailColumn: { flexGrow: 1, padding: '48px', overflowY: 'auto' } as React.CSSProperties,
    listItem: (isSelected: boolean) => ({ padding: '16px 24px', borderBottom: `1px solid ${currentTheme.cardBg === '#FFFFFF' ? '#F0F0F0' : '#333'}`, cursor: 'pointer', backgroundColor: isSelected ? currentTheme.primary + '20' : 'transparent', borderLeft: isSelected ? `4px solid ${currentTheme.primary}` : 'none', paddingLeft: isSelected ? '20px' : '24px' }),
    tabButton: (isActive: boolean) => ({ padding: '12px 24px', fontSize: '1rem', border: 'none', borderBottom: isActive ? `3px solid ${currentTheme.primary}` : '3px solid transparent', cursor: 'pointer', backgroundColor: 'transparent', color: isActive ? currentTheme.primary : currentTheme.subtleText, fontWeight: isActive ? 'bold' : 'normal' }),
    tabContent: { paddingTop: '24px' },
    h1: { fontFamily: currentTheme.fontFamilyHeading },
    h2: { fontFamily: currentTheme.fontFamilyHeading, fontSize: '1.8rem' },
    h3: { fontFamily: currentTheme.fontFamilyHeading, fontSize: '1.5rem', marginTop: '24px' },
    h4: { fontFamily: currentTheme.fontFamilyHeading, fontSize: '1rem', marginTop: '24px' },
    searchForm: { padding: '24px' },
    formRow: { marginBottom: '16px', display: 'flex', alignItems: 'center' },
    formLabel: { width: '120px', flexShrink: 0, fontWeight: 'bold', fontSize: '0.9rem' },
    formInput: { width: '100%', padding: '8px 12px', fontSize: '1rem', borderRadius: '4px', border: `1px solid ${currentTheme.cardBg === '#FFFFFF' ? '#E0E0E0' : '#555'}`, backgroundColor: currentTheme.background, color: currentTheme.textColor },
    formActions: { marginTop: '24px', display: 'flex', gap: '8px' },
    buttonPrimary: { flex: 1, padding: '12px', border: 'none', borderRadius: '8px', cursor: 'pointer', backgroundColor: currentTheme.primary, color: '#FFFFFF', fontSize: '1rem' },
    buttonSecondary: { flex: 1, padding: '12px', border: `1px solid ${currentTheme.subtleText}`, borderRadius: '8px', cursor: 'pointer', backgroundColor: 'transparent', color: currentTheme.subtleText, fontSize: '1rem' },
    criteriaTable: { width: '100%', borderCollapse: 'collapse', marginTop: '8px' },
    criteriaTableCell: { border: `1px solid ${currentTheme.cardBg === '#FFFFFF' ? '#E0E0E0' : '#333'}`, padding: '12px', textAlign: 'left', verticalAlign: 'top' },
    criteriaTableHeader: { fontWeight: 'bold', backgroundColor: currentTheme.primary + '10' },
    bookTable: { width: '100%', borderCollapse: 'collapse', marginTop: '8px', tableLayout: 'fixed' },
    bookTableLabelCell: { border: `1px solid ${currentTheme.cardBg === '#FFFFFF' ? '#E0E0E0' : '#333'}`, padding: '12px', textAlign: 'center', fontWeight: 'bold', backgroundColor: currentTheme.primary + '10', width: '120px' },
    bookTableCell: { border: `1px solid ${currentTheme.cardBg === '#FFFFFF' ? '#E0E0E0' : '#333'}`, padding: '12px', verticalAlign: 'top' },
  };

  return (
    <div style={styles.container}>
      <Sidebar theme={currentTheme} />

      <div style={styles.listColumn}>
        <div style={styles.searchForm}>
          <h2 style={{ ...styles.h1, fontSize: '1.8rem', margin: '0 0 24px 0' }}>シラバス検索</h2>
          <form onSubmit={handleSearch}>
            <div style={styles.formRow}>
              <label style={styles.formLabel}>年度</label>
              <input type="text" value={year} onChange={e => setYear(e.target.value)} style={styles.formInput} />
            </div>
            <div style={styles.formRow}>
              <label style={styles.formLabel}>開講所属</label>
              <select value={department} onChange={e => setDepartment(e.target.value)} style={styles.formInput}>
                <option value="">指定なし</option>
                {uniqueDepartments.map(dept => (
                  <option key={dept} value={dept}>{dept.split(' / ')[0]}</option>
                ))}
              </select>
            </div>
            <div style={styles.formRow}>
              <label style={styles.formLabel}>時間割コード</label>
              <input type="text" value={courseCode} onChange={e => setCourseCode(e.target.value)} style={styles.formInput} />
            </div>
            <div style={styles.formRow}>
              <label style={styles.formLabel}>開講科目名</label>
              <input type="text" value={title} onChange={e => setTitle(e.target.value)} style={styles.formInput} placeholder="科目名の一部を入力" />
            </div>
            <div style={styles.formActions}>
              <button type="submit" style={styles.buttonPrimary}>検索開始</button>
              <button type="button" onClick={handleClear} style={styles.buttonSecondary}>クリア</button>
            </div>
          </form>
        </div>
        <hr style={{border: 'none', borderTop: `1px solid ${currentTheme.cardBg === '#FFFFFF' ? '#E0E0E0' : '#333'}`}}/>
        <div>
          {searchResults.map((syllabus) => (
            <div key={syllabus.id} style={styles.listItem(syllabus.id === selectedSyllabusId)} onClick={() => setSelectedSyllabusId(syllabus.id)}>
              <div style={{ fontWeight: 'bold' }}>{syllabus.title}</div>
              <div style={{ fontSize: '0.9rem', color: currentTheme.subtleText }}>{syllabus.instructors.map(i => i.name).join(', ')}</div>
            </div>
          ))}
        </div>
      </div>

      <main style={styles.detailColumn}>
        {selectedSyllabus ? (
          <div>
            <h4 style={{ color: currentTheme.subtleText, fontWeight: 'normal'}}>{selectedSyllabus.department}／{selectedSyllabus.courseStudents}</h4>
            <h2 style={styles.h2}>{selectedSyllabus.title}</h2>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 'normal'}}>担当教員： {selectedSyllabus.instructors.map(i => i.name).join(', ')}</h4>
            <hr style={{ margin: '32px 0', border: 'none', borderTop: `1px solid ${currentTheme.cardBg === '#FFFFFF' ? '#E0E0E0' : '#333'}` }} />

            <nav>
              <button style={styles.tabButton(activeTab === 'basic')} onClick={() => setActiveTab('basic')}>基本情報</button>
              <button style={styles.tabButton(activeTab === 'detailed')} onClick={() => setActiveTab('detailed')}>詳細情報</button>
              <button style={styles.tabButton(activeTab === 'schedule')} onClick={() => setActiveTab('schedule')}>授業計画</button>
              <button style={styles.tabButton(activeTab === 'others')} onClick={() => setActiveTab('others')}>その他</button>

            </nav>

            <div style={styles.tabContent}>
              {activeTab === 'basic' && < BasicInfoTab syllabus={selectedSyllabus} /> }
              {activeTab === 'detailed' && < DetailedInfoTab syllabus={selectedSyllabus} />}
              {activeTab === 'schedule' && < ScheduleTab syllabus={selectedSyllabus} />}
              {activeTab === 'others' && < OthersTab syllabus={selectedSyllabus}/>}
            </div>
          </div>
        ) : (
          <div style={{ textAlign: 'center', color: currentTheme.subtleText, paddingTop: '100px' }}>
            <p>条件を入力して検索してください</p>
          </div>
        )}
      </main>
    </div>
  );
};