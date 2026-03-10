/**
 * router/index.ts
 *
 * Manual routes for ./src/pages/*.vue
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router'

const pages = import.meta.glob('../pages/*.vue')

const routes = Object.keys(pages).map((path) => {
  const name = path.match(/..\/pages\/(.*)\.vue$/)[1]

  return {
    path: name === 'index' ? '/' : `/${name}`,
    component: pages[path]
  }
})

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router