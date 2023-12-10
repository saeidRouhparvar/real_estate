import { Box, Flex } from "@chakra-ui/react";
import { Piggy, PiggyTop } from "../svg";
import Typography from "../Typography";
import { pxToRem } from "../Utils";

const ChooseBoxData = [
  {
    id: 1,
    title: " Trusted By Thousands",
    imgBig: PiggyTop,
    imgChild: Piggy,
    description:
      "Distinctively re-engineer revolutionary meta-services and premium Atvero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis",
  },
  // {id:1,title:"",img:,description:""},
  // {id:1,title:"",img:,description:""},
  // {id:1,title:"",img:,description:""},
];

const ChooseBox = ( title, imgBig, imgChild, description ):any => {
  return (
    <Flex
      direction={"column"}
      bg={"linear-gradient(143deg, #F3D1C1 2.44%, #FFEEE5 98.38%)"}
      padding={"48px 41px"}
    >
      <Flex gap={pxToRem(32)}>
        <Box>{ChooseBoxData.imgBig}</Box>
        <Box mt={"-20px"}>{ChooseBoxData.imgChild}</Box>
      </Flex>
      <Box {...Typography.Box} color={`Color.ColorPrimary`} mt={pxToRem(46)}>
        {ChooseBoxData.title}
      </Box>
      <Box mt={pxToRem(12)} color={`Color.LinkColor`} {...Typography.P}>
        {ChooseBoxData.description}
      </Box>
    </Flex>
  );
};

export default ChooseBox;
