import { Styles } from "react-modal";
import theme from "styles/theme";

export const defaultCustomStyles: Styles = {
  overlay: {
    backgroundColor: theme.colors.modalBackground,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 3,
  },
  content: {
    border: "",
    marginTop: 0,
  },
};
