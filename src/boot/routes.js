import {
  createMemoryHistory,
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from 'vue-router';
let routes =  [
    {
        path:'/:site',

        name: 'MyHome',

        component:  () => import('../pages/Home.vue'),
 
    },
     {
    path: '/invalidVitrine',
    name: 'invalidVitrine',
    component: () => import('../pages/InvalidVitrine.vue'),
  },
]

// const router = createRouter({
//   history: createWebHistory(process.env.BASE_URL),
//  routes,
//   linkActiveClass: "active",
  
// });

// export default router;

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default  (function (/* { store, ssrContext } */) {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : process.env.VUE_ROUTER_MODE === 'history'
    ? createWebHistory
    : createWebHashHistory;

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,

    // Leave this as is and make changes in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    history: createHistory(
      process.env.MODE === 'ssr' ? void 0 : process.env.VUE_ROUTER_BASE
    ),
  });
  // Router.beforeEach((to, from, next) => {
  //   const site = to.redirectedFrom
  //     ? to.redirectedFrom.params.site.toString()
  //     : to.params.site.toString();
  //   console.log(site);
  //   if (
  //     Cookies.get('token') != undefined &&
  //     Cookies.get('token') != 'undefined' &&
  //     Cookies.get('token') != null
  //   ) {
  //     console.log(
  //       Cookies.get('token') != undefined &&
  //         Cookies.get('token') != 'undefined' &&
  //         Cookies.get('token') != null
  //     );
  //     console.log('iiiiixzzxioooiioi', Cookies.get('token'));
  //     void refreshAuthenticated();
  //     next();
  //     console.log('00000');
  //   } else {
  //     console.log('llllllllll');
  //     // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  //     return next();
  //   }
  // });
  return Router;
});
