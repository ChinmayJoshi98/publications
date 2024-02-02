import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <div className="navbar">
            <h1>Publication Center</h1>
            <div className="links">
                <Link to="/addUser" className='linkSec'>Add a User</Link>
                <Link to="/addPublication" className='linkSec'>Add a Publication</Link>
                <Link to="/" className='linkSec'>Home</Link>
            </div>  
        </div>
     );
}
 
export default Navbar;