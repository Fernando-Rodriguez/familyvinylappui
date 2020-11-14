<template>
  <div class="MainPageAlbum">
    <nav-bar v-bind:user-name="userNameMain"/>
    <main-page-album />
  </div>
</template>

<script>
import MainPageAlbum from "@/components/Containers/MainPageAlbum";
import NavBar from "@/components/InteractivePieces/NavBar";

export default {
name: "MainPage",
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
  background-color: #171717;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}

</style>