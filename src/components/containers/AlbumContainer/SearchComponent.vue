<template>
  <transition name="fade" appear>
    <div class="main-container">
        <InputComponent class="search-container"
                        @button-clicked="InputHandler"
                        @input-changed="InputHandler"
                        label-name="Search Collection"/>
    </div>
  </transition>
</template>

<script>
import InputComponent from "@/components/componentPieces/InputComponent";

export default {
  name: "SearchComponent",
  components:{
    InputComponent,
  },

  mounted(){

  },

  beforeDestroy() {
    this.InputSearchField = '';
    this.$store.dispatch('albums/setSearchField', this.InputSearchField);
  },

  methods:{

    InputHandler(searchParam){
      this.InputSearchField = searchParam;
      this.$store.dispatch('albums/setSearchField', this.InputSearchField);
      //console.log(this.InputSearchField);
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
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  transition: ease-in-out 0.2s;
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
  transform: translateX(100%);
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

</style>