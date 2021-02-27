import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import dataFormated from '../../src/dataFormated';

function QuestionOwner(props) {
    const [showImg, setShowImg] = useState(false);
    const data = props.data;

    return (
        <div className='questionOwner'>
            asked {dataFormated(data.creation_date*1000)} 
            <NavLink to={`/users/${data.owner.user_id}`} onMouseOver={() => setShowImg(!showImg)} onMouseOut={() => setShowImg(!showImg)} className="userName">
                {data.owner.display_name}
            </NavLink>

            {(showImg) ? <img className="ownerimg" src={(data.owner.profile_image)} alt="userimg"/> : null} 
            <span>
                <b>{(data.owner.reputation > 9999) ? `${(data.owner.reputation/1000).toFixed(1)}K` : data.owner.reputation}</b>
            </span>    
        </div>
    )
}
export default QuestionOwner;