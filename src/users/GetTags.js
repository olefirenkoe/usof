import {useState, useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import * as axios from 'axios';

function GetTags(props) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get(`https://api.stackexchange.com/2.2/users/${props.id}/top-tags?site=stackoverflow&key=${process.env.REACT_APP_KEY}`)
        .then((result) => {
            setItems(result.data.items);
            setIsLoaded(true);
        }, 
        (error) => {
            setIsLoaded(true);
            setError(error); 
        });
    },[]);

    if (error) {
        return <span>Something went wrong...</span>;
    } else if (!isLoaded) {
        return <span>Please, wait...</span>;
    } else {
        return (
            <>
            {items.slice(0, 3).map((tags, index) =>  
              <NavLink to={`/tags/${tags.tag_name}`} key={index} className="tags">{tags.tag_name}</NavLink>
            )}    
        </>
        );
    }
}  

export default GetTags;