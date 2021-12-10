import React from 'react'
import { Nav } from './NavbarStyle';
import logo from './virus_cell_outlined.png';
// import { MdHome } from "react-icons/md";

const Navbar = () => {
    return (
        <>
            <Nav>
                <a href="/">
                    <img src={logo} alt="logo" />
                </a>
            </Nav>
        </>
    )
}

export default Navbar;
