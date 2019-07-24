import React, { useState } from 'react';
import MemberForm from './Components/MemberForm';
import TeamDisplay from './Components/TeamDisplay';
import './App.css';

function App() {
  const [team, setTeam] = useState([]);

  const addMember = member => {
    setTeam([...team, member]);
  };

  return (
    <div className="App">
      <h1>Lambda School WEB21 Build Week Team</h1>
      <TeamDisplay value={team}/>

      <h3>Are you interested in joining the team?  Sign up below!</h3>
      <MemberForm add={addMember}/>

    </div>
  );
}

export default App;
