import * as React from 'react';
import NashImageHome from "../components/NashImageHome.js"
import TwoPlayerNormalNash from "../components/TwoPlayerNormalNash.js";
import TwoPlayerExtensiveNash from "../components/TwoPlayerExtensiveNash.js";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function TwoPlayers({}) {
  const [alignment, setAlignment] = React.useState('Normal');

  const handleChange = (event, newAlignment) => {
      setAlignment(newAlignment);
    };

  function GameType(){
    if (alignment == "Normal"){
      return (
        <TwoPlayerNormalNash/>
      )
    }else if (alignment == "Extensive"){
      return (
        <TwoPlayerExtensiveNash/>
      )
    }
  }

    return (
      <React.Fragment>
        <NashImageHome/>
        <ToggleButtonGroup
          color="primary"
          value={alignment}
          exclusive
          onChange={handleChange}
        >
          <ToggleButton value="Normal">Strategic Form</ToggleButton>
          <ToggleButton value="Extensive">Extensive Form</ToggleButton>
        </ToggleButtonGroup>
        <div></div>
        <div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <GameType/>
        </div>
      </React.Fragment>

    );
  }
