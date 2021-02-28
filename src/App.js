import Header from './header/Header';
import MainQuestions from '../src/questions/MainQuestions';
import MainUsers from './users/MainUsers';
import MainTags from '../src/tags/MainTags';
import Footer from './footer/Footer';
import UserId from '../src/users/UserId';
import { BrowserRouter, Route} from 'react-router-dom';
import OneTag from './tags/OneTag';
import QuestionId from './questions/QuestionId';


function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <div className="App">
     <Header/>
         <Route exact path='/' component={MainQuestions}/>
         {/* <Route exact path='/questions/:questionId' component={QuestionId}/> */}
         <Route exact path='/users' component={MainUsers}/>
         <Route path='/users/:userID' component={UserId}/>
         <Route exact path='/tags' component={MainTags}/>
         {/* <Route path='/tags/:tagName' component={OneTag}/>  */}
         {/* <Route path='/getdata' component={GetData}/> */}

       <Footer/>
       </div>
       
     </BrowserRouter>
    
  );
}

export default App;
