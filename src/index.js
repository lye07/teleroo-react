import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import promise from 'redux-promise';

//BrowserRouter Browses in the the history lib and decide what to do with the user request. the Route component is to translate react routes set up and get the component that was requested

import reducers from './reducers';
import MediaIndex from './components/media_index';
import MediaNew from './components/media_new';
import MediaShow from './components/media_show';


const createStoreWithMiddleware = applyMiddleware(promise)(createStore);


ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path="/media/new" component={ MediaNew }/>
                    <Route path="/media/:id" component={ MediaShow }/>
                    <Route path="/" component={MediaIndex}/>
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>
    , document.querySelector('.container')
);
