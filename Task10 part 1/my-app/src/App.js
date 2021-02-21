
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



import Landing from './landing'
import Header from './Header'
import Shop from './Shop'
import Profile from './Profile'



function App() {
  return (
<Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Profile">Profile</Link>
          </li>
          <li>
            <Link to="/Shop">Shop</Link>
          </li>
        </ul>

        <hr />

        
        <Switch>
          <Route exact={true}  path="/">
          <Header />
            <Landing />
        </Route>
        
        <Route path="/Shop" component={Shop}/>

          <Route path="/">
          <Header />
            <Profile />
          </Route>
          
        </Switch>
      </div>
    </Router>
  )
}

export default App