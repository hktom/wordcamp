import { Box, CardMedia, Typography, Divider } from "@mui/material";
import { IWordCamp } from "../helpers/apiInterface";
import { status } from "../helpers/enum";
import dayjs from "dayjs";

function CardItem(props: IWordCamp) {
  return (
    <Box sx={{ mt: 1 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          cursor: "pointer",
          "&:hover": {
            color: "#bf640c",
          },
        }}
      >
        <CardMedia
          sx={{
            width: "130px",
            height: "70px",
            mr: 3,
            borderRadius: "4px",
            border: "5px solid #fff",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          }}
          component="img"
          src={props.image}
        />

        <Box sx={{ flexGrow: 1 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <Typography variant="h6" sx={{ color: "#028db9" }}>
              {props.title}
            </Typography>

            <Box
              sx={{
                mx: 1,
                backgroundColor:
                  props.status == status.closed ? "red" : "green",
                fontSize: "0.6rem",
                color: "#fff",
                px: 0.3,
                py: 0.2,
                fontWeight: "bold",
              }}
            >
              {props.status == status.closed ? "PASTED" : "UPCOMING"}
            </Box>
          </Box>
          <Typography variant="body2" sx={{ my: 0.2 }}>
            {dayjs(props.start).format("DD MM YYYY")} | {props.location}
          </Typography>
        </Box>
      </Box>
      <Divider sx={{ mt: 1 }} />
    </Box>
  );
}

export default CardItem;
