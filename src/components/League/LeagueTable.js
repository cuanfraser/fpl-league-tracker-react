import React from 'react';
import PropTypes from 'prop-types';

const LeagueTable = ({ leagueData }) => {
    return (
        <div>
            <table className='table'>
                <thead>
                    <tr>
                        <th scope='col'>Rank</th>
                        <th scope='col'>Team</th>
                        <th scope='col'>Player</th>
                        <th scope='col'>Total Points</th>
                    </tr>
                </thead>
                <tbody>
                    {leagueData.standings.results.map((team) => {
                        return (
                            <tr key={team.id}>
                                {/* <th scope='row'>1</th> */}
                                <td>{team.rank}</td>
                                <td>{team.entry_name}</td>
                                <td>{team.player_name}</td>
                                <td>{team.total}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

LeagueTable.propTypes = {
    leagueData: PropTypes.object.isRequired,
};

export default LeagueTable;
