import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Count from './count'
import * as serviceWorker from './serviceWorker';
import {BrowserRouter,Route, Switch} from 'react-router-dom'
const routing=(
    <BrowserRouter>
    <Switch>
        <Route path="/" component={Count} />
    </Switch>
    </BrowserRouter>
)
ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

