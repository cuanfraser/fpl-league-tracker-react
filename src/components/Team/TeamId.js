import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const TeamId = () => {
    const [teamId, setTeamId] = useState(0);
    let history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        history.push(`/team/${teamId}`);
    };

    return (
        <div>
            <h2>Enter Team</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Team ID:
                    <input
                        type='number'
                        name='team-id'
                        value={teamId}
                        onChange={(e) => setTeamId(e.target.value)}
                    />
                </label>
                <input type='submit' value='Submit' />
            </form>
        </div>
    );
};

export default TeamId;
