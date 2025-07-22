import React from 'react';
import { type Syllabus } from '../../data/mockSyllabusData';
import { useTheme } from '../../contexts/ThemeContext';

type Props = {
  syllabus: Syllabus;
};

export const ScheduleTab = ({ syllabus }: Props) => {
  const { currentTheme } = useTheme();

  return (
    <div>
      {syllabus.weeklyPlan.map(plan => (
        <div key={plan.week} style={{borderBottom: `1px solid ${currentTheme.cardBg === '#FFFFFF' ? '#F0F0F0' : '#333'}`, padding: '16px 0', marginBottom: '16px'}}>
          <h1 style={{fontWeight: 'bold', fontSize: '1.1rem'}}>第{plan.week}回: {plan.subject}</h1>
          <p style={{fontSize: '1rem', lineHeight: 1}}>{plan.content}</p>
          <p style={{fontSize: '0.9rem', color: currentTheme.subtleText}}>備考: {plan.notes}</p>
        </div>
      ))}
    </div>
  );
};