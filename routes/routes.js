import { router as userRoutes } from "./userRoutes.js";
import { router as authRoutes } from "./authRoutes.js";
import { router as fighterRoutes } from "./fighterRoutes.js";
import { router as fightRoutes } from "./fightRoutes.js";

const initRoutes = (app) => {
  //Реєстрація
  app.use("/api/users", userRoutes);
  app.use("/api/fighters", fighterRoutes);
  app.use("/api/fights", fightRoutes);
  //Логін
  app.use("/api/auth", authRoutes);
};

export { initRoutes };
