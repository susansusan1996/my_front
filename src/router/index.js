import { createRouter, createWebHistory } from 'vue-router';
import Stack from '../components/data_structure/Stack.vue';
import Queue from '../components/data_structure/Queue.vue';
import BST from '../components/data_structure/BST.vue';
import Snake from '../components/game/Snake.vue';
import Mario from '../components/game/Mario.vue';
import Shoot from '../components/game/Shoot.vue';
import ppt from '../components/resume/ppt.vue';



const routes = [
    { path: '/my_front/', name: 'Home', component: () => import('../components/data_structure/Home.vue') },
    { path: '/my_front/resume', name: 'ppt', component: ppt },
    { path: '/my_front/stack', name: 'Stack', component: Stack },
    { path: '/my_front/queue', name: 'Queue', component: Queue },
    { path: '/my_front/bst', name: 'BST', component: BST },
    { path: '/my_front/snake', name: 'Snake', component: Snake },
    { path: '/my_front/mario', name: 'Mario', component: Mario },
    { path: '/my_front/shoot', name: 'Shoot', component: Shoot }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
