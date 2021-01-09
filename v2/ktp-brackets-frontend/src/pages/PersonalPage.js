import React from 'react';
import Header from '../components/Header';

const PersonalPage = () => (
  <div className='page'>
    <Header></Header>

    <div>
      <div>
        <div>
          <h2>You Overall Results</h2>
          <div>
            <span>Name</span>
            <span>Overall Position</span>
            <span>Best Game</span>
            <span>Total Championships</span>
            <span>Total Points</span>
          </div>
        </div>

        <div>
          <h2>Your Overall Results</h2>
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

export default PersonalPage;
