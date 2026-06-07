import { createRouter, createWebHistory } from "vue-router"

import HeroView from "../views/HeroView.vue"
import LetterView from "../views/LetterView.vue"
import QualitiesView from "../views/QualitiesView.vue"
import GardenView from "../views/GardenView.vue"
import PhotosView from "../views/PhotosView.vue"
import FinalView from "../views/FinalView.vue"

const routes = [
  { path: "/", name: "hero", component: HeroView, meta: { order: 0, title: "For You" } },
  { path: "/letter", name: "letter", component: LetterView, meta: { order: 1, title: "Love Letter" } },
  { path: "/qualities", name: "qualities", component: QualitiesView, meta: { order: 2, title: "What I Adore" } },
  { path: "/garden", name: "garden", component: GardenView, meta: { order: 3, title: "Secret Garden" } },
  { path: "/photos", name: "photos", component: PhotosView, meta: { order: 4, title: "Our Pictures" } },
  { path: "/final", name: "final", component: FinalView, meta: { order: 5, title: "Always & Forever" } },
  { path: "/:pathMatch(.*)*", redirect: "/" },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
