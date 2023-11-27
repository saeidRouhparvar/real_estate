import { Box, ButtonGroup, Flex, Image } from "@chakra-ui/react";
import { Banner, HomeIcon, RightArrow } from "./svg";
import Typography from "./Typography";
import { pxToRem } from "./Utils";
import Button from "./form/Button";
import Home from "../public/img/Img.svg";
import Container from "./Container";
import Navbar from "./Navbar";

const MainBanner = () => {
  return (
    <Flex alignItems={"center"} zIndex={-1} h={"990px"} justify={"center"}> 
      {Banner}
      <Navbar />
    </Flex>
  );
};

export default MainBanner;
