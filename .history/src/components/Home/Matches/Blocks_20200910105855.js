import React, { Component } from 'react';
import { firebaseMatches } from '../../../firebase'
import { firebaseLooper } from '../../ui/misc'

class Blocks extends Component {

    state = {
        matches: []

    }
    componentDidMount() {
        firebaseMatches.limitToLast(6).once('value').then((snapshot) => {
            const matchex = firebaseLooper(snapshot);
            console.log(matchex);

        })
    }
    showMatches = () => (
        <div >Match</div>
    )
    render() {
        return (
            <div className="home_matches">
                {this.showMatches(this.state.matches)}
            </div>
        );
    }
}

export default Blocks;