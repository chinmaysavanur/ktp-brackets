import React from 'react';
import Header from '../components/Header';

const BracketDetail = ({ match }) => {
  return (
    <div className='page'>
      <Header></Header>

      <div>
        <div>
          <div style={{ color: 'black' }}>
            <h1>hey! this is for bracket {match.params.tid}</h1>
            <h2>Jan 12 - Jan 19, 2021</h2>
          </div>
          <div># Participants!</div>
        </div>

        <div>Embedded Bracket</div>
      </div>
    </div>
  );
};

export default BracketDetail;
