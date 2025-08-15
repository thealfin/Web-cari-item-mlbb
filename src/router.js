// router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Utama from './Layout/Utama.vue'
import Beranda from './Menu/Beranda.vue'
import ProfilSekolah from './Menu/Cari-Item.vue'
import Cariitem from './Menu/cari-item.vue'
// import Builditem from './Menu/build-item.vue'

const routes = [
  {
    path: '/',
    name: 'Utama',
    component: Utama,
    children: [
      {
        path: '',
        redirect: 'cari-item',
      },
      {
        path: 'beranda',
        name: 'Beranda',
        component: Beranda,
      },
      {
        path: 'profil-sekolah',
        name: 'ProfilSekolah',
        component: ProfilSekolah,
      },
      {
        path: 'cari-item',
        name: 'cariitem',
        component: Cariitem,
      },
      // {
      //   path: 'build-item',
      //   name: 'Builditem',
      //   component: Builditem,
      // },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
