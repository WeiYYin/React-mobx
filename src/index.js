import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

// import { render } from 'react-dom'
import { HashRouter } from 'react-router-dom'
import Routers from './routers'

import './js/common'
import './styles/style.less'

class App extends React.Component {
    render() {
        return (
            <HashRouter>
                <Routers />
            </HashRouter>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
