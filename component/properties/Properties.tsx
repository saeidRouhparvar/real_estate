import { Box } from "@chakra-ui/react"
import { pxToRem } from "../Utils"
import PropertiesBox from "./propertiesBox"

const Properties = () => {
    return(
        <Box bg={`Color.ContentColor3`} height={"800px"} width={'100%'} mt={pxToRem(175)}>
            <PropertiesBox/>
        </Box>
    )
}

export default Properties