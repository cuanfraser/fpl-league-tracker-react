import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { findLeagueById } from '../../services/LeagueService';
import LeagueTable from './LeagueTable';

const ClassicLeague = () => {
    let { leagueUrlId } = useParams();
    const [leagueData, setLeagueData] = useState({});

    useEffect(() => {
        retrieveLeagueData(leagueUrlId);
    }, [leagueUrlId]);

    const retrieveLeagueData = async (id) => {
        let resp = await findLeagueById(id);
        if (resp.length === 0) {
            alert('Invalid ID');
        } else {
            console.log(resp);
            setLeagueData(resp);
        }
    };

    if (Object.keys(leagueData).length > 0) {
        return (
            <div>
                <h1>Classic League</h1>
                <h2>{leagueData.league.name}</h2>
                <LeagueTable leagueData={leagueData} />
            </div>
        );
    } else {
      return <h1>Loading League</h1>;
    }
};

export default ClassicLeague;
