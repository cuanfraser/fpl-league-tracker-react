import React, { useState } from 'react';
import TeamInfo from './TeamInfo';
import TeamId from './TeamId';
import { findTeamById } from '../../services/TeamService';

const Team = () => {
  const [teamData, setTeamData] = useState({});

  const updateTeamId = async (id) => {
    let resp = await findTeamById(id);
    console.log(resp);
    if (resp.length === 0) {
      alert('Invalid ID');
    } else {
      setTeamData(resp);
    }
  };

  return (
    <div>
      <h1>Team</h1>

      <TeamId updateTeamId={updateTeamId} />
      {console.log(`Team Data: ${teamData}`)}
      {teamData !== {} ? <TeamInfo /> : null}
    </div>
  );
};

export default Team;
