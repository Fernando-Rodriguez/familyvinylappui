import TokenService from "@/services/token.service";
import albums from "@/services/data.service";
import axios from 'axios';

const VinylApiService = {

    init: (baseUrl) => {
        axios.defaults.baseURL = baseUrl;
    },

    setApiHeaders: () => {
        axios.defaults.headers = {
            'Authorization': `Bearer ${TokenService.getToken()}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        };
    },

    removeApiHeaders: () => {
        axios.defaults.headers.common = {};
    },

    getDataAsync: async () => {
        try {
            return albums.owned_Albums;
            // const response = await axios.get('/');
            // const data = response.data;
            // return data;

        } catch (e) {
            console.log(e.toString());
        }
    },

    searchDataAsync: async (input_Id) => {
        try {
            return albums.owned_Albums.filter(album => album.id === input_Id)[0];

        } catch (e) {
            console.log(e.toString());
        }
    },

    postDataAsync: async (dataPacket) => {
        try {
            const response = await axios.post('/', dataPacket);
            return response.data;
        } catch (e) {
            console.log(e.toString());
        }
    },

    deleteDataAsync: async (id) => {
        try {
            const response = await axios.delete(`/${id}`);
            return response.data;
        } catch (e) {
            console.log(e.toString());
        }
    },

    generalRequestAsync: async (config) => {
        return axios(config);
    }
};

export default VinylApiService;