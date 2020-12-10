<template>
  <div class="navbar-add-album">
    <p class="title-text">Add Album to Collection</p>
    <InputComponent class="custom-input" @input-changed="InputArtistHandler" label-name="Artist"/>
    <InputComponent class="custom-input" @input-changed="InputAlbumHandler" label-name="Album"/>
    <router-link to="/owned-albums/all">
      <ButtonComponent @button-clicked-event="addNewAlbum" button-content="Add Album" />
    </router-link>
    <div class="loading-box" v-if="submitLoading">
      <p>Loading...</p>
    </div>
  </div>
</template>

<script>
import InputComponent from "@/components/componentPieces/InputComponent";
import ButtonComponent from "@/components/componentPieces/ButtonComponent";

export default {
name: "SearchBox",
  components:{
  InputComponent,
    ButtonComponent
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
  methods:{

    InputArtistHandler(params){
      this.albumModel.artistInput = params;
    },

    InputAlbumHandler(params){
      this.albumModel.albumInput = params;
    },

    addNewAlbum(){
      let album = {
        id: "5f8483f578f986a53276a9cc",
        user: "Frod080",
        album: this.albumModel.albumInput,
        artist: this.albumModel.artistInput,
        imageUrl: "https://i.scdn.co/image/ab67616d0000b2730c7a52516acf1393f6f75b2f"
      };

      console.log(`${album.album} ${album.artist}`)
      this.$store.dispatch('albums/pushNewAlbum', album);
    }
  }
}
</script>

<style scoped>

.navbar-add-album{
  width: 100%;
  padding:5px;
  color: white;
  background-color: #171717;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
}

.custom-input{
  width: 100%;
}

.title-text{
  text-align: center;
  margin-top: 10px;
  padding-bottom: 4px;
  border-bottom: 1px solid white;
}

.loading-box{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  position: absolute;
  width: 200px;
  height: 50px;
  color: red;
  top:300px;
  background:white;
  border-radius: 1%;
}

router-link{
  text-decoration: none;
}

</style>