import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";

export default function AccountMenu({ anchorEl,open, handleClose }) {
  const user = JSON.parse(localStorage.getItem('user'))
  const logOutHandler=()=>{
        handleClose()
      localStorage.clear()
  }

  return (
    <Menu
    dir='rtl'
      anchorEl={anchorEl}
      id="account-menu"
      open={open}
      onClose={handleClose}
      // onClick={handleClose}
      PaperProps={{
        elevation: 0,
        sx: {
            width:"250px",
          overflow: "visible",
          filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
          mt: 1.5,
          "& .MuiAvatar-root": {
            width: 32,
            height: 32,
            ml: 1.25,
          },
          "&:before": {
            content: '""',
            display: "block",
            position: "absolute",
            top: 0,
            left: 14,
            width: 10,
            height: 10,
            bgcolor: "background.paper",
            transform: "translateY(-50%) rotate(45deg)",
            zIndex: 0,
          },
        },
      }}
      transformOrigin={{ horizontal: "right", vertical: "top" }}
      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
    >
      <MenuItem >
        <Avatar/> {user?.fullname}
      </MenuItem>
      <Divider />
      <MenuItem>
        <ListItemIcon>
          <PersonAdd fontSize="small" />
        </ListItemIcon>
        دعوت کاربر
      </MenuItem>
      <MenuItem>
        <ListItemIcon>
          <Settings fontSize="small" />
        </ListItemIcon>
        تنظیمات
      </MenuItem>
      <MenuItem onClick={logOutHandler}>
        <ListItemIcon>
          <Logout fontSize="small" />
        </ListItemIcon>
        خروج
      </MenuItem>
    </Menu>
  );
}
