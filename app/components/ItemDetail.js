var React = require('react');
var ReactDOM = require('react-dom');

const ITEM_URL = 'https://engine.redbzr.com/item';

export var ItemDetail = React.createClass({
    getInitialState: function() {
        return ({
            item: {}
        })
    },

    getItem: function() {
        var url = ITEM_URL + '?vendor=' + this.props.params.vendor + '&item=' + this.props.params.listing;
        fetch(url).then((response) => {
            response.json().then((data) => {
                this.setState({item: data})
            });
        });
    },

    render: function() {
        this.getItem();
        console.log(this.props);
        return (
            <div></div>
        )
    }
});
