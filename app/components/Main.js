import React from 'react';
import ReactDOM from 'react-dom';
import {IndexRoute, Route, Router, browserHistory} from 'react-router';

import {Frontpage} from './Frontpage';
import {ItemDetail} from './ItemDetail';
import {Nav} from './Nav';
import {Search} from './Search';
import {Vendor} from './Vendor';

require('../styles/Misc.scss');

var Main = React.createClass({
    render: function() {
        return (
            <div>
                <Nav />
                {this.props.children}
            </div>
        );
    }
});

ReactDOM.render((
    <Router>
        <Route path="/" component={Main}>
            <IndexRoute component={Frontpage} />
            <Route path="search(/:term)" component={Search} />
            <Route path=":vendor" component={Vendor} />
            <Route path=":vendor/:listing" component={ItemDetail} name='ItemDetail'/>
        </Route>
    </Router>
), document.getElementById('app'));
