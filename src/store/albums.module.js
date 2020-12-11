import VinylApiService from "@/services/vinylApiService";

const state = {
    albums: [],
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

    initAlbumStore: async ({ commit }) => {
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
    },

    removeAlbum: async ({ commit }, albumToDelete) => {
        commit('deleteAlbum', albumToDelete);
        console.log(`album: ${albumToDelete} deleted from store.`);
    }
};

const mutations = {
    setAlbums:(state, newAlbums) => {
        state.albums =  newAlbums;
    },

    addAlbum: (state, addedAlbum) => {
        state.albums.push(addedAlbum);
    },

    setSearch: (state, searchItem) => {
        state.searchTerm = searchItem;
    },

    deleteAlbum : (state, albumToDeleteId) => {
        state.albums = state.albums.filter((album) => {
            return (album.id !== albumToDeleteId);
        });
    }
};

export const albums = {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};