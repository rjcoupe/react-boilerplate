var React = require('React');

import {Link} from 'react-router';

require('../styles/ItemListing.scss');

export var ItemListing = React.createClass({
    render: function() {

        function roundPrice(price, digits) {
            return Math.round(price * Math.pow(10, digits)) / Math.pow(10, digits)
        }

        var vendorChip = this.props.item.vendor && this.props.item.vendor.name ? <span className='label label-success' key='vendor'>@{this.props.item.vendor.name || null}</span> : null;
        /*var keywordChips = this.props.item.keywords.slice(0, 5).map(function(keyword, i) {
            return (<Link to={'/search/' + keyword}>
                <span className='label label-default' key={'keyword_' + i}>{String.fromCharCode(35)}{keyword}</span>
                </Link>);
        }) || []; */
        var chips = []

        if (vendorChip) {
            chips = chips.concat(vendorChip);
        }

        if (typeof keywordChips !== 'undefined') {
            chips = chips.concat(keywordChips);
        }
        var itemURI = '#';

        var priceDisplay;
        switch(this.props.item.currency) {
            case 'BTC':
                priceDisplay = roundPrice(this.props.item.price, 5) + ' BTC';
                break;
            case 'EUR':
                priceDisplay = '€' + roundPrice(this.props.item.price, 3);
                break;
            case 'USD':
                priceDisplay = '$' + roundPrice(this.props.item.price, 2);
                break;
            default:
                priceDisplay = this.props.item.currency + ' ' + roundPrice(this.props.item.price, 2);
        }

        var itemUrl = '/vendor/' + this.props.item.ob_id;
        return (
                <div className='itemListingContainer' data-itemid={this.props.item.id}>
                    <div className='itemListing row'>
                        <div className='itemListingLeft col-xs-1'>
                            <img src={this.props.item.imageUrl} />
                        </div>
                        <div className='itemListingMiddle col-xs-9'>
                            <p>
                                <Link to={itemUrl}>
                                    <span className='title'>{this.props.item.title}</span><br />
                                    <span className='itemId'>{this.props.item.ob_id}</span>
                                </Link>
                            </p>
                            <p className='chips'>
                                {chips}
                            </p>
                        </div>
                        <div className='itemListingRight col-xs-2'>
                            <div>
                                <Link to={itemUrl}>
                                    <p className='price'>{priceDisplay}</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
});
