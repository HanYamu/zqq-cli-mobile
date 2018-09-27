let routes = [
  {
    path: "/",
    name: "index",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/home.vue")
  },
  {
    path: "/test1",
    name: "test1",
    component: () => import("../views/module/test1.vue")
  },
  {
    path: "/test2",
    name: "test2",
    component: () => import("../views/module/test2.vue")
  }
];
export default routes;
