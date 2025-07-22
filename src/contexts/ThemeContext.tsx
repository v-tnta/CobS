import React, { createContext, useState, useMemo, useContext } from 'react';

// テーマの型定義
type Theme = {
    background: string;
    cardBg: string;
    textColor: string;
    subtleText: string;
    primary: string;
    accent: string;
    fontFamilyBody: string;
    fontFamilyHeading: string;
};

// ライトテーマとダークテーマの定義
const lightTheme: Theme = { background: '#F8F9FA', cardBg: '#FFFFFF', textColor: '#212529', subtleText: '#6C757D', primary: '#005FAC', accent: '#E74C3C', fontFamilyBody: '"BIZ UDPGothic", sans-serif', fontFamilyHeading: '"BIZ UDPMincho", serif' };
const darkTheme: Theme = { background: '#121212', cardBg: '#1E1E1E', textColor: '#EAEAEA', subtleText: '#A0A0A0', primary: '#4D96FF', accent: '#FF7B7B', fontFamilyBody: '"BIZ UDPGothic", sans-serif', fontFamilyHeading: '"BIZ UDPMincho", serif' };

// Contextが提供する値の型
type ThemeContextType = {
  isDarkMode: boolean;
  toggleTheme: () => void;
  currentTheme: Theme;
};

// Contextオブジェクトを作成
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// アプリケーション全体をラップするプロバイダーコンポーネント
export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  const currentTheme = useMemo(() => (isDarkMode ? darkTheme : lightTheme), [isDarkMode]);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme, currentTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// 簡単にContextを呼び出すためのカスタムフック
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};