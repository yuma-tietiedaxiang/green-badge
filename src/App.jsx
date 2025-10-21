import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import MyBadges from "./pages/MyBadges.jsx";
import Statistics from "./pages/Statistics.jsx";
import { BadgeUnlock } from "./components/BadgeUnlock.jsx";

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const navigate = useNavigate();

  const handleCheckBadges = () => {
    setShowSplash(false);
    navigate("/my-badges");
  };

  if (showSplash) {
    return <BadgeUnlock onCheckBadges={handleCheckBadges} />;
  }

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<MyBadges />} />
        <Route path="/my-badges" element={<MyBadges />} />
        <Route path="/statistics" element={<Statistics />} />
      </Routes>
    </Layout>
  );
}

export default App;
