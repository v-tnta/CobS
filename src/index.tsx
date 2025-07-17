import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // 全体スタイルを読み込む
import { App } from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);