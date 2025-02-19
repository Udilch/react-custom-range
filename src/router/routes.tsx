import { redirect } from "react-router-dom";
import { RouteNames } from "@/models/router";
import Exercise1 from "@/pages/Exercise1";
import Exercise2 from "@/pages/Exercise2";
import { getPriceSteps } from "@/services/priceData";

const routes = [
  {
    path: "/",
    loader: () => redirect(RouteNames.exercise1),
  },
  {
    path: RouteNames.exercise1,
    element: <Exercise1 />,
  },
  {
    path: RouteNames.exercise2,
    element: <Exercise2 />,
    loader: async () => {
      return getPriceSteps();
    },
  },
];

export default routes;
