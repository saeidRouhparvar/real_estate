import "../styles/globals.css";
import type { AppProps } from "next/app";
import {  ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";
import Navbar from "@/component/Navbar";



export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component  {...pageProps} />
    </ChakraProvider>
      
  );
}