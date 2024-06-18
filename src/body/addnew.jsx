import './user.css';
import { Link } from 'react-router-dom';
import Navbar from '../navbar/navbar';
import Footer from '../navbar/footer';
import UserManagement from './userManagement';





function Addnew() {
    return (
        <>
            <Navbar/>
            <div className="container my-4">

                <div className="p-5 text-center bg-body-tertiary  rounded-3">
                    <h1 className="display-1">Employee Management System</h1>
                    <h1 className="display-1">Add New Employee</h1>
                    <p className="col-lg-8 mx-auto fs-5 text-muted">
                        This is the Employee management system, record, file and collate all employee data at one stop place, easily accessible and fast. Just the place when it comes to data on employee
                    </p>
                    <div className="d-inline-flex gap-4 mb-5">

                        <Link className="d-inline-flex align-items-center btn btn-primary btn-lg px-4 rounded-pill" to="/">Home
                            <div className="m-1"><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-house-door-fill" viewBox="0 0 16 16">
                                <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5" />
                            </svg></div>
                        </Link>


                        
                    </div>
                </div>
            </div>

            <div className="container my-4">

                <div className="p-5 text-center bg-body-tertiary  rounded-3">

                    <h1 className="display-1"> Add, Edit and Delete </h1>


                </div>
            </div>




            <UserManagement/>

            
                    {/* <div className='align-items-center container d-flex justify-content-center my-4'>
                        <div className="">
                        <Link className="btn btn-primary btn-lg px-4 rounded-pill" >
                            Add New              
                            
                        </Link>
                        </div>
                    </div> */}
              

            <Footer />
        </>
    );
}

export default Addnew;
