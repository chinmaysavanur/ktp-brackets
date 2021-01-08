import React, { useEffect } from 'react';
import styled from 'styled-components';
import EightBallThumbnail from '../8Ball_thumbnail.png';
import CupPongThumbnail from '../CupPong_thumbnail.png';
import MiniGolfThumbnail from '../MiniGolf_thumbnail.png';

const StyledContainer = styled.div`
  width: 346px;
  height: 294px;
  /* border: 2px solid red; */
  border-radius: 30px;
  background-color: #1e1e1e;
  margin: 1em;
`;

const StyledImage = styled.img`
  border-radius: 30px;
  width: 100%;
`;

const GameBox = (props) => {
  const type = props.type;
  var logo = EightBallThumbnail;

  console.log('outside');

  return (
    <StyledContainer>
      <StyledImage
        src={
          type === '8 ball'
            ? EightBallThumbnail
            : type === 'cup pong'
            ? CupPongThumbnail
            : type === 'mini golf'
            ? MiniGolfThumbnail
            : null
        }
        onLoad={() => {
          console.log('loaded thumbnail');
        }}
      ></StyledImage>
      <h3 style={{ padding: '0.4em 1rem' }}>{props.title}</h3>
      <p style={{ padding: '0.2em 1rem' }}>let's fucking go</p>
      <div>
        <img src='' alt=''></img>
        <p></p>
        <div></div>
      </div>
    </StyledContainer>
  );
};

export default GameBox;
