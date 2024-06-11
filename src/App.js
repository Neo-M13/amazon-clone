import React,{ useEffect, useState} from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./components/home";
import Products from "./components/Products";
import Header from "./components/layout/Header";
import {ProductDetails} from "./components/ProductDetails";
import {Redirect} from "react-router-dom/cjs/react-router-dom.min";
import Login from "./components/Login";
import NotFound from "./components/NotFound";


const App = () => {
 const [isLoggedIn, setIsLoggedIn]  = useState(false);

  useEffect(() => {
    const userInfo = localStorage.getItem('isLoggedIn')

    if(userInfo === '1') {
      setIsLoggedIn(true)
    }
  }, [])
   
  const loginHandler  = (email, password) => {
    localStorage.setItem('isLoggedIn', '1')
    setIsLoggedIn(true);
  }

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn')
    setIsLoggedIn(false);
  }

  return (
    <>
    <Header isAuthenticated={isLoggedIn} onLogout={logoutHandler}/>
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to='/home'/>
          </Route>
          <Route path="/home" exact>
            <Home />
          </Route>
          <Route path="/products" exact>
            <Products />
          </Route>
          <Route path="/products/:id">
            <ProductDetails />
          </Route>
          <Route path="/login">
            <Login onLogin={loginHandler}/>
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </main>
    </>
  );
};

export default App;
