import { extendTheme } from "@chakra-ui/react";
import ButtonStyle from "./component/Style/ButtonStyle";

const theme = extendTheme({
  colors: {
    Color: {
      ColorWhite: "#FFFFFF",
      ColorPrimary: "#3B3A5D",
      SecondaryColor: "#FFBB50",
      ContentColor: "#8F8F8F",
      LinkColor: "#B16642",
      BorderColor: "#B16642",
      TextColor: "#0A0B3B",
      TextColor2: "#A4A4A4",
    },
  },
  components: {
    Button: ButtonStyle,
  },
});
export default theme;
