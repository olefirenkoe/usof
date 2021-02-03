import React from 'react';
import logo from '../src/logo.png';
import '../src/header.css';

let tokens = null;

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status: true,
            disabled: false,
            profilImage: null,
            login: null,
            reputation: null
        };

        this.handleClick = this.handleClick.bind(this);
        this.renderLogin = this.renderLogin.bind(this);
    }

    handleClick() {
        console.log("Log in");

        window.SE.authenticate({
            success: async (data) => {
                console.log('I got access'); 
                tokens = data;

                let response = await fetch(`https://api.stackexchange.com/2.2/me?site=stackoverflow&key=qBt3pH)yY2*kx96ogUORkA((&access_token=${tokens.accessToken}`);
                let user = await response.json();

                console.log(user.items[0]);
                this.renderProfile(user.items[0])
            },
            error: function(data) {  alert('Я не получил доступ :('); }, // Приложение не авторизовало пользователя
        }) 

    }

    renderProfile(obj) {
        this.setState({
            status: false,
            profilImage: obj.profile_image,
            login: obj.display_name,
            reputation: obj.reputation
        });
        this.renderLogin();
    }
  
    renderLogin() {
        if (this.state.status === true) {
            return (
                <button id="log" disabled={this.state.disabled} onClick={this.handleClick}>Log in</button> 
            )
        }else {
            return (
                <div className="profile">
                    <img id='userImg' src={this.state.profilImage}/>
                    <span id="userLogin">{this.state.login}</span>
                    <span id="userReputation"><b>Reputation:</b> {this.state.reputation}</span>
                </div>
            );
        }
    }

    componentDidMount() {
        window.SE.init({
            clientId: 19555, // Здесь мы ставим выданный нам clientId
            key: 'qBt3pH)yY2*kx96ogUORkA((', // А здесь соответственно key
            channelUrl: 'https://olefirenkoe.github.io/blank.html', // Особое внимание стоит уделить этому полю. Здесь нужно указать домен, на котором хостится и крутится приложение
            complete: () => {
                console.log("Ready for auth!");
                this.allowLogin();
            }    
        });  
    }

    allowLogin() {
        this.setState({
            disabled: false,
        });
    }
    
    render() {
        return(
            <header>
                <img src={logo} className="logo" alt="logo"/>
                <span className="label">stack <b>usof</b></span>
                <input type='search' placeholder='Search...'/>
                <nav>
                <a href="main">Main</a>
                <a href="Users">Users</a>
                <a href="Tags">Tags</a>
                </nav>
                {this.renderLogin()}
            </header>
        );
    }
    
}

export default Header;














// 19555 id
// qBt3pH)yY2*kx96ogUORkA(( key 
