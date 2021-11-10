import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from "./Component/Login";
import PrivateRoute from "./Component/PrivateRoute";
import FriendsList from "./Component/FriendsList";
import AddFriendForm from './Component/AddFriendForm'

const Login = () => {
  return <h2>Login</h2>;
};

function App() {
  return (
    <Router>
      <div className="App">
        <h2>Client Auth Project</h2>
        <Link path='/friends'>See friends</Link>
        <Link path='/friends/add-new'>Add friend</Link>
        <Switch>
        <PrivateRoute path='/friends/add-new' component={AddFriendForm} />
        <PrivateRoute path='/friends' component={FriendsList} />

        <Route path='/login'>
          <Login />
        </Route>

        <Route>
          <Login />
        </Route>
        </ Switch>
      </div>
    </Router>
  );
}

export default App;
