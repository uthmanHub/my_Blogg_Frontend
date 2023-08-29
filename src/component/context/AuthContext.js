import { createContext, useState } from "react";

export const Ctx = createContext(null);

const CtxProvider = ({ children }) => {
  const [auth, setAuth] = useState({});

  return (
    <div>
      <Ctx.Provider value={[auth, setAuth]}>{children}</Ctx.Provider>
    </div>
  );
};

export default CtxProvider;
