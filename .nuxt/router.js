import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _ea80b4ae = () => import('..\\pages\\table\\workload.vue' /* webpackChunkName: "pages_table_workload" */).then(m => m.default || m)
const _5ca50540 = () => import('..\\pages\\table\\employee.vue' /* webpackChunkName: "pages_table_employee" */).then(m => m.default || m)
const _7b7a2228 = () => import('..\\pages\\table\\hospital.vue' /* webpackChunkName: "pages_table_hospital" */).then(m => m.default || m)
const _4c1af088 = () => import('..\\pages\\table\\ksstatic.vue' /* webpackChunkName: "pages_table_ksstatic" */).then(m => m.default || m)
const _7f95df04 = () => import('..\\pages\\table\\ksincome_month.vue' /* webpackChunkName: "pages_table_ksincome_month" */).then(m => m.default || m)
const _3bcf75b6 = () => import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */).then(m => m.default || m)



if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise(resolve => {
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


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/table/workload",
			component: _ea80b4ae,
			name: "table-workload"
		},
		{
			path: "/table/employee",
			component: _5ca50540,
			name: "table-employee"
		},
		{
			path: "/table/hospital",
			component: _7b7a2228,
			name: "table-hospital"
		},
		{
			path: "/table/ksstatic",
			component: _4c1af088,
			name: "table-ksstatic"
		},
		{
			path: "/table/ksincome:month?",
			component: _7f95df04,
			name: "table-ksincomemonth"
		},
		{
			path: "/",
			component: _3bcf75b6,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
