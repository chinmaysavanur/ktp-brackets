import React from 'react';
import Header from '../components/Header';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className='home page'>
      <Header></Header>

      <div className='main-game-container'>
        <div className='left-content'>
          <div className='game-section'>
            <h2>My Games</h2>
            <div className='game-row'>
              <div className='gamePreview'>Mini Golf Tournament - All</div>
              <div className='gamePreview'>Mini Golf Tournament - All2</div>
              <div className='gamePreview'>Mini Golf Tournament - All3</div>
              <div className='arrow-more'></div>
            </div>
          </div>
          <div className='game-section'>
            <h2>All Games</h2>
            <div className='game-row'>
              <div className='game-preview'>8-Ball Pool Tournament</div>
              <div className='game-preview'>8-Ball Pool Tournament</div>
              <div className='game-preview'>8-Ball Pool Tournament</div>
              <div className='arrow-more'></div>
            </div>
          </div>
          <div className='game-section'>
            <div className='game-row'>
              <div className='game-preview'>Create Game</div>
            </div>
          </div>
        </div>

        <div className='game-updates-container'>
          <h2>Game Updates</h2>
          <div className='game-upddates-list'></div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
