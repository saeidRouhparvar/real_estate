import { useHeader } from "@/context/headerContext";
import { useMemo } from "react";
import { Box } from "@chakra-ui/react";

const MainLayout = ({ children }: any) => {
  const { header, type } = useHeader();

  const HeaderImage = useMemo(() => {
    return (
      <Box
        backgroundImage={header}
        width={"full"}
        height={type === "main" ? "721px" : "996px"}
        backgroundRepeat={"no-repeat"}
        backgroundSize={"cover"}
      />
    );
  }, [header, type]);

  const HeaderContent = useMemo(() => {
    if (type === "main") {
      return <>{HeaderImage}</>;
    }
    if (type === "big") {
      return <>{HeaderImage}</>;
    }
    if (type === "withContact") {
      return <>{HeaderImage}</>;
    }
    return <></>;
  }, [type, HeaderImage]);

  return (
    <>
      {HeaderContent}

      {children}
    </>
  );
};

export default MainLayout;
