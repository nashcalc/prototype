import "./library.css"
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';

const filter = createFilterOptions();

export default function Library({childToParent}) {

  const [value, setValue] = React.useState(null);

  childToParent(JSON.stringify(value))

  return (
    <div className="library">
      <Autocomplete

        value={value}

        onChange={(event, newValue) => {
          if (typeof newValue === 'string') {
            setValue({
              title: newValue,
            });
          } else if (newValue && newValue.inputValue) {
            // Create a new value from the user input
            setValue({
              title: newValue.inputValue,
            });
          } else {
            setValue(newValue);
          }
        }}

        filterOptions={(options, params) => {
          const filtered = filter(options, params);

          const { inputValue } = params;
          // Suggest the creation of a new value
          const isExisting = options.some((option) => inputValue === option.title);

          return filtered;
        }}
        selectOnFocus
        clearOnBlur
        handleHomeEndKeys
        id="Game Library"
        options={Games}
        getOptionLabel={(option) => {
          // Value selected with enter, right from the input
          if (typeof option === 'string') {
            return option;
          }
          // Regular option
          return option.title;
        }}
        renderOption={(props, option) => <li {...props}>{option.title}</li>}
        sx={{ width: 300 }}
        freeSolo
        renderInput={(params) => (
          <TextField {...params} label="Game Library" />
        )}
      />
    </div>
  );
}

//for the more info and link data there should be a more info / information
//icon or area where one can access the information below

const Games = [
  { title: 'Battle of the Sexes', info: "",
  payoffs: {rows: 2, cols: 2, matrix:
    [[[3,2],[1,1]],
    [[0,0],[2,3]]]},
    link: "https://en.wikipedia.org/wiki/Battle_of_the_sexes_(game_theory)" },

  { title: 'Chicken / Hawk Dove', info: "", payoffs:
  {rows: 2, cols: 2, matrix:
    [[[-2,-2],[4,0]],
    [[0,4],[2,2]]]},
    link: "https://en.wikipedia.org/wiki/Chicken_(game)"  },

  { title: 'Deadlock', info: "",
  payoffs: {rows: 2, cols: 2, matrix:
    [[[1,1],[0,3]],
    [[3,0],[2,2]]]},
    link: "https://en.wikipedia.org/wiki/Deadlock_(game_theory)"  },

  { title: 'Matching Pennies', info: "",
  payoffs: {rows: 2, cols: 2, matrix:
    [[[1,-1],[-1,1]],
    [[-1,+1],[+1,-1]]]},
    link: "https://en.wikipedia.org/wiki/Matching_pennies"  },

  { title: "Optional Prisoner's Dilemma", info: "",
  payoffs: {rows: 3, cols: 3, matrix:
    [[[4,4],[1,5],[3,3]],
    [[5,1],[2,2],[3,3]],
    [[3,3],[3,3],[3,3]]]},
    link: "https://en.wikipedia.org/wiki/Optional_prisoner%27s_dilemma"  },

  { title: "Prisoner's Dilemma", info: "", payoffs:
  {rows: 2,cols: 2, matrix:
    [[[3,3],[0,5]],
    [[5,0],[1,1]]]},
  link: "https://en.wikipedia.org/wiki/Prisoner%27s_dilemma"  },

  { title: "Rock, Paper, Scissors", info: "",
  payoffs: {rows: 3,cols: 3, matrix:
    [[[0,0],[-1,1],[1,-1]],
    [[1,-1],[0,0],[-1,1]],
    [[-1,1],[1,-1],[0,0]]]},
    link: "https://en.wikipedia.org/wiki/Rock_paper_scissors"  },

  { title: "Stag Hunt", info: "",
  payoffs: {rows: 2, cols: 2, matrix:
    [[[4,4],[1,3]],
    [[3,1],[2,2]]]},
    link: "https://en.wikipedia.org/wiki/Stag_hunt"  },

  { title: "Traveler's Dilemma (Condensed)", info: "",
  payoffs: {rows: 9, cols: 9, matrix:
    [[[10,10],[7,11],[6,10],[5,9],[4,8],[3,7],[2,6],[1,5],[0,4]],
    [[11,7],[9,9],[6,10],[5,9],[4,8],[3,7],[2,6],[1,5],[0,4]],
    [[10,6],[10,6],[8,8],[5,9],[4,8],[3,7],[2,6],[1,5],[0,4]],
    [[9,5],[9,5],[9,5],[7,7],[4,8],[3,7],[2,6],[1,5],[0,4]],
    [[8,4],[8,4],[8,4],[8,4],[6,6],[3,7],[2,6],[1,5],[0,4]],
    [[7,3],[7,3],[7,3],[7,3],[7,3],[5,5],[2,6],[1,5],[0,4]],
    [[6,2],[6,2],[6,2],[6,2],[6,2],[6,2],[4,4],[1,5],[0,4]],
    [[5,1],[5,1],[5,1],[5,1],[5,1],[5,1],[5,1],[3,3],[0,4]],
    [[4,0],[4,0],[4,0],[4,0],[4,0],[4,0],[4,0],[4,0],[2,2]]]},
    link: "https://en.wikipedia.org/wiki/Traveler%27s_dilemma"  },


];


/*

[[[1,1],[0,3]],
[[3,0],[2,2]]]},

{ title: "War of Attrition???", info: "",
payoffs: {rows: 2, cols: 2, matrix:null}, link: "https://en.wikipedia.org/wiki/War_of_attrition_(game)"  },
*/
