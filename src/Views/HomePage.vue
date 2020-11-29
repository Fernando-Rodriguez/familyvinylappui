<template>
  <div>
    <h1>HomePage</h1>
    <router-link to="/login">
      <h2>Login</h2>
    </router-link>
    <router-link to="/owned-albums">
      <h2>albums</h2>
    </router-link>
    <router-link  to="/login">
      <h2 v-on:click="LogUserOut">Logout</h2>
    </router-link>
  </div>
</template>

<script>
import UserService from "@/Services/user.service";

export default {
name: "HomePage",
  methods: {
    LogUserOut(){
      UserService.logout();
    }
  }
}

</script>

<style scoped>

</style>