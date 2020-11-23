<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
//import MainPage from "@/components/MainPage/MainPage";

export default {
  name: 'App',
  components: {
    //MainPage
  }
}
</script>

<style>
*{
  margin:0;
  padding: 0;
  box-sizing: border-box;
}

#app{
  box-sizing: inherit;
  height: 100vh;
  width: 100vw;
}

</style>
