import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import DrinkSelect from '../views/DrinkSelect.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/drink-select',
    name: 'DrinkSelect',
    component: DrinkSelect,
    props: true,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
