<template>
  <div class="navbar-container">
    <div class="navbar-user-container">
      <router-link class="router-link-style" to="/owned-albums/all">
        <img class="navbar-user-image"
             src="https://image.shutterstock.com/image-photo/close-portrait-smiling-handsome-man-260nw-1011569245.jpg"
             alt="User Image, right here"/>
        <h1 class="navbar-user">Hello, {{ this.userInput }}!</h1>
      </router-link>
      <router-link class="router-link-style" to="/owned-albums/search">
        <ButtonComponent class="button-components" button-content="Search" @button-clicked-event="SearchButtonEvent"  />
      </router-link>
      <ButtonComponent class="button-components" button-content="Logout" @button-clicked-event="LogoutButtonEvent"  />
      <router-link class="router-link-style" to="/owned-albums/add" >
        <ButtonComponent class="button-components" button-content="Add Albums" />
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import ButtonComponent from "@/components/componentPieces/ButtonComponent";

export default {
  name: "NavBar",
  components:{
    ButtonComponent
  },
  props:{
    userName: String
  },
  data(){
    return{
      userInput: "Fernando",
      albumModel: {
        albumInput: "",
        artistInput: "",
      },
      submitLoading: false
    };
  },
  methods: {
    ...mapActions('auth', [
      'logout'
    ]),
    LogoutButtonEvent(){
      this.logout();
    },
    SearchButtonEvent(){

    }
  }
}
</script>

<style scoped>

.navbar-container {
  box-sizing: inherit;
  width: 100%;
  height: 100%;
  background-color: black;
  display: flex;
  flex-direction: column ;
  justify-content: flex-start;
  align-items: center;
  position: relative;
}

.navbar-user-container{
  box-sizing: inherit;
  width: 200px;
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
}

.navbar-user{
  font-size: 20px;
  color: white;
  text-align: center;
}

.navbar-user-image{
  box-sizing: inherit;
  width: 200px;
  padding: 10px;
  box-shadow: 1px 1px 10px 1px black;
}

.router-link-style{
  text-decoration: none;
  outline: none;
  border-style: none;
}

.button-components{
  width: 180px;
}

</style>