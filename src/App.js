// import Header from '../src/Header';
// import Main from '../src/Main';
// import Users from '../src/Users';
// import Tags from '../src/Tags';
// import Footer from '../src/Footer';
// import UserId from '../src/users/UserId';
// import { BrowserRouter, Route} from 'react-router-dom';
// import OneTag from './tags/OneTag';
// import QuestionId from './questions/QuestionId';
// import GetData from '../src/GetData';

// function App() {
//   return (
//     <BrowserRouter basename={process.env.PUBLIC_URL}>
//     <div className="App">
//      <Header/>
//          <Route exact path='/' component={Main}/>
//          <Route exact path='/questions/:questionId' component={QuestionId}/>
//          <Route exact path='/users' component={Users}/>
//          <Route path='/users/:userID' component={UserId}/>
//          <Route exact path='/tags' component={Tags}/>
//          <Route path='/tags/:tagName' component={OneTag}/>
//          <Route path='/getdata' component={GetData}/>

//        <Footer/>
//        </div>
       
//      </BrowserRouter>
    
//   );
// }

// export default App;

import MainQuestions from "./MainQuestions";

export default function App() {
  return <MainQuestions />;
}