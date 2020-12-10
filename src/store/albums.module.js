import VinylApiService from "@/services/vinylApiService";

const state = {
    albums: [],
    searchAlbums: [],
    searchTerm: ""
};

const getters = {
    albumModelArray: (state) =>
    {
        if(state.searchTerm === ''){
            return state.albums;
        }
        else {
            return state.albums.filter((album) => {
                return (
                    album.album.toLowerCase().includes(state.searchTerm.toLowerCase())
                    || album.artist.toLowerCase().includes(state.searchTerm.toLowerCase()));
            });
        }
    }

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

    setSearchField: async ({ commit }, searchItem) => {
        commit('setSearch', searchItem);
        console.log(`search set ${searchItem}`);
    }
};

const mutations = {
    setAlbums:(state, newAlbums) => {
        state.albums =  newAlbums;
    },

    addAlbum: (state, addedAlbum) => {
        state.albums.push(addedAlbum);
        console.log("album added");
    },

    setSearch: (state, searchItem) => {
        state.searchTerm = searchItem;
    }
};

export const albums = {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};