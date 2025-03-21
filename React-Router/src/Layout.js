import React from "react";
import { Link, Outlet } from "react-router-dom";

function Layout() {
    return (
        <div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>

            {/* Render the child route component here */}
            <Outlet />
        </div>
    );
}

export default Layout;
