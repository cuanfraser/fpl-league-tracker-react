import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const LeagueId = () => {
    const [leagueId, setLeagueId] = useState(0);
    let history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        history.push(`/league/${leagueId}`);
    };

    return (
        <div>
            <h2>Enter League</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    League ID:
                    <input
                        type='number'
                        name='league-id'
                        value={leagueId}
                        onChange={(e) => setLeagueId(e.target.value)}
                    />
                </label>
                <input type='submit' value='Submit' />
            </form>
        </div>
    );
};

export default LeagueId;
