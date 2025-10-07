// src/App.jsx
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home.jsx";
import MeetTheTeam from "./pages/MeetTheTeam.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/our-people" element={<MeetTheTeam />} />
      {/* keep your other routes as needed */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
