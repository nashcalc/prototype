import "./grid.css";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Form from "./form.js";
import React, { useState, useEffect } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(5),
  },
}));

export default function SpacingGrid({ rows, cols, highlightedeqs }) {

  function arraychunk(arr, len) {
    var chunks = [],
      i = 0,
      n = arr.length;
    while (i < n) {
      chunks.push(arr.slice(i, (i += len)));
    }
    return chunks;
  }


  const classes = useStyles();
  var colMap = Array.from(Array(cols).keys());

  var gridContainer = [];
  for (var i = 0; i < rows; i++) {
    gridContainer.push(
      <div>
        <Grid container className={classes.root} spacing={1} id={"row" + i}>
          <Grid container wrap="nowrap" justify="center">
            {colMap.map((value) => (
              <Grid key={value} id={"row" + i + "col" + value} item>
                <Form
                  row={i}
                  col={value}
                  highlightedeqs = {highlightedeqs}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </div>
    );
  }

  return (
    <div>
      {gridContainer}
    </div>
  );
}
