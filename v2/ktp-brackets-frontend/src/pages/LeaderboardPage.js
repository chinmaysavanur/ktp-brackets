import React from 'react';
import Header from '../components/Header';

const LeaderboardRow = () => {
  return <div></div>;
};

const LeaderboardPage = () => {
  return (
    <div className='page'>
      <Header></Header>

      <div style={{ display: 'flex' }}>
        <div>
          <div>
            <h2>Your Results</h2>
            <div style={{ display: 'flex' }}>
              <span>Name</span>
              <span>Leaderboad #</span>
              <span>Overall Record</span>
              <span>Championships</span>
              <span>Recent Place Change</span>
            </div>
            <div></div>
          </div>
          <div>
            <h2>League Results</h2>
            <div style={{ display: 'flex' }}>
              <span>Name</span>
              <span>Leaderboad #</span>
              <span>Overall Record</span>
              <span>Championships</span>
              <span>Recent Place Change</span>
            </div>
            <div></div>
          </div>
        </div>

        <div>
          <h2>Trophy Case</h2>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default LeaderboardPage;
