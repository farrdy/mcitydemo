import React, { Component } from 'react';

class Stripes extends Component {
    showStripes = () => (
        <div>
            Stripe
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