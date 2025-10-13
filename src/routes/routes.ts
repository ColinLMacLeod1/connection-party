import {
  type RouteConfig,
  route,
  layout,
  index,
} from "@react-router/dev/routes";

export default [
  layout("./layouts/Header.tsx", [
    index("./pages/App.tsx"),
    route("setup", "./pages/Setup.tsx"),
    route("game:roomid", "./pages/Game.tsx"),
  ]),
] satisfies RouteConfig;
