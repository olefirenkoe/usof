import {useEffect, useState} from 'react';
import * as axios from 'axios';
import Title from '../src/questions/Title';
import Statistic from '../src/questions/Statistic';
import Tags from '../src/questions/Tags';
import QuestionOwner from '../src/questions/QuestionOwner';

// let toDate = Math.round(new Date().getTime()/1000);
// let fromDate = toDate - 43200;

function GetData() {
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
                <div className='filters'>   
                </div>
                <div className='questionDiv'>
                    <h1>Top Questions</h1>
                    <div className="originalFilter">
                        <div onClick={() => setFilter('&order=desc&sort=creation')}>Nevest</div>
                        <div onClick={() => setFilter('&order=desc&sort=activity')}>Active</div>
                        <div onClick={() => setFilter('&order=desc&sort=votes')}>Votes</div>
                    </div>
                    {items.map((item) =>  
                        <div  key={item.question_id} className='question'>
                            <Title title={item.title} id={item.question_id}/>
                            <div className='allStats'>
                                <Statistic score={item.score} value="votes"/>
                                <Statistic score={item.answer_count} answered={item.is_answered} value="answers"/>
                                <Statistic score={item.view_count} value="views"/>
                            </div>
                            <div className='tagsAndOwner'>
                                <Tags tags={item.tags}/>
                                <QuestionOwner data={item}/>
                            </div>
                        </div>
                    )}
                </div>       
            </div>
        );
    }
 
}

export default GetData;

