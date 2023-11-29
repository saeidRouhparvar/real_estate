import MainBanner from "@/component/MainBanner";
import { pxToRem } from "@/component/Utils";
import { Box, Flex } from "@chakra-ui/react";
import Home from "../../public/img/Image.png";
import Navbar from "@/component/Navbar";
import NewsLetter from "@/component/NewsLetter";
import Typography from "@/component/Typography";
import { HomeIcon, RightArrow } from "@/component/svg";
import Button from "@/component/form/Button";
import Properties from "@/component/properties/Properties";

const HomePage = () => {
  return (
    <>
      <Flex direction={"column"}>
        <Header />
        <NewsLetter/>
        <Properties/>
      </Flex>
    </>
  );
};

const Header = () => {
  return (
    <Flex justifyContent={"space-between"}>
      <Flex direction={"column"}>
        <MainBanner />
        <Flex
          pos={"absolute"}
          top={pxToRem(400)}
          left={pxToRem(278)}
          gap={pxToRem(38)}
          direction={"column"}
        >
          <Flex
            w={pxToRem(375)}
            bg={
              "linear-gradient(270deg, #F3D1C1 -3.75%, rgba(255, 178, 141, 0.00) 108.58%);"
            }
            p={"9px 14px"}
            gap={"14px"}
          >
            <Box>{HomeIcon}</Box>
            <Box {...Typography.P} color={`Color.LinkColor`}>
              Real Estate Agency
            </Box>
          </Flex>
          <Box color={`Color.ColorPrimary`} {...Typography.MainH}>
            Find the perfect <br /> place to Live with <br /> your family
          </Box>
          <Box {...Typography.P} color={`Color.LinkColor`}>
            Distinctively re-engineer revolutionary meta-services and premium{" "}
            <br /> architectures. Intrinsically incubate.
          </Box>
          <Button
            width={pxToRem(252)}
            data={"Explore Property "}
            rightIcon={RightArrow}
            variant="outLine"
          />
        </Flex>
      </Flex>
      <Box as="img" src="../public/Group 21.png" />
    </Flex>
  );
};

export default HomePage;
