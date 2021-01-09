import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import './BracketsPage.css';
import GamePreview from '../components/GamePreview';
import { Link } from 'react-router-dom';

const BracketsPage = () => {
  const [gamePreviews, setGamePreviews] = useState([]);

  useEffect(() => {
    // fetch stuff

    // get game objs

    // popular gamePreview components by mapping

    let arr = [
      <GamePreview type='8 ball' title='game' />,
      <GamePreview type='mini golf' title='game' />,
      <GamePreview type='cup pong' title='game' />,
      <GamePreview type='mini golf' title='game' />,
    ];

    setGamePreviews(arr);
  }, []);

  return (
    <div className='page'>
      <Header></Header>

      <div className='main-brackets-container'>{gamePreviews}</div>
    </div>
  );
};

export default BracketsPage;
