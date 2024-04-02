import React from 'react';

function CourseCard({ title, progress, onContinue }) {
  return (
    <div className="course-card">
      <h2>{title}</h2>
      <p>Beginner, Intermediate and Advanced Lessons</p>
      <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      <button onClick={onContinue}>Resume</button>
    </div>
  );
}

function LearningPlatform() {
  // Dummy data for the courses
  const courses = [
    { title: 'Complete Spanish', progress: 60 },
    // Add more courses here
  ];

  return (
    <div className="learning-platform">
      <nav>
        <ul>
          <li>Learn</li>
          <li>Review</li>
          <li>Community</li>
          <li>Courses</li>
        </ul>
      </nav>
      <header>
        <h1>Spanish Course - In Progress</h1>
      </header>
      <section>
        {courses.map((course, index) => (
          <CourseCard
            key={index}
            title={course.title}
            progress={course.progress}
            onContinue={() => console.log('Continue course')}
          />
        ))}
      </section>
    </div>
  );
}

export default LearningPlatform;
