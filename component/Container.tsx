import { Box,BoxProps } from "@chakra-ui/react"
import { pxToRem } from "./Utils"

interface Interface extends BoxProps {
    reset?:any
    children?:any
}

const Container = ({children,...reset} :Interface) => {
    return(
        <Box {...reset} px={pxToRem(260)}>
            {children}
        </Box>
    )
}

export default Container