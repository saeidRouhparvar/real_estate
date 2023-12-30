import { Box, Flex } from "@chakra-ui/react";
import { pxToRem } from "../Utils";
import MiniTitle from "../miniTitle";
import { AboutUsBg, AboutUsImg } from "../svg";

const AboutUs = () => {
  return (
    <Flex pos={'relative'} mt={pxToRem(151)} justify={"space-around"} bg={"#F2F1EF"}>
    <Box pos={"absolute"} top={0} left={0}>{AboutUsBg}</Box>
      <Flex h={pxToRem(790)} direction={"column"}>
        <MiniTitle number="4" title="About Us" />
      </Flex>
      <Box>
        {AboutUsImg}
      </Box>
    </Flex>
  );
};
export default AboutUs;
