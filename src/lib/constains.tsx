import {
  BadgeDollarSignIcon,
  BadgeHelpIcon,
  BarChart3,
  LayoutDashboard,
  LogOut,
  Settings,
  ShoppingBag,
  ShoppingCartIcon,
  Users,
  Users2,
} from "lucide-react";

export const items = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <LayoutDashboard className="w-4" />,
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <Users className="w-4" />,
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: <ShoppingCartIcon className="w-4" />,
      },
      {
        title: "Transactions",
        path: "/dashbo/transactionsard",
        icon: <BadgeDollarSignIcon className="w-4" />,
      },
    ],
  },
  {
    title: "Analyice",
    list: [
      {
        title: "Renvue",
        path: "/renvue",
        icon: <ShoppingBag className="w-4" />,
      },
      {
        title: "Reports",
        path: "/dashboard/reports",
        icon: <BarChart3 className="w-4" />,
      },
      {
        title: "Teams",
        path: "/dashboard/teams",
        icon: <Users2 className="w-4" />,
      },
    ],
  },
  {
    title: "user",
    list: [
      {
        title: "Setting",
        path: "/dashboard/setting",
        icon: <Settings className="w-4" />,
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <BadgeHelpIcon className="w-4" />,
      },
    
    ],
  },
];
