import React, { Component } from 'react';
import { easePolyOut } from 'd3-ease';
import Animate from 'react-move/Animate';
import Otamendi from '../../../Resources/images/players/Otamendi.png'

class HomeCards extends Component {

    state = {
        show: this.props.show,
        cards: [

            {
                bottom: 90,
                left: 300

            }, {
                bottom: 90,
                left: 300

            }, {
                bottom: 90,
                left: 300

            }, {
                bottom: 90,
                left: 300

            }

        ]
    }

    showAnimateCards = () => {


    }

    render() {
        return (
            <div>
                {this.showAnimateCards()}
            </div>
        );
    }
}

export default HomeCards;