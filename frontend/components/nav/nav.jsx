import React from 'react';
import { Link } from 'react-router-dom';
// import Dropdown from 'react-dropdown'
const Nav = ({ currentUser, logout }) =>{
    console.log(currentUser)
        // const options = ["Profile", "Home", "Signout"]
        // const defaultOption = options[0]
        let loggedIn = true
    const dropdownLinks = () =>(
        <nav className="top-nav">
            <section className="nav-container-logo">
                <img src="" alt="logo" className="welcome--logo" />
                <Link to="/">
                    <h1>Andromedia</h1>
                </Link>
            </section>

            <section className="search">
                <input type="text" />Searchbar goes here
            </section>

            <section className="dropdown">
                <h2 className="header-name">Hi, {currentUser.username}!</h2>
                <button className="header-button" onClick={logout}>Log Out</button>
            </section>
        </nav>
    );
    const sessionLinks = () => (
        <nav className="top-nav">
            <section className="nav-container-logo">
                <img src="" alt="logo" className="welcome--logo" />
                <Link to="/">
                    <h1>Andromedia</h1>
                </Link>
            </section>

            <section className="search">
                <input type="text" />Searchbar goes here
            </section>
            <div>
                <Link to="/login">Login</Link>
                &nbsp;or&nbsp;
                <Link to="/signup">Sign up!</Link>
            </div>
        </nav>
    );
        
    return currentUser ? dropdownLinks() : sessionLinks();

}

export default Nav;
