import React, { Component } from 'react';

class Stripes extends Component {
    showStripes = () => (
        <div>
            stripe

        </div>

    )
    render() {
        return (
            <div className="featured_stripes">
                {this.showStripes()}
            </div>
        );
    }
}

export default Stripes;