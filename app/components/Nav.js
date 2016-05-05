var React = require('react');
var ReactDOM = require('react-dom');

import {Link} from 'react-router';


require('../styles/nav.scss');
require('../styles/loader.scss');

export var Nav = React.createClass({
    newSearch: function(event) {
        event.preventDefault();

        if (event.keyCode === 13) {
            window.location.href = '#search/' + event.target.value;
        }
    },

    render: function() {
        var vendorCount = 1000;
        var itemCount = 100000;
        return (
            <div className='container-fluid col-centered background-primary'>
                <header className='container no-padding'>
                    <nav id='nav' className='navbar'>
                        <div>
                            <Link className='navbar-brand' to='/'>redbzr</Link>
                            <ul className='nav navbar-nav'>
                                <li className='nav-item'>
                                    <Link className='nav-link' to='/search'>Search</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </header>
            </div>
        )
    }
});
