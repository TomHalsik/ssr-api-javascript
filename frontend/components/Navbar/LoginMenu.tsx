import React from "react";
import Link from "next/link";
import { RootState } from "../../lib/redux/store";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logout } from "../../lib/redux/user/userStore";
import { withStyles } from "@material-ui/core/styles";
import {
  Button,
  MenuItem,
  ListItemIcon,
  ListItemText,
  IconButton,
} from "@material-ui/core";
import Menu, { MenuProps } from "@material-ui/core/Menu";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import LockIcon from "@material-ui/icons/Lock";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import PersonIcon from "@material-ui/icons/Person";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import theme from "../../lib/styles/theme";

const StyledMenu = withStyles({
  paper: {
    zIndex: theme.zIndex.drawer + 2000,
    border: "1px solid #d3d4d5",
  },
})((props: MenuProps) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    PaperProps={{
      style: {
        zIndex: 2000,
      },
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {},
}))(MenuItem);

export default function LoginMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();

  let user = useSelector((state: RootState) => state.userStore.value);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setOpen(!open);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(false);
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton onClick={handleClick}>
        {user
          ? [
              <PersonIcon
                fontSize="large"
                color={open ? "primary" : "inherit"}
              />,
            ]
          : [
              <PersonOutlineIcon
                fontSize="large"
                color={open ? "primary" : "inherit"}
              />,
            ]}
      </IconButton>
      <StyledMenu
        id="menu-list-grow"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
      >
        {user
          ? [
              <>
                <StyledMenuItem
                  onClick={() => {
                    handleClose();
                  }}
                >
                  <ListItemIcon key="myAccount">
                    <AccountBoxIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Mon compte" />
                </StyledMenuItem>
                <StyledMenuItem
                  onClick={() => {
                    handleClose();
                  }}
                >
                  <ListItemIcon key="changePassword">
                    <VpnKeyIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Changer mon mot de passe" />
                </StyledMenuItem>
                <StyledMenuItem
                  key="logout"
                  onClick={() => {
                    dispatch(logout());
                    handleClose();
                  }}
                >
                  <ListItemIcon>
                    <ExitToAppIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Déconnexion" />
                </StyledMenuItem>
              </>,
            ]
          : [
              <>
                <Link href="/login">
                  <StyledMenuItem
                    key="login"
                    onClick={() => {
                      handleClose();
                    }}
                  >
                    <ListItemIcon>
                      <LockIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="Connexion" />
                  </StyledMenuItem>
                </Link>
                <StyledMenuItem
                  key="sigin"
                  onClick={() => {
                    handleClose();
                  }}
                >
                  <ListItemIcon>
                    <PersonAddIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Inscription" />
                </StyledMenuItem>
              </>,
            ]}
      </StyledMenu>
    </div>
  );
}
