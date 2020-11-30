<template>
  <div class="albumCard" v-on:click="AlbumClickedOn">
    <img class="albumCard-img" v-bind:src="albumModel.imageUrl" alt="album artwork"/>
    <h3 class="albumCard-artist">{{albumModel.artist}}</h3>
    <p class="albumCard-album">{{albumModel.album}}</p>
  </div>
</template>

<script>
export default {
name: "AlbumCardComponent",
  props:{
    albumModel: Object
  },
  methods:{
    AlbumClickedOn(){
      this.$emit("card-clicked", this.albumModel);
    }
  }
}

</script>

<style scoped>

.albumCard{
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  font-size: 40px;
  box-sizing: border-box;
  margin: 10px;
}

.albumCard:hover{
  cursor: pointer;
}

.albumCard:hover > .albumCard-img{
  transform: scale(0.98);
  opacity: 0.5;
  filter: blur(1px);
  color: white;
}

.albumCard:hover .albumCard-artist{
  color: white;
}
.albumCard:hover .albumCard-album{
  color: white;
}

.albumCard-img{
  border-radius: 0;
  width: 100%;
}

.albumCard-artist{
  position: absolute;
  height: 180px;
  color: transparent;
}

.albumCard-album{
  position: absolute;
  color: transparent;
}

</style>