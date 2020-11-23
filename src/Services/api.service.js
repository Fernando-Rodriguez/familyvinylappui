import { TokenService } from "@/Services/token.service";
import MethodTypes from './methodTypes.services';

const apiService = {
     setApiHeaders: () =>{
        return {
            method: '',
            headers: {
                'Authorization': `Bearer ${TokenService.getToken()}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            redirect: 'follow', // manual, *follow, error
        };
    },

    configHeaders: () => this.setApiHeaders(),

    setApiUrl: () => process.env['VINYL_API_BASE '],

    getDataAsync: async () => {
        this.configHeaders.method = `${MethodTypes.Get}`;
        try {
            const response = await fetch(this.setApiUrl(), this.configHeaders());
            const data = await response.json();
            return data.owned_Albums;
        } catch (e) {
            console.log(e);
        }
    },

    postDataAsync: async () => {
        this.configHeaders.method = `${MethodTypes.Post}`;
        try {
            await fetch(this.setApiUrl(), this.setApiHeaders(MethodTypes.Post));
        } catch (e) {
            console.log(e);
        }
    },

    deleteDataAsync: async () => {
        this.configHeaders.method = `${MethodTypes.Delete}`;
        try {
            await fetch(this.setApiUrl(), this.setApiHeaders(MethodTypes.Delete));
        } catch (e) {
            console.log(e);
        }
    }
}

export { apiService };