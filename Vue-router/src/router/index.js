import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hi1 from '@/components/Hi1'
import Hi2 from '@/components/Hi2'
import Params from '@/components/Params'
import Error from '@/components/Error'

Vue.use(Router)

export default new Router({
	mode:'history',
  	routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
    	path:"/params/:newsId(\\d+)/:newsTitle",
    	component:Params
    },{
    	path:'/gohome',
    	redirect:"/"
    },{
    	path:"/goParams/:newsId(\\d+)/:newsTitle",
    	redirect:'/params/:newsId(\\d+)/:newsTitle'
    },
    {
    	path:'/hi1',
    	component:Hi1,
    	alias:'/terry'
    },
    {
    	path:'*',
    	component:Error
    }
  ]
})
