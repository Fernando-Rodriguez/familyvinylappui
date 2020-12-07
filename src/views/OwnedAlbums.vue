<template>
    <div class="MainPageAlbum">
      <nav-bar class="sidebar"></nav-bar>
      <transition name="fade">
        <router-view class="main-page" />
      </transition>
    </div>
</template>

<script>
import NavBar from "@/components/containers/NavBarContainer";

export default {
name: "OwnedAlbums",
  components:{
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
  box-sizing: inherit;
  display: grid;
  grid-template-columns: 1fr 5fr;
  overflow-x: hidden;
  transition: ease-in 1s;
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