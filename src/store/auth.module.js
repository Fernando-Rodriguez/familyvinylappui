import UserService from "@/services/user.service";
import TokenService from "@/services/token.service";
import router from "@/router";

const state = {
    authenticating: false,
    accessToken: TokenService.getToken(),
    isLoggedIn: false
};

const getters = {

    loggedIn: (state) => {
        return !!state.accessToken
    },

    authenticating: (state) => {
        return state.authenticating
    }
}

const mutations = {
    loginRequest(state) {
        state.authenticating = true;
    },

    loginSuccess(state, accessToken) {
        state.accessToken = accessToken
        state.authenticating = false;
    },

    loginError(state) {
        state.authenticating = false;
    },

    logoutSuccess(state) {
        state.accessToken = ''
    }
}

const actions = {

    async login({ commit }, {email, password}) {

        commit('loginRequest');

        try {
            const token = await UserService.login(email, password);
            commit('loginSuccess', token);
            router.push('/').then();
        }
        catch (e) {
            console.log(e);
        }

        return false;
    },

    logout({ commit }) {
        UserService.logout()
        commit('logoutSuccess')
        router.push('/login').then();
    }
}

export const auth = {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}