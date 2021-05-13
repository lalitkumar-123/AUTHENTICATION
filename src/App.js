import Signup from './Signup.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Authprovider} from './authcontext.js';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './dashboard.js';
import Login from './login.js';
import Update from './update.js';
import Privaterout from './privaterout.js';
import xmeme from './xmeme.js'
import Upload from './upload.js';

function App() {
  return (
    <>
    <Router>
      <Authprovider>
      <Switch>
        <Privaterout  exact path="/" component={Dashboard}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/login" component={Login}/>
        <Route path="/update" component={Update}/>
        <Route path="/upload" component={Upload}/>
        <Route path="/xmeme.js" component={xmeme}/>
      </Switch>
      </Authprovider>
    </Router>
    </>
  );
}

export default App;
