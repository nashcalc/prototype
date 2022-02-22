import React, { useState} from "react";
import "./twoPlayers.css"
import NashImageHome from "../components/NashImageHome.js"
import TwoPlayerNormalNash from "../components/TwoPlayerNormalNash.js";
import TwoPlayerExtensiveNash from "../components/TwoPlayerExtensiveNash.js";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Library from "../components/Library.js"
import InfoIcon from '@mui/icons-material/Info';
import {Link} from 'react-router-dom';
import destr from 'destr' // this is basically better JSON.parse (I hope)

export default function TwoPlayers({}) {
  const [alignment, setAlignment] = React.useState('Normal');

  const handleChange = (event, newAlignment) => {
      setAlignment(newAlignment);
    };

  //getting library game state and data
  const [data, setData] = useState('');

  const childToParent = (childdata) => {
    setData(childdata);
  }

  if (data!="null"){
    var wiki = destr(data).link
  }

  function GameInfo(){
    if (data!="null"){

      return (
        <Link to={{pathname: wiki }} target="_blank" style={{ textDecoration: 'none' }} >
          <InfoIcon className="infoIcon"/>
        </Link>
      )
    }else{
      return("")
    }
  }

  function getDimensionsandPayoffs(){
    if (destr(data) == null){
        return({rows:null,cols:null,payoffMatrix:null})
    }
    var dimensionsandPayoffs = destr(data)["payoffs"]
    if (dimensionsandPayoffs != null){
      return(
      {rows:dimensionsandPayoffs["rows"],cols:dimensionsandPayoffs["cols"],
      payoffMatrix: dimensionsandPayoffs["matrix"]}
    )
  }
  return({rows:null,cols:null,payoffMatrix:null})
}

  function GameType(){
    if (alignment == "Normal"){
        var dimensionsandPayoffs = getDimensionsandPayoffs()
      return (
        <TwoPlayerNormalNash
        librows={dimensionsandPayoffs["rows"]}
        libcols={dimensionsandPayoffs["cols"]}
        libpayoffMatrix={dimensionsandPayoffs["payoffMatrix"]}
        />
      )
    }else if (alignment == "Extensive"){
      return (
        <TwoPlayerExtensiveNash/>
      )
    }
  }

    return (
      <div>

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

        <Library childToParent={childToParent}/>
        <GameInfo/>

        <div style={{height:"100%"}}>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <GameType/>
          {data}
        </div>
      </div>

    );
  }
