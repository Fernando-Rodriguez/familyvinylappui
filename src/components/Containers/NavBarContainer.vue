<template>
  <div class="navbar-container">
    <div class="navbar-user-container">
      <img class="navbar-user-image"
           src="https://image.shutterstock.com/image-photo/close-portrait-smiling-handsome-man-260nw-1011569245.jpg"
           alt="User Image, right here"/>
      <h1 class="navbar-user">Hello, {{ this.userInput }}!</h1>
      <SearchBox class="search-box" />
      <ButtonComponent button-content="Logout" @button-clicked-event="LogoutButtonEvent"  />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import SearchBox from "@/components/InteractivePieces/SearchBoxComponent";
import ButtonComponent from "@/components/InteractivePieces/ButtonComponent";

export default {
  name: "NavBar",
  components:{
    ButtonComponent,
    SearchBox
  },
  props:{
    userName: String
  },
  data(){
    return{
      userInput: "fernando",
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
}

.navbar-user-image{
  box-sizing: inherit;
  width: 200px;
  padding: 10px;
  box-shadow: 1px 1px 10px 1px black;
}

.search-box{
  margin-top: 50px;
  transition: 0.1s ease-in;
}
.search-box:hover{
  transform: scale(1.01);
}

</style>