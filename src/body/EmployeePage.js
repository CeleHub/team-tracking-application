import React, { useState, useEffect } from 'react';
import './index.css';
import female from "../images/female.jpg";
import male from "../images/male.jpg";
import { Link } from 'react-router-dom';
import Navbar from '../navbar/navbar';
import Footer from '../navbar/footer';
import { getUsers, deleteUser, updateUser } from './dataStore';

const EmployeePage = () => {
  const [employeeData, setEmployeeData] = useState([]);
  const [selectedTeam, setSelectedTeam] = useState('Team A');
  const [editingEmployee, setEditingEmployee] = useState(null);
  const [editedEmployee, setEditedEmployee] = useState({});

  useEffect(() => {
    setEmployeeData(getUsers());
  }, []);

  const handleTeamChange = (event) => {
    setSelectedTeam(event.target.value);
  };

  const handleDeleteUser = (id) => {
    deleteUser(id);
    setEmployeeData(getUsers());
  };

  const handleEditUser = (employee) => {
    setEditingEmployee(employee);
    setEditedEmployee(employee);
  };

  const handleSaveEdit = () => {
    updateUser(editedEmployee);
    setEmployeeData(getUsers());
    setEditingEmployee(null);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedEmployee({ ...editedEmployee, [name]: value });
  };

  const filteredData = employeeData.filter(employee => employee.team === selectedTeam);

  return (
    <>
      <Navbar />
      <div className="containerEmployee">
        <div className="header">
          <Link to="/">Home page</Link>
          <select id="team-filter" value={selectedTeam} onChange={handleTeamChange} className="dropdown">
            <option value="Team A">Team A</option>
            <option value="Team B">Team B</option>
            <option value="Team C">Team C</option>
            <option value="Team D">Team D</option>
          </select>
        </div>
        <div className="employee-grid">
          {filteredData.map(employee => (
            <div key={employee.id} className="employee-card">
              <img className="employee-img" src={employee.sex === 'Female' ? female : male} alt={employee.sex} />
              <div className="employee-details">
                <h5 className="employee-name">{employee.firstname} {employee.lastname}</h5>
                <p className="employee-info"><strong>Role:</strong> {employee.role}</p>
                <p className="employee-info"><strong>Team:</strong> {employee.team}</p>
                <p className="employee-info"><strong>id:</strong> {employee.id}</p>
                {editingEmployee && editingEmployee.id === employee.id ? (
                  <form>
                    <input type="text" name="firstname" value={editedEmployee.firstname} onChange={handleInputChange} />
                    <input type="text" name="lastname" value={editedEmployee.lastname} onChange={handleInputChange} />
                    <input type="text" name="role" value={editedEmployee.role} onChange={handleInputChange} />
                    <input type="text" name="team" value={editedEmployee.team} onChange={handleInputChange} />
                    <input type="text" name="sex" value={editedEmployee.sex} onChange={handleInputChange} />
                    <button onClick={handleSaveEdit}>Save</button>
                  </form>
                ) : (
                  <>
                    <button onClick={() => handleEditUser(employee)} className="btn btn-primary">Edit</button>
                    <button onClick={() => handleDeleteUser(employee.id)} className="btn btn-danger">Delete</button>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EmployeePage;
