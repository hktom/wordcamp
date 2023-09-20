import { Box, Typography } from "@mui/material";
import MainLayout from "../layout/mainLayout";
import "mapbox-gl/dist/mapbox-gl.css";
import { MAP_API_KEY } from "../helpers/apiKeys";

import { useAppSelector } from "../store/store";

function MapPage() {
  const state = useAppSelector((state) => state.event);

  return (
    <MainLayout>
      <Box>
        {/* <Map
          mapboxAccessToken={MAP_API_KEY}
          initialViewState={{
            longitude: 14.846,
            latitude: 35.862,
            zoom: 2.1,
          }}
          style={{ width: "100%", height: 500 }}
          mapStyle="mapbox://styles/mapbox/streets-v9"
        >
          <Source
            id="earthquakes"
            type="geojson"
            data="https://docs.mapbox.com/mapbox-gl-js/assets/earthquakes.geojson"
            cluster={true}
            clusterMaxZoom={14}
            clusterRadius={50}
          >
            <Layer {...clusterLayer} />
            <Layer {...clusterCountLayer} />
            <Layer {...unclusteredPointLayer} />
          </Source>
          {state.events
            .filter((event) => event.latitude && event.longitude)
            .map((event) => (
              <CMarker key={event.id} {...event} />
            ))}
        </Map> */}
      </Box>
    </MainLayout>
  );
}

export default MapPage;
