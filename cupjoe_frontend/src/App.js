// App.jsx

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Dashboardpage from './Pages/dashboard';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/dash" exact component={Dashboardpage}/>
        
        {/* Add more routes as needed */}
      </Switch>
    </Router>
  );
};

export default App;
