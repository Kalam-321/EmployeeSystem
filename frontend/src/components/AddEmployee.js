import React, { useState, useEffect } from "react";
import { createEmployee, fetchEmployees } from "../services/employeeService";

const AddEmployee = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    salary: "",
    deptId: "",
  });

  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const loadEmployees = async () => {
      try {
        const data = await fetchEmployees();
        setEmployees(data);
      } catch (error) {
        console.error("Error while loading employees", error);
      }
    };
    loadEmployees();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.salary < 1500) {
        alert("Salary must be at least 1500.");
        return;
      }
    try {
      // Check for duplicate email
      const isDuplicate = employees.some((emp) => emp.EMAIL === formData.email);

      if (isDuplicate) {
        alert("Employee with this email already exists.");
        return;
      }

      const newEmployee = await createEmployee(formData);
      alert(`Employee created with id ${newEmployee.id}`);
      setFormData({
        name: "",
        email: "",
        salary: "",
        deptId: "",
      });

      const updatedEmployees = await fetchEmployees();
      setEmployees(updatedEmployees);
    } catch (error) {
      console.error("Error while creating employee", error);
    }
  };

  return (
    <div>
      <h2>Add Employee</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="number"
          name="salary"
          placeholder="Salary"
          value={formData.salary}
          onChange={handleChange}
        />
        <input
          type="number"
          name="deptId"
          placeholder="Dept Id"
          value={formData.deptId}
          onChange={handleChange}
        />
        <button type="submit">Add Employee</button>
      </form>
    </div>
  );
};

export default AddEmployee;
