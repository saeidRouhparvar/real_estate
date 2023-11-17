import MainBanner from "@/component/MainBanner"
import { pxToRem } from "@/component/Utils"
import { Flex } from "@chakra-ui/react"

const HomePage = () => {
    return (
        <Flex ml={pxToRem(260)}>
            <MainBanner/>
        </Flex>
    )
}


export default HomePage