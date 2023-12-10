import { Box, BoxProps, Flex } from "@chakra-ui/react";
import { Piggy, PiggyTop } from "../svg";
import Typography from "../Typography";
import { pxToRem } from "../Utils";

interface Interface extends BoxProps {
  reset?: any;
  title?: string;
  imgBig?: any;
  imgChild?: any;
  description?: string;
}

const ChooseBox = ({ title, imgBig, imgChild, description }: Interface) => {
  return (
    <Flex
      direction={"column"}
      bg={"linear-gradient(143deg, #F3D1C1 2.44%, #FFEEE5 98.38%)"}
      padding={"48px 41px"}
    >
      <Flex gap={pxToRem(32)}>
        <Box>{imgBig}</Box>
        <Box mt={"-20px"}>{imgChild}</Box>
      </Flex>
      <Box {...Typography.Box} color={`Color.ColorPrimary`} mt={pxToRem(46)}>
        {title}
      </Box>
      <Box mt={pxToRem(12)} color={`Color.LinkColor`} {...Typography.P}>
        {description}
      </Box>
    </Flex>
  );
};

export default ChooseBox;
