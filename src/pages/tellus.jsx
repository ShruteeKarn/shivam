import React, { useState } from 'react';

const MotivationPage = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const options = [
    { key: 'work', label: 'Work', icon: require('./icons/briefcase.png') },
    { key: 'school', label: 'School', icon: require('./icons/graduation-cap.png') },
    { key: 'travel', label: 'Travel', icon: require('./icons/airplane.png') },
    { key: 'culture', label: 'Culture', icon: require('./icons/book.png') },
    { key: 'family', label: 'Family & Community', icon: require('./icons/people.png') },
    { key: 'challenge', label: 'Challenge Myself', icon: require('./icons/weights.png') },
    { key: 'other', label: 'Other', icon: require('./icons/dots.png') },
  ];

  const handleSelectOption = (key) => {
    setSelectedOption(key);
    // Handle the selection
  };

  const handleContinue = () => {
    // Proceed to the next step
    alert(`Selected motivation: ${selectedOption}`);
  };

  return (
    <div className="container">
      <h1 className="logo">LLP</h1>
      <h2 className="title">Tell Us About You!</h2>
      <p className="question">Hi Shivam, Why are you learning Spanish?</p>
      <p className="subtext">Assistance in personalizing your path to learning.</p>
      <div className="optionsContainer">
        {options.map((option) => (
          <button
            key={option.key}
            className={`option ${selectedOption === option.key ? 'selectedOption' : ''}`}
            onClick={() => handleSelectOption(option.key)}
          >
            <img src={option.icon} alt={option.label} className="icon" />
            <span className="optionLabel">{option.label}</span>
          </button>
        ))}
      </div>
      <button className="continueButton" onClick={handleContinue}>
        Continue
      </button>
    </div>
  );
};

export default MotivationPage;
