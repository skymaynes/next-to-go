import React from 'react';

import "./nexttogo.css";

const NextToGo = ({ user, ewan }) => {
  const { meeting, raceNumber } = user;
  const yo = ewan;

  return (
    <div className="card">      
      <div className="card-header">
      {
        meeting.raceType === 'G' ? 'Greyhound ' : 
        meeting.raceType === 'R' ? 'Racing' : 'Harness'
      }
      -R{raceNumber}
      </div>
      <div className="card-block">
      { yo }m 
      </div>  
      
      <div className="card-footer">
       {meeting.meetingName} ({meeting.location})
      </div>

    </div>
  );
};

export default NextToGo;
