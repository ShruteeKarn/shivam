import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/login";
import LanguageLearningApp from "./pages/learn";
import CourseCard from "./pages/course";
import UserProfile from "./pages/userprofile";
import SignupPage from "./pages/signup";
// import TVShows from "./pages/TVShows";
// import Info from "./pages/Info";
// import UserListedMovies from "./pages/UserListedMovies";
// import SubscriptionPlan from "./pages/subscribe";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/signup" element={<SignupPage />} />
        <Route exact path="/learn" element={<LanguageLearningApp />} />
        {/* <Route exact path="/review" element={<TVShows />} />
        <Route exact path="/community" element={<MoviePage />} /> */}
        <Route exact path="/cources" element={<CourseCard />} />
        <Route exact path="/profile" element={<UserProfile />} />
        {/* <Route exact path="/mylist" element={<UserListedMovies />} />
        <Route exact path="/subscribe"  element={<SubscriptionPlan />} />
        <Route exact path="/"  element={<WatchWave />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
