import React from 'react';
import logo from '../src/logo.png';
import '../src/header.css';


class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status: true,
            disabled: true
        };

        this.handleClick = this.handleClick.bind(this);
        this.allowLogin = this.allowLogin.bind(this);
    }

    handleClick() {
        this.state.status ? auth() : logOut();
        this.setState(state => ({
            status: !state.status
        }));
    }

    componentDidMount() {
        window.SE.init({
            clientId: 19555, // Здесь мы ставим выданный нам clientId
            key: 'qBt3pH)yY2*kx96ogUORkA((', // А здесь соответственно key
            channelUrl: 'https://olefirenkoe.github.io/blank.html', // Особое внимание стоит уделить этому полю. Здесь нужно указать домен, на котором хостится и крутится приложение
            complete: function() {
                alert("sfsf0");
                allowLogin();
            }    
        });  
    }

    allowLogin() {
        this.setState({
            disabled: false
        });
    }
    
    render() {
        return(
            <header>
                <img src={logo} className="logo" alt="logo"/>
                <span className="label">stack <b>usof</b></span>
                <button id="log" disabled={this.state.disabled} onClick={this.handleClick}>{this.state.status ? 'Log in' : 'Log out'}</button>
            </header>
        );
    }
    
}

export default Header;



function auth() {
    console.log("Log in");
}

function logOut() {
    console.log('Log out');
}



// function auth(data) {
//     console.log(232);
//     window.SE.authenticate({
//         success: function(data) { alert('Я получил доступ!'); }, // Приложение авторизовало пользователя
//         error: function(data) {  alert('Я не получил доступ :('); }, // Приложение не авторизовало пользователя
//     }); 
// } 


// window.SE.init({
// 	clientId: 19555, // Здесь мы ставим выданный нам clientId
// 	key: 'qBt3pH)yY2*kx96ogUORkA((', // А здесь соответственно key
//     channelUrl: 'https://olefirenkoe.github.io/blank.html', // Особое внимание стоит уделить этому полю. Здесь нужно указать домен, на котором хостится и крутится приложение
//     complete: function(data) {
//         console.log("tut");
//     }    
// });
// 





// window.SE.init({
// 	clientId: 19555, // Здесь мы ставим выданный нам clientId
// 	key: 'qBt3pH)yY2*kx96ogUORkA((', // А здесь соответственно key
//     channelUrl: 'https://olefirenkoe.github.io/', // Особое внимание стоит уделить этому полю. Здесь нужно указать домен, на котором хостится и крутится приложение
// 	complete: function (data) { alert("Я загрузился!"); } // Здесь мы указываем некоторую функцию, которая будет выполнена в случае успеха
// });


// 19555 id
// qBt3pH)yY2*kx96ogUORkA(( key 
