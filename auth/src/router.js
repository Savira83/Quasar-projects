import { createWebHistory, createRouter } from "vue-router";
import myHome from "./components/myHome.vue";
import myLogin from "./components/myLogin.vue";
import myRegister from "./components/myRegister.vue";
// lazy-loaded
const myProfile = () => import("./components/myProfile.vue")
const BoardAdmin = () => import("./components/BoardAdmin.vue")
const BoardModerator = () => import("./components/BoardModerator.vue")
const BoardUser = () => import("./components/BoardUser.vue")

const routes = [
  {
    path: "/",
    name: "home",
    component: myHome,
  },
  {
    path: "/home",
    component: myHome,
  },
  {
    path: "/login",
    component: myLogin,
  },
  {
    path: "/register",
    component: myRegister,
  },
  {
    path: "/profile",
    name: "profile",
    // lazy-loaded
    component: myProfile,
  },
  {
    path: "/admin",
    name: "admin",
    // lazy-loaded
    component: BoardAdmin,
  },
  {
    path: "/mod",
    name: "moderator",
    // lazy-loaded
    component: BoardModerator,
  },
  {
    path: "/user",
    name: "user",
    // lazy-loaded
    component: BoardUser,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
