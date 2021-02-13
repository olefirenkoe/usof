import Header from '../src/Header';
import Main from '../src/Main';
import Users from '../src/Users';
import Tags from '../src/Tags';
import User_Profile from '../src/User_Profile';
import Footer from '../src/Footer';
import UserId from '../src/users/UserId';

import { BrowserRouter, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <div className="App">
     <Header/>
       {/* <Switch> */}
         <Route exact path='/' component={Main}/>
         <Route exact path='/users' component={Users}/>
         <Route path='/users/:userID' component={UserId}/>
         <Route path='/tags' component={Tags}/>
         <Route path='/user-profile' component={User_Profile}/>
       {/* </Switch> */}
       <Footer/>
       </div>
       
     </BrowserRouter>
    
  );
}

export default App;

