import React, { useState } from 'react';

const StudyGoalPage = () => {
  const [selectedGoal, setSelectedGoal] = useState('');

  const goals = [
    { time: '5 Minutes / Day', label: 'Casual', color: '#9575CD' },
    { time: '10 Minutes / Day', label: 'Regular', color: '#7986CB' },
    { time: '15 Minutes / Day', label: 'Serious', color: '#BA68C8' },
    { time: '20 Minutes / Day', label: 'Intense', color: '#E040FB' },
  ];

  const handleGoalSelect = (goal) => {
    setSelectedGoal(goal);
    // Implement goal selection logic
  };

  const handleCommit = () => {
    // Implement commit to daily goal logic
    alert(`Committed to: ${selectedGoal}`);
  };

  return (
    <div className="container" style={{ backgroundColor: '#7E57C2', alignItems: 'center', justifyContent: 'center', padding: 20 }}>
      <div className="header" style={{ flexDirection: 'row', justifyContent: 'space-around', width: '100%', marginBottom: 30 }}>
        {/* Replace with actual logos or icons */}
        <h1 className="logo">LL</h1>
        <h1 className="logo">LL</h1>
      </div>
      <h2 className="title" style={{ color: '#FFFFFF', fontSize: 24, fontWeight: 'bold', marginBottom: 10 }}>Set a daily study goal!</h2>
      <p className="subtitle" style={{ color: '#FFFFFF', fontSize: 18, marginBottom: 20 }}>Create a learning habit to improve your Spanish.</p>
      {goals.map((goal, index) => (
        <button
          key={index}
          className="goalButton"
          style={{ padding: 15, borderRadius: 5, marginBottom: 10, backgroundColor: goal.color }}
          onClick={() => handleGoalSelect(goal.label)}
        >
          <span className="goalText" style={{ color: '#FFFFFF', fontSize: 16 }}>{goal.time} {goal.label}</span>
        </button>
      ))}
      <p className="note" style={{ color: '#FFFFFF', fontSize: 14, textAlign: 'center', marginVertical: 20 }}>
        In 28 days, you'll prepare for your trip by learning how to introduce yourself and order tapas.
      </p>
      <button className="commitButton" style={{ backgroundColor: '#AB47BC', padding: 15, borderRadius: 5 }} onClick={handleCommit}>
        <span className="commitButtonText" style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 'bold' }}>Commit to daily Goal</span>
      </button>
    </div>
  );
};

export default StudyGoalPage;
