import React, { useState } from 'react';
import './index.css'; 
import female from "../images/female.jpg";
import male from "../images/male.jpg";
import { Link } from 'react-router-dom';

const EmployeePage = () => {
    // Dummy employee data stored in state
    const [employeeData, setEmployeeData] = useState([
        { id: 1, name: 'John Doe', sex: 'Male', role: 'Developer', team: 'Team A' },
        { id: 2, name: 'Jane Smith', sex: 'Female', role: 'Designer', team: 'Team B' },
        { id: 3, name: 'Michael Johnson', sex: 'Male', role: 'Manager', team: 'Team C' },
        { id: 4, name: 'Emily Brown', sex: 'Female', role: 'Developer', team: 'Team D' },
        { id: 5, name: 'Daniel Lee', sex: 'Male', role: 'Designer', team: 'Team B' },
        { id: 6, name: 'Sophia Martinez', sex: 'Female', role: 'Manager', team: 'Team C' },
        { id: 7, name: 'David Wilson', sex: 'Male', role: 'Developer', team: 'Team A' },
        { id: 8, name: 'Olivia Johnson', sex: 'Female', role: 'Designer', team: 'Team B' },
        { id: 9, name: 'Ethan Thompson', sex: 'Male', role: 'Manager', team: 'Team D' },
        { id: 10, name: 'Isabella White', sex: 'Female', role: 'Developer', team: 'Team A' },
        { id: 11, name: 'Alexander Harris', sex: 'Male', role: 'Designer', team: 'Team D' },
        { id: 12, name: 'Emma Garcia', sex: 'Female', role: 'Manager', team: 'Team C' },
        { id: 13, name: 'William Rodriguez', sex: 'Male', role: 'Developer', team: 'Team C' },
        // Add more employees as needed
    ]);

    // State to track the selected team
    const [selectedTeam, setSelectedTeam] = useState('Team A');

    // Function to handle team change
    const handleTeamChange = (event) => {
        setSelectedTeam(event.target.value);
    };

    // Count the number of employees in each team


    // Filter employees based on selected team
    const filteredData = employeeData.filter(employee => employee.team === selectedTeam);

    

    return (
        <div className="container">
            <div className="header">
                
                {/* Dropdown menu to select team */}
               
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
                            <h5 className="employee-name">{employee.name}</h5>
                            <p className="employee-info"><strong>Role:</strong> {employee.role}</p>
                            <p className="employee-info"><strong>Team:</strong> {employee.team}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EmployeePage;
