import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../utils/constants";
import { SearchBar } from "./";
import { FaYoutube } from "react-icons/fa";

const Navbar = () => (
  <Stack direction="row" alignItems="center" p={2} sx={{ position:  "sticky", background: '#000', top: 0, justifyContent: "space-between" }}>
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      {/* <img src={logo} alt="logo" height={45} /> */}
      <h1 style={{color:"blue",fontSize:"70px"}}><FaYoutube/></h1>
      <h1 style={{color:"white"}}> CODYFLIXX</h1>
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;
