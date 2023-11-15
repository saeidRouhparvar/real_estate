import { Button as ChakraButton } from "@chakra-ui/react";
import { ButtonProps } from "@chakra-ui/button/dist/button";

enum variantEnum {
  primaryBtn = "primaryBtn",
  secondaryBtn = "secondaryBtn",
}

interface Interface extends ButtonProps {
  reset?: any;
  data?: any;
  variant?: "primaryBtn" | "secondaryBtn";
}

const Button = ({ data, variant, ...reset }: Interface) => {
  return (
  <ChakraButton  variant={variant} {...reset}>{data}</ChakraButton>
  )
};

export default Button;
