import { Box, BoxProps, Flex } from "@chakra-ui/react";
import { pxToRem } from "../Utils";
import Button from "../form/Button";
import Typography from "../Typography";
import { Feet, Location, Parking, Bed, Bath } from "../svg";
import Label from "../Lable";

interface Props extends BoxProps {
  reset?: any;
  title?: string;
  price?: number;
  address?: string;
  image?:any
  labelTitleBed?: string;
  labelTitleBath?: string;
  labelTitlePark?: string;
  labelTitleFeet?: string;
}

const PropertiesBox = ({
  title,
  price,
  address,
  labelTitleBed,
  labelTitleBath,
  labelTitlePark,
  labelTitleFeet,
  image,
  ...reset
}: Props) => {
  return (
    <Flex
      width={pxToRem(650)}
      direction={"column"}
      border={"1px solid #FFF"}
      padding={"39px 47px"}
      bg={`Color.ColorWhite`}
      borderRadius={'5px'}
      {...reset}
    >
      <Box height={pxToRem(300)} width={"100%"} as="img" src={image} />
      <Flex justify={"space-between"} mt={pxToRem(27)} align={"center"}>
        <Box color={`Color.SecondaryColor`} {...Typography.H3}>
          ${price}/MO
        </Box>
        <Button variant="secondaryBtn" data={"For Sale"} />
      </Flex>
      <Box color={`Color.ColorPrimary`} {...Typography.H5} mt={pxToRem(32)}>
        {title}
      </Box>
      <Flex mt={pxToRem(14)}>
        <Box>{Location}</Box>
        <Box color={`Color.ContentColor4`} {...Typography.P}>
          {address}
        </Box>
      </Flex>
      <Flex justify={"space-between"} mt={pxToRem(25)}>
        <Label title={labelTitleBed} logo={Bed} />
        <Label title={labelTitleBath} logo={Bath} />
        <Label title={labelTitlePark} logo={Parking} />
        <Label title={labelTitleFeet + "sqft"} logo={Feet} />
      </Flex>
    </Flex>
  );
};

export default PropertiesBox;
