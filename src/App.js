import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';

import Logo from './contents/Logo';
import Login from './contents/Login';
import Form from './contents/Form';

function App() {

  

  return(
    <div className="App">
      <Router>
        <div className='NavbarItems'>
          <ul className="nav-links">
            <Link to='/' className="nav-logo"><li>로고</li></Link>
            <Link to='/Login' className="nav" ><li>Login</li></Link>
            <Link to ='/Form' className = "nav"><li>Sign-up</li></Link>
          </ul>
        </div>
        <div>
          <Switch>
            <Route path='/Login' component={Login} />
            <Route path='/Form' component={Form} />
            <Route exact path='/' component={Logo} />
            
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;