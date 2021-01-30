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
                <button id="log" disabled onClick={auth}>Log in</button>

            </header>
        )
    }
}

export default Header;

let buttonLog = document.getElementById("log");
console.log(buttonLog);

function auth(data) {
    console.log(232);
    window.SE.authenticate({
        success: function(data) { alert('Я получил доступ!'); }, // Приложение авторизовало пользователя
        error: function(data) {  alert('Я не получил доступ :('); }, // Приложение не авторизовало пользователя
    }); 
} 


window.SE.init({
	clientId: 19555, // Здесь мы ставим выданный нам clientId
	key: 'qBt3pH)yY2*kx96ogUORkA((', // А здесь соответственно key
    channelUrl: 'https://olefirenkoe.github.io/blank.html', // Особое внимание стоит уделить этому полю. Здесь нужно указать домен, на котором хостится и крутится приложение
    complete: function(data) {
        buttonLog.disabled = false;
    }
        
});






// window.SE.init({
// 	clientId: 19555, // Здесь мы ставим выданный нам clientId
// 	key: 'qBt3pH)yY2*kx96ogUORkA((', // А здесь соответственно key
//     channelUrl: 'https://olefirenkoe.github.io/', // Особое внимание стоит уделить этому полю. Здесь нужно указать домен, на котором хостится и крутится приложение
// 	complete: function (data) { alert("Я загрузился!"); } // Здесь мы указываем некоторую функцию, которая будет выполнена в случае успеха
// });


// 19555 id
// qBt3pH)yY2*kx96ogUORkA(( key 
