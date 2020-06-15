import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Page from '../views/page.vue'
import MyPage from '../views/my-page.vue' //来院地址
import MyAbout from '../views/myAbout.vue' //来院地址
import project from "../views/project.vue"; //主治项目
import team from "../views/team.vue"; //医生团队
import advanced from "../views/advanced.vue"; //先进设备
import Outpatient from "../views/Outpatient.vue"; //先进设备
import info from "../views/info.vue"; //相关资讯


Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/page",
    name: "Page",
    component: Page,
    children: [
      {
        path: "/page", //来院地址
        component: MyPage
      },
      {
        path: "/about", //关于我们
        component: MyAbout
      },
      {
        path: "/project", //主治项目
        component: project
      },
      {
        path: "/team", //医生团队
        component: team
      },
      {
        path: "/advanced", //先进设备
        component: advanced
      },
      {
        path: "/Outpatient", //门诊资质
        component: Outpatient
      },
      {
        path: "/info", //相关资讯
        component: info
      }
    ]
  }
];

const router = new VueRouter({
  routes
})

export default router
