import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';

import Logo from './contents/Logo';
<<<<<<< HEAD
import Login from './contents/Login';
import Form from './contents/Form';
import post from './contents/post';

=======
import Sign from './contents/Sign';
import Login from './contents/Login';
import post from './contents/post';


>>>>>>> d6d26b24513384779e60d60cb139148c20e04883
function App() {
  return(
    <div className="App">
      <Router>
        <div className='NavbarItems'>
          <ul className="nav-links">
            <Link to='/' className="nav-logo"><li>로고</li></Link>
            <Link to='/post'  className="nav-items"><li>자유게시판</li></Link>
<<<<<<< HEAD
            <Link to='/Login' className="nav-items" ><li>로그인</li></Link>
            <Link to ='/Form' className = "nav-items"><li>회원가입</li></Link>
=======
            <Link to='/Sign' className="nav-items"><li>회원가입</li></Link>
            <Link to='/login' className="nav-items" ><li>로그인</li></Link>
>>>>>>> d6d26b24513384779e60d60cb139148c20e04883
          </ul>
        </div>
        <div>
          <Switch>
<<<<<<< HEAD
        
            <Route path='/Login' component={Login} />
            <Route path='/Form' component={Form} />
=======
            <Route path='/Sign' component={Sign} />
            <Route path='/Login' component={Login} />
>>>>>>> d6d26b24513384779e60d60cb139148c20e04883
            <Route path='/post' component={post} />
            <Route exact path='/' component={Logo} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;