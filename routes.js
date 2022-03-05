import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import PhoneIcon from '@material-ui/icons/PhoneAndroid';
import CropIcon from '@material-ui/icons/Nature';
import CollectionIcon from '@material-ui/icons/Collections';

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
        icon: Person,
        layout: "/admin",
      },
      {
        path: "/user-management/business-user",
        name: "Business User",
        icon: PhoneIcon,
        layout: "/admin",
      },
    ]
  },
  {
    path: "/crop",
    name: "Crop",
    icon: CropIcon,
    layout: "/admin",
  },
  {
    path: "/collection",
    name: "Collection",
    icon: CollectionIcon,
    layout: "/admin",
  },
];

export default dashboardRoutes;
