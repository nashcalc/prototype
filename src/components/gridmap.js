import Grid from "./grid.js";
import { MapInteractionCSS } from "react-map-interaction";

// This component uses CSS to scale your content.
// Just pass in content as children and it will take care of the rest.
const GridMap = ({ rows, cols, highlightedeqs }) => {
  return (
    <MapInteractionCSS>
      <Grid rows={rows} cols={cols} highlightedeqs={highlightedeqs} />
    </MapInteractionCSS>
  );
};

export { GridMap };
