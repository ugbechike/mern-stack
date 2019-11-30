import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './pages/home';
import NavBar from './components/layout/NavigationBar';



const App = () => {
  return (
    <Router>
      <NavBar isLoggedIn={true} />
      <div>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/category/:slug' component={} />
      </Switch>
      </div>
    </Router>
  )
}

export default App;
