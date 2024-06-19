// dataStore.js

let dataStore = JSON.parse(localStorage.getItem("users")) || [
  { name: "Alice", team: "Team A", role: "Developer", sex: "Female", id: "1" },
  { name: "Bob", team: "Team B", role: "Designer", sex: "Male", id: "2" },
  { name: "Carol", team: "Team C", role: "Manager", sex: "Female", id: "3" }
  ];
  // above are dummy datas
  
  const saveToLocalStorage = () => {
    localStorage.setItem("users", JSON.stringify(dataStore));
  };
  
  export const getUsers = () => {
    return [...dataStore];  // Return a copy of the dataStore
  };
  
  export const addUser = (user) => {
    dataStore = [...dataStore, user];  // Add the user to a new array
    saveToLocalStorage();
  };
  
  export const updateUser = (id, updatedUser) => {
    dataStore = dataStore.map((user) => (user.id === id ? updatedUser : user));  // Update the user in a new array
    saveToLocalStorage();
  };
  
  export const deleteUser = (id) => {
    dataStore = dataStore.filter((user) => user.id !== id);  // Remove the user from a new array
    saveToLocalStorage();
  };
  
  export default dataStore;
  