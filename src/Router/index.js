import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/Views/LoginPage';
import OwnedAlbums from "@/Views/OwnedAlbums";
import HomePage from "@/Views/HomePage";
import TokenService from "@/Services/token.service";

Vue.use(Router)

 const router = new Router({
    mode:'history',
    routes: [
        {
            path: '/',
            component: HomePage
        },
        {
            path: '/owned-albums',
            component: OwnedAlbums
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
})

router.beforeEach((to, from, next) => {
    const isPublic = to.matched.some(record => record.meta.public)
    const onlyWhenLoggedOut = to.matched.some(record => record.meta.onlyWhenLoggedOut)
    const loggedIn = !!TokenService.getToken();

    if (!isPublic && !loggedIn) {
        return next({
            path:'/login',
            query: {redirect: to.fullPath}  // Store the full path to redirect the user to after login
        });
    }

    // Do not allow user to visit login page or register page if they are logged in
    if (loggedIn && onlyWhenLoggedOut) {
        return next('/')
    }
    next();
})

export default router;