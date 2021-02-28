import './tags.css';
import TagWiki from './TagWiki';
import { NavLink } from 'react-router-dom';
import {useState, useEffect} from 'react';
import * as axios from 'axios';

function MainTags() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [filter, setFilter] = useState('');

    useEffect(() => {
        axios.get(`https://api.stackexchange.com/2.2/tags?&site=stackoverflow&key=${process.env.REACT_APP_KEY}${filter}`)
            .then((result) => {
                setItems(result.data.items);
                setIsLoaded(true);
            }, 
            (error) => {
                setIsLoaded(true);
                setError(error);
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
                    <h1>Tags</h1>
                    <div className="originalFilter">
                        <div onClick={() => setFilter('&order=desc&sort=popular')}>Popular</div>
                        <div onClick={() => setFilter('&order=desc&sort=name')}>Name</div>
                        <div onClick={() => setFilter('&order=desc&sort=activity')}>Activity</div>
                    </div>
                    {items.map((tag) =>  
                        <div  key={tag.name} className='tagDiv'>
                        <NavLink to={`/tags/${tag.name}`} className="tagItem">{tag.name}</NavLink>
                        <TagWiki name={tag.name}/>
                        <div className="tagCount">{tag.count} questions</div>
                        </div> 
                    )}  
                </div>       
            </div>
        );
    }
}


export default MainTags;