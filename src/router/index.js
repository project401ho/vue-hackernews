import Vue from 'vue';
import VueRouter from 'vue-router'

import NewsView from '../views/NewsView.vue'
import AskView from '../views/AskView.vue'
import JobsView from '../views/JobsView.vue'
import ItemView from '../views/ItemView.vue'
import UserView from '../views/UserView.vue'

Vue.use(VueRouter);

export const router = new VueRouter({
    mode:"history",
    routes: 
    [
        {
            path:'/',
            redirect:"/news",
        },
        {
            path:'/news',
            component:NewsView,
            name: 'news',
        },

        {
            path:'/ask',
            component:AskView,
            name: 'ask',

        },

        {
            path:'/jobs',
            component:JobsView,
            name: 'jobs',

        },
        {
            path:'/item/:id',
            component:ItemView,
            name: 'item',

        },
        {
            path:'/user/:id',
            component:UserView,
            name: 'user',

        },
    ]
});