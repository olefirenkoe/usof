import {useEffect, useState} from 'react';
import * as axios from 'axios';
import Statistic from './Statistic';
import QuestionOwner from './QuestionOwner';
import './main.css';
import {NavLink} from 'react-router-dom';

function MainQuestion() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [filter, setFilter] = useState('');

    useEffect(() => {
        axios.get(`https://api.stackexchange.com/2.2/questions?pagesize=50&site=stackoverflow&key=${process.env.REACT_APP_KEY}${filter}`)
            .then((result) => {
                setItems(result.data.items);
                setIsLoaded(true);
            }, 
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        )
    }, [filter])

    if (error) {
        return <h1>Something went wrong...</h1>;
    } else if (!isLoaded) {
        return <h1>Please, wait...</h1>;
    } else {
        return (
            <div className='mainContainer'>
                <div className='questionDiv'>
                    <h1>Top Questions</h1>
                    <div className="originalFilter">
                        <div onClick={() => setFilter('&order=desc&sort=creation')}>Newest</div>
                        <div onClick={() => setFilter('&order=desc&sort=activity')}>Active</div>
                        <div onClick={() => setFilter('&order=desc&sort=votes')}>Votes</div>
                    </div>
                    {items.map((item) =>  
                        <div  key={item.question_id} className='question'>
                            <NavLink to={`/questions/${item.question_id}`} className="title">{item.title}</NavLink>
                            <div className='allStats'>
                                <Statistic score={item.score} value="votes"/>
                                <Statistic score={item.answer_count} answered={item.is_answered} value="answers"/>
                                <Statistic score={item.view_count} value="views"/>
                            </div>
                            <div className='tagsAndOwner'>
                                {item.tags.map((tag, index) => <NavLink to={`/tags/${tag}`} key={index} className="tagItem">{tag}</NavLink>)}
                                <QuestionOwner data={item}/>
                            </div>
                        </div>
                    )}
                </div>       
            </div>
        );
    }
}

export default MainQuestion;