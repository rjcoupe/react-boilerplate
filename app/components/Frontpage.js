import React, { Component } from 'react';

import LoginBox from './LoginBox';

require('../styles/Frontpage.scss');

export default class Frontpage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: props.initialCount,
            siteIsLive: false,
            nextThrowdown: this._getNextThrowdownDate()
        };
    }

    render() {
        return (
            <div id='frontpage' className='fluid-container'>
                <div id='banner'>
                    <h1>Throwdown.online</h1>
                    {this.state.nextThrowdownDate ? <p>Next throwdown: {this.state.nextThrowdownDate}</p> : <p>Coming soon</p>}
                </div>
                {this.state.siteIsLive || window.location.href.match(/Mine\/throwndown\.online/) ? <LoginBox /> : null}
            </div>
        )
    }

    /* Pseudo private methods */

    _getNextThrowdownDate() {
        fetch('/election/next').then((response) => {
            response.json().then((json) => {
                this.setState({
                    nextThrowdownDate: json.date
                });
            });
        }).catch((error) => {});
    }
}
