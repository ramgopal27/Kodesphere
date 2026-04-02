import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import TaskList from "./pages/TaskList";
import TaskForm from "./pages/TaskForm";

function App() {
  return (
    <Router>
      <div className="app">
        <Sidebar />

        <div className="main">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/tasks" element={<TaskList />} />
            <Route path="/create" element={<TaskForm />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

