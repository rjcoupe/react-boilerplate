import React from 'react';

require ('../styles/SearchRefinement.scss');

export var SearchRefinement = React.createClass({
    getInitialState: function() {
        return ({
            'searchTerm': this.props.searchTerm
        })
    },

    doSearch: function(event) {
        event.preventDefault();
        console.log('Doing search for', this.state.searchTerm);
        this.props.callback(this.state.searchTerm);
    },

    handleTermChange: function(event) {
        this.setState({
            searchTerm: $('.searchString').val(),
            nsfw: $('#searchRefinement .nsfw').val()
        });
    },

    formControls: [
        {
            group: 'Simple', items: [
                { term: 'Include NSFW Listings', type: 'checkbox', default: false, cssClass: 'nsfw' }
            ]
        }
    ],

    render: function() {
        var formItems = this.formControls.map(function(group, groupIndex) {
            var items = group.items.map(function(item, itemIndex) {
                switch (item.type) {
                    case 'text':
                    return (
                    <div className='col-xs-6 col-md-3'>
                        <div className='form-control' key={itemIndex}>
                            <label>{item.term}
                                <input type='text' className={item.className} placeholder={item.default} />
                            </label>
                        </div>
                    </div>);
                    case 'checkbox':
                    return (
                    <div className='col-xs-6 col-md-3'>
                        <div className='checkbox' key={itemIndex}>
                            <label>
                                <input type='checkbox' className={item.cssClass}/> {item.term}
                            </label>
                        </div>
                    </div>);
                }
            });
            return (<div className='form-group row' key={groupIndex}>{items}</div>);
        });

        return (
            <div className='searchRefinement'>
                <form action="" onSubmit={this.doSearch} id='searchRefinementForm'>
                    <div className='form-group'>
                        <label>
                            <input type='text' className='searchString' placeholder='Search' value={this.state.searchTerm} onChange={this.handleTermChange}/>
                        </label>
                    </div>
                    {formItems}
                </form>
            </div>
        )
    }
});
