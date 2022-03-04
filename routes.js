import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import Notifications from "@material-ui/icons/Notifications";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: Dashboard,
    layout: "/admin",
  },
  {
    path: "/user-management",
    name: "User Management",
    icon: Person,
    layout: "/admin",
    child: [
      {
        path: "/user-management/farmer",
        name: "Farmer",
        icon: BubbleChart,
        layout: "/admin",
      },
      {
        path: "/bussiness-user",
        name: "Business User",
        icon: Person,
        layout: "/admin",
      },
    ]
  },
  {
    path: "/table-list",
    name: "Table List",
    icon: "content_paste",
    layout: "/admin",
  },
  {
    path: "/typography",
    name: "Typography",
    icon: LibraryBooks,
    layout: "/admin",
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: Notifications,
    layout: "/admin",
  },
];

export default dashboardRoutes;
