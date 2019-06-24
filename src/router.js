import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Register from "./views/Register.vue";
import Login from "./views/Login.vue";
import Forgot from "./views/Forgot.vue";
import Mobile from "./views/Mobile.vue";
import Contact from "./views/Contact.vue";
import Teach from "./views/Teach.vue";
import Problem from "./views/Problem.vue";
import Strategy from "./views/Strategy.vue";
import Detail from "./views/Detail.vue";
import Person from "./views/Person.vue";

Vue.use(Router);

export default new Router({
  mode: "hash",
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
    {
      path:"/Mobile",
      name:"Mobile",
      component:Mobile
    },
    {
      path:"/Contact",
      name:"Contact",
      component:Contact
    },
    {
      path:"/Teach",
      name:"Teach",
      component:Teach
    },
    {
      path:"/Problem",
      name:"Problem",
      component:Problem
    },
    {
      path:"/Strategy",
      name:"Strategy",
      component:Strategy
    },
    {
      path:"/Detail",
      name:"Detail",
      component:Detail
    },
    {
      path:"/Person",
      name:"Person",
      component:Person
    },
  ]
});
