import { Box, Typography } from "@mui/material";
import MainLayout from "../layout/mainLayout";
import "mapbox-gl/dist/mapbox-gl.css";
import { MAP_API_KEY } from "../helpers/apiKeys";
import Map from "react-map-gl";

function MapPage() {
  return (
    <MainLayout>
      <Box>
        <Map
          mapboxAccessToken={MAP_API_KEY}
          initialViewState={{
            longitude: -122.4,
            latitude: 37.8,
            zoom: 2,
          }}
          style={{ width: "100%", height: 500 }}
          mapStyle="mapbox://styles/mapbox/streets-v9"
        />
      </Box>
    </MainLayout>
  );
}

export default MapPage;
