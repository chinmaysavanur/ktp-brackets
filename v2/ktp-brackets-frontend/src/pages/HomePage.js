import React from 'react';
import styles from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className='home'>
      <div className={styles.games}>
        <div className={styles.myGamesContainer}>
          <h2>My Games</h2>
          <div className={styles.myGamesGameList}>
            <div class={styles.gamePreview}>Mini Golf Tournament - All</div>
          </div>
        </div>
        <div className={styles.activeGamesContainer}>
          <h2>Active Games</h2>
          <div class={styles.gamePreview}>8-Ball Pool Tournament</div>
        </div>
        {/* <div className='createGame'></div> */}
      </div>
      <div className={styles.gameUpdatesContainer}>
        <h2>Game Updates</h2>
        <div></div>
      </div>
    </div>
  );
};

export default HomePage;
