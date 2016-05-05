import React from 'react';
import {Link} from 'react-router';

require('../styles/Frontpage.scss');

export var Frontpage = React.createClass({
    getInitialState: function() {
        return ({
            items: [
                { imageUrl: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/1.jpg', title: 'qwe', vendor_id: 'vendor', item: 'item' },
                { imageUrl: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/4.jpg', title: 'qwe', vendor_id: 'vendor', item: 'item' }
            ]
        });
    },

    handleBrokenImages: function(img) {
        img.onerror = null;
        img.src = './images/notfound.jpg';
        return true;
    },

    render: function() {
        return (
            <div id='front-page'>
                {this.state.items.map((item) => {
                    return (
                        <Link to={'/' + item.vendor_id + '/' + item.ob_id}>
                            <img src={item.imageUrl} alt={item.title} onerror={this.handleBrokenImages}/>
                        </Link>
                    );
                })}
            </div>
        )
    }
});
