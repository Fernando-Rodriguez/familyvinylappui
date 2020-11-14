import Vue from 'vue'
import Router from 'vue-router'
import MainPage from "@/components/MainPage/MainPage";
import Login from '@/components/LoginPage/Login';
import AlbumPopUp from "@/components/Popup/AlbumPopUp";

Vue.use(Router)

export default new Router({
    mode:'history',
    routes: [
        {
            path: '/',
            component: MainPage,
            children:[
                {
                    path: '/:id/album',
                    component: AlbumPopUp
                }
            ]
        },
        {
            path: '/home',
            component: MainPage
        },
        {
            path: '/login',
            component: Login
        }
    ]
})