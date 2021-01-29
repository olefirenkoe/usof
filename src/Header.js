import React from 'react';
import logo from '../src/logo.png';
import '../src/header.css';

class Header extends React.Component{
    render(){
        return(
            <header>
                <img src={logo} className="logo" alt="logo"/>
                <span className="label">stack <b>usof</b></span>
                <button>Log in</button>
            </header>
        )
    }
}

export default Header;