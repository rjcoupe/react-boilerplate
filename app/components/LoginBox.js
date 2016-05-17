import React, { Component } from 'react';

export default class LoginBox extends Component {
    constructor(props) {
        super(props);
        this.state = { count: props.initialCount }
        this.api = window.api;
    }

    render() {
        return (
            <div id='login-box'>
                <p>Log in with your Sorenson Media e-mail account.</p>
                <a href={window.api + '/auth/google'} className="btn btn-social btn-google"><span className='fa fa-google'></span>Sign in with Google</a>
            </div>
        );
    }
}
