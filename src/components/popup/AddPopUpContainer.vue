<template>
  <div id="container">
    <AddAlbumPopUp @close="showModal = false">
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

#container{
  width: 100%;
  height:100%;
}

</style>