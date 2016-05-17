import React, { Component } from 'react';

// Components
import ElectionCandidate from './ElectionCandidate'
import ErrorMessage from './ErrorMessage'

export default class Election extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: props.initialCount,
            election: {},
            error: false
        };
    }

    componentDidMount() {
        this._getElectionData(this.props.electionId)
    }

    renderElectionResults() {
        var results =  this.state.election.games.map((game) => {
            return <ElectionCandidate game={game} totalVotes={this.state.election.totalVotes} key={game._id} />
        });
        return (
            <div>
                <h1>Throwdown: {this.state.election.date}</h1>
                {results.length ? results : <p>No games have yet been suggested.</p>}
            </div>
        )
    }

    render() {
        return (
            <div className='election fluid-container' data-election-id='wefef'>
                {this.state.election.games ? this.renderElectionResults() : <ErrorMessage msg='No election could be found' />}
            </div>
        );
    }

    _getElectionData(electionId) {
        if (!electionId) {
            electionId = 'current';
        }
        console.log(electionId);
        fetch(`${window.api}/election/${electionId}`).then((response) => {
            response.json().then((election) => {
                if (election.error) {
                    this.setState({ error: true })
                    console.log(this.state);
                } else {
                    this.setState({ election: election })
                    console.log(this.state);
                }
            });
        });
    }
}
