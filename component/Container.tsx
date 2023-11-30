import { Box,BoxProps } from "@chakra-ui/react"
import { pxToRem } from "./Utils"

interface Interface extends BoxProps {
    reset?:any
    children?:any
}

const Container = ({children,...reset} :Interface) => {
    return(
        <Box {...reset} maxW={pxToRem(1400)}>
            {children}
        </Box>
    )
}

export default Container