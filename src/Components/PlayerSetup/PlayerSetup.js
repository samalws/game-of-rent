import React from 'react';
import Button from '@material-ui/core/Button';
import Background from '../WelcomePage/img/croppedBoard.png';
import PlayerIcon from '../PlayerIcon/PlayerIcon';
import './PlayerSetup.css';
import { RadioGroup } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';

const setup = ['Player 1', 'Player 2', '...'];


const styles = {
  mapBackground: {
    width: '100vw',
    height: 'auto',
    backgroundImage: `url(${Background})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  playerSetup: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'space-evenly',
    flexDirection: 'column',
    alignItems: 'center',
  },
  textGrid: {
    backgroundColor: '#000000aa',
    borderRadius: '1em',
    width: '60vw',
    height: '70vh',
    padding: '2%',
    display: 'flex',
    justifyContent: 'space-evenly',
    flexDirection: 'column',
    alignItems: 'center',
    color: 'white',
  },
  fields: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  textBox: {
    border: 0,
    width: '30vw',
    height: '5vh',
    borderRadius: 10,
    textAlign: 'center',
    fontSize: '20px',
  },
  avatarSection: {

    width: '50vw',
    display: 'flex',
    justifyContent: 'space-evenly',
    marginTop: '2vh',

  },
  playerAvatar: {
    cursor: 'pointer',
  },
};


class PlayerSetup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      setupLocation: 0,
    };
  }

  nextStep() {
    this.setState({
      setupLocation: this.state.setupLocation + 1,
    });
  }

  render() {
    return (
      <div style={styles.mapBackground}>
        <div style={styles.playerSetup}>
          <h1>{setup[this.state.setupLocation]}</h1>
          <div style={styles.textGrid}>

            <div style={styles.fields}>
              <h2>Enter a name for your player</h2>
              <input type="text" style={styles.textBox} />
            </div>

            <div style={styles.fields}>
              <h2>Choose an avatar for your player</h2>

              <RadioGroup classes={{ label: 'avatars' }}>
                <PlayerIcon num="0" control={<Radio />} />
                <PlayerIcon num="1" control={<Radio />} />
                <PlayerIcon num="2" control={<Radio />} />
                <PlayerIcon num="3" control={<Radio />} />
                <PlayerIcon num="4" control={<Radio />} />
                <PlayerIcon num="5" control={<Radio />} />
              </RadioGroup>


            </div>

            <Button variant="contained" href="/board">
              Finish
            </Button>

          </div>


        </div>
      </div>
    );
  }
}

export default PlayerSetup;
