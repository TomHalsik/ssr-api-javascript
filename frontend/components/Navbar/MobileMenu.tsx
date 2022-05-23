import {
  Divider,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import { RootState } from "../../lib/redux/store";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export default function MobileMenu() {
  let user = useSelector((state: RootState) => state.userStore.value);
  return (
    <>
      <List>
        <Link href="/">
          <ListItem button>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText>Accueil</ListItemText>
          </ListItem>
        </Link>
        <ListItem button>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary={"test"} />
        </ListItem>
      </List>
      <Divider />
    </>
  );
}
