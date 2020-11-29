import UserService from "@/Services/user.service";
import TokenService from "@/Services/token.service";
import router from "@/Router";

const state = {
    authenticating: false,
    accessToken: TokenService.getToken()
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
            commit('loginSuccess', token)

            // Redirect the user to the page he first tried to visit or to the home view
            router.push('/').then();

            return true
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