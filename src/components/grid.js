import React,{ useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Form from './form.js'

export default function SpacingGrid(){

  function ColState(){
    const[cols,setCols] = useState(2);
    const columncontainer = []
    columncontainer.push(
      <div>
            <button onClick={() => setCols(cols + 1)}>Add Cols</button>
            <button onClick={() => setCols(cols - 1)}>Remove Cols</button>
      </div>)
    const containerMap = Array.from(Array(cols).keys())
    columncontainer.push(containerMap)
    return(
      columncontainer
    )
  }

  const colstate = ColState();

  function constructGrid() {
    return(
      <Grid container spacing={0.5}>
      <Grid item xs={12}>

        <Grid container justify="center" spacing={0.5}>
          {colstate[1].map((value) => (
            <Grid key={value} item>
              <Form/>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
    )
  }

  var containers = [];

  function RowState(){
    const[rows,setRows] = useState(2);

    var i;
    for (i = 0; i < rows; i++) {
        containers.push(constructGrid());
      }

    return(rows>0 ?
      <div>
        <button onClick={() => setRows(rows + 1)}>Add Rows</button>
        <button onClick={() => setRows(rows - 1)}>Remove Rows</button>
        {rows}
      </div>
      :
      <div>
        <button onClick={() => setRows(rows + 1)}>Add Rows</button>
        <button onClick={() => setRows(rows + 0)}>Remove Rows</button>
        {rows}
      </div>
    )
  }

  containers.push(RowState())

  containers.push(ColState())

  return (
    containers
  );
  }
