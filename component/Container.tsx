import { Box,BoxProps } from "@chakra-ui/react"
import { pxToRem } from "./Utils"

interface Interface extends BoxProps {
    reset?:any
    children?:any
}

const Container = ({children,...reset} :Interface) => {
    return(
        <Box {...reset} w={'1400px'} m={'auto'}>
            {children}
        </Box>
    )
}

export default Container