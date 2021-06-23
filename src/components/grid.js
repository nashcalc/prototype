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
  const [highlights, setHighlights] = useState(null);

  useEffect(() => {
    setHighlights(converttohighlights(highlightedeqs));
  }, [highlightedeqs]);

  //console.log(highlights);

  function arraychunk(arr, len) {
    var chunks = [],
      i = 0,
      n = arr.length;
    while (i < n) {
      chunks.push(arr.slice(i, (i += len)));
    }
    return chunks;
  }

  function converttohighlights(highlightedeqs) {
    if (highlightedeqs !== null) {
      var highlightstolist1 = highlightedeqs.split("],");
      var highlightstolist2 = [];
      for (var elem in highlightstolist1) {
        if (highlightstolist1[elem].includes(":")) {
          var colonindex = highlightstolist1[elem].indexOf(":");
          var pushtolist21 = highlightstolist1[elem].replace(
            highlightstolist1[elem][colonindex - 1],
            ""
          );
          var colonindex2 = pushtolist21.indexOf(":");
          var pushtolist22 = pushtolist21.replace(
            pushtolist21[colonindex2],
            ""
          );
          highlightstolist2.push(pushtolist22);
        } else {
          highlightstolist2.push(highlightstolist1[elem]);
        }
      }
      var highlightstolist3 = [];
      highlightstolist2.forEach((element) =>
        highlightstolist3.push(
          <div>
            {element
              .replaceAll("[", "")
              .replaceAll("]", "")
              .replaceAll("{", "")
              .replaceAll("}", "")
              .replaceAll(" ", "")}
          </div>
        )
      );
      var highlightstolist4 = [];
      for (elem in highlightstolist3) {
        highlightstolist4.push(highlightstolist3[elem].props.children);
      }
      var highlightstolist5 = [];
      for (elem in highlightstolist4) {
        var templist = [];
        templist.push(highlightstolist4[elem].split(","));
        var templist2 = [];
        for (elem in templist) {
          var templist3 = [];
          for (var el in templist[elem]) {
            templist3.push(parseFloat(templist[elem][el]));
          }
          templist2.push(templist3);
        }
        highlightstolist5.push(templist2);
      }
      var highlightstolist6 = [];
      for (elem in highlightstolist5) {
        if (highlightstolist5[elem][0].includes(1)) {
          highlightstolist6.push(highlightstolist5[elem][0].indexOf(1));
        }
      }
      var highlightstolist7 = arraychunk(highlightstolist6, 2);
    }
    return highlightstolist7;
  }

  const classes = useStyles();

  function sendHighlightsToForm(i, value) {
    for (var arr in highlights) {
      if (highlights[arr][0] == i && highlights[arr][1] == value) {
        return true;
      } else {
        return false;
      }
    }
  }

  var colMap = Array.from(Array(cols).keys());

  var gridContainer = [];
  for (var i = 0; i < rows; i++) {
    gridContainer.push(
      <div>
        <Grid container className={classes.root} spacing={1} id={"row" + i}>
          <Grid item xs={12}>
            <Grid container justify="center">
              {colMap.map((value) => (
                <Grid key={value} id={"row" + i + "col" + value} item>
                  <Form
                    location={"row" + i + "col" + value}
                    highlighted={sendHighlightsToForm(i, value)}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }

  return gridContainer;
}
