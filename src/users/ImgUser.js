import { useState } from 'react';
import PreviewUser from './PreviewUser';

function ImgUser(props) {
    const [showPreview, setShowPreview] = useState(false);

    return (
        <>
            <img 
                src={props.user.profile_image} 
                className="usersimgs" alt="imgUser" 
                onMouseOver={() => setShowPreview(!showPreview)} 
                onMouseOut={() => setShowPreview(!showPreview)}
            />
            {(showPreview) ? <PreviewUser user={props.user}/> : null}
        </>
    )
}

export default ImgUser;