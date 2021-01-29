import React from 'react';
import logo from '../src/logo.png';
import '../src/header.css';
// import SE from 'https://cdn.sstatic.net/apiv2/js/all.js?v=bc9137ab1d55';

 
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

function auth(data) {
    window.SE.authenticate({
        success: function(data) { alert('Я получил доступ!'); }, // Приложение авторизовало пользователя
        error: function(data) {  alert('Я не получил доступ :('); }, // Приложение не авторизовало пользователя
    });
}

window.SE.init({
	clientId: 19555, // Здесь мы ставим выданный нам clientId
	key: 'qBt3pH)yY2*kx96ogUORkA((', // А здесь соответственно key
	channelUrl: 'https://github.com/', // Особое внимание стоит уделить этому полю. Здесь нужно указать домен, на котором хостится и крутится приложение
	complete: auth() // Здесь мы указываем некоторую функцию, которая будет выполнена в случае успеха
});



alert(2);


// 19555 id
// qBt3pH)yY2*kx96ogUORkA(( key 
