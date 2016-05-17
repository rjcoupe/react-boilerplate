import React, { Component } from 'react';

export default class ErrorMessage extends Component {
    constructor(props) {
        super(props);
        this.state = { count: props.initialCount }
    }

    render() {
        return (
            <div className='error'>
                {this.props.msg}
            </div>
        )
    }
}
