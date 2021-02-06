import Header from '../src/Header';
import Main from '../src/Main';
import Users from '../src/Users';
import Tags from '../src/Tags';
import User_Profile from '../src/User_Profile';

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <Header/>
     <Router>
       <Switch>
         <Route exact path='/' component={Main}/>
         <Route path='/users' component={Users}/>
         <Route path='/tags' component={Tags}/>
         <Route path='/user-profile' component={User_Profile}/>
       </Switch>
     </Router>
    </div>
  );
}

export default App;

