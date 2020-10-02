import React, { Component } from 'react';
import { easePolyOut } from 'd3-ease';
import Animate from 'react-move/Animate';
import Otamendi from '../../../Resources/images/players/Otamendi.png'

class HomeCards extends Component {

    state = {
        show: this.props.show,
        cards: [

            {

            }, {

            }, {

            }, {

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