import React from 'react';

const MatchesBlock = ({ match }) => {


    return (
        <div className="match_block">
            <div className="match_date">
                {match.final ? match.date : `Match not played yet: ${match.date}`}
            </div>
            <div className="match_wrapper">
                <div className="match_top">

                </div>
            </div>
        </div>

    );
};

export default MatchesBlock;