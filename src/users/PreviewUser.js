import React from 'react';

function PreviewUser(props) {
    let about = props.user.about_me;
    let badge = props.user.badge_counts;
    
    return (
        <div className="priviewUser">
            <p>{props.user.display_name}</p>
            <div className="badgesContainer">
                <div className="badgesItem"><div className="badge" id="gold"></div>{badge.gold}</div>
                <div className="badgesItem"><div className="badge" id="silver"></div>{badge.silver}</div>
                <div className="badgesItem"><div className="badge" id="bronze"></div>{badge.bronze}</div>
            </div>
            <div className="aboutMe">
                <span dangerouslySetInnerHTML={{__html:about}}/>
            </div>
        </div>
    )
}

export default PreviewUser;