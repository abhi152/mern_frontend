import React from 'react'
import './App.css'


import Signin from "./components/Signin"
import Signup from "./components/Signup"
import Showall from "./components/Showall"
import Findprofile from "./components/Findprofile"
import Edit from "./components/Edit"
import Front from "./components/Front"
import Cowin from "./components/Cowin"
import { BrowserRouter, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import { Route } from 'react-router-dom';


function App() {
  return (

    <BrowserRouter>
    <Switch>
    <Route   exact path="/">
        <Signin />
      </Route>
    
      <Route  path="/home">
        <Front />
      </Route>

      <Route  path="/signin">
        <Signin />
      </Route>
      <Route  path="/signup">
        <Signup />
      </Route>

      <Route  path="/showall">
        <Showall />
      </Route>
      <Route  path="/showprof">
        <Findprofile />
      </Route>

      <Route  path="/editprof">
        <Edit/>
      </Route>
      <Route  path="/cowinapi">
        <Cowin/>
      </Route>
    </Switch>
      
    </BrowserRouter>


  );
}

export default App;
