import { Box, Flex } from "@chakra-ui/react";
import { pxToRem } from "../Utils";
import Button from "../form/Button";
import Typography from "../Typography";
import { Feet, Location, Parking, Bed, Bath } from "../svg";
import Label from "../Lable";

const labelData = [
  { id: 1, title: "3 Beds", logo: { Bed } },
  { id: 2, title: "2 Bathes", logo: { Bath } },
  { id: 3, title: "1 Parking", logo: { Parking } },
  { id: 4, title: "120 sqft", logo: { Feet } },
];

const PropertiesBox = () => {
  return (
    <Flex
      width={pxToRem(550)}
      direction={"column"}
      border={"1px solid #FFF"}
      padding={"39px 47px"}
      bg={`Color.ColorWhite`}
    >
      <Box height={pxToRem(300)} width={"100%"} bg={`Color.ColorPrimary`}></Box>
      <Flex justify={"space-between"} mt={pxToRem(27)} align={"center"}>
        <Box color={`Color.SecondaryColor`} {...Typography.H3}>
          $3500/MO
        </Box>
        <Button variant="secondaryBtn" data={"For Sale"} />
      </Flex>
      <Box color={`Color.ColorPrimary`} {...Typography.H5} mt={pxToRem(32)}>
        Comefortable Appartment
      </Box>
      <Flex mt={pxToRem(14)}>
        <Box>{Location}</Box>
        <Box color={"#8E8E8E"} {...Typography.P}>
          709 West Drive Chicago, IL 60606
        </Box>
      </Flex>
      <Flex justify={'space-between'}>
        {labelData.map((item: any) => (
          <Label key={item.id} title={item.title} logo={item.logo} />
        ))}
      </Flex>
    </Flex>
  );
};

export default PropertiesBox;
