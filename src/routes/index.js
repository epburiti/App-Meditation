import React, { useContext } from "react";

import AuthContext from "../contextjs/auth";

import AuthRoutes from "../routes/auth.routes";
import AppRoutes from "../routes/routes";

const Routes = () => {
  const { signed } = useContext(AuthContext);
  return signed ? <AppRoutes /> : <AppRoutes />;
};

export default Routes;