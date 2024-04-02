import React from 'react';

const LanguageLearningApp = () => {
  // Add any state hooks or functions you need for interaction

  return (
    <div className="container" style={{ flex: 1, backgroundColor: '#fff' }}>
      <div className="topBar" style={{ flexDirection: 'row', justifyContent: 'space-around', backgroundColor: 'purple', padding: 10 }}>
        {/* Replace with icons for "Learn", "Review", "Community", "Courses", and "Profile" */}
        <span className="icon">Learn</span>
        <span className="icon">Review</span>
        <span className="icon">Community</span>
        <span className="icon">Courses</span>
        <span className="icon">Profile</span>
      </div>
      <h1 className="title" style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginVertical: 20 }}>Complete Spanish</h1>
      <div className="card" style={{ backgroundColor: 'white', margin: 20, padding: 20, borderRadius: 10 }}>
        <h2 className="chapterTitle" style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>Chapter 1: Introductions</h2>
        {/* Map through your sections here */}
        <button className="section" style={{ /* Add styles for section */ }}>
          <h3 className="sectionTitle" style={{ fontSize: 18, fontWeight: 'bold' }}>¡Hola!</h3>
          <p className="sectionSubtitle" style={{ fontSize: 16 }}>Learn Some Greeting</p>
        </button>
        {/* Repeat for other sections */}
      </div> 
    </div>
  );
};

export default LanguageLearningApp;
