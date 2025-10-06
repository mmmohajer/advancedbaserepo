const ADMIN_MENU_ITEMS = [
  { identifier: "dashboard", icon: "gauge", title: "Dashboard", url: "/app" },
  {
    identifier: "admin-blog",
    icon: "blog",
    title: "Blogs",
    url: "/admin/blogs",
  },
  {
    identifier: "tips",
    icon: "circle-exclamation",
    title: "Tips",
    url: "/admin/tips",
  },
  {
    identifier: "projects",
    icon: "list-check",
    title: "Projects",
    url: "/admin/projects",
  },
];

export const USER_MENU_ITEMS = [
  { identifier: "dashboard", icon: "gauge", title: "Dashboard", url: "/app" },
];

export const MENU_ITEMS = {
  ADMIN: ADMIN_MENU_ITEMS,
  USER: USER_MENU_ITEMS,
};
