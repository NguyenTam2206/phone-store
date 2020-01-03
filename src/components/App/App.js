import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../Homepage/Navbar/Navbar';
import Productlist from '../Homepage/Productlist/Productlist';
import Detail from '../DetailPage/Detail';
import Cart from '../Cartpage/Cart';
import PageNotFound from '../PageNotFound/PageNotFound';
import Modal from '../Modal/Modal';


function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path = "/" component = {Productlist} />
        <Route path = "/detail" component = {Detail} />
        <Route path = "/cart" component = {Cart} />
        <Route  component = {PageNotFound} />
      </Switch>
      <Modal />
    </>
  );
}

export default App;
