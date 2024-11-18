import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import ItemDetails from '../views/ItemDetails.vue'; // Ensure this file exists

const routes = [
  { path: '/', component: Home },
  { path: '/details', component: ItemDetails },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
