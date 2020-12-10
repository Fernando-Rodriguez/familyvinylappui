<template>
  <div>
    <h1>HomeView</h1>
    <router-link to="/login">
      <h2>LoginView</h2>
    </router-link>
    <router-link to="/owned-albums/all">
      <h2>albums</h2>
    </router-link>
    <router-link  to="/login">
      <h2 v-on:click="LogUserOut">Logout</h2>
    </router-link>
    <PopUpContainer />
  </div>
</template>

<script>
import UserService from "@/services/user.service";
import PopUpContainer from "@/components/containers/PopupContainer/AddPopUpContainer";

export default {
name: "HomeView",
  components: {PopUpContainer},
  methods: {
    LogUserOut(){
      UserService.logout();
    }
  }
}

</script>

<style scoped>

</style>