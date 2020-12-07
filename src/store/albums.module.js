import VinylApiService from "@/services/vinylApiService";

const state = {
    albums: []
};

const getters = {

};

const actions = {

    getAllAlbumsAsync: async ({ commit }) => {
        commit('setAlbums', await VinylApiService.getDataAsync());
        console.log(`Albums called in store. ${state.albums}`);
    },

    pushNewAlbum: async ({ commit }, addedAlbum) => {
        commit('addAlbum', addedAlbum);
        console.log(`Album ${addedAlbum.album} added`)
    },
};

const mutations = {
    setAlbums:(state, newAlbums) => {
        state.albums =  newAlbums;
    },

    addAlbum: (state, addedAlbum) => {
        state.albums.push(addedAlbum);
        console.log("album added");
    }
};

export const albums = {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};