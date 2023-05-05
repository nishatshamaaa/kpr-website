import { Box, Typography } from "@mui/material";

import sajidaLogo from "../logo/sajida-logo.webp";

export default function PoweredBySajida() {
  return (
    <Box sx={{ flexDirection: "column", fontStretch: "expanded" }}>
      <Typography variant="body2" sx={{ color: "#565656", fontSize: 13 }}>
        P o w e r e d &nbsp; b y
      </Typography>

      <img height={25} src={sajidaLogo} />
    </Box>
  );
}
