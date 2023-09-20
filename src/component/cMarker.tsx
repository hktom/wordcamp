import { useState } from "react";
import { IWordCamp } from "../helpers/apiInterface";
import pin from "../../public/img/icon-marker-upcoming-2x.png";
import { Box, Typography } from "@mui/material";
import { Marker, Popup } from "react-map-gl";

function CMarker(props: IWordCamp) {
  const [showPopup, setShowPopup] = useState<boolean>(false);
  return (
    <>
      {showPopup && (
        <Popup
          longitude={props.longitude}
          latitude={props.latitude + 9}
          anchor="bottom"
          onClose={() => setShowPopup(false)}
        >
          <Typography variant="h6" sx={{ fontSize: "0.9rem" }}>
            {props.title}
          </Typography>
          <Typography variant="body2" sx={{ fontSize: "0.8rem" }}>
            {props.start} - {props.end} <br /> {props.venueName} <br />{" "}
            {props.location}{" "}
          </Typography>
        </Popup>
      )}
      <Marker
        longitude={props.longitude}
        latitude={props.latitude}
        anchor="bottom"
        onClick={() => setShowPopup(true)}
      >
        <img src={pin} style={{ width: 50 }} />
      </Marker>
    </>
  );
}

export default CMarker;
