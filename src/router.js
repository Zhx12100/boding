import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Register from "./views/Register.vue";
import Login from "./views/Login.vue";
import Forgot from "./views/Forgot.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/About",
      name: "About",
      component:About
    },
    {
      path:"/Register",
      name:"Register",
      component:Register
    },
    {
      path:"/Login",
      name:"Login",
      component:Login
    },
    {
      path:"/Forgot",
      name:"Forgot",
      component:Forgot
    },
  ]
});
