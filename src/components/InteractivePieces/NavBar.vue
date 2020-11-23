<template>
  <div class="navbar-container">
    <div class="navbar-user-container">
      <img class="navbar-user-image"
           src="https://image.shutterstock.com/image-photo/close-portrait-smiling-handsome-man-260nw-1011569245.jpg"
           alt="User Image, right here"/>
      <h1 class="navbar-user">Hello, {{ this.userInput }}!</h1>
      <div class="navbar-menu-text">
        <p> Album Options</p>
      </div>
      <div class="navbar-add-album">
        <form @submit.prevent>
          <input class="navbar-input"  type="text" placeholder="Write Artist Here" v-model="albumModel.artistInput"/>
          <input class="navbar-input"  type="text" placeholder="Write Album Here" v-model="albumModel.albumInput"/>
          <button v-on:click="AddAlbumToDB"> Add things!! </button>
        </form>
        <p v-if="submitLoading">Loading</p>
      </div>
    </div>
  </div>
</template>

<script>
import GetToken from "@/Services/token.service";

export default {
  name: "NavBar",
  components:{
  },
  props:{
    userName: String
  },
  data(){
    return{
      userInput: "fernando",
      albumModel: {
        albumInput: "",
        artistInput: "",
      },
      submitLoading: false
    };
  },
  methods: {
    async AddAlbumToDB(){

      this.submitLoading = true;

      await GetToken();

      const token = localStorage.getItem("token");

      try{
        const response = await fetch("https://familyvinylapp.azurewebsites.net/api/ownedalbums", {
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
          headers: {
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          redirect: 'follow', // manual, *follow, error,
          body: {
            userId: "5f90c145b5a8ec412e4307f4",
            user: "Frod080",
            album: this.albumInput,
            artist: this.artistInput
          }
        });

        const data = await response.json();
        const albums = data.owned_Albums;
        this.albumModelArray = albums;
        this.DisplayAlbums = this.albumModelArray;

        this.submitLoading = false;

        return response.statusCode;
      }
      catch(e) {
        console.log(e);
      }
    }
  }
}
</script>

<style scoped>

.navbar-container {
  box-sizing: inherit;
  width: 100%;
  height: 100%;
  background-color: black;
  display: flex;
  flex-direction: column ;
  justify-content: flex-start;
  align-items: center;
  position: relative;
}

.navbar-user-container{
  box-sizing: inherit;
  width: 200px;
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
}

.navbar-user{
  font-size: 20px;
  color: white;
}

.navbar-user-image{
  box-sizing: inherit;
  width: 200px;
  padding: 10px;
  box-shadow: 1px 1px 10px 1px black;
}
.navbar-menu-text{
  margin-top: 100px;
  color: white;
}

.navbar-add-album button{
  color: white;
  padding: 10px 20px;
  background-color: transparent;
  border: 1px white solid;
  transition: 0.1s ease-in-out;
  margin: 10px 0px;
}

/*.navbar-add-album:hover form::after{*/
/*  margin: 0 0 0 30px;*/
/*  font-size: 15px;*/
/*  content: "♥";*/
/*  color: red;*/
/*}*/

.navbar-add-album{
  margin: 10px;
}

/*.navbar-add-album button:hover{*/
/*  background: white;*/
/*  color: black;*/
/*  border: 1px white solid;*/
/*  transform: scale(1.05);*/
/*}*/

.navbar-input{
  font-size: 15px;
  color: white;
  height: 40px;
  width: 90%;
  background-color: transparent;
  border: none;
  border-bottom: 2px solid white;
}

</style>