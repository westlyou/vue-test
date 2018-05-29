import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import scroll from '@/components/scroll';
import animate from '@/components/animate-css';
import easyMock from '@/components/easy-mock';
import lazyLoad from '@/components/lazy-load-img';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Hello',
            component: Hello,
        },
        {
            path: '/scroll',
            name: 'scroll',
            component: scroll,
        },
        {
            path: '/animate-css',
            name: 'animate',
            component: animate,
        },
        {
            path: '/easy-mock',
            name: 'easyMock',
            component: easyMock,
        } ,
        {
            path: '/lazy-load-img',
            name: 'lazyLoad',
            component: lazyLoad,
        }
    ],
});
