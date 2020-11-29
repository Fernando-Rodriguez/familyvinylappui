<template>
  <div class="MainPageAlbum">
    <nav-bar class="sidebar"></nav-bar>
    <main-page-album class="main-page" />
  </div>
</template>

<script>
import MainPageAlbum from "@/components/Containers/MainPageContainer";
import NavBar from "@/components/Containers/NavBarContainer";

export default {
name: "OwnedAlbums",
  components:{
    MainPageAlbum,
    NavBar
  },
  data(){
    return{
      userNameMain:""
    };
  },
  mounted() {
    this.QueryUserNameAsync();
  },
  methods:{
    async QueryUserNameAsync(){
      this.userNameMain = "Fern";
    }
  }
}

</script>

<style scoped>

.MainPageAlbum{
  width: 100%;
  height: 100%;
  background-color: #171717;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr 5fr;
}

</style>