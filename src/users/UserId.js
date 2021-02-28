import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";

function UserId() {
    const {userID} = useParams();
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        axios.get(`https://api.stackexchange.com/2.2/users/${userID}?&site=stackoverflow&filter=!--1nZuvlSU9X&key=${process.env.REACT_APP_KEY}`)
            .then((result) => {
                setUserData(result.data.items[0]);
                setIsLoaded(true);
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        )
    }, []);

    if (error) {
        return <h1>Something went wrong...</h1>;
    } else if (!isLoaded) {
        return <h1>Please, wait...</h1>;
    } else {
        return (
            <>
                <div className='mainUser'>
                    <h1 className="oneUserName">{userData.display_name}</h1>
                    <div className="userLocation">
                        Location: {userData.location}
                    </div>
                    <div className="imgAndBadges">
                        <img className='bigUserImg' src={userData.profile_image} alt="imgUser"/>
                        <div className="badges">
                            <div className="badgesItem"><div className="badge" id="gold"></div>{userData.badge_counts.gold}</div>
                            <div className="badgesItem"><div className="badge" id="silver"></div>{userData.badge_counts.silver}</div>
                            <div className="badgesItem"><div className="badge" id="bronze"></div>{userData.badge_counts.bronze}</div>
                        </div>
                    </div>
                    <div dangerouslySetInnerHTML={{__html:userData.about_me}} className="aboutUser"></div>   
                </div>
                
            </>
        )
    }

}
 
export default UserId;