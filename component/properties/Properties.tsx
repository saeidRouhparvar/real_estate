import { Box, Flex, SimpleGrid } from "@chakra-ui/react";
import { pxToRem } from "../Utils";
import PropertiesBox from "./propertiesBox";
import Typography from "../Typography";
import one from "../../public/img/01.png";
import two from "../../public/img/01.png";
import three from "../../public/img/01.png";
import four from "../../public/img/01.png";
import five from "../../public/img/01.png";
import six from "../../public/img/01.png";

const propertiesBoxData = [
  {
    id: 1,
    image: one,
    title: "Comefortable Appartment",
    price: 7800,
    address: "709 West Drive Chicago, IL 60606",
    labelTitleBed: "3 Bed",
    labelTitleBath: "1 Bath",
    labelTitlePark: "Not",
    labelTitleFeet: "130",
  },
  {
    id: 2,
    image: two,
    title: "Home in Downtown, Los Angeles",
    price: 2700,
    address: "709 West Drive Chicago, IL 60606",
    labelTitleBed: "3 Bed",
    labelTitleBath: "1 Bath",
    labelTitlePark: "2 Parking",
    labelTitleFeet: "130",
  },
  {
    id: 3,
    image: three,
    title: "Penthouse in Chicago",
    price: 3400,
    address: "709 West Drive Chicago, IL 60606",
    labelTitleBed: "3 Bed",
    labelTitleBath: "1 Bath",
    labelTitlePark: "2 Parking",
    labelTitleFeet: "130",
  },
  {
    id: 4,
    image: four,
    title: "Appartment",
    price: 4690,
    address: "709 West Drive Chicago, IL 60606",
    labelTitleBed: "3 Bed",
    labelTitleBath: "1 Bath",
    labelTitlePark: "2 Parking",
    labelTitleFeet: "130",
  },
  {
    id: 5,
    image: five,
    title: "Home in Downtown, Texas",
    price: 3489,
    address: "709 West Drive Chicago, IL 60606",
    labelTitleBed: "2 Bed",
    labelTitleBath: "2 Bath",
    labelTitlePark: "2 Parking",
    labelTitleFeet: "160",
  },
  {
    id: 6,
    image: six,
    title: "omefortable Appartment",
    price: 1570,
    address: "709 West Drive Chicago, IL 60606",
    labelTitleBed: "5 Bed",
    labelTitleBath: "3 Bath",
    labelTitlePark: "2 Parking",
    labelTitleFeet: "150",
  },
];

const Properties = () => {
  return (
    <Flex
      bg={`Color.ContentColor3`}
      mt={pxToRem(175)}
      w={"100vw"}
      justify={"center"}
      direction={"column"}
      align={"center"}
      gap={pxToRem(46)}
    >
      <Flex
        color={`Color.ColorPrimary`}
        direction={"column"}
        align={"center"}
        mt={pxToRem(188)}
        gap={pxToRem(16)}
      >
        <Box {...Typography.P} letterSpacing={"6px"}>
          |
          <Box as="span" color={`Color.SecondaryColor`}>
            02
          </Box>
          Featured properties |
        </Box>
        <Flex direction={"column"} align={"center"} {...Typography.H1}>
          <Box>Properties for sale in your</Box>
          <Box> favorite area</Box>
        </Flex>
      </Flex>

      <SimpleGrid spacing={"40px"} columns={{ base: 1, md: 2 }}>
        {propertiesBoxData.map((item: any) => (
          <PropertiesBox
            key={item.id}
            image={item.image}
            title={item.title}
            price={item.price}
            address={item.address}
            labelTitleBed={item.labelTitleBed}
            labelTitleBath={item.labelTitleBath}
            labelTitlePark={item.labelTitlePark}
            labelTitleFeet={item.labelTitleFeet}
          />
        ))}
      </SimpleGrid>
    </Flex>
  );
};

export default Properties;
