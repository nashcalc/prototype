import React,{ useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Form from './form.js'

export default function SpacingGrid(){

  function ColState(){
    const[cols,setCols] = useState(2);

    const columncontainer = []

    columncontainer.push(cols>1 ?
      <div>
            <button onClick={() => setCols(cols + 1)}>Add Cols</button>
            <button onClick={() => setCols(cols - 1)}>Remove Cols</button>
      </div>
      :
      <div>
            <button onClick={() => setCols(cols + 1)}>Add Cols</button>
            <button onClick={() => setCols(cols + 0)}>Remove Cols</button>
      </div>
    )

    const containerMap = Array.from(Array(cols).keys())

      function constructGrid() {
        return(
          <Grid container spacing={0.5}>
          <Grid item xs={12}>

            <Grid container justify="center" spacing={0.5}>
              {containerMap.map((value) => (
                <Grid key={value} item>
                  <Form/>
                </Grid>

              ))}
            </Grid>

          </Grid>
        </Grid>
        )
      }

      function RowState(){
        const[rows,setRows] = useState(2);

        var i;
        for (i = 0; i < rows; i++) {
            containers.push(constructGrid());
          }

        return(rows>1 ?
          <div>
            <button onClick={() => setRows(rows + 1)}>Add Rows</button>
            <button onClick={() => setRows(rows - 1)}>Remove Rows</button>
          </div>
          :
          <div>
            <button onClick={() => setRows(rows + 1)}>Add Rows</button>
            <button onClick={() => setRows(rows + 0)}>Remove Rows</button>
          </div>
        )
      }

    columncontainer.push(RowState())
    return(
      columncontainer
    )
  }

  var containers = [];

  containers.push(ColState())


return(containers)
}
