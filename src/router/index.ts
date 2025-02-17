import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'index',
    component: () => import( '../views/index.vue'),
    meta: {
      title: "My Icon",
    },
  },
    {
        path: '/index2',
        name: 'index2',
        component: () => import( '../views/index3.vue'),
        meta: {
            title: "My Icon2",
        },
    }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

//网页标题
router.beforeEach((to, from, next) => {
  if (typeof to.meta?.title === "string") {
    document.title = to.meta?.title;
  }
  next();
});

export default router
