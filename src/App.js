import './App.css';
import { Link } from 'react-router-dom';
// import AddEmployee from './AddEmployee'
import Navbar from './navbar/navbar';
import Footer from './navbar/footer';
import Firstpage from './body/firstpage';




function App() {
  return (
    <>
      <Navbar />
      <Firstpage/>
      <Footer />
      {/* <h1>Home Page</h1>
      <Link to="/employees" id="employee">Employee</Link>
      <Link to="/addemployees">Add Employee</Link> */}


      
    </>
  );
}

export default App;
