
import { Link } from 'react-router-dom';
import UserManagement from './userManagement';
import Navbar from '../navbar/navbar';



function Manageemployee() {
    return (
        <div><Navbar/>
            <div className='container'>
                <h1 className='text-center text-primary'>NEW EMPLOYEE? ADD DETAILS HERE</h1>
            </div>
            <UserManagement/>
            
        </div>        
    );
}





export default Manageemployee;
