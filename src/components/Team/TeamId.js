import React, { useState } from 'react';

const TeamId = ({ updateTeamId }) => {
  const [teamId, setTeamId] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Team ID: ${teamId} was submitted.`);
    updateTeamId(teamId);
  };

  return (
    <div>
      <h1>Team</h1>

      <form onSubmit={handleSubmit}>
        <label>
          Team ID:
          <input
            type='text'
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
