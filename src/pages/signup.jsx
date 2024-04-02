import React, { useState } from 'react';

const SignupPage = () => {
  const [name, setName] = useState('');
  const [language, setLanguage] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    // Implement your sign-up logic here
    alert('Sign Up Logic goes here.');
  };

  return (
    <div className="container">
      <h1 className="header">Sign Up!</h1>
      <p className="tagline">A platform for language learners. Join and kickstart your learning.</p>
      <input
        type="text"
        placeholder="Enter Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Select Your Language"
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
      />
      <input
        type="email"
        placeholder="Enter Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Enter Your Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="button" onClick={handleSignUp}>Sign Up</button>
      <button className="loginLink" onClick={() => alert('Go to Login')}>Already Have An Account? Login</button>
      <p className="smallPrint">
        By joining I declare that I have read and accept the Terms of Service and Privacy Policy
      </p>
    </div>
  );
};

export default SignupPage;
