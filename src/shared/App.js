import "./App.css";
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";
import Main from "../pages/Main";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Detail from "../pages/Detail";
import Header from "../components/Header";
import CartPage from "../pages/CartPage";

function App() {
  return (
    <React.Fragment>
      <ConnectedRouter history={history}>
        <Header/>
        <Route path="/" exact component={Main}></Route>
        {/* <Route path="/detail" exact component={Detail}></Route> */}
        <Route path="/detail/:id" exact component={Detail}></Route>
        <Route path="/pages/login" component={Login} />
        <Route path="/pages/signup" component={Signup} />
        <Route path="/cart" exact component={CartPage} />
        

      </ConnectedRouter>
    </React.Fragment>
  );
}

export default App;
