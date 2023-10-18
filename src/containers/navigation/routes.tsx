import { Layout } from "components/layout";
import { PathListView } from "containers/pathListView";
import { PathDetailsView } from "containers/pathDetailsView";
import { RouteObject } from "react-router-dom";

export const ROUTE_DETAILS = "/details/:id";

export const routes: RouteObject[] = [
  {
    path: "",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <PathListView />,
      },
      {
        path: ROUTE_DETAILS,
        element: <PathDetailsView />,
      },
    ],
  },
];
