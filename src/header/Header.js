import logo from '../images/logo.png';
import './header.css';
import { NavLink } from 'react-router-dom';
import * as axios from 'axios';
import {useEffect, useState} from 'react';

function Header() {
    const [status, setStatus] = useState(true);
    const [disabled, setDisabled] = useState(true);
    const [token, setToken] = useState('');
    const [data, setData] = useState('');

    // useEffect(() => {
    //     window.SE.init({
    //         clientId: 19555, // Здесь мы ставим выданный нам clientId
    //         key: `${process.env.REACT_APP_KEY}`, // А здесь соответственно key
    //         channelUrl: 'https://olefirenkoe.github.io/blank.html', // Особое внимание стоит уделить этому полю. Здесь нужно указать домен, на котором хостится и крутится приложение
    //         complete: () => {
    //             console.log("Ready for auth!");
    //             setDisabled(false);
    //         }    
    //     });                    
    // }, []);

    const logIn = () => {
        console.log("Log in");
        window.SE.authenticate({
            success: (data) => {
                console.log('I got access'); 
                let tokens = encodeURIComponent(data.accessToken);
                setToken(tokens);
                axios.get(`https://api.stackexchange.com/2.2/me?site=stackoverflow&key=${process.env.REACT_APP_KEY}&access_token=${tokens}`)
                    .then((result) => {
                        setData(result.data.items[0]);
                        setStatus(false);
                    }, 
                    (error) => {
                        console.log(error);
                    }
                ); 
            },
            error: function() {  alert('Я не получил доступ :('); }, // Приложение не авторизовало пользователя
        }) 
    }

    const logOut = () => {
        axios.get(`https://api.stackexchange.com/2.2/apps/${token}/de-authenticate?key=${process.env.REACT_APP_KEY}`)
        .then(() => {
            setStatus(true);
        }, 
        (error) => {
            console.log(error);
        })
        console.log("log out");
    }

    const renderLogin = () => {
        if (status === true) {
            return (
                <button id="log" disabled={disabled} onClick={logIn}>Log in</button> 
            )
        }else {
            return (
                <>
                    <div className="profile">
                        <NavLink to={`/users/${data.user_id}`}><img id='userImg' alt='profilPhoto' src={data.profile_image}/></NavLink>
                        <span id="userLogin">{data.display_name}</span>
                        <span id="userReputation"><b>Reputation:</b> {data.reputation}</span>
                    </div>
                    <button id="log" onClick={logOut}>Log out</button>
                </>
            );
        }
    }

    return (
        <header>
                <NavLink to="/">
                    <img src={logo} className="logo" alt="logo"/>
                </NavLink>   
            <input type='search' placeholder='Search...'/>
            <nav>
                <li><NavLink to="/">Main</NavLink></li>
                <li><NavLink to="/users">Users</NavLink></li>
                <li><NavLink to="/tags">Tags</NavLink></li> 
            </nav>
            {renderLogin()}
        </header>
    );
}

export default Header;