import 'dotenv';
import {TokenService} from "@/Services/token.service";
import { apiService } from "@/Services/api.service";

const UserService = {

    login: async () => {
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        let raw = JSON.stringify({
            "clientname": process.env["CLIENT_ID"],
            "clientsecret": process.env["CLIENT_SECRET"]
        });
        let requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        try {
            //request token for user attempting to login.
            const response = await fetch(process.env["VINYL_API_TOKEN"], requestOptions);
            const data = await response.json();

            //saves the token to the browser.
            TokenService.saveToken(data.access_token);

            //pre-sets the headers with the token for the api calls.
            apiService.configHeaders();
        } catch (e) {
            console.log(e);
        }
    },

    logout: () => {
        TokenService.removeToken();
    }
}

export default UserService;