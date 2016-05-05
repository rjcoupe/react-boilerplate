import React from 'react';
import ReactDOM from 'react-dom';

import {SearchResults} from './SearchResults';
import {SearchRefinement} from './SearchRefinement';

//const SEARCH_URL = 'https://engine.redbzr.com/search/';
const SEARCH_URL = 'http://localhost:5000/search/';

export var Search = React.createClass({
    getInitialState: function() {
        return (
            {
                items: [],
                searchTerm: this.props.params.term,
                resultsForTerm: '',
                loadingResults: true,
                page: this.props.params.page || 0
            }
        )
    },

    buildUrl: function() {
        var url = SEARCH_URL + this.state.searchTerm + '?page=' + (this.state.page + 1);
        url += '&includeNsfw=' + ($('#searchRefinementForm .nsfw').size > 0);
        return url;
    },

    updateItems: function() {
        if (!this.state.searchTerm) {
            return;
        }
        $('#loader').show();
        this.setState({loadingResults: true, resultsForTerm: this.state.searchTerm});
        var url = this.buildUrl();
        fetch(url).then((response) => {
            response.json().then((data) => {
                this.setState({
                    items: data,
                    resultsForTerm: this.state.searchTerm,
                    loadingResults: false
                });
                $('#loader').hide();
            })
        })
        .catch(function(error) {
            console.log('Error', error);
        });
    },

    componentWillMount: function() {
    //    this.updateItems();
    },

    componentDidUpdate: function() {
        console.log('State updated:', this.state);
        if (this.state.searchTerm !== this.state.resultsForTerm) {
            this.updateItems();
        }
    },

    onChildChanged: function(newTerm) {
        console.log('Setting searchTerm to', newTerm);
        this.setState({searchTerm: newTerm});
    },

    render: function() {
        var resultsView;
        if (this.state.resultsForTerm) {
            resultsView = (<div>
                <div className='searchedFor'>
                    {this.state.resultsForTerm ? <h2>{this.state.items.length} {this.state.items.length == 1 ? 'result' : 'results'} for '{this.state.searchTerm}'</h2> : ''}
                </div>
                <SearchResults items={this.state.items} />
            </div>);
        }
        return (
            <div className='container col-centered'>
                <SearchRefinement callback={this.onChildChanged} searchTerm={this.state.searchTerm}/>
                <div className='searchListings'>
                    {resultsView ||''}
                </div>
            </div>
        );
    }
});
