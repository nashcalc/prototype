import React,{ useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Form from './Form.js'
import Button from '@material-ui/core/Button';


export default function SpacingGrid(){

  function ColState(){
    const[cols,setCols] = useState(2);

    const columncontainer = []

    columncontainer.push(cols>1 ?
      <div>
            <Button variant="contained" color="primary" onClick={() => setCols(cols + 1)}>+ Cols</Button>
            <Button variant="contained" color="secondary" onClick={() => setCols(cols - 1)}>- Cols</Button>
      </div>
      :
      <div>
        <Button variant="contained" color="primary" onClick={() => setCols(cols + 1)}>+ Cols</Button>
        <Button variant="contained" color="secondary" onClick={() => setCols(cols + 0)}>- Cols</Button>
      </div>
    )

    const containerMap = Array.from(Array(cols).keys())

      function constructGrid() {
        return(
          <Grid container spacing={2}>
          <Grid item xs={12}>

            <Grid container justify="center" spacing={1}>
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
            <Button variant="contained" color="primary" onClick={() => setRows(rows + 1)}>+ Rows</Button>
            <Button variant="contained" color="secondary" onClick={() => setRows(rows - 1)}>- Rows</Button>
          </div>
          :
          <div>
            <Button variant="contained" color="primary" onClick={() => setRows(rows + 1)}>+ Rows</Button>
            <Button variant="contained" color="secondary" onClick={() => setRows(rows + 0)}>- Rows</Button>
          </div>
        )
      }

    columncontainer.push(RowState())
    console.log(columncontainer);
    return(
      columncontainer
    )
  }

  var containers = [];
  containers.push(ColState());

return(containers)
}
