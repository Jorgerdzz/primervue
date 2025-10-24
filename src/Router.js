import HomeComponent from './components/HomeComponent.vue';
import CineComponent from './components/CineComponent.vue';
import MusicaComponent from './components/MusicaComponent.vue';
import CicloVida from './components/CicloVida.vue';
import DirectivasComponent from './components/DirectivasComponent.vue';

import { createRouter, createWebHistory } from 'vue-router';

const rutas = [
    {path: "/", component: HomeComponent},
    {path: "/cine", component: CineComponent},
    {path: "/musica", component: MusicaComponent},
    {path: "/ciclovida", component: CicloVida},
    {path: "/directivas", component: DirectivasComponent}
]

const router = createRouter({
    history: createWebHistory(),
    routes: rutas
});

export default router;