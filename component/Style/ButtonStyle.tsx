import { ComponentStyleConfig } from "@chakra-ui/react";
import Typography from "../Typography";
const primaryBtn = () => ({
  ...Typography.Button,
  backgroundColor: `ColorPrimary`,
  border: "1px solid",
  borderColor: `ColorPrimary`,
  color: `ColorWhite`,
  borderRadius: "5px",
  minWidth: "185px",
});
const secondaryBtn = () => ({
  ...Typography.Button,
  backgroundColor: `SecondaryColor`,
  border: "1px solid",
  borderColor: `SecondaryColor`,
  color: `ColorPrimary`,
  borderRadius: "5px",
  minWidth: "185px",
});

const ButtonStyle: ComponentStyleConfig = {
  variants: {
    primaryBtn,
    secondaryBtn,
  },
};

export default ButtonStyle;
