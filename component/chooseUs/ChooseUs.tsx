import { Box, Flex, GridItem, SimpleGrid } from "@chakra-ui/react";
import MiniTitle from "../miniTitle";
import Typography from "../Typography";
import { pxToRem } from "../Utils";
import Container from "../Container";
import ChooseBox from "./ChooseBox";

const ChooseUs = () => {
  return (
    <Flex direction={"column"} justify={"center"}>
      <MiniTitle title="Why Choose" number="03" />
      <Flex
        direction={"column"}
        align={"center"}
        {...Typography.H1}
        mt={pxToRem(16)}
      >
        <Box>Why Choose Our Properties</Box>
        <Box>Of Real Estate Industries</Box>
      </Flex>

      <Container>
        <SimpleGrid columns={3}>
          <GridItem>
            <ChooseBox/>
          </GridItem>
          <GridItem>sadsdsa</GridItem>
          <GridItem>sadsdsa</GridItem>
          <GridItem>sadsdsa</GridItem>
          <GridItem>sadsdsa</GridItem>
        </SimpleGrid>
      </Container>
    </Flex>
  );
};

export default ChooseUs;
