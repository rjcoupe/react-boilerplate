import React, { Component } from 'react';

export default class ElectionCandidate extends Component {
    constructor(props) {
        super(props);
        this.state = { count: props.initialCount };
    }

    render() {
        var barWidth = (this.props.game.votes / this.props.totalVotes) * 100;
        return (
            <div className='row' data-candidate-id={this.props.game._id}>
                <div className='fluid-container'>
                    <div className='candidate-votes-container row'>
                        <div className='game-icon col-sm-1 hidden-xs-down'>
                            <img src={this.props.game.iconUrl} />
                        </div>
                        <div className='game-bar-container col-xs-12 col-sm-11'>
                            <div className='game-bar' style='background-color: {this.props.game.barColour}; width: {barWidth}%;'></div>
                            <div className='game-bar-title'>
                                <p>{this.props.game.name}: {this.props.game.votes}</p>
                            </div>
                        </div>
                    </div>
                    <div className='candidate-voters row'>
                        {this.props.game.voters.map((voter) => {
                            return (
                                <img src={voter.avatarUrl} alt={voter.name} />
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    }
}
