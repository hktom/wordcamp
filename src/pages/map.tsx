import { Box, Typography } from "@mui/material";
import MainLayout from "../layout/mainLayout";
import "mapbox-gl/dist/mapbox-gl.css";
import { MAP_API_KEY } from "../helpers/apiKeys";
import Map from "react-map-gl";
import { useAppSelector } from "../store/store";
import CMarker from "../component/cMarker";

function MapPage() {
  const state = useAppSelector((state) => state.event);

  return (
    <MainLayout>
      <Box>
        <Map
          mapboxAccessToken={MAP_API_KEY}
          initialViewState={{
            longitude: 14.846,
            latitude: 35.862,
            zoom: 2.1,
          }}
          style={{ width: "100%", height: 500 }}
          mapStyle="mapbox://styles/mapbox/streets-v9"
        >
          {state.events
            .filter((event) => event.latitude && event.longitude)
            .map((event) => (
              <CMarker key={event.id} {...event} />
            ))}
        </Map>
      </Box>
    </MainLayout>
  );
}

export default MapPage;
