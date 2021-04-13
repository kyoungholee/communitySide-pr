import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';

import Logo from './contents/Logo';
import Login from './contents/Login';
import Form from './contents/Form';
import post from './contents/post';

function App() {
  return(
    <div className="App">
      <Router>
        <div className='NavbarItems'>
          <ul className="nav-links">
            <Link to='/' className="nav-logo"><li>로고</li></Link>
            <Link to='/post'  className="nav-items"><li>자유게시판</li></Link>
            <Link to='/Login' className="nav-items" ><li>로그인</li></Link>
            <Link to ='/Form' className = "nav-items"><li>회원가입</li></Link>
          </ul>
        </div>
        <div>
          <Switch>
            <Route path='/Login' component={Login} />
            <Route path='/Form' component={Form} />
            <Route path='/post' component={post} />
            <Route exact path='/' component={Logo} />
            
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;