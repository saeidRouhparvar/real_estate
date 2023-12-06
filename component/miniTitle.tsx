import { Box, BoxProps, Flex } from "@chakra-ui/react"
import { pxToRem } from "./Utils"
import Typography from "./Typography"

interface Interface extends BoxProps {
    reset?:any
    number?:string
    title?:string
}

const MiniTitle = ({number,title,...reset}:Interface) => {
    return (
        <Flex
          color={`Color.ColorPrimary`}
          direction={"column"}
          align={"center"}
          gap={pxToRem(16)}
        >
          <Box {...Typography.P} letterSpacing={"6px"}>
            |
            <Box as="span" color={`Color.SecondaryColor`}>
              {number}
            </Box>
            {title} |
          </Box>
       
        </Flex>
    )
    }

    export default MiniTitle