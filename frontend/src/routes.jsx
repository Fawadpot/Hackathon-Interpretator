import React from "react";
import {
  ViewConversations,
  CreateConversation,
} from "./features/conversations";
import { Home } from "./features/home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/conversations" element={<ViewConversations />} />
        <Route path="/session" element={<CreateConversation />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
