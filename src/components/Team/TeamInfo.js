import React, { useEffect, useState } from 'react';
import { findTeamById } from '../../services/TeamService';
import { Link, useParams, useHistory } from 'react-router-dom';

const TeamInfo = () => {
    let { teamUrlId } = useParams();
    const [teamData, setTeamData] = useState({});
    let history = useHistory();

    useEffect(() => {
        retrieveTeamData(teamUrlId);
    }, [teamUrlId]);

    const retrieveTeamData = async (id) => {
        let resp = await findTeamById(id);
        if (resp.length === 0 || resp.detail === 'Not found.') {
            alert('Invalid ID');
            history.push(`/team`);
        } else {
            console.log(resp);
            setTeamData(resp);
        }
    };

    if (Object.keys(teamData).length > 0) {
        return (
            <div>
                <h1>Team Info</h1>
                <h3>{teamData.name}</h3>
                <p>Points: {teamData.summary_overall_points}</p>
                <h4>Classic Leagues:</h4>
                <ul>
                    {teamData.leagues.classic.map((league) => {
                        return (
                            <li key={league.id}>
                                <Link to={`/league/${league.id}`}>{league.name}</Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    } else {
        return <h1>Loading Team</h1>;
    }
};

export default TeamInfo;
