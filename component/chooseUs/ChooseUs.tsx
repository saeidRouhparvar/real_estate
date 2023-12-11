import { Box, Flex, Text } from "@chakra-ui/react";
import MiniTitle from "../miniTitle";
import Typography from "../Typography";
import { pxToRem } from "../Utils";
import Container from "../Container";
import ChooseBox from "./ChooseBox";
import { Insurance, Piggy, PiggyTop } from "../svg";

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

      <Container >
        <Flex direction={"column"} gap={pxToRem(33)} mt={pxToRem(46)}>
          <Flex gap={pxToRem(38)}>
            <ChooseBox 
              title="Budget Friendly"
              description="Distinctively re-engineer 
              revolutionary meta-services and premium
                At vero eos et accusamus et iusto odio
                 dignissimos ducimus qui blanditiis"
              imgBig={Piggy}
              imgChild={PiggyTop}
            />
            <Flex
              bg={"linear-gradient(143deg, #F3D1C1 2.44%, #FFEEE5 98.38%)"}
              padding={"48px 41px"}
              align={"center"}
            >
              <Box>{Insurance}</Box>
              <Flex direction={"column"}>
                <Box {...Typography.Box} color={`Color.ColorPrimary`}>
                  Property Insurance
                </Box>
                <Flex direction={"column"} gap={pxToRem(30)}>
                  <Box>
                    Distinctively re-engineer revolutionary meta-services and
                    premium At vero eos et accusamus et iusto odio dignissimos
                    ducimus qui blanditiis
                  </Box>
                  <Box>
                    Distinctively re-engineer revolutionary meta-services and
                    premium.
                  </Box>
                </Flex>
              </Flex>
            </Flex>
          </Flex>

          <Flex gap={pxToRem(38)}>
            <ChooseBox
              title="Budget Friendly"
              description="Distinctively re-engineer 
              revolutionary meta-services and premium
                At vero eos et accusamus et iusto odio
                 dignissimos ducimus qui blanditiis"
              imgBig={Piggy}
              imgChild={PiggyTop}
            />
            <ChooseBox
              title="Budget Friendly"
              description="Distinctively re-engineer 
            revolutionary meta-services and premium
              At vero eos et accusamus et iusto odio
               dignissimos ducimus qui blanditiis"
              imgBig={Piggy}
              imgChild={PiggyTop}
            />
            <ChooseBox
              title="Budget Friendly"
              description="Distinctively re-engineer 
          revolutionary meta-services and premium
            At vero eos et accusamus et iusto odio
             dignissimos ducimus qui blanditiis"
              imgBig={Piggy}
              imgChild={PiggyTop}
            />
          </Flex>
        </Flex>
      </Container>
    </Flex>
  );
};

export default ChooseUs;
