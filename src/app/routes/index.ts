import express from "express";
import { userRoutes } from "../modules/user/user.route";

const router = express.Router();

const routes = [
  {
    pathName: "/user",
    routeName: userRoutes,
  },
];

const doctorPorltalRoutes = routes.map((route) =>
  router.use(route.pathName, route.routeName)
);

export default doctorPorltalRoutes;

// another way
// routes.forEach((route) => router.use(route.pathName, route.routeName));
// export default router;
//another way
