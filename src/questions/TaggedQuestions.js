import { useParams } from 'react-router-dom';
import {useEffect, useState} from 'react';
import * as axios from 'axios';
import Statistic from './Statistic';
import { NavLink } from 'react-router-dom';
import QuestionOwner from './QuestionOwner';
import './main.css';

function TaggedQuestions() {
    let {tagName} = useParams();

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [filter, setFilter] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(15);
    
    let arrPageSize = [15, 30, 50];
    let allPages = 10;
    let arrPages = [];

    for (let i = 1; i <= allPages; i++) {
        arrPages.push(i)
    }

    useEffect(() => {
        axios.get(`https://api.stackexchange.com/2.2/questions?page=${currentPage}&pagesize=${pageSize}&tagged=${tagName}&site=stackoverflow&key=${process.env.REACT_APP_KEY}${filter}`)
            .then((result) => {
                setItems(result.data.items);
                setIsLoaded(true);
            }, 
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        )
    }, [filter, tagName, currentPage, pageSize]);

    useEffect(() => {
        setCurrentPage(1);
    }, [filter, pageSize, tagName]);

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
                    <h1>Questions tagged [ {tagName} ]</h1>
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
                    <div className="paginPageSize">
                        <div className='pagination'>
                            {currentPage > 1 && <span onClick={() => setCurrentPage(currentPage - 1)}>Prev</span>}
                            {arrPages.map((num) => <span className={(num === currentPage) ? "activePage" : null} onClick={() => setCurrentPage(num)} key={num}>{num}</span>)}
                            {currentPage < 10 && <span onClick={() => setCurrentPage(currentPage + 1)}>Next</span>}
                        </div>
                        <div className='pageSize'>
                            {arrPageSize.map((num) => <span className={(num === pageSize) ? "activePage" : null} onClick={() => setPageSize(num)} key={num}>{num}</span>)}
                            <span id='per'>per page</span>
                        </div>
                    </div>
                </div>       
            </div>
        );
    }
}


export default TaggedQuestions;