<template>
  <div>
    <h1>HomePage</h1>
    <router-link to="/login">
      <h2>Login</h2>
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
import PopUpContainer from "@/components/popup/AddPopUpContainer";

export default {
name: "HomePage",
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