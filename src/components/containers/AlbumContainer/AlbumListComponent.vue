<template>
  <div class="main-container">
    <div class="container">
      <div v-for="(album, index) in albumModelArray" v-bind:Key="index">
        <router-link v-bind:to="`/${album.id}/album`">
          <album-card-component v-bind:albumModel="album" @card-clicked="AlbumClickedOn"/>
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

  computed: {
    ...mapGetters('albums',[
        'albumModelArray'
    ])
  },

  methods:{

    InputHandler(searchParam){
      this.InputSearchField = searchParam;
      console.log(this.InputSearchField);
    },

    async AlbumClickedOn(){

    }
  },

  data(){
    return {
      InputSearchField: "",
      AlbumModels: []
    };
  }
}

</script>

<style scoped>

.main-container {
  width: 100%;
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