import { createContext, useContext, useEffect, useState } from "react";

interface type {
  type?: "main" | "big" | "withContact";
}

interface header {
  header?: any;
}

interface Interface extends type, header {
  setHeader: (data: any) => void;
  setType: (data: "main" | "big" | "withContact") => void;
}

interface inputInterface extends type, header {}

const HeaderContext = createContext<any>(undefined);

const HeaderProvider = ({ children }: any) => {
  const [header, setHeader] = useState(null);
  const [type, setType] = useState("main");
  return (
    <HeaderContext.Provider value={{ header, setHeader, type, setType }}>
      {children}
    </HeaderContext.Provider>
  );
};

const useHeader = (prop?: inputInterface) => {
  const value: Interface = useContext(HeaderContext);
  if (value === undefined) {
  }
  const { type, header }: any = prop || { type: undefined, header: undefined };

  useEffect(() => {
    if (type != undefined) {
      const { setType } = value;
      setType(type);
    }
    if (header != undefined) {
      const { setHeader } = value;
      setHeader(header);
    }
  }, [type, header]);

  return value;
};

export { HeaderProvider, useHeader };
