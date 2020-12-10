<template>
  <div class="main-container">
    <div class="container">
      <div v-for="(album, index) in albumModelArray" v-bind:Key="index">
        <router-link v-bind:to="`/${album.id}/album`">
          <album-card-component v-bind:albumModel="album"
                                @card-clicked="AlbumClickedOn"/>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import AlbumCardComponent from './AlbumCardComponent';
import { mapGetters } from 'vuex';

export default {
  name: "MainPageComponent",
  components:{
    AlbumCardComponent
  },

  created(){
    this.$store.dispatch('albums/getAllAlbumsAsync');
  },

  mounted(){
  },

  computed: {
    // ...mapState({
    //   albumModelArray: function(state)
    //   {
    //     if(this.InputSearchField === ""){
    //       return state.albums.albums;
    //     }
    //     else {
    //       return state.albums.albums.filter((album) => {
    //         return (
    //             album.album.toLowerCase().includes(this.InputSearchField.toLowerCase()) ||
    //             album.artist.toLowerCase().includes(this.InputSearchField.toLowerCase()));
    //       });
    //     }
    //   }
    //  }),
    ...mapGetters('albums',[
        'albumModelArray'
    ])
  },

  methods:{

    InputHandler(searchParam){
      this.InputSearchField = searchParam;
      console.log(this.InputSearchField);
    },

    AlbumClickedOn(params){
      let filterList = [];
      for(let i = 0; i < this.albumModelArray.length; i++ ){
        if(this.albumModelArray[i] === params){
          filterList.push(this.albumModelArray[i]);
        }
      }
      this.ClickedAlbum = filterList;
      this.ClickedAlbum.forEach(a => {
        alert(a.album);
      });
    }
  },

  data(){
    return {
      ClickedAlbum: [],
      InputSearchField: "",
      AlbumModels: []
    };
  }
}

</script>

<style scoped>

.main-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
}

.container{
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background-color: #171717;
  display: grid;
  grid-template-columns: 1fr 1fr;
}

</style>