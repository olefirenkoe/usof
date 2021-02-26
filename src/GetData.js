// import {useEffect, useState} from 'react';
// import * as axios from 'axios';
// import Title from '../src/questions/Title';
// import Statistic from '../src/questions/Statistic';
// import Tags from '../src/questions/Tags';
// import QuestionOwner from '../src/questions/QuestionOwner';
// import dataFormated from '../src/dataFormated';

// let toDate = Math.round(new Date().getTime()/1000);
// let fromDate = toDate - 43200;

import questions from '../src/packages/api/index';
// import questionsApi from './packages/api/rest/questionsApi';

// let data =  questionsApi();
// console.log(data)
console.log(questions)

function GetData() {
    return <h1>hey</h1>
}

export default GetData;

// function GetData() {
//     const [error, setError] = useState(null);
//     const [isLoaded, setIsLoaded] = useState(false);
//     const [items, setItems] = useState([]);

//     useEffect(() => {
//         axios.get(`https://api.stackexchange.com/2.2/questions?pagesize=50&fromdate=${fromDate}&todate=${toDate}&site=stackoverflow&key=${process.env.REACT_APP_KEY}`)
//             .then((result) => {
//                 setItems(result.data.items);
//                 setIsLoaded(true);
//             }, 
//             (error) => {
//                 setIsLoaded(true);
//                 setError(error);
//             }
//         )
//     }, [])

//     if(isLoaded) {
//         console.log(items)
//     }

//     if (error) {
//         return <h1>Something went wrong...</h1>;
//     } else if (!isLoaded) {
//         return <h1>Please, wait...</h1>;
//     } else {
//         return (
//             <div className='mainContainer'>
//                 <div className='filters'>
//                     <h1 className="filterH1">Filters</h1>
//                 </div>
//                 <div className='questionDiv'>
//                     <h1>Top Questions</h1>
//                     {items.map((item) =>  
//                         <div  key={item.question_id} className='question'>
//                             <Title title={item.title} id={item.question_id}/>
//                             <div className='allStats'>
//                                 <Statistic score={item.score} value="votes"/>
//                                 <Statistic score={item.answer_count} answered={item.is_answered} value="answers"/>
//                                 <Statistic score={item.view_count} value="views"/>
//                             </div>
//                             <div className='tagsAndOwner'>
//                                 <Tags tags={item.tags}/>
//                                 <QuestionOwner name={item.owner.display_name} id={item.owner.user_id} img={item.owner.profile_image} reputation={item.owner.reputation} time={dataFormated(item.creation_date*1000)}/>
//                             </div>
//                         </div>
//                     )}
//                 </div>       
//             </div>
//         );
//     }
 
// }

// export default GetData;

