import Vue from 'vue';
import VueRouter from 'vue-router'

import NewsView from '../views/NewsView.vue'
import AskView from '../views/AskView.vue'
import JobsView from '../views/JobsView.vue'
import ItemView from '../views/ItemView.vue'
import UserView from '../views/UserView.vue'
// import createListVie from '../views/CreateListView.js'
import bus from '../utils/bus.js'
import { store } from '../store/index.js'


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
            name: 'news',
            // component: createListVie('NewsView'),
            component: NewsView,
            beforeEnter:(to, from, next) => {
                console.log(from);
                bus.$emit("start:spinner");
                store.dispatch("FETCH_LIST", to.name)
                .then(()=>{
                    console.log('fetched');
                    next();

                })
                .catch(error => console.log(error));
            }
        },

        {
            path:'/ask',
            name: 'ask',
            // component: createListVie('AskView'),
            component: AskView,
            beforeEnter:(to, from, next) => {
                console.log(from);
                bus.$emit("start:spinner");
                store.dispatch("FETCH_LIST", to.name)
                .then(()=>{
                    console.log('fetched');
                    next();

                })
                .catch(error => console.log(error));
            }
        },

        {
            path:'/jobs',
            name: 'jobs',
            // component: createListVie('JobsView'),
            component: JobsView,
            beforeEnter:(to, from, next) => {
                console.log(from);
                bus.$emit("start:spinner");
                store.dispatch("FETCH_LIST", to.name)
                .then(()=>{
                    console.log('fetched');
                    next();

                })
                .catch(error => console.log(error));
            }
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