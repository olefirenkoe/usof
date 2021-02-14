import { NavLink } from "react-router-dom";

function Title(props) {  
    return (
        <NavLink to={`/questions/${props.id}`} className="title">{props.title}</NavLink>
    )
}

export default Title;