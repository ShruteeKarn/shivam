import React from 'react';

const LanguageSelectionPage = () => {
  const handleLanguageSelect = (language) => {
    // Handle language selection
    console.log(`Selected language: ${language}`);
  };

  const handleContinue = () => {
    // Handle continue action
    alert('Continue to the next step');
  };

  return (
    <div className="container">
      <h1 className="logo">P</h1>
      <h2 className="question">What Would You Like To Learn</h2>
      <div className="languageGrid">
        {/* Map your language buttons here */}
        <button className="languageButton" onClick={() => handleLanguageSelect('English')}>
          {/* Replace with actual flag images */}
          <img src={require('./flags/uk.png')} alt="English Flag" className="flag" />
          <span>English</span>
        </button>
        {/* Repeat for other languages */}
      </div>
      <button className="continueButton" onClick={handleContinue}>
        Continue
      </button>
    </div>
  );
};

export default LanguageSelectionPage;
