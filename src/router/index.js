import Vue from 'vue'
import Router from 'vue-router'
import LoginView from '@/components/views/LoginView';
import OwnedAlbumsView from "@/components/views/OwnedAlbumsView";
import HomeView from "@/components/views/HomeView";
import TokenService from "@/services/token.service";
import SearchComponent from "@/components/containers/AlbumContainer/SearchComponent";
import MainPageComponent from "@/components/containers/AlbumContainer/AlbumListComponent";
import AddPopUpContainer from "@/components/containers/PopupContainer/AddPopUpContainer";
import DetailedComponent from "@/components/containers/AlbumContainer/DetailedComponent";

Vue.use(Router);

 const router = new Router({
    mode:'history',
    routes: [
        {
            path: '/',
            component: HomeView
        },
        // {
        //     path: '/owned-albums',
        //     component: OwnedAlbumsView,
        //     children: [
        //         {
        //             name: 'allAlbums',
        //             path: '/owned-albums/all',
        //             component: MainPageComponent
        //         },
        //         {
        //             name: 'search',
        //             path: '/owned-albums/search',
        //             component: SearchComponent
        //         },
        //         {
        //             name: 'addAlbums',
        //             path: '/owned-albums/add-album',
        //             component: AddPopUpContainer
        //         },
        //         {
        //             name: 'detailedView',
        //             path: '/:id/album',
        //             component: DetailedComponent
        //         }
        //     ]
        // },
        {
          path: '/owned-albums',
          component: OwnedAlbumsView,
          children:[
              {
                path: 'addAlbums',
                component: AddPopUpContainer
              },
              {
                  path: 'all',
                  component: MainPageComponent
              },
              {
                  path: 'search',
                  components: {
                      default: MainPageComponent,
                      searchComp: SearchComponent
                  }
              },
              {
                  path: 'add',
                  components:{
                      default: MainPageComponent,
                      addAlbums: AddPopUpContainer
                  }
              },
              {
                  name: 'detailedView',
                  path: '/:id/album',
                  component: DetailedComponent
              }
          ]
        },
        {
            path: '/login',
            component: LoginView,
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