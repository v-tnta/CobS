import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

// --- 型定義 ---
type SidebarProps = {
  theme: {
    textColor: string;
    primary: string;
    fontFamilyHeading: string;
    cardBg: string;
  };
};

type SubMenuItem = {
  path: string;
  label: string;
};

type MenuItem = {
  id: string;
  label: string;
  path?: string;
  subItems?: SubMenuItem[];
};

// --- メニューの構造データ ---
const menuItems: MenuItem[] = [
    { id: 'home', label: 'ホーム', path: '/' },
    { id: 'academics', label: '学修', subItems: [ { path: '/timetable', label: '時間割' }, { path: '/syllabus', label: 'シラバス' }, { path: '/registration', label: '履修' }, { path: '/grades', label: '成績と単位' }, { path: '/attendance', label: '出席' }, { path: '/teacher-cert', label: '教職課程・教員免許' } ] },
    { id: 'bulletin', label: '掲示・アンケート', subItems: [ { path: '/announcements', label: '掲示板' }, { path: '/surveys', label: 'アンケート' } ] },
    { id: 'procedures', label: '手続き・申請', subItems: [ { path: '/profile', label: '学生情報の確認・変更' }, { path: '/applications', label: '各種申請' }, { path: '/student-record', label: '学生カルテ' } ] },
    { id: 'other', label: 'その他', subItems: [ { path: '/facility-status', label: '施設利用状況' }, { path: '/settings', label: '設定' }, { path: '/email-settings', label: 'メール配信設定' }, { path: '/guardian-password', label: '保証人パスワード初期化' }, { path: '/link-registration', label: '個人リンク登録' }, { path: '/my-activity', label: 'マイアクティビティ' } ] },
];


export const Sidebar = ({ theme }: SidebarProps) => {
  const location = useLocation();
  const [openMenus, setOpenMenus] = useState<string[]>([]);

  const handleMenuClick = (menuId: string) => {
    setOpenMenus(prevOpenMenus => {
      if (prevOpenMenus.includes(menuId)) {
        return prevOpenMenus.filter(id => id !== menuId);
      } else {
        return [...prevOpenMenus, menuId];
      }
    });
  };
  
  // --- スタイル定義（完全版） ---
  const styles = {
    nav: {
      width: '240px',
      flexShrink: 0,
      backgroundColor: theme.cardBg,
      borderRight: `1px solid ${theme.cardBg === '#FFFFFF' ? '#E0E0E0' : '#333'}`,
      padding: '24px',
      boxSizing: 'border-box',
    } as React.CSSProperties,
    menuHeader: {
      padding: '12px 16px',
      borderRadius: '8px',
      fontSize: '1.2rem',
      fontWeight: 'bold',
      cursor: 'pointer',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      userSelect: 'none', // テキスト選択を防ぐ
    } as React.CSSProperties,
    subItemsContainer: (isOpen: boolean) => ({
      listStyle: 'none',
      paddingLeft: '16px',
      margin: 0,
      maxHeight: isOpen ? '500px' : '0', // 開閉アニメーションの核
      overflow: 'hidden',
      transition: 'max-height 0.3s ease-in-out',
    }),
    subItemLink: (isActive: boolean) => ({
      display: 'block',
      padding: '10px 16px',
      borderRadius: '8px',
      textDecoration: 'none',
      color: theme.textColor,
      fontSize: '1rem',
      backgroundColor: isActive ? theme.primary + '20' : 'transparent',
      transition: 'background-color 0.2s',
    }),
  };

  return (
    <nav style={styles.nav}>
      <h1 style={{ fontFamily: theme.fontFamilyHeading, fontSize: '2rem', color: theme.primary, margin: '0 0 40px 0' }}>CobS</h1>
      
      {menuItems.map((item) => (
        <div key={item.id}>
          {item.subItems ? (
            <div>
              <div style={styles.menuHeader} onClick={() => handleMenuClick(item.id)}>
                <span>{item.label}</span>
                <span style={{fontWeight:'normal', transform: openMenus.includes(item.id) ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }}>v</span>
              </div>
              <ul style={styles.subItemsContainer(openMenus.includes(item.id))}>
                {item.subItems.map((subItem) => (
                  <li key={subItem.path}>
                    <Link to={subItem.path} style={styles.subItemLink(location.pathname.startsWith(subItem.path))}>
                      {subItem.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            item.path && <Link to={item.path} style={{...styles.menuHeader, textDecoration: 'none', color: theme.textColor, display: 'block'}}>
              {item.label}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
};