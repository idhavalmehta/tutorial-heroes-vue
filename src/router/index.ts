import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import HeroesComponent from '@/components/HeroesComponent.vue';
import DashboardComponent from '@/components/DashboardComponent.vue';
import HeroDetailComponent from '@/components/HeroDetailComponent.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: '/dashboard'
  },
  {
    path: '/dashboard',
    component: DashboardComponent
  },
  {
    path: '/detail/:id',
    component: HeroDetailComponent,
    props: true
  },
  {
    path: '/heroes',
    component: HeroesComponent
  }
];

const router = new VueRouter({
  routes
});

export default router;
