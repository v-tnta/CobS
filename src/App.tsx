
// src/App.tsx (修正後)

import { Routes, Route } from 'react-router-dom';
import { Dashboard } from './components/Dashboard';
import { SyllabusSearch } from './components/SyllabusSearch'; 

export function App() {
  return (
  <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/syllabus" element={<SyllabusSearch />} />
  {/* 他のルートも同様に追加... */}
  </Routes>
  )
}