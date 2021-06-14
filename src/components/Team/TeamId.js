import React, { useState } from 'react';

const TeamId = ({ updateTeamId }) => {
  const [teamId, setTeamId] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateTeamId(teamId);
  };

  return (
    <div>
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
