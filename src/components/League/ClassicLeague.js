import React, { useState } from 'react';

const ClassicLeague = ({ leagueId, history }) => {
    const [leagueData, setLeagueData] = useState({});

    return (
        <div>
            <h2>Classic League</h2>
            {/* <h3>{teamData.name}</h3>
      <p>Points: {teamData.summary_overall_points}</p>
      <h4>Classic Leagues:</h4>
      <ul>
        {teamData.leagues.classic.map(league => {
          return <li key={league.id}>{league.name}</li>
        })}
      </ul> */}
        </div>
    );
};

export default ClassicLeague;
