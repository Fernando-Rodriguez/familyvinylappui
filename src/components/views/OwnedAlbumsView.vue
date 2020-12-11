<template>
    <div class="MainPageAlbum">
      <nav-bar class="sidebar"></nav-bar>
      <transition name="fade" class="main-page-container">
        <div class="main-page">
          <router-view name="searchComp"/>
          <router-view class="addAlbums" name="addAlbums"/>
          <router-view />
        </div>
      </transition>
    </div>
</template>

<script>
import NavBar from "@/components/containers/NavbarContainer/NavBarContainer";

export default {
name: "OwnedAlbumsView",
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

.main-page{
}

.sidebar{
  height:100%;
}

.main-page-container{
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