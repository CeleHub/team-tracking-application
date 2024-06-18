import { Link } from 'react-router-dom';




function Navbar() {
  return (
 <>
 <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <div className="col-md-3 mb-2 mb-md-0">
        <Link className="d-inline-flex link-body-emphasis text-decoration-none">
        </Link>
      </div>

      <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li><Link className="nav-link px-2 link-secondary" to={"/"}>Home</Link></li>
        <li><Link className="nav-link px-2 link-scondary" to={"/manageemployee"}>Manage Employee</Link></li>
        <li><Link className="nav-link px-2 link-scondary" to={"/employees"}>Employee Page</Link></li>
      </ul>

      <div className="col-md-3 text-end">
        <button type="button" className="btn btn-outline-primary me-2" to={"/"}>Login</button>
        <button type="button" className="btn btn-primary">Sign-up</button>
      </div>
    </header>
 </>
  );
}

export default Navbar;


