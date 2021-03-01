import { useParams } from "react-router-dom"
import axios from 'axios';
import './questionId.css';
import { NavLink } from 'react-router-dom';
import Comments from './Comments';
import Answers from './Answers';
import upVote from '../../images/up_vote.png';
import downVote from '../../images/down_vote.png';
import dataFormated from '../../packages/dataFormated';
import {useEffect, useState} from 'react';

function QuestionInfo() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    let {questionId} = useParams();

    useEffect(() => {
        axios.get(`https://api.stackexchange.com/2.2/questions/${questionId}?&site=stackoverflow&filter=!LYA)NcjxVO1mgxq*)Lp_Eq&key=${process.env.REACT_APP_KEY}`)
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
        return <h1>Something went wrong...</h1>;
    } else if (!isLoaded) {
        return <h1>Please, wait...</h1>;
    } else {
        return (
            <div className="questionInfo">
                <h1>{items.title}</h1>
                <div className="questionScore">
                    <img className="vote" src={upVote} alt="upVote"/>
                    <span className="scoreCount">{items.score}</span>  
                    <img className="vote" src={downVote} alt="downVote"/>                                    
                </div>
                <div className="questionBody" dangerouslySetInnerHTML={{__html:items.body}}></div>
                <div className="questionTags">{items.tags.map((tag) => <NavLink to={`/tags/${tag}`} key={tag} className="tagItem">{tag}</NavLink>)}</div>
                <div className="owner">
                    <p>asked {dataFormated(items.creation_date*1000)}</p>
                    <NavLink to={`/users/${items.owner.user_id}`} className="userName"><img alt="ownerImg" className="ownerImg" src={items.owner.profile_image}/></NavLink>
                    <NavLink to={`/users/${items.owner.user_id}`} className="userName">{items.owner.display_name}</NavLink>
                    <p>{items.owner.reputation}</p>
                </div> 
                <div className="comments">
                    {(items.comment_count > 0) ? <Comments comments={items.comments}/> : <p className="emptyComments">Comments: {items.comment_count}</p>}
                </div>
                <div className="answers">
                    <h2>{items.answer_count}  {(items.answer_count === 1) ? "Answer" : "Answers"}</h2>
                    {(items.answer_count > 0) ? <Answers answers={items.answers}/> : null}
                </div>
            </div>
        );
    }
}


export default QuestionInfo;