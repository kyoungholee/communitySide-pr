import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';

import Login from './contents/Login';
import Form from './contents/Form';
import boardRouter from './routers/boardRouter';

function App() {

  

  return(
    <div className="App">
      <Router>
        <div className='NavbarItems'>
          <ul className="nav-links">
            <Link to='/Login' className="nav" ><li>Login</li></Link>
            <Link to ='/Form' className = "nav"><li>Sign-up</li></Link>
          </ul>
        </div>
        <div>
          <Switch>
            <Route path='/Login' component={Login} />
            <Route path='/Form' component={Form} />
            
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;