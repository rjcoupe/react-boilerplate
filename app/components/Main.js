import React, { Component } from 'react';
import { render } from 'react-dom';
import { IndexRoute, Route, Router, browserHistory } from 'react-router';

// Components
import Dashboard from './Dashboard';
import Frontpage from './Frontpage';

import { readCookie, writeCookie } from '../utils/Cookie';

window.api = 'http://localhost:8080/api';

class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}


var indexComponent = readCookie('user') ? Dashboard : Frontpage;
var indexComponent = Dashboard;

render((
    <Router>
        <Route path="/" component={Main}>
            <IndexRoute component={indexComponent} />
        </Route>
    </Router>
), document.getElementById('app'));
