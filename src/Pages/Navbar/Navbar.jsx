import { useContext } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaUserCircle } from 'react-icons/fa';


const Navbar = () => {

    const locations = useLocation();
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/' className={locations.pathname === '/' ? "font-bold bg-purple-800 text-white uppercase" : ''}>HOME</Link></li>
                        <li><Link to='/college' className={locations.pathname === '/college' ? "font-bold bg-purple-800 text-white uppercase" : ''}>COLLEGE</Link></li>
                        <li><Link to='/admission' className={locations.pathname === '/admission' ? "font-bold bg-purple-800 text-white uppercase" : ''}>Admission</Link></li>
                        {user &&
                            <li><Link to='/myCollege' className={locations.pathname === '/myCollege' ? "font-bold bg-purple-800 text-white uppercase" : ''}>My College</Link></li>}
                        {user &&
                            <li><Link to='/profile'>Profile</Link></li>}
                        {user ?
                            (<div className='flex items-center mt-5'>
                                <Link to="/login" onClick={handleLogOut} className="px-5 py-3 rounded-md text-white font-bold bg-purple-800 border-none ">Logout</Link>
                            </div>) : (<Link to="/login" className="btn border-none bg-purple-800 text-white">Login</Link>)}
                    </ul>

                </div>
                <a className="btn btn-ghost text-xl uppercase font-extrabold">Academe link</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to='/' className={locations.pathname === '/' ? "font-bold bg-purple-800 text-white uppercase" : ''}>Home</Link></li>
                    <li><Link to='/college' className={locations.pathname === '/college' ? "font-bold bg-purple-800 text-white uppercase" : ''}>Colleges</Link></li>
                    <li><Link to='/admission' className={locations.pathname === '/admission' ? "font-bold bg-purple-800 text-white uppercase" : ''}>Admission</Link></li>
                    {user &&
                        <li><Link to='/myCollege' className={locations.pathname === '/myCollege' ? "font-bold bg-purple-800 text-white uppercase" : ''}>My College</Link></li>}
                </ul>
            </div>
            <div className="navbar-end">
                {user ?
                    (<div className='flex items-center'>
                        <div className="dropdown dropdown-end">
                        <span tabIndex={0} className="mr-2 cursor-pointer font-bold hidden sm:block">{user.displayName}</span>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                <li><Link to='/profile'>Profile</Link></li>
                                <li><Link to="/login" onClick={handleLogOut} className="px-5 py-3 rounded-md text-white font-bold bg-purple-800 border-none hidden lg:block ">Logout</Link></li>
                            </ul>
                        </div>
                        {user.photoURL ? <img className='w-8 h-8 lg:w-12 lg:h-12 rounded-full mr-2' src={user.photoURL} alt={user.displayName} title={user.displayName}
                        /> : <FaUserCircle className='w-8 h-8 lg:w-12 lg:h-12 rounded-full mr-2' title={user.displayName} />}

                        
                    </div>) : (<Link to="/login" className="btn border-none bg-purple-800 text-white">Login</Link>)}
            </div>
        </div>
    );
};

export default Navbar;