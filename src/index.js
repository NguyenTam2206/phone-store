import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';
import { ProductProvider } from './components/Context/Context';

ReactDOM.render(
    <ProductProvider>
        <Router>
            <App />
        </Router>
    </ProductProvider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

//Cách sử dụng react-router-dom
    //Bọc Router ngoài component lớn nhất
    //Sử dụng Switch và Route cho các components, sử dụng props exact, path với component. k có props path là tất cả còn lại.
    // example : <Switch>
    //              <Route exact path = "/" component = {Productlist} />
    //              <Route path = "/detail" component = {Detail} />
    //              <Route path = "/cart" component = {Cart} />
    //              <Route  component = {PageNotFound} />
    //          </Switch>
    //Sử dụng <Link to="..."> như thẻ <a href="...">
