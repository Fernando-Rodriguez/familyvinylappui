import Vue from 'vue'
import Vuex from 'vuex'
import { auth } from './auth.module';
import { albums } from './albums.module';
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const store = new Vuex.Store({
    modules: {
        auth,
        albums
    },
    plugins: [createPersistedState()],
    strict: debug
});

export default store;