import "../styles/globals.css";
import type {AppProps} from "next/app";
import {ChakraProvider} from "@chakra-ui/react";
import theme from "../theme";
import {HeaderProvider} from "@/context/headerContext";
import MainLayout from "@/layout/mainLayout";



export default function App({Component, pageProps}: AppProps) {
    return (
        <ChakraProvider theme={theme}>
            <HeaderProvider>
                <MainLayout>
                    <Component  {...pageProps} />
                </MainLayout>
            </HeaderProvider>
        </ChakraProvider>
    );
}