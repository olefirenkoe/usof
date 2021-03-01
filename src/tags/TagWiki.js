import React from 'react';
import * as axios from 'axios';
import {useEffect, useState} from 'react';

function TagWiki(props) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState();
    let name = encodeURIComponent(props.name)

    useEffect(() => {
        axios.get(`https://api.stackexchange.com/2.2/tags/${name}/wikis?&site=stackoverflow&key=${process.env.REACT_APP_KEY}`)
            .then((result) => {
                setItems(result.data.items[0]);
                setIsLoaded(true);
            }, 
            (error) => {
                setIsLoaded(true);
                setError(error);
                console.log(error);
            }
        )
    }, [])

    if (error) {
        return <span>Something went wrong...</span>;
    } else if (!isLoaded) {
        return <span>Please, wait...</span>;
    } else {
        if ((items) && (items.excerpt)) { 
            return (
                <>
                    <div className="tagWiki">
                        {(items.excerpt).length > 170 ? (items.excerpt).substring(0, 170) + "..." : items.excerpt}
                    </div>
                </>
            );
        } else {
            return (
                <div className="tagWiki">
                        no info
                </div>
            );
        }
        
    }
}

export default TagWiki;