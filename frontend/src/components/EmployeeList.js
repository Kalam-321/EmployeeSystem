import React, { useState, useEffect } from "react";
import { fetchEmployees } from "../services/employeeService";

const EmployeeList = () => {
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

  return (
    <div>
      <h2>Employee List</h2>
      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Salary</th>
            <th>Department</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => {
            let deptName = "";
            if (employee.DEPTID === 1) {
              deptName = "HR";
            } else if (employee.DEPTID === 2) {
              deptName = "Sales";
            } else {
              deptName = "Accounts";
            }

            return (
              <tr key={employee.name}>
                <td>{employee.NAME}</td>
                <td>{employee.EMAIL}</td>
                <td>{employee.SALARY}</td>
                <td>{deptName}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;
