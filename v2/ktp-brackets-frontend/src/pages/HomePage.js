import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import GamePreview from '../components/GamePreview';
import CreateGamePlus from '../Create_game_plus.svg';
import ArrowMore from '../Arrow_more.svg';
import './HomePage.css';

const HomePage = () => {
  const [myGamesSample, setMyGamesSample] = useState([]);
  const [allGamesSample, setAllGamesSample] = useState([]);

  useEffect(() => {
    let arr = [
      <GamePreview
        title='Mini Gold Tounament - All'
        type='mini golf'
        small
      ></GamePreview>,
      <GamePreview
        title='Mini Gold Tounament - All2'
        type='mini golf'
        small
      ></GamePreview>,
    ];

    setMyGamesSample(arr);

    let arr2 = [
      <GamePreview
        title='8-Ball Pool Tournament'
        type='8 ball'
        small
      ></GamePreview>,
      <GamePreview
        title='8-Ball Pool Tournament'
        type='8 ball'
        small
      ></GamePreview>,
    ];

    setAllGamesSample(arr2);
  }, []);

  return (
    <div className='home page'>
      <Header></Header>

      <div className='main-game-container'>
        <div className='left-content'>
          <div className='game-section'>
            <h2>My Games</h2>
            <div className='game-row'>
              {myGamesSample}
              <div className='arrow-more'>
                <img src={ArrowMore} alt=''></img>
              </div>
            </div>
          </div>
          <div className='game-section'>
            <h2>All Games</h2>
            <div className='game-row'>
              {allGamesSample}
              <div className='arrow-more'>
                <img src={ArrowMore} alt=''></img>
              </div>
            </div>
          </div>
          <div className='game-section'>
            <div className='game-row'>
              <div className='create-game-box'>
                <img src={CreateGamePlus} alt=''></img>
                <p>Create a Game</p>
              </div>
            </div>
          </div>
        </div>

        <div className='game-updates-container'>
          <h2 style={{ textAlign: 'left' }}>Game Updates</h2>
          <div className='game-updates-list'></div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

{
  /* 
  <div className='game-preview'>8-Ball Pool Tournament</div>
  <div className='game-preview'>8-Ball Pool Tournament</div>
  <div className='game-preview'>8-Ball Pool Tournament</div>
  <div className='arrow-more'></div>
</div>; */
}
