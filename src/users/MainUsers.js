import './users.css';
import * as axios from 'axios';
import ImgUser from './ImgUser';
import { NavLink } from 'react-router-dom';
import {useEffect, useState} from 'react';
import GetTags from './GetTags';

function MainUsers() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [filter, setFilter] = useState('');

    useEffect(() => {
        axios.get(`https://api.stackexchange.com/2.2/users?site=stackoverflow&filter=!0Z-LvgkIiS)pY6ZMtsOr_tRsP&key=${process.env.REACT_APP_KEY}${filter}`)
            .then((result) => {
                setItems(result.data.items);
                setIsLoaded(true);
            }, 
            (error) => {
                setIsLoaded(true);
                setError(error);
                console.log(error);
            }
        )
    }, [filter])

    if (error) {
        return <h1>Something went wrong...</h1>;
    } else if (!isLoaded) {
        return <h1>Please, wait...</h1>;
    } else {
        return (
            <div className='mainContainer'>
                <div className='filters'>   
                </div>
                <div className='questionDiv'>
                    <h1>Top Questions</h1>
                    <div className="originalFilter">
                        <div onClick={() => setFilter('&order=asc&sort=reputation')}>Reputation</div>
                        <div onClick={() => setFilter('&order=asc&sort=creation')}>New users</div>
                        <div onClick={() => setFilter('&order=desc&sort=name')}>Name</div>
                    </div>
                    {items.map((user) =>  
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
                </div>       
            </div>
        );
    }
}

export default MainUsers;