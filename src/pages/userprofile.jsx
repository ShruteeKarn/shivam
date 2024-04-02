import React, { useState } from 'react';

const NavigationBar = () => (
  <nav className="navigation-bar">
    <ul>
      <li>Learn</li>
      <li>Review</li>
      <li>Community</li>
      <li>Courses</li>
    </ul>
  </nav>
);

const UserProfile = ({ name, location }) => (
  <div className="user-profile">
    <img src="profile-pic-url" alt="Profile" />
    <h3>{name}</h3>
    <p>{location}</p>
  </div>
);

const FluencySection = ({ fluency, wordsLearned, certificates }) => (
  <div className="fluency-section">
    <h4>Fluency</h4>
    <p>{fluency}%</p>
    <p>Words Learned: {wordsLearned}</p>
    <p>Certificates: {certificates}</p>
  </div>
);

const LearningApp = () => {
  const [user] = useState({
    name: 'Molik Shreemali',
    location: 'India',
    fluency: 1,
    wordsLearned: 3,
    certificates: 0,
  });

  return (
    <div className="learning-app">
      <NavigationBar />
      <UserProfile name={user.name} location={user.location} />
      <FluencySection
        fluency={user.fluency}
        wordsLearned={user.wordsLearned}
        certificates={user.certificates}
      />
      {/* Additional sections can be added here */}
    </div>
  );
};

export default LearningApp;
