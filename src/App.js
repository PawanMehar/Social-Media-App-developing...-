import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import CreatePost from "./components/posts/CreatePost";
import AuthProvider from './components/auth/AuthProvider';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <AuthProvider>
        <Navbar />
        <Switch>
          <Route exact path='/' component ={Dashboard} />
          <Route  path='/signin' component ={SignIn} />
          <Route  path='/signup' component ={SignUp} />
          <Route  path='/create/:id' component ={CreatePost} />
        </Switch>
        </AuthProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
