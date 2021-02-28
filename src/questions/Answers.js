import { NavLink } from 'react-router-dom';
import upVote from '../images/up_vote.png';
import downVote from '../images/down_vote.png';
import accepted from '../images/accepted.png';
import Comments from './Comments';
import dataFormated from '../packages/dataFormated';

function Answers(props) {
    return (
        <>
            {props.answers.map((answer)=>
               <div className="commentItem" key={answer.answer_id} >
               <div className="answerScore">
                    <img className="vote" src={upVote} alt="upVote"/>
                    <span>{answer.score}</span>  
                    <img className="vote" src={downVote} alt="downVote"/>                 
                    {(answer.is_accepted) ? <img className="accepted" src={accepted} alt="accepted"/> : null}                   
               </div>
               <div dangerouslySetInnerHTML={{__html:answer.body}}></div> 
               <div className="owner">
                   <p>answered {dataFormated(answer.creation_date*1000)}</p>
                   <NavLink to={`/users/${answer.owner.user_id}`} className="userName"><img alt="ownerImg" className="ownerImg" src={answer.owner.profile_image}/></NavLink>
                   <NavLink to={`/users/${answer.owner.user_id}`} className="userName">{answer.owner.display_name}</NavLink>
                   <p>{answer.owner.reputation}</p>
               </div>
                   {(answer.comment_count) > 0 ? <Comments comments={answer.comments}/> : null}
               </div> 
            )}
        </>
    )
}

export default Answers;