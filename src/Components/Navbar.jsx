import React, { useContext } from 'react';
import { FaCartShopping } from "react-icons/fa6";
import { MdBookmarkAdd } from "react-icons/md";
import { Link, NavLink } from 'react-router';
import { CartContext } from '../Providers/Context';

const Navbar = () => {

    const { cart } = useContext(CartContext);



    const Links = <>

        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
        <li><NavLink to='/favorite' className='text-2xl'><MdBookmarkAdd /></NavLink></li>
        <li className='relative'>
            <NavLink to='/' className='text-2xl'>
                <FaCartShopping />
                <p>{cart.length}</p>
            </NavLink></li>
    </>
    return (
        <div className="navbar p-0 bg-base-100 shadow-sm  mx-auto px-8 md:px-12 lg:px-16 xl:px-24">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {Links}
                    </ul>
                </div>

                <Link to='/' className=" text-xl">FlagShipFaceOff</Link>
            </div>

            <div className="navbar-end  hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {Links}
                </ul>

            </div>
        </div>
    );
};

export default Navbar;