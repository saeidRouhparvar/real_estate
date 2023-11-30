import { Box, BoxProps, Flex } from "@chakra-ui/react";
import Typography from "./Typography";

interface Interface extends BoxProps {
  reset?: any;
  logo?: any;
  title?: string;
}

const Label = ({ logo, title, ...reset }: Interface) => {
  return (
    <Flex
      border={"1px solid #D7D7D7"}
      padding={"14px 12px"}
      borderRadius={"8px"}
      align={'center'} gap={'10px'} 
      {...reset}
    >
      <Box>{logo}</Box>
      <Box>|</Box>
      <Box color={`Color.ContentColor4`} {...Typography.P}>{title}</Box>
    </Flex>
  );
};

export default Label;
