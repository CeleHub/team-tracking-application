// Added.jsx
import React, { useEffect } from 'react';
import dataStore from './dataStore';

const Added = ({ handleDeleteUser, handleEditUser, users }) => {
  useEffect(() => {
    dataStore.push(...users);
    console.log('Current dataStore:', dataStore);
  }, [users]);

  return (
    <div className="container">
      {users.map((user, index) => (
        <div key={index}>
          <div className="card">
            <div className="card-header"> {user.name}'s Information </div>
            <div className="card-body">
              <p><span>Name:</span> {user.name} </p>
              <p><span>Role:</span> {user.role}</p>
              <p><span>Sex:</span> {user.sex}</p>
              <p><span>Team:</span> {user.team}</p>
              <p><span>ID:</span> {user.id}</p>
            </div>
            <button className="btn btn-primary  m-2" onClick={() => handleEditUser(index)}>Edit</button>
            <button className="btn btn-danger m-2" onClick={() => handleDeleteUser(index)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Added;
