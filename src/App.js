import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import TeamMember, { TeamMemberForm } from './components/TeamMember';
import './App.css';

const App = (props) => {
    const [team, setTeam] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchData = useCallback(async () => {
        try {
            setLoading(true);
            const response = await axios.get('/team');

            setTeam(response.data);
            setLoading(false);
        } catch (error) {
            // try again after half a second if fails due to race condition
            console.log('retrying initial data request...');
            setTimeout(() => {
                fetchData();
            }, 500);
        }
    });
    useEffect(() => {
        fetchData();
    }, []);

    if (loading) {
        return <h1>Loading...</h1>;
    }

    return (
        <div className="app">
            <h1>Meet the Team!</h1>
            <div className="team-grid" />
            {team.map((member) => (
                <TeamMember
                    key={member.id}
                    name={`${member.firstName} ${member.lastName}`}
                    title={member.title}
                    photoUrl={member.photoUrl}
                    story={member.story}
                    favoriteColor={member.favoriteColor}
                />
            ))}
            {/* Make this new team member link to your form! */}
            <TeamMemberForm fetchDataFn={fetchData} id="new" name="Join us!" title="New Teammate" />
        </div>
    );
};

export default App;
