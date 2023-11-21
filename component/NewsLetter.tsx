import { Box, Flex } from "@chakra-ui/react";
import { pxToRem } from "./Utils";
import Typography from "./Typography";
import Container from "./Container";
import { Circle } from "./svg";
import VideoPic from '../public/img/PhotoVideo.png'

const NewsLetter = () => {
  return (
    <Container display={"flex"}>
      <Flex
        bg={`Color.ContentColor2`}
        direction={"column"}
        py={pxToRem(64)}
        px={pxToRem(72)}
    
        gap={pxToRem(25)}
      >
        <Flex
          align={"center"}
          gap={2}
          {...Typography.P}
          color={`Color.ColorPrimary`}
        >
          <Box>|</Box>
          <Box color={`Color.SecondaryColor`}> 01</Box>
          <Box>PROPERLAND INTRO |</Box>
        </Flex>
        <Box {...Typography.H1} color={`Color.ColorPrimary`}>
          Buying & Selling Property <br />
          In An Easy Way
        </Box>
        <Box {...Typography.P} color={`Color.LinkColor`}>
          Distinctively re-engineer revolutionary meta-services and premium At
          vero eos et accusamus et <br /> iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti <br /> quos
          dolores et quas molestias excepturi.
        </Box>
        <Flex gap={pxToRem(30)}>
          <Flex align={"center"} gap={pxToRem(10)}>
            <Box>{Circle}</Box>
            <Box color={`Color.TextColor3`} {...Typography.List}>
              Only pay when you publish
            </Box>
          </Flex>
          <Flex align={"center"} gap={pxToRem(10)}>
            <Box>{Circle}</Box>
            <Box color={`Color.TextColor3`} {...Typography.List}>
              Unlimited featured use
            </Box>
          </Flex>
          <Flex align={"center"} gap={pxToRem(10)}>
            <Box>{Circle}</Box>
            <Box color={`Color.TextColor3`} {...Typography.List}>
              24/7 supports
            </Box>
          </Flex>
        </Flex>
      </Flex>
      <Box as="img" src={VideoPic}/>
    </Container>
  );
};

export default NewsLetter;
