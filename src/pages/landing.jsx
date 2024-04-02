import React from 'react';

const LessonLandingPage = () => {
  const startLesson = () => {
    // Logic to start the lesson
    console.log('Lesson started!');
  };

  return (
    <div className="container" style={{ backgroundColor: '#7E57C2', alignItems: 'center', justifyContent: 'center', padding: 20 }}>
      <div className="iconContainer" style={{ /* Add styles for the icon container */ }}>
        {/* Replace with actual rocket icon */}
        <span className="rocketIcon" style={{ fontSize: 50, marginBottom: 20 }}>🚀</span>
      </div>
      <h1 className="welcomeText" style={{ color: '#FFFFFF', fontSize: 24, fontWeight: 'bold', marginBottom: 10 }}>Welcome To Your First Spanish Lesson!</h1>
      <p className="letsDoThisText" style={{ color: '#FFFFFF', fontSize: 18, marginBottom: 30 }}>Let's Do This.</p>
      <button className="startButton" style={{ borderColor: '#FFFFFF', borderWidth: 2, borderRadius: 5, padding: 15 }} onClick={startLesson}>
        <span className="startButtonText" style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 'bold' }}>Start Lesson</span>
      </button>
    </div>
  );
};

export default LessonLandingPage;
