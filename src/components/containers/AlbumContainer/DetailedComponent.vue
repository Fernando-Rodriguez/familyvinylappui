<template>
  <div class="detailed-container">
    <img class="detailed-image" :src="this.album.imageUrl" />
    <div class="detailed-text">
      <h2 class="detailed-text-title">{{ this.album.artist }}</h2>
      <h3 class="detailed-text-album">{{ this.album.album }}</h3>
      <p class="detailed-text-description">Owned by {{this.album.user}}</p>
      <div class="detailed-rating">
        <h2> This album has {{ this.album.rating }} stars </h2>
      </div>
      <button-component button-content="Delete Album" @button-clicked-event="DeleteAlbum" />
    </div>
  </div>
</template>

<script>
import VinylApiService from '../../../services/vinylApiService';
import ButtonComponent from "@/components/componentPieces/ButtonComponent";

export default {
name: "DetailedComponent",
  components: {ButtonComponent},
  data(){
    return{
      album: {}
    };
  },
  computed:{
    currentAlbumId: function(){
      return this.$route.params.id;
    }
  },
  mounted() {
  this.QueryAlbumAsync().then();
  },
  methods:{
   async QueryAlbumAsync(){
      if(this.currentAlbumId != null) {
        this.album = await VinylApiService.searchDataAsync(this.currentAlbumId);
        console.log(this.album.album);
      }
    },

    async DeleteAlbum(){
      // this will be used to remove album from store.
      await this.$store.dispatch('albums/removeAlbum', this.album.id);
      console.log(`Album ${this.album.album} clicked on`);

      await this.$router.push('/owned-albums/all');
    }
  }
}
</script>

<style scoped>

.detailed-container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  font-size: 40px;
  box-sizing: inherit;
  margin: 10px;
}

.detailed-image{
  border-radius: 0;
  width: 100%;
}

.detailed-text{
  text-align: center;
  width: 60%;
  color: white;
  position: absolute;
  background: black;
}
</style>