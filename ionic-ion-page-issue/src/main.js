import App from "./App.vue";
import { createApp } from "vue";
import { createRouter, createWebHistory } from "@ionic/vue-router";
import { IonicVue } from "@ionic/vue";
import "@ionic/vue/css/core.css";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("./pages/Index.vue")
  },
  {
    path: "/sibling",
    name: "sibling",
    component: () => import("./pages/Sibling.vue"),
    redirect: "/sibling/1",
    children: [
      {
        path: "1",
        name: "child-1",
        component: () => import("./pages/Sibling/Child1.vue")
      },
      {
        path: "2",
        name: "child-2",
        component: () => import("./pages/Sibling/Child2.vue")
      }
    ]
  },
  {
    path: "/another",
    name: "another",
    component: () => import("./pages/Another.vue")
  }
];

const router = createRouter({
  routes,
  history: createWebHistory()
});
const app = createApp(App)
  .use(IonicVue, {
    mode: "ios"
  })
  .use(router);

router.isReady().then(() => {
  app.mount("#app");
});
