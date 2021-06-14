import React, { useState } from 'react';
import TeamInfo from './TeamInfo';
import TeamId from './TeamId';
import { findTeamById } from '../../services/TeamService';

const Team = () => {
  const [teamData, setTeamData] = useState({});

  const updateTeamId = async (id) => {
    let resp = await findTeamById(id);
    if (resp.length === 0) {
      alert('Invalid ID');
    } else {
      console.log(resp);
      setTeamData(resp);
    }
  };

  return (
    <div>
      <h1>Team</h1>

      <TeamId updateTeamId={updateTeamId} />
      {teamData && Object.keys(teamData).length > 0 ? <TeamInfo teamData={teamData} /> : null}
    </div>
  );
};

export default Team;
