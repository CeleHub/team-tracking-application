import React, { useState, useEffect } from "react";
// import './user.css';
import Added from "./Added";
import { getUsers, addUser, updateUser, deleteUser } from './dataStore';

const UserManagement = () => {
    const [users, setUsers] = useState([]);
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [team, setTeam] = useState("");
    const [role, setRole] = useState("");
    const [sex, setSex] = useState("");
    const [id, setId] = useState("");
    const [editIndex, setEditIndex] = useState(null);

    useEffect(() => {
        setUsers(getUsers());
    }, []);

    const handleAddUser = () => {
        if (firstname && lastname && team && role && sex && id) {
            const newUser = { firstname, lastname, team, role, sex, id };
            setUsers([...users, newUser]);
            addUser(newUser); // Add user to dataStore
            resetForm();
        }
    };

    const handleEditUser = (index) => {
        const user = users[index];
        setFirstName(user.firstname);
        setLastName(user.lastname);
        setTeam(user.team);
        setRole(user.role);
        setSex(user.sex);
        setId(user.id);
        setEditIndex(index);
    };

    const handleUpdateUser = () => {
        if (editIndex !== null) {
            const updatedUser = { firstname, lastname, team, role, sex, id };
            const updatedUsers = users.map((user, index) =>
                index === editIndex ? updatedUser : user
            );
            setUsers(updatedUsers);
            updateUser(id, updatedUser); // Update user in dataStore
            resetForm();
        }
    };

    const handleDeleteUser = (index) => {
        const userToDelete = users[index];
        const filteredUsers = users.filter((_, i) => i !== index);
        setUsers(filteredUsers);
        deleteUser(userToDelete.id); // Delete user from dataStore
    };

    const resetForm = () => {
        setFirstName("");
        setLastName("");
        setTeam("");
        setRole("");
        setSex("");
        setId("");
        setEditIndex(null);
    };

    return (
 






      <div>

        <div className="container">  <form className="container-fluid my-4 p-5 row g-3 needs-validation" novalidate>


          <div className="col-md-3">
            <label for="validationCustom01" className="form-label">First name</label>
            <input type="text" className="form-control" id="validationCustom01" placeholder="First Name" value={firstname}
              onChange={(e) => setFirstName(e.target.value)} required />
            <div className="valid-feedback">
              Looks good!
            </div>
          </div>
          <div className="col-md-3">
            <label for="validationCustom02" className="form-label">Last name</label>
            <input type="text" className="form-control" id="validationCustom02" placeholder="Last Name" value={lastname}
              onChange={(e) => setLastName(e.target.value)} required />
            <div className="valid-feedback">
              Looks good!
            </div>
          </div>

          <div className="col-md-2">
            <label for="validationCustomUsername" className="form-label">Team</label>
            <select className="form-select" id="validationCustomUsername" value={team}
              onChange={(e) => setTeam(e.target.value)} required>
              <option selected disabled value="">Choose...</option>
              <option>Team A</option>
              <option>Team B</option>
              <option>Team C</option>
              <option>Team D</option>
            </select>
            <div className="invalid-feedback">
              Please select a valid Team.
            </div>
          </div>
          <div className="col-md-2">
            <label for="validationCustom03" className="form-label">Id</label>
            <input type="text" className="form-control" id="validationCustom03" placeholder="Id" value={id}
              onChange={(e) => setId(e.target.value)} required />
            <div className="invalid-feedback">
              Please provide a Id.
            </div>
          </div>
          <div className="col-md-2">
            <label for="validationCustom04" className="form-label">Gender</label>
            <select className="form-select" id="validationCustom04" value={sex}
              onChange={(e) => setSex(e.target.value)} required>
              <option selected disabled value="">Choose...</option>
              <option>Male</option>
              <option>Female</option>
            </select>
            <div className="invalid-feedback">
              Please select a valid Gender.
            </div>
          </div>
          <div className="col-md-2">
            <label for="validationCustom05" className="form-label">Role</label>
            <input type="text" className="form-control" id="validationCustom05" placeholder="Role" value={role}
              onChange={(e) => setRole(e.target.value)} required />
            <div className="invalid-feedback">
              Please provide a valid Role.
            </div>
          </div>
          <div className="col-12">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required />
              <label className="form-check-label" for="invalidCheck">
                Agree to terms and conditions
              </label>
              <div className="invalid-feedback">
                You must agree before submitting.
              </div>
            </div>
          </div>
          {editIndex !== null ? (
            <button className="btn btn-danger" type="submit" onClick={handleUpdateUser}>Update User</button>
          ) : (
            <button className="btn btn-primary" type="submit" onClick={handleAddUser}>Add User</button>
          )}

        </form>
        </div>
      </div>
    );
};

export default UserManagement;
