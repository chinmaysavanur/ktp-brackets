import React from 'react';
import styled from 'styled-components';
import EightBallThumbnail from '../8Ball_thumbnail.png';
import CupPongThumbnail from '../CupPong_thumbnail.png';
import MiniGolfThumbnail from '../MiniGolf_thumbnail.png';
import ParticipantsLogo from '../participants_logo.png';
import { Link } from 'react-router-dom';

const StyledContainer = styled.div`
  width: ${(props) => (props.small ? '250px' : '346px')};
  height: ${(props) => (props.small ? '204px' : '294px')};
  border-radius: 30px;
  background-color: #1e1e1e;
  margin: 1em;
  display: flex;
  flex-direction: column;
  margin-left: ${(props) => (props.small ? '0' : '1em')};
`;

const StyledImage = styled.img`
  border-radius: 30px;
  width: 100%;
`;

const StyledBracketInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 2em;
`;

const GamePreview = (props) => {
  const type = props.type;

  return (
    <Link
      to={`/brackets/123`}
      style={{ textDecoration: 'none', color: 'inherit' }}
    >
      <StyledContainer small={props.small}>
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
        />

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            flexGrow: 1,
            padding: '0.4em 1.2em 1em 1.2em',
          }}
        >
          <div>
            <h3>{props.title}</h3>
            {/* <p>let's fucking go</p> */}
            <p>Jan 12 - Jan 19, 2021</p>
          </div>

          <StyledBracketInfo>
            <div
              style={{
                display: 'flex',
                height: '100%',
                flexGrow: 1,
                alignItems: 'center',
              }}
            >
              <img
                src={ParticipantsLogo}
                alt=''
                style={{ height: '100%' }}
              ></img>
              <p>12 Participants</p>
            </div>

            <div
              style={{
                height: '1.5em',
                backgroundColor: '#A61C1C',
                padding: '0 10px',
                borderRadius: '16px',
              }}
            >
              Closed
            </div>
          </StyledBracketInfo>
        </div>
      </StyledContainer>
    </Link>
  );
};

export default GamePreview;
