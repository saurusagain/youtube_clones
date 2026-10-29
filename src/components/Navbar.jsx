import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../utils/constants";
import { SearchBar } from "./";

const Navbar = () => (
  <Stack direction="row" alignItems="center" p={2} sx={{ position: "sticky", background: '#000', top: 0, justifyContent: "space-between", zIndex: 10 }}>
    <Link to="/" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
      <img src={logo} alt="Saurus Media logo" height={42} style={{ marginRight: "10px" }} />
      <Typography variant="h6" fontWeight="bold" sx={{ color: "#fff", display: { xs: "none", sm: "block" }, letterSpacing: "1px" }}>
        SAURUS <span style={{ color: "#FC1503" }}>MEDIA</span>
      </Typography>
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;
