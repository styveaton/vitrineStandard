 
import { createRouter, createWebHistory } from "vue-router"; 
 
 
 let routes = [
 
    {
        path:'',

        name: 'MyHome',

        component:  () => import('../pages/Home.vue'),
 
    },
     {
    path: '/invalidVitrine',
    name: 'invalidVitrine',
    component: () => import('../pages/InvalidVitrine.vue'),
  },
]
const router = createRouter({
    base: process.env.BASE_URL,
  history: createWebHistory(process.env.BASE_URL),
 routes,
  linkActiveClass: "active",
  
}); 
export default router;


 