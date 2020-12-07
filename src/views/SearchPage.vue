<template>
  <transition name="fade" appear>
  <div class="main-container">
    <InputComponent class="search-container"
                    @button-clicked="InputHandler"
                    @input-changed="InputHandler"
                    label-name="Search Collection"/>
    <div class="container">
      <div v-for="(album, index) in albumModelArray" v-bind:Key="index">
        <router-link v-bind:to="`/${album.id}/album`">
          <AlbumCardComponent v-bind:albumModel="album" @card-clicked="AlbumClickedOn"/>
        </router-link>
      </div>
    </div>
  </div>
  </transition>
</template>

<script>
import AlbumCardComponent from "@/components/interactivePieces/AlbumCardComponent";
import InputComponent from "@/components/interactivePieces/InputComponent";
import { mapState } from 'vuex';

export default {
  name: "SearchPage",
  components:{
    InputComponent,
    AlbumCardComponent
  },

  created(){
    this.$store.dispatch('albums/getAllAlbumsAsync');
  },

  mounted(){
  },

  computed: {
    ...mapState({
      albumModelArray: function(state)
      {
        if(this.InputSearchField === ""){
          return state.albums.albums;
        }
        else {
          return state.albums.albums.filter((album) => {
            return (
                album.album.toLowerCase().includes(this.InputSearchField.toLowerCase()) ||
                album.artist.toLowerCase().includes(this.InputSearchField.toLowerCase()));
          });
        }
      }
    })
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
      InputSearchField: ""
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
  transition: ease-in 0.2s;
}

.container{
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background-color: #171717;
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.search-container{
  margin: 10px;
}

.fade-enter-active,
.fade-leave-active{
  transition: opacity 0.3s;
  transform: translateX(100%);
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

</style>