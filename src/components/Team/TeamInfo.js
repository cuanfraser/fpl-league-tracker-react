import React from "react";

const TeamInfo = ({teamData}) => {

  return (
    <div>

      <h2>Team Info</h2>
      <h3>{teamData.name}</h3>
      <ul>
        <li>Points: {teamData.summary_overall_points}</li>
      </ul>
    </div>
  );
};

export default TeamInfo;
