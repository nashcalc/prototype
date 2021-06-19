import "./App.css";
import Grid from "./components/grid.js";
import React, { useState, useEffect } from "react";
import { RecoilRoot } from "recoil";
import Button from "@material-ui/core/Button";
import { triggered } from "./atomy.js";
import { useRecoilState } from "recoil";

function App() {
  const [rows, setRows] = useState(2);
  const [cols, setCols] = useState(2);

  const [currentTime, setCurrentTime] = useState(0);

  const [postId, setPostId] = useState(null);

  const [trigger, changeTrigger] = useRecoilState(triggered);

  useEffect(() => {
    fetch("/time")
      .then((res) => res.json())
      .then((data) => {
        setCurrentTime(data.time);
      });
  }, []);

  useEffect(() => {
    // POST request using fetch inside useEffect React hook
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: "React Hooks POST Request Example" }),
    };
    fetch("/test", requestOptions)
      .then((response) => response.json())
      .then((data) => setPostId(data.id));

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, []);

  useEffect(() => {
    var values = document.getElementsByClassName(
      "MuiInputBase-input MuiInput-input"
    );
    //this is where we send post to api instead of console log
    console.log(values);
  }, [trigger]);

  if (rows > 1 && cols > 1) {
    return (
      <div className="App">
        {/* <Header/> */}
        <Grid rows={rows} cols={cols} />
        <div>
          <Button onClick={() => setCols(cols + 1)}>+Cols</Button>
          <Button onClick={() => setCols(cols - 1)}>-Cols</Button>
          <Button onClick={() => setRows(rows + 1)}>+rows</Button>
          <Button onClick={() => setRows(rows - 1)}>-rows</Button>
        </div>
        <div>Post Id: {postId}</div>
        <p>The current time is {currentTime}.</p>
      </div>
    );
  } else if (rows > 1 && cols <= 1) {
    return (
      <div className="App">
        {/* <Header/> */}
        <Grid rows={rows} cols={cols} />
        <div>
          <Button onClick={() => setCols(cols + 1)}>+Cols</Button>
          <Button onClick={() => setCols(cols + 0)}>-Cols</Button>
          <Button onClick={() => setRows(rows + 1)}>+rows</Button>
          <Button onClick={() => setRows(rows - 1)}>-rows</Button>
        </div>
      </div>
    );
  } else if (rows <= 1 && cols > 1) {
    return (
      <div className="App">
        {/* <Header/> */}
        <Grid rows={rows} cols={cols} />
        <div>
          <Button onClick={() => setCols(cols + 1)}>+Cols</Button>
          <Button onClick={() => setCols(cols - 1)}>-Cols</Button>
          <Button onClick={() => setRows(rows + 1)}>+rows</Button>
          <Button onClick={() => setRows(rows + 0)}>-rows</Button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="App">
        {/* <Header/> */}
        <Grid rows={rows} cols={cols} />
        <div>
          <Button onClick={() => setCols(cols + 1)}>+Cols</Button>
          <Button onClick={() => setCols(cols + 0)}>-Cols</Button>
          <Button onClick={() => setRows(rows + 1)}>+rows</Button>
          <Button onClick={() => setRows(rows + 0)}>-rows</Button>
        </div>
      </div>
    );
  }
}

export default App;
