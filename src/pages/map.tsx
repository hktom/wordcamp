import { Box, CardMedia, Divider, Typography } from "@mui/material";
import MainLayout from "../layout/mainLayout";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { useAppSelector } from "../store/store";
import MarkerClusterGroup from "react-leaflet-cluster";
import pin from "../../public/img/icon-marker-upcoming-2x.png";
import clustor from "../../public/img/icon-marker-clustered.png";
import L from "leaflet";
import CardItem from "../component/cardItem";
import { IWordCamp } from "../helpers/apiInterface";

const clustorPin = new L.Icon({
  iconUrl: clustor,
  iconSize: new L.Point(70, 90),
});

// / NOTE: iconCreateFunction is running by leaflet, which is not support ES6 arrow func syntax
// eslint-disable-next-line
const createClusterCustomIcon = function (cluster: any) {
  return L.divIcon({
    html: `<span>${cluster.getChildCount()}</span>`,
    className: "custom-marker-cluster",
    iconSize: L.point(33, 33, true),
  });
};

var pinIcon = L.icon({
  iconUrl: pin,
  iconSize: [60, 80],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76],
  shadowSize: [68, 95],
  shadowAnchor: [22, 94],
});

function MapPage() {
  const state = useAppSelector((state) => state.event);

  return (
    <MainLayout>
      <Box>
        <Box sx={{ maxWidth: "80rem", mx: "auto", mt: 0 }}>
          <MapContainer
            center={[34.846, 14.862]}
            zoom={2.5}
            minZoom={2.5}
            scrollWheelZoom={true}
            style={{ minHeight: "600px", width: "100%" }}
          >
            <TileLayer
              attribution='Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
              url="https://api.mapbox.com/styles/v1/tomhk/ck3gtxgeg0g3w1cpapci744gz/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoidG9taGsiLCJhIjoiY2szZ3R2eG1rMDU2azNobXR5dXUzODRieiJ9.3AcxoJrp5yJtZTxPdqmDzw"
            />

            <MarkerClusterGroup
              chunkedLoading
              showCoverageOnHover={false}
              iconCreateFunction={createClusterCustomIcon}
            >
              {state.events
                .filter((event) => event.latitude && event.longitude)
                .map((event) => (
                  <Marker
                    position={[event.latitude, event.longitude]}
                    icon={pinIcon}
                    key={event.id}
                  >
                    <Popup>
                      <Typography variant="h6">{event.title}</Typography>
                      <Typography variant="body2">
                        {event.start} - {event.end} <br /> {event.location}{" "}
                        <br /> {event.physicalAddress}
                      </Typography>
                    </Popup>
                  </Marker>
                ))}
            </MarkerClusterGroup>
          </MapContainer>

          <Box sx={{ mt: 5 }}>
            {state.eventsGroupeByDate.map((group) => (
              <Box key={group.year}>
                <Typography variant="h4" sx={{ color: "#028db9" }}>
                  {group.year}
                </Typography>
                <Divider sx={{ mb: 3 }} />
                {group.data.map((event: IWordCamp) => (
                  <CardItem {...event} key={event.id} />
                ))}
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </MainLayout>
  );
}

export default MapPage;
