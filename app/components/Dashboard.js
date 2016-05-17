import React, { Component } from 'react';

// Components
import Election from './Election';
import Menu from './Menu';

export default class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = { count: props.initialCount }
    }

    render() {
        return (
            <div id='dashboard' className='container-fluid'>
                <div className='row'>
                    <div className='col-md-2 hidden-sm-down' id='menu'>
                        <Menu />
                    </div>
                    <div className='col-xs-12 col-md-8'>
                        <Election />
                    </div>
                    <div className='col-md-2 hidden-sm-down' id='updates'>
                        // Update log here
                    </div>
                </div>
            </div>
        )
    }
}
