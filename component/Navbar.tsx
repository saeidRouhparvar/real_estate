import { Box, BoxProps, Flex } from "@chakra-ui/react";
import { pxToRem } from "./Utils";
import Typography from "./Typography";
import { Logo } from "./svg";

const Navbar = () => {
  return (
    <Box px={pxToRem(261)} mt={pxToRem(100)}>
      <Flex p={pxToRem(45)} bg={`Color.ColorWhite`} justify={"space-between"} align={"center"}>
        <Flex align={"center"} gap={"6px"}>
            <Box>{Logo}</Box>
            <Box mt={pxToRem(30)} {...Typography.H3}>ProperLand</Box>
        </Flex>
        <Flex
          {...Typography.P}
          color={`Color.TextColor2`}
          align={"center"}
          gap={pxToRem(20)}
        >
          <Box color={`Color.TextColor`}>Home</Box>
          <Box>about</Box>
          <Box>Properties</Box>
          <Box>Blog</Box>
          <Box
            bg={`Color.ColorPrimary`}
            px={pxToRem(40)}
            py={pxToRem(16)}
            borderRadius={"5px"}
            color={`Color.ColorWhite`}
            ml={pxToRem(10)}
          >
            Contact
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};
export default Navbar;
