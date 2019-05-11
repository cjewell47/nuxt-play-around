import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _b31ffc86 = () => interopDefault(import('../pages/About.vue' /* webpackChunkName: "pages/About" */))
const _66194a60 = () => interopDefault(import('../pages/Contact.vue' /* webpackChunkName: "pages/Contact" */))
const _f0647a42 = () => interopDefault(import('../pages/Home.vue' /* webpackChunkName: "pages/Home" */))
const _7e0e260c = () => interopDefault(import('../pages/Projects.vue' /* webpackChunkName: "pages/Projects" */))
const _35c7cac2 = () => interopDefault(import('../pages/Skills.vue' /* webpackChunkName: "pages/Skills" */))
const _4eb5bca2 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

if (process.client) {
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual'

    // reset scrollRestoration to auto when leaving page, allowing page reload
    // and back-navigation from other pages to use the browser to restore the
    // scrolling position.
    window.addEventListener('beforeunload', () => {
      window.history.scrollRestoration = 'auto'
    })

    // Setting scrollRestoration to manual again when returning to this page.
    window.addEventListener('load', () => {
      window.history.scrollRestoration = 'manual'
    })
  }
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected and scrollToTop is not explicitly disabled
  if (
    to.matched.length < 2 &&
    to.matched.every(r => r.components.default.options.scrollToTop !== false)
  ) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}

export function createRouter() {
  return new Router({
    mode: 'history',
    base: decodeURI('/'),
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/About",
      component: _b31ffc86,
      name: "About"
    }, {
      path: "/Contact",
      component: _66194a60,
      name: "Contact"
    }, {
      path: "/Home",
      component: _f0647a42,
      name: "Home"
    }, {
      path: "/Projects",
      component: _7e0e260c,
      name: "Projects"
    }, {
      path: "/Skills",
      component: _35c7cac2,
      name: "Skills"
    }, {
      path: "/",
      component: _4eb5bca2,
      name: "index"
    }],

    fallback: false
  })
}
