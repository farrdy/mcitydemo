import React from 'react';
import Featured from './Featured'
import Matches from './Matches/index'
import MeetPlayers from './meetPLayers';

const Home = () => {
    return (
        <div className="bck_blue">
            <Featured />
            <Matches />
            <MeetPlayers />
        </div>
    );
};

export default Home;