import { Box, Flex } from "@chakra-ui/react";
import { HomeIcon } from "./svg";
import Typography from "./Typography";
import { pxToRem } from "./Utils";

const MainBanner = () => {
  return (
    <Flex direction={"column"} gap={pxToRem(38)}>
      <Flex gap={"4px"}>
        <Box>{HomeIcon}</Box>
        <Box
          px={pxToRem(9)}
          {...Typography.P}
          color={`Color.LinkColor`}
          bg={
            "linear-gradient(270deg, #F3D1C1 -3.75%, rgba(255, 178, 141, 0.00) 108.58%)"
          }
        >
          Real Estate Agency
        </Box>
      </Flex>

      <Flex direction={"column"} gap={pxToRem(10)} {...Typography.MainH} color={`Color.ColorPrimary`}>
        <Box>Find the perfect </Box>
        <Box>place to Live with</Box>
        <Box> your family</Box>
      </Flex>
      <Box color={`Color.LinkColor`}>Distinctively re-engineer revolutionary meta-services and premium <br/> architectures. Intrinsically incubate.</Box>
    </Flex>
  );
};

export default MainBanner;
