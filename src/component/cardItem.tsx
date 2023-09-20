import { Box, CardMedia, Typography, Divider } from "@mui/material";

function CardItem() {
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
          src="https://central.wordcamp.org/files/2023/04/Banner-Post-Central-WCSJ-2023-130x60.jpg"
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
              Event Title
            </Typography>

            <Box
              sx={{
                mx: 1,
                backgroundColor: "red",
                fontSize: "0.6rem",
                color: "#fff",
                px: 0.3,
                py: 0.2,
                fontWeight: "bold",
              }}
            >
              CLOSED
            </Box>
          </Box>
          <Typography variant="body2" sx={{ my: 0.2 }}>
            30 september 2023 |   VancouVer, Canada
          </Typography>
          {/* <Typography variant="body2">30 september 2023</Typography> */}
        </Box>
      </Box>
      <Divider sx={{ mt: 1 }} />
    </Box>
  );
}

export default CardItem;
