import dotnet from 'dotenv';
import TokenService from "@/services/token.service";
//import VinylApiService  from "@/services/api.service";

dotnet.config();

const UserService = {

    login: async (email, password) => {
        // const requestData = {
        //     method: 'post',
        //     url: "/token",
        //     data: {
        //         username: email,
        //         password: password
        //     },
        //     auth: {
        //         username: process.env.CLIENT_ID,
        //         password: process.env.CLIENT_SECRET
        //     }
        // };

        try {
            //makes the request.
            //const response = await VinylApiService.generalRequestAsync(requestData);

            const response = {
                data:{
                    access_token: `${email}:${password}`
                }
            };

            //saves the token to the browser.
            TokenService.saveToken(response.data.access_token);

            //pre-sets the headers with the token for the api calls.
            //VinylApiService.setApiHeaders();

        } catch (e) {
            console.log(e);
        }
    },

    logout: () => {
        //removes the tokens set when the user logs in.
        TokenService.removeToken();
        //VinylApiService.removeApiHeaders();
    }
}

export default UserService;