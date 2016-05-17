import React, { Component } from 'react';

import { readCookie } from '../utils/Cookie';

export default class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: props.initialCount,
            user: {
                imageUrl: '',
                fullName: ''
            }
        }
    }

    componentWillMount() {
        this.getUser();
    }

    getUser() {
        fetch(`${window.api}/api/user/${readCookie('user')}`).then((response) => {
            response.json().then((json) => {
                this.setState({ user: json });
            })
        })
    }

    render() {
        return (
            <section id='menu'>
                <div className='username container'>
                    <div className='row'>
                        <div className='col-xs-2 user-avatar'>
                            <img src={this.state.user.imageUrl} alt={this.state.user.fullname} />
                        </div>
                        <div className='col-xs-10'>
                            <span>{this.state.user.fullname}</span>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
