<template>
  <div id="app">
    <button id="show-modal" @click="showModal = true">Show Modal</button>
    <AddAlbumPopUp v-if="showModal" @close="showModal = false">
      <SearchBoxComponent slot="body"/>
    </AddAlbumPopUp>
  </div>
</template>

<script>
import AddAlbumPopUp from "@/components/popup/AddAlbumPopUp";
import SearchBoxComponent from "@/components/interactivePieces/SearchBoxComponent";

export default {
name: "AddPopUpContainer",
  components: {
    AddAlbumPopUp,
    SearchBoxComponent
  },
  data(){
    return{
      showModal: false
    };
  }
}
</script>

<style scoped>




</style>