import React, { Component } from 'react';
import { firebaseMatches } from '../../../firebase'

class Block extends Component {


    state = {
        matches=[]

    }

    showMatches = () => {


    }
    render() {
        return (
            <div className="home_matches">
                {this.showMatches(this.state.matches)}
            </div>
        );
    }
}

export default Block;