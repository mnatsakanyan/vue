import Vue from 'vue'
import Router from 'vue-router'

// import HelloWorld from '@/components/HelloWorld'
// import Dashboard from '@/components/Dashboard'
import Dashboard from '@/components/dashboard/index';
import Product from '@/components/product/index';
import EditProd from '@/components/edirProd/index';


Vue.use(Router)



export default new Router({
  routes: [
		{
			path: '/',
			component: Dashboard
		},
		{
			path: '/Dashboard',
			name: 'dash',
			component: Dashboard
		},
		{
			path: '/Product',
			name: 'prod',
			component: Product
		},
		{
			path: '/edit',
			name: 'edit',
			component: EditProd
		}
  ]
})
