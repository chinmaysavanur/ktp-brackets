import React from 'react';
import Header from '../components/Header';
import './BracketsPage.css';
import GamePreview from '../components/GamePreview';

const BracketsPage = () => {
  return (
    <div className='page'>
      <Header></Header>

      <div className='main-brackets-container'>
        <GamePreview type='8 ball' title='game' />
        <GamePreview type='mini golf' title='game' />
        <GamePreview type='cup pong' title='game' />
        <GamePreview type='mini golf' title='game' />
      </div>
    </div>
  );
};

export default BracketsPage;
