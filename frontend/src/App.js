import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import EmployeeList from "./components/EmployeeList";
import AddEmployee from "./components/AddEmployee";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Employee Management System</h1>
        <nav>
          <button>
            <Link to="/add-employee" className="links">Add Employee</Link>
          </button>
          <button>
            <Link to="/employee-list" className="links">View Employees</Link>
          </button>
        </nav>
        <Routes>
          <Route path="/add-employee" element={<AddEmployee />} />
          <Route path="/employee-list" element={<EmployeeList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
