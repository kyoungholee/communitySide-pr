import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';

import Login from './contents/Login';
import Form from './contents/Form';
import boardWriteForm from './contents/boardWriteForm';

function App() {

  

  return(
    <div className="App">
      <Router>
        <div className='NavbarItems'>
          <ul className="nav-links">
            <Link to='/Login' className="nav" ><li>Login</li></Link>
            <Link to ='/Form' className = "nav"><li>Sign-up</li></Link>
            <Link to ='/boardWriteForm' className = "nav"><li>boardWriteForm</li></Link>
          </ul>
        </div>
        <div>
          <Switch>
            <Route path ='/Login' component ={Login} />
            <Route path ='/Form' component ={Form} />
            <Route path ='/boardWriteForm' component = {boardWriteForm}/>
            
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;