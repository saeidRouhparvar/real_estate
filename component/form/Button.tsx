import { Button as ChakraButton } from "@chakra-ui/react";
import { ButtonProps } from "@chakra-ui/button/dist/button";

enum variantEnum {
  primaryBtn = "primaryBtn",
  secondaryBtn = "secondaryBtn",
  outLine= "outLine"
}

interface Interface extends ButtonProps {
  reset?: any;
  data?: any;
  rightIcon?:any
  variant?: "primaryBtn" | "secondaryBtn" | "outLine";
}

const Button = ({ data,rightIcon, variant, ...reset }: Interface) => {
  return (
  <ChakraButton  rightIcon={rightIcon}  variant={variant} {...reset}>{data}</ChakraButton>
  )
};

export default Button;
