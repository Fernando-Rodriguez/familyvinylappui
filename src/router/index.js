import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/LoginPage';
import OwnedAlbums from "@/views/OwnedAlbums";
import HomePage from "@/views/HomePage";
import TokenService from "@/services/token.service";
import SearchPage from "@/views/SearchPage";
import MainPageContainer from "@/components/containers/MainPageContainer";
import AddPopUpContainer from "@/components/popup/AddPopUpContainer";
import DetailedView from "@/views/DetailedView";

Vue.use(Router);

 const router = new Router({
    mode:'history',
    routes: [
        {
            path: '/',
            component: HomePage
        },
        {
            path: '/owned-albums',
            component: OwnedAlbums,
            children: [
                {
                    name: 'allAlbums',
                    path: '/owned-albums/all',
                    component: MainPageContainer
                },
                {
                    name: 'search',
                    path: '/owned-albums/search',
                    component: SearchPage
                },
                {
                    name: 'addAlbums',
                    path: '/owned-albums/add-album',
                    component: AddPopUpContainer
                },
                {
                    name: 'detailedView',
                    path: '/:id/album',
                    component: DetailedView
                }
            ]
        },
        {
            path: '/login',
            component: Login,
            meta:{
                public: true,
                onlyWhenLoggedOut:true
            }
        }
    ]
});

router.beforeEach((to, from, next) => {
    const isPublic = to.matched.some(record => record.meta.public)
    const onlyWhenLoggedOut = to.matched.some(record => record.meta.onlyWhenLoggedOut)
    const loggedIn = !!TokenService.getToken();

    if (!isPublic && !loggedIn) {
        return next({
            path:'/login',
            query: {redirect: to.fullPath}  // store the full path to redirect the user to after login
        });
    }

    // Do not allow user to visit login page or register page if they are logged in
    if (loggedIn && onlyWhenLoggedOut) {
        return next('/owned-albums/all')
    }
    next();
});

export default router;