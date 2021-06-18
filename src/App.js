import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import Login from '../src/pages/Login'
import Register from '../src/pages/Register'
import Home from '../src/pages/Homepage'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/home" exact component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
