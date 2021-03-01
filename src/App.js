import Header from './header/Header';
import MainQuestions from './questions/MainQuestions';
import MainUsers from './users/MainUsers';
import MainTags from './tags/MainTags';
import Footer from './footer/Footer';
import UserId from './users/UserId';
import { BrowserRouter, Route} from 'react-router-dom';
import TaggedQuestions from './questions/TaggedQuestions';
import QuestionId from './questions/QuestionId/QuestionId';


function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Header/>
        <Route exact path='/' component={MainQuestions}/>
        <Route exact path='/questions/:questionId' component={QuestionId}/>
        <Route exact path='/users' component={MainUsers}/>
        <Route path='/users/:userID' component={UserId}/>
        <Route exact path='/tags' component={MainTags}/>
        <Route path='/tags/:tagName' component={TaggedQuestions}/>     
        <Footer/>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
