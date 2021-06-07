import "./App.css";
import Grid from "./components/grid.js";
import Header from "./components/Header.js";
import React from "react";
import Button from "@material-ui/core/Button";

function App() {
  const [rows, setRows] = React.useState(2);
  const [cols, setCols] = React.useState(2);

  //const [forms, setForms] =

  // function handleSetForm(){
  //   var formCopy  = JSON.parse(JSON.stringify(obj));
  //   //
  //   setForms(formCopy);
  // }

  React.useEffect(() => {}, [rows, cols]);

  return (
    <div className="App">
      {/* <Header/> */}
      <Grid rows={rows} cols={cols} />
      <Button onClick={() => setCols(cols + 1)}>+Cols</Button>
      <Button onClick={() => setCols(cols - 1)}>-Cols</Button>
      <Button onClick={() => setRows(rows + 1)}>+rows</Button>
      <Button onClick={() => setRows(rows - 1)}>-rows</Button>
    </div>
  );
}

export default App;
