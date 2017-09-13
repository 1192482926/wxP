import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
//import Hi from '@/components/Hi'
import hi1 from '@/components/hi1'
//import hi2 from '@/components/hi2'
import Params from '@/components/Params'
import error from '@/components/Error'

Vue.use(Router)

export default new Router({
	mode:'history',
//	mode:'hash',
	routes: [
		/*{
			path: '/',
			name: 'Hello',
			component: Hello
		},{
			path: '/hi',  
			component: Hi,
			children:[  //子路由
				{path: '/',name: 'hi',component: Hi},
				{path: 'hi1',name: 'hi1',component: hi1},
				{path: 'hi2',name: 'hi2',component: hi2}
			] 
		}*/
		/*{
			path: '/',
			components:{ 
				default:Hello,
				left:hi1,
				right:hi2
			} 
		},{
			path:'/hi',
			components:{
				default:Hello,
				left:hi2,
				right:hi1
			}*/
			{
				path: '/',
				name: 'Hello',
				component: Hello
			},{
				path:'/params/:newsId',
     			component:Params
			},{
				path:'/goHome',
				redirect:'/'
			}/*,{ 
				path:'/goParams/:newsId(\\d+)/:newsTitle',
  				redirect:'/params/:newsId(\\d+)/:newsTitle'
			}*/
			,{
				path: '/hi1',
				name: 'hi1',
				component: hi1,
				alias:'/jspang'
			},
			{
				path:'*',
				component: error
			}
	]
})