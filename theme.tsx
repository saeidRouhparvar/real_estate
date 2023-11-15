import { extendTheme } from "@chakra-ui/react";
import ButtonStyle from "./component/Style/ButtonStyle";

const theme = extendTheme({
  colors: {
    ColorWhite:"#FFFFFF",
    ColorPrimary: "#3B3A5D",
    SecondaryColor: "#FFBB50",
    ContentColor: "#8F8F8F",
    LinkColor: "#B16642",
    BorderColor: "#B16642",
  },
  components:{
   Button:ButtonStyle
  }
});
export default theme