import React from 'react';

import {ItemListing} from './ItemListing';

require('../styles/SearchResults.scss');

export var SearchResults = React.createClass({
    getInitialState: function() {
        return ({
            items: []
        })
    },

    render: function() {
        return (
            <div className='searchResults'>
                {this.props.items.map((item) => {
                    return <ItemListing item={item} key={item.ob_id} />
                })}
            </div>
        )
    }
});
