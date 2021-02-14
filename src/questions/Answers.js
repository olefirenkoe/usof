import { NavLink } from 'react-router-dom';

function Answers(props) {
    return (
        <>
            {props.answers.map((answer)=>
               <div className="commentItem" key={answer.answer_id} >
               <div dangerouslySetInnerHTML={{__html:answer.body}}></div> 
               <NavLink to={`/users/${answer.owner.user_id}`} className="userName">{answer.owner.display_name}</NavLink>
               </div> 
            )}
        </>
    )
}

export default Answers;