import Vue from 'vue'
import Router from 'vue-router'
import Root from '@/components/Root'

import Index from '../page/index/index.vue'
import Recommend from '../page/index/Recommend.vue'
import Top from '../page/index/Top.vue'
import Radio from '../page/index/Radio.vue'
import SongList from '../page/index/SongList.vue'

//按需加载
// const Songlisy = resolve => require(['../components/ListTitle.vue'],resolve)

import Home from '../page/home/home.vue'
import Contact from '../page/contact/contact.vue'
import PlayListDetail from '../page/PlayListDetail.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/root/index'
    },
    {
      path:'/root',
      name: 'Root',
      component: Root,
      children: [
        {
          path:'index',
          component: Index,
          redirect:'index/recommend',
          children:[
            {
              path: 'recommend',
              component: Recommend
            },
            {
              path: 'songlist',
              component: SongList
            },
            {
              path: 'radio',
              component: Radio
            },
            {
              path: 'top',
              component: Top
            }
          ]
        },
        {
          path:'home',
          component:Home
        },
        {
          path: 'contact',
          component:Contact
        }
      ]
    },
    {
      path: '/playlistdetail/:id',
      component: PlayListDetail
    }
  ]
})
