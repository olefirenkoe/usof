import './users.css';
import * as axios from 'axios';
import ImgUser from './ImgUser';
import { NavLink } from 'react-router-dom';
import {useEffect, useState} from 'react';
import GetUsersTags from './GetUsersTags';

function MainUsers() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [filter, setFilter] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    
    let allPages = 10;
    let arrPages = [];

    for (let i = 1; i <= allPages; i++) {
        arrPages.push(i)
    }

    useEffect(() => {
        axios.get(`https://api.stackexchange.com/2.2/users?page=${currentPage}&pagesize=36&site=stackoverflow&filter=!0Z-LvgkIiS)pY6ZMtsOr_tRsP&key=${process.env.REACT_APP_KEY}${filter}`)
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
    }, [filter, currentPage]);

    useEffect(() => {
        setCurrentPage(1);
    }, [filter]);

    if (error) {
        return <h1>Something went wrong...</h1>;
    } else if (!isLoaded) {
        return <h1>Please, wait...</h1>;
    } else {
        return (
            <div className='mainContainer'>
                <div className=''>
                    <h1>Users</h1>
                    <div className="originalFilter">
                        <div onClick={() => setFilter('&order=asc&sort=reputation')}>Reputation</div>
                        <div onClick={() => setFilter('&order=asc&sort=creation')}>New users</div>
                        <div onClick={() => setFilter('&order=desc&sort=name')}>Name</div>
                    </div>
                    <div className='userContainer'>
                        {items.map((user) =>  
                            <div  key={user.account_id} className='userItem'>
                                <ImgUser user={user}/>
                                <NavLink to={`/users/${user.user_id}`} className="userName">{user.display_name}</NavLink>
                                <p className="userLocation">{user.location}</p>
                                <p className="userRep">{(user.reputation > 999) ? (user.reputation/1000).toFixed(1)+'K' : user.reputation}</p>
                                <div className='allTags'>
                                    <GetUsersTags id={user.user_id}/>
                                </div>
                            </div> 
                        )}
                        <div className="paginPageSize">
                            <div className='pagination'>
                                {currentPage > 1 && <span onClick={() => setCurrentPage(currentPage - 1)}>Prev</span>}
                                {arrPages.map((num) => <span className={(num === currentPage) ? "activePage" : null} onClick={() => setCurrentPage(num)} key={num}>{num}</span>)}                           
                                {currentPage < 10 && <span onClick={() => setCurrentPage(currentPage + 1)}>Next</span>}
                            </div>
                        </div>    
                    </div>
                </div>       
            </div>
        );
    }
}

export default MainUsers;