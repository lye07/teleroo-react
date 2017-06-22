import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';

//BrowserRouter Browses in the the history lib and decide what to do with the user request. the Route component is to translate react routes set up and get the component that was requested

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

class Hello extends React.Component {
    render(){
        return <div>Hello</div>
    }
}

class Bye extends React.Component{
    render(){
        return <div>Bye</div>
    }
}

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));
