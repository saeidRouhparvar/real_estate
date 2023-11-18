import { ComponentStyleConfig } from "@chakra-ui/react";
import Typography from "../Typography";
const primaryBtn = () => ({
  ...Typography.Button,
  backgroundColor: `Color.ColorPrimary`,
  border: "1px solid",
  borderColor: `Color.ColorPrimary`,
  color: `Color.ColorWhite`,
  borderRadius: "5px",
  minWidth: "185px",
});
const secondaryBtn = () => ({
  ...Typography.Button,
  backgroundColor: `Color.SecondaryColor`,
  border: "1px solid",
  borderColor: `Color.SecondaryColor`,
  color: `Color.ColorPrimary`,
  borderRadius: "5px",
  minWidth: "185px",
});
const outLine = () => ({
  ...Typography.Button,
  backgroundColor: `Color.ColorWhite`,
  border: "1px solid",
  borderColor: `Color.ColorWhite`,
  color: `Color.ColorPrimary`,
  borderRadius: "5px",
  minWidth: "185px",
});

const ButtonStyle: ComponentStyleConfig = {
  variants: {
    primaryBtn,
    secondaryBtn,
    outLine,
  },
};

export default ButtonStyle;
