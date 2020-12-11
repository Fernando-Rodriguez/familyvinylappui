<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  created() {
    this.$store.dispatch('albums/initAlbumStore');
  }
}
</script>

<style>

#app{
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  scroll-behavior: smooth;
}

</style>
