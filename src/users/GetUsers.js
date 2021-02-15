import React from 'react';
import * as axios from 'axios';
import ImgUser from './ImgUser';
import { NavLink } from 'react-router-dom';

// let toDate = Math.round(new Date().getTime()/1000);
// let fromDate = toDate - 43200;

class GetUsers extends React.Component {
    constructor (props){
        super(props);
       this.state = {
            filterMethod: this.props.filterMethod,    
            resultApi: null,
            showPreview: false
       }
    }

    componentDidMount() {
        this.getQuestion(); 
    }

    componentDidUpdate(prevProps) {
        if(this.props.filterMethod !== prevProps.filterMethod) {
            this.getQuestion();
        }
    }

    getQuestion() {
        axios.get(`https://api.stackexchange.com/2.2/users?&site=stackoverflow&filter=!0Z-LvgkIiS)pY6ZMtsOr_tRsP&key=${process.env.REACT_APP_KEY}${this.props.filterMethod}`)
        .then(response => {
            this.setState({
                resultApi: response.data.items});
        });
    }

    render() {
        if (this.state.resultApi === null) {
            return (
                <h1>Please wait...</h1>
            )
        }
        return (
            <>
                {this.state.resultApi.map((user) =>  
                    <div  key={user.account_id} className='userItem'>
                        <ImgUser user={user}/>
                        <NavLink to={`/users/${user.user_id}`} className="userName">{user.display_name}</NavLink>
                        <p className="userLocation">{user.location}</p>
                        <p className="userRep">{(user.reputation > 999) ? (user.reputation/1000).toFixed(1)+'K' : user.reputation}</p>
                        <div className='allTags'>
                             <GetTags id={user.user_id}/>
                        </div>
                    </div> 
                )}    
            </>
        )
    }
}

export default GetUsers;

// function dataFormated (date) {
//     date = new Date(date)
//     let day = date.getDate(),
//         month = date.getMonth() + 1,
//         year = date.getFullYear(),
//         hours = date.getHours(),
//         minutes = date.getMinutes();

//     if (month < 10) {
//         month = `0${month}`;
//     }if (day < 10) {
//         day = `0${day}`;
//     }if (minutes < 10) {
//         minutes = `0${minutes}`;
//     }

//     return (`${day}.${month}.${year} at ${hours}:${minutes}`);
// }

class GetTags extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            resultApi: null
        }
    }

    componentDidMount() {
        axios.get(`https://api.stackexchange.com/2.2/users/${this.props.id}/top-tags?site=stackoverflow&key=${process.env.REACT_APP_KEY}`)
        .then(response => {
            this.setState({
                resultApi: response.data.items});
        });
    }

    render() {
        if (this.state.resultApi === null) {
            return (
                <span>Please wait...</span>
            )
        }
        return (
            <>
                {this.state.resultApi.slice(0, 3).map((tags, index) =>  
                  <NavLink to={`/tags/${tags.tag_name}`} key={index} className="tags">{tags.tag_name}</NavLink>
                )}    
            </>
        )
    }
}